# GitHub連携セットアップ

このガイドでは、プロジェクトをGitHubリポジトリにプッシュする手順を説明します。

## ステップ1: GitHubリポジトリの作成

### Web UIから作成

1. [GitHub](https://github.com/)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ情報を入力:
   ```
   Repository name: sitadago-clinic
   Description: 三条しただ郷クリニック - 公式Webサイト
   Visibility: Private (推奨)
   ```
4. **重要**: 「Initialize this repository with」のチェックボックスは全てOFFにする
5. 「Create repository」をクリック

## ステップ2: ローカルリポジトリと接続

### 現在のディレクトリ確認

```bash
# 現在地を確認
pwd
# 出力: /Users/ikasumi/Desktop/Claudecode/sitadago-clinic

# Gitの状態確認
git status
```

### リモートリポジトリを追加

**SSH接続の場合（推奨）:**

```bash
# リモートを追加（YOUR_USERNAMEを実際のGitHubユーザー名に置き換え）
git remote add origin git@github.com:YOUR_USERNAME/sitadago-clinic.git

# リモート確認
git remote -v
```

**HTTPS接続の場合:**

```bash
# リモートを追加
git remote add origin https://github.com/YOUR_USERNAME/sitadago-clinic.git

# リモート確認
git remote -v
```

## ステップ3: コードをプッシュ

```bash
# mainブランチをプッシュ
git push -u origin main
```

### SSH鍵の設定（初回のみ）

SSH接続で「Permission denied」エラーが出る場合:

#### 1. SSH鍵を生成

```bash
# Ed25519鍵を生成（推奨）
ssh-keygen -t ed25519 -C "your_email@example.com"

# または RSA鍵（古いシステム用）
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Enterキーを3回押す（デフォルト設定）
```

#### 2. SSH鍵をクリップボードにコピー

```bash
# macOS
pbcopy < ~/.ssh/id_ed25519.pub

# Linux
cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard

# Windows (Git Bash)
cat ~/.ssh/id_ed25519.pub | clip
```

#### 3. GitHubに鍵を登録

1. [GitHub Settings → SSH and GPG keys](https://github.com/settings/keys)
2. 「New SSH key」をクリック
3. 入力:
   ```
   Title: MacBook Air (または任意の名前)
   Key type: Authentication Key
   Key: (クリップボードの内容を貼り付け)
   ```
4. 「Add SSH key」をクリック

#### 4. 接続テスト

```bash
# GitHubへの接続確認
ssh -T git@github.com

# 成功時の出力:
# Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```

## ステップ4: プッシュの確認

### ローカルで確認

```bash
# 最新のコミット履歴
git log --oneline -5

# リモートとの同期状態
git status
```

### GitHubで確認

1. GitHubのリポジトリページにアクセス
2. ファイル一覧が表示されていることを確認
3. READMEが正しく表示されていることを確認

## ステップ5: ブランチ戦略（オプション）

### develop ブランチ作成

```bash
# developブランチを作成してプッシュ
git checkout -b develop
git push -u origin develop

# mainに戻る
git checkout main
```

### ブランチ保護設定

GitHubのリポジトリ設定で:

1. 「Settings」→「Branches」
2. 「Add branch protection rule」
3. Branch name pattern: `main`
4. 推奨設定:
   - ☑ Require a pull request before merging
   - ☑ Require approvals: 1
   - ☑ Require status checks to pass before merging
5. 「Create」をクリック

## トラブルシューティング

### エラー: fatal: remote origin already exists

```bash
# 既存のリモートを削除
git remote remove origin

# 再度追加
git remote add origin git@github.com:YOUR_USERNAME/sitadago-clinic.git
```

### エラー: Permission denied (publickey)

SSH鍵が正しく設定されていません。ステップ3を参照してください。

### エラー: Updates were rejected

```bash
# リモートの変更を取得
git pull origin main --rebase

# 再度プッシュ
git push origin main
```

### 大きなファイルの警告

`.gitignore`で除外されているか確認:

```bash
# .gitignoreを確認
cat .gitignore

# 特定のファイルを除外
echo "large-file.zip" >> .gitignore
git add .gitignore
git commit -m "chore: add large file to gitignore"
```

## セキュリティチェックリスト

プッシュ前に確認:

- [ ] `.env.local`がコミットされていない
- [ ] `node_modules/`が除外されている
- [ ] APIキーや秘密情報が含まれていない
- [ ] データベースパスワードが含まれていない

確認コマンド:

```bash
# コミット履歴から機密情報を検索
git log --all --full-history -- .env.local

# 出力がなければOK
```

もし誤ってコミットした場合:

```bash
# 最新のコミットから削除
git rm --cached .env.local
git commit --amend -m "chore: remove env file"

# または Git履歴から完全削除（慎重に！）
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env.local' \
  --prune-empty --tag-name-filter cat -- --all
```

## 次のステップ

GitHubプッシュが完了したら:

1. [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)を参照してVercelデプロイ
2. Vercel Postgresのセットアップ
3. 環境変数の設定
4. 本番環境での動作確認

---

**実行コマンド一覧（まとめ）:**

```bash
# 1. GitHubリポジトリ作成（Web UI）

# 2. リモート追加
git remote add origin git@github.com:YOUR_USERNAME/sitadago-clinic.git

# 3. プッシュ
git push -u origin main

# 4. developブランチ作成（オプション）
git checkout -b develop
git push -u origin develop
git checkout main
```
