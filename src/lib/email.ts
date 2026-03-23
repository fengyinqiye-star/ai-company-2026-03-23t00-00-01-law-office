import { Resend } from 'resend';
import { ContactFormData } from '@/lib/validation';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const categoryLabels: Record<string, string> = {
  labor: '労働問題',
  divorce: '離婚問題',
  inheritance: '相続問題',
  corporate: '企業法務',
  other: 'その他',
};

const contactMethodLabels: Record<string, string> = {
  phone: 'お電話',
  email: 'メール',
};

export async function sendNotificationEmail(data: ContactFormData) {
  const contactEmail = process.env.CONTACT_EMAIL || 'info@example.com';
  const fromEmail = process.env.FROM_EMAIL || 'noreply@example.com';

  await getResend().emails.send({
    from: `山田・鈴木法律事務所 <${fromEmail}>`,
    to: contactEmail,
    subject: `[無料相談申込] ${data.name}様より`,
    html: `
      <h2>無料相談のお申し込みがありました</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">お名前</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.name)}</td>
        </tr>
        ${data.furigana ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">フリガナ</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.furigana)}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">電話番号</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">メールアドレス</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">相談カテゴリ</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${categoryLabels[data.category] || data.category}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">ご相談内容</td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(data.message)}</td>
        </tr>
        ${data.preferredContact ? `<tr>
          <td style="padding: 8px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">希望連絡方法</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${contactMethodLabels[data.preferredContact]}</td>
        </tr>` : ''}
      </table>
      <p style="color: #666; margin-top: 16px;">送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
    `,
  });
}

export async function sendAutoReplyEmail(data: ContactFormData) {
  const fromEmail = process.env.FROM_EMAIL || 'noreply@example.com';

  await getResend().emails.send({
    from: `山田・鈴木法律事務所 <${fromEmail}>`,
    to: data.email,
    subject: '[山田・鈴木法律事務所] 無料相談のお申し込みを受け付けました',
    html: `
      <p>${escapeHtml(data.name)} 様</p>
      <p>この度は、山田・鈴木法律事務所に無料相談のお申し込みをいただき、誠にありがとうございます。</p>
      <p>お申し込み内容を確認の上、<strong>3営業日以内</strong>にご連絡させていただきます。</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
      <p style="font-size: 14px; color: #666;">
        山田・鈴木法律事務所<br />
        TEL: 03-1234-5678<br />
        営業時間: 平日 9:00〜18:00<br />
        〒100-0005 東京都千代田区丸の内1-1-1 丸の内パークビルディング10階
      </p>
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
