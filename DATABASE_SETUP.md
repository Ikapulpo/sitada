# データベースセットアップガイド

このプロジェクトはPostgreSQLデータベースを使用します。以下のいずれかの方法でデータベースをセットアップしてください。

## オプション1: ローカルPostgreSQL（開発用）

### 前提条件
- PostgreSQLがインストールされていること

### macOSでのインストール
```bash
# Homebrewを使用
brew install postgresql@14
brew services start postgresql@14

# または
brew install postgresql
brew services start postgresql
```

### Ubuntuでのインストール
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### データベース作成
```bash
# PostgreSQLにログイン
psql postgres

# データベース作成
CREATE DATABASE sitadago_clinic;

# ユーザー作成（オプション）
CREATE USER clinic_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE sitadago_clinic TO clinic_user;

# 終了
\q
```

### 環境変数設定
`.env.local`ファイルで以下の行のコメントを外す:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/sitadago_clinic"
```

パスワードを実際のものに変更してください。

---

## オプション2: Vercel Postgres（本番環境推奨）

### 手順
1. [Vercel Dashboard](https://vercel.com/dashboard)にログイン
2. プロジェクトを選択
3. "Storage" タブ → "Create Database"
4. "Postgres" を選択
5. データベース名を入力（例: `sitadago-clinic-db`）
6. リージョンを選択（日本の場合は `Tokyo (nrt1)`）
7. "Create" をクリック

### 環境変数設定
Vercelが自動的に`DATABASE_URL`を設定します。

ローカル開発用には:
```bash
# Vercel CLIをインストール
npm i -g vercel

# プロジェクトをリンク
vercel link

# 環境変数をダウンロード
vercel env pull .env.local
```

---

## オプション3: Supabase（無料プランあり）

### 手順
1. [Supabase](https://supabase.com/)にアクセス
2. "Start your project" をクリック
3. プロジェクト名を入力（例: `sitadago-clinic`）
4. データベースパスワードを設定
5. リージョンを選択（日本の場合は `Northeast Asia (Tokyo)`）
6. "Create new project" をクリック

### 接続情報取得
1. プロジェクトダッシュボードで "Settings" → "Database"
2. "Connection string" の "URI" をコピー

### 環境変数設定
`.env.local`に以下を追加:
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

パスワードとプロジェクトリファレンスを実際のものに変更してください。

---

## マイグレーション実行

データベースの準備ができたら、スキーマをマイグレーションします。

### 開発環境
```bash
# マイグレーション作成と実行
npx prisma migrate dev --name init

# Prisma Clientを生成
npx prisma generate
```

### 本番環境
```bash
# マイグレーション実行のみ
npx prisma migrate deploy
```

---

## データベース管理

### Prisma Studio（GUI）
```bash
npx prisma studio
```

ブラウザで http://localhost:5555 が開き、データベースの内容を確認・編集できます。

### データベースリセット（開発時のみ）
```bash
# 警告: すべてのデータが削除されます
npx prisma migrate reset
```

---

## トラブルシューティング

### "Can't reach database server"エラー
- PostgreSQLが起動しているか確認
- DATABASE_URLが正しいか確認
- ファイアウォール設定を確認

### マイグレーションエラー
```bash
# Prisma Clientを再生成
npx prisma generate

# キャッシュをクリア
rm -rf node_modules/.prisma
npm install
```

### 接続文字列の形式
```
postgresql://[ユーザー名]:[パスワード]@[ホスト]:[ポート]/[データベース名]?[オプション]
```

例:
```
postgresql://postgres:mypassword@localhost:5432/sitadago_clinic
postgresql://user:pass@db.supabase.co:5432/postgres?sslmode=require
```

---

## 次のステップ

データベース設定が完了したら:

1. 開発サーバーを起動: `npm run dev`
2. お問い合わせフォームをテスト: http://localhost:3000/contact
3. 予約フォームをテスト: http://localhost:3000/reservation
4. Prisma Studioでデータ確認: `npx prisma studio`

---

## セキュリティ注意事項

- ⚠️ `.env.local`ファイルは絶対にGitにコミットしないでください
- ⚠️ 本番環境では強力なパスワードを使用してください
- ⚠️ データベース接続文字列を公開しないでください
