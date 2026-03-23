# 山田・鈴木法律事務所 コーポレートサイト

東京の山田・鈴木法律事務所のコーポレートサイトです。労働問題・離婚・相続・企業法務に強い弁護士が、初回無料相談であなたの悩みに寄り添います。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **CSS**: Tailwind CSS
- **メール送信**: Resend
- **ブログ**: MDX (gray-matter + next-mdx-remote)
- **バリデーション**: zod
- **デプロイ**: Vercel

## セットアップ

### 前提条件

- Node.js 18.x 以上
- npm

### インストール

```bash
npm install
```

### 環境変数の設定

`.env.local.example` をコピーして `.env.local` を作成し、各値を設定してください。

```bash
cp .env.local.example .env.local
```

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `RESEND_API_KEY` | Resend API キー | はい |
| `CONTACT_EMAIL` | 通知先メールアドレス | はい |
| `FROM_EMAIL` | 送信元メールアドレス | はい |
| `NEXT_PUBLIC_SITE_URL` | サイトのURL | はい |
| `NEXT_PUBLIC_MAP_EMBED_URL` | Google Maps埋め込みURL | いいえ |

### 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でサイトが表示されます。

### ビルド

```bash
npm run build
```

### テスト

```bash
npm test
npm run test:coverage
```

### リント・フォーマット

```bash
npm run lint
npm run format
```

## ディレクトリ構成

```
src/
  app/              # App Router ページ・API Route
  components/       # Reactコンポーネント
    layout/         # Header, Footer, Breadcrumb等
    sections/       # トップページのセクション
    ui/             # 汎用UIコンポーネント
    contact/        # フォーム関連
    blog/           # ブログ関連
    lawyers/        # 弁護士紹介
    practice-areas/ # 取扱業務
    office/         # 事務所概要
    fees/           # 料金
    seo/            # 構造化データ
  lib/              # ユーティリティ・ビジネスロジック
  data/             # 静的データ定義
  types/            # TypeScript型定義
content/
  blog/             # MDXブログ記事
public/
  images/           # 画像ファイル
```

## デプロイ

Vercel にデプロイする場合:

1. Vercelにリポジトリを接続
2. 環境変数を設定
3. デプロイを実行

## ライセンス

このプロジェクトは山田・鈴木法律事務所に納品されたものです。
