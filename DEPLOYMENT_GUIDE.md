# デプロイガイド - GitHub + Vercel

このガイドでは、プロジェクトをGitHubにプッシュし、Vercelにデプロイする手順を説明します。

## 📋 前提条件

- GitHubアカウント
- Vercelアカウント（GitHubアカウントで連携可能）
- ローカルでプロジェクトが正常に動作していること

---

## ステップ1: GitHubリポジトリの作成

### 1.1 GitHubでリポジトリ作成

1. [GitHub](https://github.com/)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ設定:
   - **Repository name**: `sitadago-clinic`
   - **Description**: `三条しただ郷クリニック - 公式Webサイト`
   - **Visibility**: **Private**（推奨）
   - **Initialize this repository with**: チェックを入れない
4. 「Create repository」をクリック

### 1.2 ローカルリポジトリをGitHubに接続

ターミナルで以下を実行:

```bash
cd /Users/ikasumi/Desktop/Claudecode/sitadago-clinic

# リモートリポジトリを追加（YOUR_USERNAMEを実際のGitHubユーザー名に置き換え）
git remote add origin git@github.com:YOUR_USERNAME/sitadago-clinic.git

# または HTTPSを使用する場合:
# git remote add origin https://github.com/YOUR_USERNAME/sitadago-clinic.git

# リモートを確認
git remote -v

# mainブランチをプッシュ
git push -u origin main
```

### 1.3 SSH鍵の設定（初回のみ）

SSH接続でエラーが出る場合:

```bash
# SSH鍵を生成
ssh-keygen -t ed25519 -C "your_email@example.com"

# SSH鍵をクリップボードにコピー
pbcopy < ~/.ssh/id_ed25519.pub

# GitHubに鍵を追加
# 1. GitHub Settings → SSH and GPG keys
# 2. "New SSH key" をクリック
# 3. クリップボードの内容を貼り付け
```

---

## ステップ2: Vercelへのデプロイ

### 2.1 Vercelアカウント作成・ログイン

1. [Vercel](https://vercel.com/)にアクセス
2. 「Sign Up」または「Continue with GitHub」
3. GitHubアカウントで認証

### 2.2 プロジェクトのインポート

1. Vercelダッシュボードで「Add New...」→「Project」
2. 「Import Git Repository」から `sitadago-clinic` を選択
3. 「Import」をクリック

### 2.3 プロジェクト設定

**Configure Project**画面で以下を設定:

#### Framework Preset
- 自動検出: **Next.js**

#### Root Directory
- そのまま: `./`

#### Build and Output Settings
- **Build Command**: `npm run build`（デフォルト）
- **Output Directory**: `.next`（デフォルト）
- **Install Command**: `npm install`（デフォルト）

#### Environment Variables

以下の環境変数を追加（「Add」をクリック）:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_SITE_NAME` | `三条しただ郷クリニック` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://your-preview-url.vercel.app` | Preview |

**注意**: `DATABASE_URL`は後でVercel Postgresを作成した際に自動設定されます。

### 2.4 デプロイ開始

1. 「Deploy」ボタンをクリック
2. ビルド完了まで待機（通常2-3分）
3. デプロイ成功後、プレビューURLが表示されます

---

## ステップ3: Vercel Postgresの設定

### 3.1 データベース作成

1. Vercelプロジェクトダッシュボードで「Storage」タブをクリック
2. 「Create Database」→「Postgres」を選択
3. データベース設定:
   - **Name**: `sitadago-clinic-db`
   - **Region**: `Tokyo (nrt1)`（日本向け）
4. 「Create」をクリック

### 3.2 環境変数の自動設定

Vercel Postgresを作成すると、以下の環境変数が自動的に追加されます:

- `POSTGRES_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

**重要**: Prismaは`DATABASE_URL`を使用するため、環境変数を追加:

1. 「Settings」→「Environment Variables」
2. 「Add New」をクリック
3. 設定:
   - **Name**: `DATABASE_URL`
   - **Value**: `${POSTGRES_URL_NON_POOLING}`
   - **Environment**: All（Production, Preview, Development）
4. 「Save」をクリック

### 3.3 データベースマイグレーション

#### 方法A: Vercel CLIを使用（推奨）

```bash
# Vercel CLIをインストール
npm i -g vercel

# プロジェクトをリンク
vercel link

# 本番環境でコマンド実行
vercel env pull .env.production

# マイグレーション実行
DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma migrate deploy
```

#### 方法B: GitHub Actionsで自動化

`.github/workflows/deploy.yml`を作成:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run Prisma migrations
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: npx prisma migrate deploy
```

GitHubのリポジトリ設定で`DATABASE_URL`をSecretsに追加してください。

---

## ステップ4: カスタムドメインの設定（オプション）

### 4.1 ドメイン追加

1. Vercelプロジェクト → 「Settings」→「Domains」
2. 「Add」をクリック
3. ドメイン名を入力（例: `sitadagoclinic.com`）
4. 「Add」をクリック

### 4.2 DNS設定

Vercelが表示するDNSレコードをドメインレジストラに追加:

**Aレコード**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAMEレコード**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 SSL証明書

Vercelが自動的にSSL証明書を発行します（Let's Encrypt）。

---

## ステップ5: 継続的デプロイの確認

### 5.1 自動デプロイ

GitHubの`main`ブランチにプッシュすると、自動的にVercelにデプロイされます:

```bash
# コード変更後
git add .
git commit -m "Update something"
git push origin main
```

### 5.2 プレビューデプロイ

プルリクエストを作成すると、自動的にプレビュー環境が作成されます:

```bash
# 新しいブランチ作成
git checkout -b feature/new-feature

# 変更をプッシュ
git push origin feature/new-feature

# GitHubでプルリクエスト作成
# → Vercelが自動的にプレビューURLを生成
```

---

## トラブルシューティング

### ビルドエラー

**エラー**: `Module not found`
```bash
# ローカルで確認
npm run build

# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

**エラー**: `Prisma Client not found`
```bash
# package.jsonにpostinstallスクリプト追加
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

### 環境変数が反映されない

1. Vercel「Settings」→「Environment Variables」で確認
2. 環境変数変更後は再デプロイが必要
3. 「Deployments」→最新デプロイの「...」→「Redeploy」

### データベース接続エラー

```bash
# 接続文字列を確認
vercel env pull

# Prisma Clientを再生成
npx prisma generate
```

---

## セキュリティチェックリスト

- [ ] `.env.local`がGitにコミットされていないことを確認
- [ ] Vercelの環境変数が正しく設定されている
- [ ] プライベートリポジトリを使用している
- [ ] データベースパスワードが強力である
- [ ] 本番環境の`NEXT_PUBLIC_SITE_URL`が正しい

---

## 次のステップ

デプロイ完了後:

1. **動作確認**:
   - トップページが表示されるか
   - お問い合わせフォームが動作するか
   - 予約フォームが動作するか

2. **Prisma Studioでデータ確認**:
   ```bash
   DATABASE_URL="$(vercel env pull | grep DATABASE_URL | cut -d '=' -f2-)" npx prisma studio
   ```

3. **パフォーマンス確認**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)でテスト
   - Vercel Analyticsを有効化

4. **監視設定**:
   - Vercelの「Analytics」タブで確認
   - エラー通知を設定

---

**参考リンク**:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Prisma with Vercel](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
