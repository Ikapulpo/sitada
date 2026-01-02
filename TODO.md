# 開発タスクリスト

**最終更新**: 2026-01-02

---

## 🚨 緊急（即座に実施）

### データベース設定
- [ ] **Vercel Postgresデータベース作成**
  - Vercelダッシュボード → Storage → Create Database
  - Database name: `sitadago-clinic-db`
  - Region: Tokyo (nrt1)

- [ ] **環境変数設定**
  - `DATABASE_URL` = `${POSTGRES_URL_NON_POOLING}`
  - `NEXT_PUBLIC_SITE_URL` = [本番URL]
  - `NEXT_PUBLIC_SITE_NAME` = "三条しただ郷クリニック"

- [ ] **マイグレーション実行**
  ```bash
  vercel link
  vercel env pull .env.production
  DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma migrate deploy
  ```

- [ ] **動作確認**
  - お問い合わせフォーム送信テスト
  - 予約フォーム送信テスト
  - Prisma Studioでデータ確認

---

## 🔴 高優先度（1-2週間以内）

### メール通知機能
- [ ] SendGridアカウント作成
- [ ] 環境変数設定（SENDGRID_API_KEY, SENDGRID_FROM_EMAIL）
- [ ] `src/lib/email/config.ts` 作成
- [ ] `src/lib/email/sendContactConfirmation.ts` 作成
- [ ] `src/lib/email/sendReservationConfirmation.ts` 作成
- [ ] `src/lib/email/sendStaffNotification.ts` 作成
- [ ] メールテンプレート作成（HTML/TEXT）
- [ ] お問い合わせAPI にメール送信機能追加
- [ ] 予約API にメール送信機能追加

### 管理画面 - 認証
- [ ] 認証ライブラリ選定（NextAuth.js / Clerk）
- [ ] 認証設定ファイル作成
- [ ] `src/app/admin/login/page.tsx` 作成
- [ ] `src/middleware.ts` 作成（認証チェック）
- [ ] 管理者ユーザー作成

### 管理画面 - 予約管理
- [ ] `src/app/admin/reservations/page.tsx` 作成（一覧）
- [ ] `src/app/admin/reservations/[id]/page.tsx` 作成（詳細）
- [ ] `src/app/api/admin/reservations/route.ts` 作成
- [ ] `src/app/api/admin/reservations/[id]/route.ts` 作成
- [ ] `src/components/admin/ReservationList.tsx` 作成
- [ ] `src/components/admin/ReservationDetail.tsx` 作成
- [ ] フィルター機能（日付、ステータス、診療科）
- [ ] 検索機能（患者名、メール）
- [ ] ページネーション実装
- [ ] ステータス変更機能

### 管理画面 - お問い合わせ管理
- [ ] `src/app/admin/contacts/page.tsx` 作成（一覧）
- [ ] `src/app/admin/contacts/[id]/page.tsx` 作成（詳細）
- [ ] `src/app/api/admin/contacts/route.ts` 作成
- [ ] `src/app/api/admin/contacts/[id]/route.ts` 作成
- [ ] `src/components/admin/ContactList.tsx` 作成
- [ ] `src/components/admin/ContactDetail.tsx` 作成
- [ ] フィルター機能（ステータス、日付）
- [ ] 検索機能（名前、メール、件名）
- [ ] ページネーション実装
- [ ] ステータス変更機能

---

## 🟡 中優先度（1ヶ月以内）

### コンテンツ充実

#### トップページ
- [ ] ヒーローセクション作成
- [ ] 診療科目カード作成
- [ ] アクセス情報セクション
- [ ] お知らせセクション（ブログ連携）
- [ ] CTAセクション強化
- [ ] レスポンシブ対応確認

#### クリニック紹介ページ
- [ ] クリニック概要追加
- [ ] 理念・方針の詳細
- [ ] スタッフ紹介セクション
- [ ] 院長挨拶
- [ ] 施設写真ギャラリー
- [ ] 画像最適化（Next.js Image）

#### 診療案内ページ
- [ ] 診療科目の詳細説明
- [ ] 診療時間表の作成
- [ ] 休診日カレンダー
- [ ] 診療の流れ説明
- [ ] よくある質問（FAQ）
- [ ] 保険・費用について

#### アクセス情報
- [ ] Google Maps API キー取得
- [ ] Google Maps埋め込み
- [ ] 住所・電話番号表示
- [ ] 交通アクセス（電車・バス・車）
- [ ] 駐車場情報
- [ ] 周辺地図

### 予約システム改善
- [ ] `src/app/api/reservations/available-slots/route.ts` 作成
- [ ] `src/components/features/reservation/Calendar.tsx` 作成
- [ ] `src/components/features/reservation/TimeSlotPicker.tsx` 作成
- [ ] 予約可能日時取得API実装
- [ ] カレンダーUI実装
- [ ] 時間枠選択UI
- [ ] 予約枠管理（定員制）
- [ ] 重複予約チェック
- [ ] 予約確認画面追加

