# クイックスタートガイド

このガイドでは、既存の開発者または新しい開発者がプロジェクトをすぐに開始できるように、最小限の手順を説明します。

---

## 📚 まず読むべきドキュメント

1. **[README.md](./README.md)** - プロジェクト概要・技術スタック
2. **[SPECIFICATIONS.md](./SPECIFICATIONS.md)** - 詳細な仕様書・実装状況
3. **[TODO.md](./TODO.md)** - 未実装タスク一覧

---

## 🚀 5分でローカル開発環境を構築

### 前提条件
- Node.js 18以上
- Git
- PostgreSQL（オプション）

### 手順

```bash
# 1. リポジトリのクローン
git clone https://github.com/Ikapulpo/sitada.git
cd sitada

# 2. 依存関係のインストール
npm install

# 3. 環境変数の設定
cp .env.example .env.local

# 4. データベースURL設定（.env.localを編集）
# すでにローカルPostgreSQLのURLが設定済み:
# DATABASE_URL="postgresql://postgres:password@localhost:5432/sitadago_clinic"
# ※ Vercel Postgresを使う場合は DATABASE_SETUP.md を参照

# 5. データベースセットアップ（ローカルPostgreSQLの場合）
createdb sitadago_clinic  # データベース作成
npx prisma migrate dev    # マイグレーション実行

# 6. 開発サーバー起動
npm run dev

# 7. ブラウザで確認
# http://localhost:3000
```

---

## 🗂️ プロジェクト構造（重要なファイル）

```
sitadago-clinic/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # トップページ
│   │   ├── about/               # クリニック紹介
│   │   ├── medical/             # 診療案内
│   │   ├── contact/             # お問い合わせ
│   │   ├── reservation/         # 予約
│   │   └── api/                 # APIルート
│   │       ├── contact/         # お問い合わせAPI
│   │       └── reservation/     # 予約API
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   └── features/            # 機能別コンポーネント
│   ├── lib/
│   │   ├── db/prisma.ts         # Prisma Client
│   │   └── utils/               # ユーティリティ
│   │       ├── validation.ts    # フォームバリデーション
│   │       ├── cn.ts           # クラス名マージ
│   │       └── date.ts         # 日付フォーマット
│   └── types/index.ts           # 型定義
├── prisma/
│   └── schema.prisma            # データベーススキーマ
├── .env.local                   # 環境変数（Git除外）
└── package.json
```

---

## 🔧 よく使うコマンド

### 開発
```bash
npm run dev          # 開発サーバー起動（http://localhost:3000）
npm run build        # 本番ビルド
npm start            # 本番サーバー起動
npm run lint         # Lintチェック
```

### データベース
```bash
npx prisma studio              # データベースGUI起動
npx prisma migrate dev         # マイグレーション作成・適用
npx prisma migrate deploy      # 本番マイグレーション適用
npx prisma generate            # Prisma Client再生成
npx prisma db seed             # シードデータ投入（未実装）
```

### Git
```bash
git status                     # 変更確認
git add .                      # 全ファイルをステージング
git commit -m "message"        # コミット
git push origin main           # GitHubにプッシュ（自動デプロイ）
```

---

## 📋 実装済み機能

### ✅ ページ
- トップページ（`/`）
- クリニック紹介（`/about`）
- 診療案内（`/medical`）
- お問い合わせ（`/contact`）
- 予約（`/reservation`）

### ✅ API
- `POST /api/contact` - お問い合わせ送信
- `POST /api/reservation` - 予約送信

### ✅ データベース
- Patient（患者）テーブル
- Reservation（予約）テーブル
- ContactSubmission（お問い合わせ）テーブル
- BlogPost（ブログ）テーブル（未使用）

---

## 🚧 未実装機能（優先度順）

### 🔴 高優先度
1. **Vercel Postgresデータベース設定** - 本番環境でDBが未設定
2. **メール通知機能** - フォーム送信後の自動返信
3. **管理画面** - 予約・お問い合わせの管理

### 🟡 中優先度
4. **コンテンツ充実** - トップページ、クリニック紹介の詳細
5. **予約システム改善** - カレンダーUI、予約枠管理
6. **ブログ機能** - 記事投稿・一覧・詳細

### 🟢 低優先度
7. **多言語対応** - 英語・中国語
8. **マイページ** - 予約履歴・変更・キャンセル
9. **SEO・パフォーマンス最適化**

詳細は [TODO.md](./TODO.md) を参照

---

## 🎯 次に実装すべきタスク

### 即座に実施（本番環境を動作させるため）

#### 1. Vercel Postgresデータベース作成
```bash
# Vercelダッシュボードで操作
1. https://vercel.com/dashboard にアクセス
2. プロジェクト「sitada」を選択
3. Storage → Create Database → Postgres
4. Database name: sitadago-clinic-db
5. Region: Tokyo (nrt1)
6. Create
```

#### 2. 環境変数設定
```bash
# Vercelダッシュボードで操作
1. Settings → Environment Variables
2. Add New:
   - Name: DATABASE_URL
   - Value: ${POSTGRES_URL_NON_POOLING}
   - Environment: All
3. Save
```

