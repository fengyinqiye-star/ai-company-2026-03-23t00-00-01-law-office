import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { sendNotificationEmail, sendAutoReplyEmail } from '@/lib/email';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  // 1. Rate limit check
  const ip = request.headers.get('x-forwarded-for') ?? request.ip ?? 'unknown';
  const rateLimitResult = rateLimit(ip);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        success: false,
        error:
          '送信回数の上限に達しました。しばらく時間をおいてから再度お試しください。',
      },
      { status: 429 }
    );
  }

  // 2. Parse request body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: '不正なリクエストです。' },
      { status: 400 }
    );
  }

  // 3. Validate
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      field: String(err.path[0]),
      message: err.message,
    }));
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  // 4. Send emails
  try {
    await sendNotificationEmail(result.data);

    // Auto-reply (best effort)
    try {
      await sendAutoReplyEmail(result.data);
    } catch {
      // Auto-reply failure should not block the main flow
      console.error('Auto-reply email failed');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          '送信に失敗しました。お手数ですがお電話でお問い合わせください。',
      },
      { status: 500 }
    );
  }
}