### ブログ機能
- [ ] `src/app/blog/page.tsx` 作成（一覧）
- [ ] `src/app/blog/[slug]/page.tsx` 作成（詳細）
- [ ] `src/app/api/blog/route.ts` 作成
- [ ] `src/app/api/blog/[slug]/route.ts` 作成
- [ ] `src/app/admin/blog/page.tsx` 作成（管理画面一覧）
- [ ] `src/app/admin/blog/new/page.tsx` 作成（新規作成）
- [ ] `src/app/admin/blog/[id]/edit/page.tsx` 作成（編集）
- [ ] `src/components/blog/BlogCard.tsx` 作成
- [ ] `src/components/blog/BlogContent.tsx` 作成
- [ ] カテゴリ・タグ機能
- [ ] 検索機能
- [ ] ページネーション
- [ ] リッチテキストエディタ統合

---

## 🟢 低優先度（2-3ヶ月以内）

### 多言語対応
- [ ] next-intl設定ファイル作成
- [ ] `src/i18n/config.ts` 作成
- [ ] `messages/ja.json` 作成
- [ ] `messages/en.json` 作成
- [ ] `messages/zh.json` 作成
- [ ] `src/components/layout/LanguageSwitcher.tsx` 作成
- [ ] 全ページの翻訳
- [ ] 多言語対応フォーム
- [ ] 言語別ルーティング

### マイページ機能
- [ ] ユーザー認証実装（メールリンク認証）
- [ ] `src/app/mypage/page.tsx` 作成
- [ ] `src/app/mypage/reservations/page.tsx` 作成
- [ ] `src/app/mypage/reservations/[id]/page.tsx` 作成
- [ ] `src/app/api/mypage/reservations/route.ts` 作成
- [ ] `src/app/api/mypage/reservations/[id]/route.ts` 作成
- [ ] 予約履歴表示
- [ ] 予約詳細表示
- [ ] 予約変更機能
- [ ] 予約キャンセル機能

### パフォーマンス最適化
- [ ] 画像最適化（Next.js Image使用）
- [ ] フォント最適化
- [ ] コード分割
- [ ] バンドルサイズ削減
- [ ] キャッシング戦略
- [ ] Lighthouse スコア測定
- [ ] Core Web Vitals改善

### SEO対策
- [ ] `src/app/sitemap.ts` 作成
- [ ] `src/app/robots.ts` 作成
- [ ] メタタグ最適化
- [ ] OGP設定
- [ ] 構造化データ（JSON-LD）追加
- [ ] Google Search Console設定

### アクセシビリティ改善
- [ ] ARIA属性追加
- [ ] キーボードナビゲーション確認
- [ ] スクリーンリーダー対応
- [ ] コントラスト比確認
- [ ] フォーカス管理
- [ ] WCAG 2.1 AA準拠確認

### アナリティクス・監視
- [ ] Google Analytics 4アカウント作成
- [ ] GA4設定
- [ ] Vercel Analytics有効化
- [ ] イベントトラッキング実装
- [ ] エラー監視（Sentry等）設定
- [ ] パフォーマンス監視設定

### テスト
- [ ] Vitest設定
- [ ] 単体テスト作成
- [ ] 統合テスト作成
- [ ] Playwright設定
- [ ] E2Eテスト作成
- [ ] アクセシビリティテスト
- [ ] パフォーマンステスト

---

## ✅ 完了済み

### 初期セットアップ
- [x] Next.js プロジェクト作成
- [x] TypeScript設定
- [x] Tailwind CSS v4設定
- [x] ESLint・Prettier設定
- [x] Git初期化

### データベース
- [x] Prismaセットアップ
- [x] スキーマ定義（Patient, Reservation, ContactSubmission, BlogPost）
- [x] Prisma Client生成
- [x] ローカルマイグレーション実行

### ページ・コンポーネント
- [x] レイアウト（Header, Footer）
- [x] トップページ（基本構造）
- [x] クリニック紹介ページ（基本構造）
- [x] 診療案内ページ（基本構造）
- [x] お問い合わせページ
- [x] 予約ページ
- [x] ContactForm コンポーネント
- [x] ReservationForm コンポーネント

### API
- [x] `/api/contact` POST エンドポイント
- [x] `/api/reservation` POST エンドポイント

### ユーティリティ
- [x] Prisma Client シングルトン（`src/lib/db/prisma.ts`）
- [x] クラス名マージ（`src/lib/utils/cn.ts`）
- [x] 日付フォーマット（`src/lib/utils/date.ts`）
- [x] フォームバリデーション（`src/lib/utils/validation.ts`）

### デプロイ
- [x] GitHub リポジトリ作成・プッシュ
- [x] Vercel連携
- [x] Vercelデプロイ成功
- [x] ビルドエラー修正（Tailwind CSS v4、Zod v4、Prisma）

### ドキュメント
- [x] README.md
- [x] DATABASE_SETUP.md
- [x] DEPLOYMENT_GUIDE.md
- [x] GITHUB_SETUP.md
- [x] SPECIFICATIONS.md（本ドキュメント）
- [x] TODO.md（本タスクリスト）

---

## 📝 メモ

### 現在の技術的課題
- データベースが本番環境で未設定（プレースホルダーDATABASE_URLで運用中）
- メール通知機能が未実装（フォーム送信後の通知なし）
- 管理画面が未実装（データ確認はPrisma Studioのみ）

### 将来的な検討事項
- PWA対応
- オフライン対応
- プッシュ通知
- チャットサポート
- 診察券のデジタル化
- オンライン診療機能

---

**関連ドキュメント**: [SPECIFICATIONS.md](./SPECIFICATIONS.md)