#### 3. マイグレーション実行
```bash
# ローカルで実行
vercel link                        # プロジェクトをリンク
vercel env pull .env.production    # 環境変数を取得
DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma migrate deploy
```

#### 4. 再デプロイ
```bash
# Vercelダッシュボードで操作
Deployments → 最新デプロイ → ... → Redeploy
```

#### 5. 動作確認
- 本番URLでお問い合わせフォーム送信テスト
- 本番URLで予約フォーム送信テスト
- Prisma Studioでデータ確認:
  ```bash
  DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma studio
  ```

---

## 📝 開発フロー

### 新機能を追加する場合

1. **機能の仕様確認**
   - [SPECIFICATIONS.md](./SPECIFICATIONS.md) で既存の仕様を確認
   - [TODO.md](./TODO.md) でタスクをチェック

2. **ブランチ作成**（推奨）
   ```bash
   git checkout -b feature/feature-name
   ```

3. **開発**
   - コンポーネント・API・データベーススキーマの実装
   - `npm run dev` でローカル確認

4. **データベース変更がある場合**
   ```bash
   # schema.prisma を編集
   npx prisma migrate dev --name add_something
   ```

5. **コミット**
   ```bash
   git add .
   git commit -m "feat: add something"
   ```

6. **プッシュ**
   ```bash
   git push origin feature/feature-name
   # またはmainブランチに直接
   git push origin main
   ```

7. **Vercelで自動デプロイ**
   - mainブランチへのプッシュで自動デプロイ
   - feature ブランチの場合はプレビューURLが生成される

---

## 🐛 トラブルシューティング

### ビルドエラー

**エラー: Prisma Client not found**
```bash
npx prisma generate
```

**エラー: Database connection failed**
```bash
# .env.local のDATABASE_URLを確認
# PostgreSQLが起動しているか確認
brew services list  # macOSの場合
```

**エラー: CSS parsing failed**
- Tailwind CSS v4の構文を確認
- `@theme` ディレクティブの使用方法を確認

### Vercelデプロイエラー

**ビルドログの確認**
```bash
# Vercelダッシュボード → Deployments → 最新デプロイ → Building
```

**環境変数の確認**
```bash
# Settings → Environment Variables
# DATABASE_URLが設定されているか確認
```

**ローカルで本番ビルドテスト**
```bash
npm run build
# エラーがある場合はここで発見できる
```

---

## 📖 コーディング規約

### TypeScript
- 型定義は `src/types/index.ts` に追加
- any型の使用は避ける
- interfaceよりtypeを優先

### コンポーネント
- 関数コンポーネントを使用
- Props型は明示的に定義
- コンポーネント名はPascalCase

### CSS
- Tailwind CSS v4のユーティリティクラスを使用
- カスタムクラスは `@layer` を使用
- `cn()` ユーティリティでクラス名をマージ

### API
- RESTful設計
- エラーハンドリングを必ず実装
- バリデーションは Zod を使用

### Git
- コミットメッセージは Conventional Commits 形式
  - `feat:` 新機能
  - `fix:` バグ修正
  - `docs:` ドキュメント
  - `style:` フォーマット
  - `refactor:` リファクタリング
  - `test:` テスト
  - `chore:` その他

---

## 🔗 リンク集

### プロジェクト
- **GitHub**: https://github.com/Ikapulpo/sitada
- **Vercel**: [ダッシュボードで確認]
- **本番URL**: [デプロイ後に確認]

### ドキュメント
- [README.md](./README.md) - プロジェクト概要
- [SPECIFICATIONS.md](./SPECIFICATIONS.md) - 詳細仕様
- [TODO.md](./TODO.md) - タスクリスト
- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - データベースセットアップ
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - デプロイガイド
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) - GitHub連携

### 技術ドキュメント
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

---

## ❓ よくある質問

**Q: ローカルでPostgreSQLを起動するには？**
```bash
# macOS (Homebrew)
brew services start postgresql@14

# 確認
psql -U postgres -c "SELECT version();"
```

**Q: データベースをリセットするには？**
```bash
# 開発環境のみ
npx prisma migrate reset
# すべてのデータが削除されます！
```

**Q: 本番環境のデータを確認するには？**
```bash
# Vercelの環境変数を取得
vercel env pull .env.production

# Prisma Studioを起動
DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma studio
```

**Q: デプロイに失敗した場合は？**
1. Vercelのビルドログを確認
2. ローカルで `npm run build` を実行してエラーを確認
3. 環境変数が正しく設定されているか確認
4. [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) のトラブルシューティングを参照

**Q: 新しいパッケージを追加するには？**
```bash
npm install package-name
git add package.json package-lock.json
git commit -m "chore: add package-name"
git push origin main
```

---

**最終更新**: 2026-01-02
**作成者**: Claude Code

開発を始める際は、まず [TODO.md](./TODO.md) の「🚨 緊急」セクションから着手することをお勧めします。
