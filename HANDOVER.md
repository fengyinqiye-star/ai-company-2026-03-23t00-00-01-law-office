# 引き渡しガイド - 山田・鈴木法律事務所 コーポレートサイト

## 1. コンテンツの更新方法

### 弁護士情報の更新

`src/data/lawyers.ts` を編集してください。弁護士の名前、経歴、メッセージなどを変更できます。

### 取扱業務の更新

`src/data/practiceAreas.ts` を編集してください。業務の説明文やよくある相談事例を変更できます。

### 料金の更新

`src/data/fees.ts` を編集してください。各カテゴリの料金を変更できます。

### 事務所情報の更新

`src/data/officeInfo.ts` を編集してください。住所、電話番号、営業時間などを変更できます。

## 2. ブログ記事の追加方法

1. `content/blog/` ディレクトリに新しい `.mdx` ファイルを作成します
2. ファイル名がURLのスラッグになります（例: `new-article.mdx` → `/blog/new-article`）
3. 以下のフロントマター（記事情報）を先頭に記述します:

```yaml
---
title: "記事のタイトル"
date: "2026-04-01"
category: "labor"
excerpt: "記事の概要文（一覧ページに表示されます）"
author: "yamada"
tags: ["タグ1", "タグ2"]
---
```

4. フロントマターの後にMarkdown形式で記事本文を書きます
5. `npm run build` でビルドすると記事が公開されます

### カテゴリの種類

- `labor`: 労働問題
- `divorce`: 離婚問題
- `inheritance`: 相続問題
- `corporate`: 企業法務

### 著者の種類

- `yamada`: 山田弁護士
- `suzuki`: 鈴木弁護士

## 3. 画像の差し替え

### 弁護士写真

`public/images/lawyers/` に画像を配置してください。
- `yamada.webp`: 山田弁護士の写真
- `suzuki.webp`: 鈴木弁護士の写真
- 推奨サイズ: 400x500px、WebP形式

### 事務所写真

`public/images/office/` に画像を配置してください。

### OGP画像

`public/images/og-image.png` を差し替えてください。推奨サイズ: 1200x630px

## 4. 環境変数

本番環境では以下の環境変数をVercelの管理画面で設定してください:

| 変数名 | 説明 |
|--------|------|
| `RESEND_API_KEY` | Resend APIキー |
| `CONTACT_EMAIL` | お問い合わせ通知先メールアドレス |
| `FROM_EMAIL` | 送信元メールアドレス（Resendで認証済みドメイン） |
| `NEXT_PUBLIC_SITE_URL` | サイトのURL |
| `NEXT_PUBLIC_MAP_EMBED_URL` | Google Maps埋め込みURL |

## 5. 独自ドメインの設定

1. ドメインを取得（お名前.com等）
2. Vercelの管理画面 → Settings → Domains でドメインを追加
3. DNS設定をVercelの指示に従って変更
4. SSL証明書は自動で発行されます

## 6. トラブルシューティング

### ビルドエラーが出る場合

```bash
rm -rf .next node_modules
npm install
npm run build
```

### メールが届かない場合

1. Vercelの環境変数が正しく設定されているか確認
2. Resendのダッシュボードでメール送信ログを確認
3. 送信元ドメインがResendで認証済みか確認

## 7. 検収期間と瑕疵担保

- **検収期間**: 納品後14日間
- **瑕疵担保**: 検収完了後30日間（重大な不具合のみ）
- 検収期間中に動作不良や仕様と異なる点がございましたらご連絡ください
