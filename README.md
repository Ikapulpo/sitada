# 三条しただ郷クリニック - Webサイト

地域の皆様の健康を守る、かかりつけクリニックのWebサイト

## 🌟 機能

- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- ✅ クリニック紹介・診療案内
- ✅ オンライン予約システム
- ✅ お問い合わせフォーム
- 🚧 多言語対応（日本語・英語・中国語）※準備中
- 🚧 ブログ・お知らせ機能 ※準備中

## 🛠 技術スタック

### フロントエンド
- **Next.js 16** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS v4** - スタイリング
- **React Hook Form** - フォーム管理
- **Zod** - バリデーション
- **Framer Motion** - アニメーション

### バックエンド
- **Prisma** - ORM
- **PostgreSQL** - データベース
- **Next.js API Routes** - サーバーレスAPI

### デプロイ
- **Vercel** - ホスティング
- **Vercel Postgres** - データベース

## 📦 セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn
- PostgreSQL（ローカル開発の場合）

### インストール

1. リポジトリのクローン
```bash
git clone <repository-url>
cd sitadago-clinic
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
```bash
# .env.exampleをコピー
cp .env.example .env.local

# .env.localを編集してデータベースURLを設定
```

4. データベースのセットアップ

詳細は [DATABASE_SETUP.md](./DATABASE_SETUP.md) を参照してください。

```bash
# Prismaマイグレーション実行
npx prisma migrate dev --name init

# Prisma Clientを生成
npx prisma generate
```

5. 開発サーバーの起動
```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## 📝 スクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# Lintチェック
npm run lint

# Prisma Studio（データベースGUI）
npx prisma studio

# データベースマイグレーション
npx prisma migrate dev

# Prisma Client生成
npx prisma generate
```

## 📂 プロジェクト構造

```
sitadago-clinic/
├── prisma/
│   ├── schema.prisma          # データベーススキーマ
│   └── migrations/            # マイグレーションファイル
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # APIルート
│   │   │   ├── contact/      # お問い合わせAPI
│   │   │   └── reservation/  # 予約API
│   │   ├── about/            # クリニック紹介
│   │   ├── contact/          # お問い合わせ
│   │   ├── medical/          # 診療について
│   │   ├── reservation/      # オンライン予約
│   │   ├── layout.tsx        # ルートレイアウト
│   │   ├── page.tsx          # トップページ
│   │   └── globals.css       # グローバルスタイル
│   ├── components/
│   │   ├── features/         # 機能別コンポーネント
│   │   │   ├── contact/      # お問い合わせフォーム
│   │   │   └── reservation/  # 予約フォーム
│   │   └── layout/           # レイアウトコンポーネント
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── db/              # データベース
│   │   │   └── prisma.ts    # Prisma Client
│   │   └── utils/           # ユーティリティ
│   │       ├── cn.ts        # クラス名マージ
│   │       ├── date.ts      # 日付フォーマット
│   │       └── validation.ts # フォームバリデーション
│   ├── types/               # 型定義
│   │   └── index.ts
│   └── config/              # 設定ファイル
│       ├── site.ts          # サイト設定
│       └── navigation.ts    # ナビゲーション
├── public/                  # 静的ファイル
├── .env.local              # 環境変数（Gitに含めない）
├── .env.example            # 環境変数のテンプレート
├── package.json
├── tailwind.config.ts      # Tailwind設定
├── tsconfig.json           # TypeScript設定
└── README.md
```

## 🗄️ データベーススキーマ

### Patient（患者）
- 基本情報（名前、フリガナ、メール、電話など）
- 生年月日、性別
- 住所

### Reservation（予約）
- 患者情報との関連
- 予約日時
- 診療科
- 症状、備考
- ステータス（予約待ち、確認済み、完了、キャンセル）

### ContactSubmission（お問い合わせ）
- 名前、メール、電話
- 件名、メッセージ
- ステータス（未読、既読、返信済み）

### BlogPost（ブログ記事）
- タイトル（日本語・英語・中国語）
- コンテンツ（多言語対応）
- 公開状態、カテゴリ、タグ

## 🚀 デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com/)にログイン
3. "Import Project" からリポジトリを選択
4. 環境変数を設定
5. デプロイ

詳細は [ARCHITECTURE.md](./ARCHITECTURE.md) を参照してください。

## 📚 ドキュメント

- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - データベースセットアップガイド
- [ARCHITECTURE.md](./ARCHITECTURE.md) - システムアーキテクチャ
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - デザインシステム
- [INFORMATION_ARCHITECTURE.md](./INFORMATION_ARCHITECTURE.md) - 情報設計

## 🔒 セキュリティ

- ⚠️ `.env.local`は絶対にGitにコミットしない
- ⚠️ 本番環境では強力なパスワードを使用
- ⚠️ APIキーや接続文字列を公開しない

## 📄 ライセンス

Private - All Rights Reserved

## 🤝 貢献

このプロジェクトは三条しただ郷クリニック専用です。

---

**開発者**: Claude Code
**最終更新**: 2026-01-02
