# 三条しただ郷クリニック - Webサイト仕様書

**プロジェクト開始日**: 2026-01-02
**最終更新日**: 2026-01-02
**バージョン**: 0.1.0
**ステータス**: デプロイ完了 / 開発継続中

---

## 📋 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [技術スタック](#技術スタック)
3. [実装済み機能](#実装済み機能)
4. [未実装機能](#未実装機能)
5. [データベース設計](#データベース設計)
6. [API仕様](#api仕様)
7. [フォームバリデーション](#フォームバリデーション)
8. [デプロイ情報](#デプロイ情報)
9. [開発環境セットアップ](#開発環境セットアップ)
10. [今後の開発タスク](#今後の開発タスク)

---

## プロジェクト概要

### 目的
地域の皆様の健康を守る、かかりつけクリニックのWebサイト

### 主要機能
- クリニック情報の提供
- オンライン予約システム
- お問い合わせフォーム
- 多言語対応（予定）
- ブログ・お知らせ機能（予定）

### 対象ユーザー
- 患者（一般利用者）
- クリニックスタッフ（管理機能は未実装）

---

## 技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|-----------|------|
| Next.js | 16.1.1 | Reactフレームワーク（App Router） |
| React | 19.2.3 | UIライブラリ |
| TypeScript | 5.x | 型安全性 |
| Tailwind CSS | 4.x | スタイリング |
| Framer Motion | 12.23.26 | アニメーション |

### フォーム管理
| 技術 | バージョン | 用途 |
|------|-----------|------|
| React Hook Form | 7.69.0 | フォーム状態管理 |
| Zod | 4.3.4 | バリデーション |
| @hookform/resolvers | 5.2.2 | RHF + Zod統合 |

### UIコンポーネント
| 技術 | バージョン | 用途 |
|------|-----------|------|
| @headlessui/react | 2.2.9 | アクセシブルなUIコンポーネント |
| @heroicons/react | 2.2.0 | アイコンセット |

### バックエンド・データベース
| 技術 | バージョン | 用途 |
|------|-----------|------|
| Prisma | 6.19.1 | ORM |
| @prisma/client | 6.19.1 | データベースクライアント |
| PostgreSQL | - | データベース（Vercel Postgres） |

### ユーティリティ
| 技術 | バージョン | 用途 |
|------|-----------|------|
| date-fns | 4.1.0 | 日付フォーマット |
| clsx | 2.1.1 | クラス名結合 |
| tailwind-merge | 3.4.0 | Tailwindクラスのマージ |

### 開発ツール
| 技術 | バージョン | 用途 |
|------|-----------|------|
| ESLint | 9.x | コード品質チェック |
| Prettier | 3.7.4 | コードフォーマット |
| prettier-plugin-tailwindcss | 0.7.2 | Tailwindクラスのソート |

### デプロイ
- **ホスティング**: Vercel
- **データベース**: Vercel Postgres
- **リポジトリ**: GitHub (https://github.com/Ikapulpo/sitada.git)

---

## 実装済み機能

### ✅ ページ構成

#### 1. トップページ (`/`)
- **ファイル**: `src/app/page.tsx`
- **実装状況**: ✅ 完了
- **機能**:
  - クリニック紹介
  - 主要機能の案内
  - CTAボタン（予約・お問い合わせ）

#### 2. クリニック紹介 (`/about`)
- **ファイル**: `src/app/about/page.tsx`
- **実装状況**: ✅ 完了
- **機能**:
  - クリニック概要
  - 理念・方針
  - スタッフ紹介（コンテンツは未記入）

#### 3. 診療について (`/medical`)
- **ファイル**: `src/app/medical/page.tsx`
- **実装状況**: ✅ 完了
- **機能**:
  - 診療科目一覧
  - 診療時間
  - アクセス情報（コンテンツは未記入）

#### 4. お問い合わせ (`/contact`)
- **ファイル**: `src/app/contact/page.tsx`
- **実装状況**: ✅ 完了
- **機能**:
  - お問い合わせフォーム
  - フォームバリデーション
  - データベース保存
  - 送信成功・エラー表示

#### 5. オンライン予約 (`/reservation`)
- **ファイル**: `src/app/reservation/page.tsx`
- **実装状況**: ✅ 完了
- **機能**:
  - 予約フォーム
  - 患者情報入力
  - 予約日時選択
  - データベース保存
  - 送信成功・エラー表示

### ✅ コンポーネント

#### レイアウトコンポーネント
| コンポーネント | ファイル | 実装状況 |
|--------------|---------|---------|
| Header | `src/components/layout/Header.tsx` | ✅ 完了 |
| Footer | `src/components/layout/Footer.tsx` | ✅ 完了 |

#### 機能コンポーネント
| コンポーネント | ファイル | 実装状況 |
|--------------|---------|---------|
| ContactForm | `src/components/features/contact/ContactForm.tsx` | ✅ 完了 |
| ReservationForm | `src/components/features/reservation/ReservationForm.tsx` | ✅ 完了 |

### ✅ API Routes

#### 1. お問い合わせAPI (`/api/contact`)
- **ファイル**: `src/app/api/contact/route.ts`
- **実装状況**: ✅ 完了
- **メソッド**: POST
- **機能**:
  - リクエストボディのバリデーション
  - データベースへの保存
  - エラーハンドリング

#### 2. 予約API (`/api/reservation`)
- **ファイル**: `src/app/api/reservation/route.ts`
- **実装状況**: ✅ 完了
- **メソッド**: POST
- **機能**:
  - 患者情報の登録（新規/既存チェック）
  - 予約情報の保存
  - トランザクション処理
  - エラーハンドリング

### ✅ データベース

#### スキーマ定義
- **ファイル**: `prisma/schema.prisma`
- **実装状況**: ✅ 完了
- **モデル**:
  - Patient（患者）
  - Reservation（予約）
  - ContactSubmission（お問い合わせ）
  - BlogPost（ブログ記事 - 未使用）

#### マイグレーション
- **状態**: ローカル環境で実行済み
- **本番環境**: Vercel Postgresで実行必要

### ✅ ユーティリティ

| ファイル | 機能 | 実装状況 |
|---------|------|---------|
| `src/lib/db/prisma.ts` | Prisma Clientシングルトン | ✅ 完了 |
| `src/lib/utils/cn.ts` | クラス名マージ | ✅ 完了 |
| `src/lib/utils/date.ts` | 日付フォーマット | ✅ 完了 |
| `src/lib/utils/validation.ts` | フォームバリデーションスキーマ | ✅ 完了 |

### ✅ 型定義

- **ファイル**: `src/types/index.ts`
- **実装状況**: ✅ 完了
- **内容**:
  - Gender型
  - Department型
  - ReservationStatus型
  - ContactStatus型

### ✅ 設定ファイル

| ファイル | 機能 | 実装状況 |
|---------|------|---------|
| `src/config/site.ts` | サイト設定 | ✅ 完了 |
| `src/config/navigation.ts` | ナビゲーション設定 | ✅ 完了 |

### ✅ デプロイ環境

- **Vercel**: デプロイ完了
- **GitHub**: リポジトリ連携完了
- **自動デプロイ**: main ブランチへのプッシュで自動デプロイ

---

## 未実装機能

### 🚧 優先度: 高

#### 1. データベース初期化（本番環境）
- **タスク**: Vercel Postgresでマイグレーション実行
- **必要な作業**:
  ```bash
  # Vercel CLIでマイグレーション
  vercel env pull .env.production
  DATABASE_URL=$(grep DATABASE_URL .env.production | cut -d '=' -f2-) npx prisma migrate deploy
  ```
- **関連ドキュメント**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

#### 2. 環境変数の本番設定
- **タスク**: Vercelで環境変数を設定
- **必要な変数**:
  - `DATABASE_URL`: Vercel Postgresから自動取得
  - `NEXT_PUBLIC_SITE_URL`: 本番ドメイン
  - `NEXT_PUBLIC_SITE_NAME`: "三条しただ郷クリニック"

#### 3. メール通知機能
- **実装対象**:
  - お問い合わせ送信時の自動返信
  - 予約完了時の確認メール
  - スタッフへの通知メール
- **推奨サービス**: SendGrid / Resend
- **実装ファイル**:
  - `src/lib/email/sendContactConfirmation.ts`（新規作成）
  - `src/lib/email/sendReservationConfirmation.ts`（新規作成）

#### 4. 管理画面（予約・お問い合わせ管理）
- **実装対象**:
  - 予約一覧表示
  - 予約ステータス変更
  - お問い合わせ一覧表示
  - お問い合わせ対応状況管理
- **認証**: NextAuth.js または Clerk推奨
- **実装ルート**:
  - `/admin/reservations`（新規作成）
  - `/admin/contacts`（新規作成）

### 🚧 優先度: 中

#### 5. コンテンツの充実
- **実装対象**:
  - トップページのヒーローセクション
  - クリニック紹介の詳細情報
  - スタッフ紹介（写真・プロフィール）
  - アクセス情報（Googleマップ埋め込み）
  - 診療時間の詳細表
- **必要なデータ**: クライアントから提供

#### 6. 予約システムの改善
- **実装対象**:
  - 予約可能日時の動的取得
  - 予約枠の管理（定員制）
  - 予約のキャンセル機能
  - 予約変更機能
- **実装ファイル**:
  - `/api/reservations/available-slots`（新規作成）
  - `/api/reservations/[id]`（新規作成 - PATCH/DELETE）

#### 7. ブログ・お知らせ機能
- **実装対象**:
  - ブログ記事一覧ページ
  - 記事詳細ページ
  - カテゴリ・タグ機能
  - 検索機能
- **実装ルート**:
  - `/blog`（新規作成）
  - `/blog/[slug]`（新規作成）
  - `/api/blog`（新規作成）

#### 8. 多言語対応
- **実装対象**:
  - 日本語（デフォルト）
  - 英語
  - 中国語（簡体字）
- **使用ライブラリ**: next-intl（インストール済み）
- **実装ファイル**:
  - `src/i18n/`（新規作成）
  - `messages/ja.json`（新規作成）
  - `messages/en.json`（新規作成）
  - `messages/zh.json`（新規作成）

### 🚧 優先度: 低

#### 9. パフォーマンス最適化
- **実装対象**:
  - 画像最適化（Next.js Image）
  - フォントの最適化
  - バンドルサイズの削減
  - キャッシング戦略

#### 10. SEO対策
- **実装対象**:
  - メタタグの最適化
  - sitemap.xml生成
  - robots.txt設定
  - 構造化データ（JSON-LD）

#### 11. アクセシビリティ改善
- **実装対象**:
  - ARIA属性の追加
  - キーボードナビゲーション
  - スクリーンリーダー対応
  - コントラスト比の確認

#### 12. アナリティクス
- **実装対象**:
  - Google Analytics設定
  - Vercel Analytics有効化
  - イベントトラッキング

---

## データベース設計

### ERD（Entity Relationship Diagram）

```
Patient (患者)
  ├─ id: String (PK)
  ├─ name: String
  ├─ nameKana: String
  ├─ email: String (Unique)
  ├─ phone: String
  ├─ dateOfBirth: DateTime
  ├─ gender: Gender (MALE/FEMALE/OTHER)
  ├─ address: String?
  ├─ postalCode: String?
  ├─ createdAt: DateTime
  ├─ updatedAt: DateTime
  └─ reservations: Reservation[] (1対多)

Reservation (予約)
  ├─ id: String (PK)
  ├─ patientId: String (FK → Patient)
  ├─ appointmentDate: DateTime
  ├─ appointmentTime: String
  ├─ department: Department (INTERNAL_MEDICINE/SURGERY/PEDIATRICS/GENERAL)
  ├─ symptoms: String?
  ├─ notes: String?
  ├─ status: ReservationStatus (PENDING/CONFIRMED/COMPLETED/CANCELLED)
  ├─ createdAt: DateTime
  ├─ updatedAt: DateTime
  └─ patient: Patient (多対1)

ContactSubmission (お問い合わせ)
  ├─ id: String (PK)
  ├─ name: String
  ├─ email: String
  ├─ phone: String?
  ├─ subject: String
  ├─ message: String
  ├─ status: ContactStatus (UNREAD/READ/REPLIED)
  ├─ createdAt: DateTime
  └─ updatedAt: DateTime

BlogPost (ブログ記事) ※未使用
  ├─ id: String (PK)
  ├─ titleJa: String
  ├─ titleEn: String?
  ├─ titleZh: String?
  ├─ contentJa: String
  ├─ contentEn: String?
  ├─ contentZh: String?
  ├─ slug: String (Unique)
  ├─ published: Boolean
  ├─ category: String?
  ├─ tags: String[]
  ├─ createdAt: DateTime
  └─ updatedAt: DateTime
```

### Enum定義

```prisma
enum Gender {
  MALE      // 男性
  FEMALE    // 女性
  OTHER     // その他
}

enum Department {
  INTERNAL_MEDICINE  // 内科
  SURGERY           // 外科
  PEDIATRICS        // 小児科
  GENERAL           // 一般診療
}

enum ReservationStatus {
  PENDING     // 予約待ち
  CONFIRMED   // 確認済み
  COMPLETED   // 完了
  CANCELLED   // キャンセル
}

enum ContactStatus {
  UNREAD   // 未読
  READ     // 既読
  REPLIED  // 返信済み
}
```

### データベース操作コマンド

```bash
# マイグレーション作成
npx prisma migrate dev --name migration_name

# マイグレーション適用（本番）
npx prisma migrate deploy

# Prisma Client生成
npx prisma generate

# Prisma Studio起動（データ確認・編集）
npx prisma studio

# データベースリセット（開発環境のみ）
npx prisma migrate reset
```

---

## API仕様

### 1. お問い合わせAPI

**エンドポイント**: `POST /api/contact`

**リクエストボディ**:
```typescript
{
  name: string        // 名前（2文字以上）
  email: string       // メールアドレス（有効な形式）
  phone?: string      // 電話番号（任意、数字とハイフンのみ）
  subject: string     // 件名（3文字以上）
  message: string     // メッセージ（10文字以上）
}
```

**レスポンス**:
```typescript
// 成功時
{
  success: true
  id: string  // 作成されたContactSubmissionのID
}

// エラー時
{
  error: string  // エラーメッセージ
}
```

**実装ファイル**: `src/app/api/contact/route.ts`

**エラーハンドリング**:
- バリデーションエラー: 400 Bad Request
- サーバーエラー: 500 Internal Server Error

---

### 2. 予約API

**エンドポイント**: `POST /api/reservation`

**リクエストボディ**:
```typescript
{
  // 患者情報
  name: string            // 名前（2文字以上）
  nameKana: string        // フリガナ（2文字以上）
  email: string           // メールアドレス（有効な形式）
  phone: string           // 電話番号（10桁以上、数字とハイフンのみ）
  dateOfBirth: string     // 生年月日（YYYY-MM-DD形式）
  gender: 'MALE' | 'FEMALE' | 'OTHER'

  // 予約情報
  appointmentDate: string  // 予約日（YYYY-MM-DD形式）
  appointmentTime: string  // 予約時間（HH:mm形式）
  department: 'INTERNAL_MEDICINE' | 'SURGERY' | 'PEDIATRICS' | 'GENERAL'
  symptoms?: string        // 症状（任意）
  notes?: string          // 備考（任意）
}
```

**レスポンス**:
```typescript
// 成功時
{
  success: true
  reservationId: string  // 作成された予約ID
  patientId: string      // 患者ID（新規作成 or 既存）
}

// エラー時
{
  error: string  // エラーメッセージ
}
```

**実装ファイル**: `src/app/api/reservation/route.ts`

**処理フロー**:
1. リクエストボディのバリデーション
2. メールアドレスで患者検索
3. 患者が存在しない場合は新規作成
4. 予約情報を作成（ステータス: PENDING）
5. レスポンス返却

**エラーハンドリング**:
- バリデーションエラー: 400 Bad Request
- 重複予約エラー: 409 Conflict（未実装）
- サーバーエラー: 500 Internal Server Error

---

### 未実装API（将来追加予定）

#### 3. 予約可能日時取得API
- **エンドポイント**: `GET /api/reservations/available-slots`
- **パラメータ**: `date`, `department`
- **レスポンス**: 利用可能な時間枠の配列

#### 4. 予約詳細取得API
- **エンドポイント**: `GET /api/reservations/[id]`
- **レスポンス**: 予約詳細情報

#### 5. 予約更新API
- **エンドポイント**: `PATCH /api/reservations/[id]`
- **用途**: 予約日時変更、ステータス更新

#### 6. 予約キャンセルAPI
- **エンドポイント**: `DELETE /api/reservations/[id]`
- **用途**: 予約のキャンセル

#### 7. ブログ記事一覧API
- **エンドポイント**: `GET /api/blog`
- **パラメータ**: `page`, `category`, `tag`

#### 8. ブログ記事詳細API
- **エンドポイント**: `GET /api/blog/[slug]`

---

## フォームバリデーション

### バリデーションスキーマ

**ファイル**: `src/lib/utils/validation.ts`

#### 1. 予約フォーム (`reservationSchema`)

```typescript
{
  name: z.string().min(2, '名前は2文字以上で入力してください')
  nameKana: z.string().min(2, 'フリガナは2文字以上で入力してください')
  email: z.string().email('有効なメールアドレスを入力してください')
  phone: z.string()
    .min(10, '電話番号は10桁以上で入力してください')
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください')
  dateOfBirth: z.string().min(1, '生年月日を入力してください')
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'], {
    message: '性別を選択してください'
  })
  appointmentDate: z.string().min(1, '予約日を選択してください')
  appointmentTime: z.string().min(1, '予約時間を選択してください')
  department: z.enum(['INTERNAL_MEDICINE', 'SURGERY', 'PEDIATRICS', 'GENERAL'], {
    message: '診療科を選択してください'
  })
  symptoms: z.string().optional()
  notes: z.string().optional()
}
```

#### 2. お問い合わせフォーム (`contactSchema`)

```typescript
{
  name: z.string().min(2, 'お名前は2文字以上で入力してください')
  email: z.string().email('有効なメールアドレスを入力してください')
  phone: z.string().optional()
    .refine(val => !val || /^[0-9-]+$/.test(val),
      '電話番号は数字とハイフンのみで入力してください')
  subject: z.string().min(3, '件名は3文字以上で入力してください')
  message: z.string().min(10, 'お問い合わせ内容は10文字以上で入力してください')
}
```

#### 3. 患者登録フォーム (`patientSchema`)

```typescript
{
  name: z.string().min(2, '名前は2文字以上で入力してください')
  nameKana: z.string().min(2, 'フリガナは2文字以上で入力してください')
  email: z.string().email('有効なメールアドレスを入力してください')
  phone: z.string()
    .min(10, '電話番号は10桁以上で入力してください')
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください')
  dateOfBirth: z.string().min(1, '生年月日を入力してください')
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'])
  address: z.string().optional()
  postalCode: z.string().optional()
}
```

### バリデーションエラーの表示

フォームコンポーネントでReact Hook Formを使用してエラーを表示:

```typescript
{errors.fieldName && (
  <p className="mt-1 text-sm text-red-600">
    {errors.fieldName.message}
  </p>
)}
```

---

## デプロイ情報

### 環境

| 項目 | 設定 |
|------|------|
| プラットフォーム | Vercel |
| GitHubリポジトリ | https://github.com/Ikapulpo/sitada.git |
| ブランチ | main |
| デプロイURL | [Vercelダッシュボードで確認] |
| データベース | Vercel Postgres（設定必要） |

### 環境変数（本番環境）

#### 設定済み
なし（初回デプロイ完了、データベース未設定）

#### 設定必要
| 変数名 | 説明 | 取得方法 |
|--------|------|---------|
| `DATABASE_URL` | PostgreSQL接続URL | Vercel Postgresから自動取得 |
| `NEXT_PUBLIC_SITE_URL` | 本番サイトURL | Vercelのデプロイ後に設定 |
| `NEXT_PUBLIC_SITE_NAME` | サイト名 | "三条しただ郷クリニック" |

#### 将来追加予定
| 変数名 | 説明 | サービス |
|--------|------|---------|
| `SENDGRID_API_KEY` | メール送信APIキー | SendGrid |
| `SENDGRID_FROM_EMAIL` | 送信元メールアドレス | SendGrid |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps APIキー | Google Cloud |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics測定ID | Google Analytics |

### ビルド設定

#### package.json
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "DATABASE_URL=\"postgresql://placeholder:placeholder@localhost:5432/placeholder\" next build",
    "start": "next start",
    "lint": "eslint",
    "postinstall": "DATABASE_URL=\"${DATABASE_URL:-postgresql://placeholder:placeholder@localhost:5432/placeholder}\" prisma generate"
  }
}
```

**注意**: ビルド時にDATABASE_URLが未設定の場合、プレースホルダーを使用してPrisma Clientを生成します。実際の運用ではVercel Postgresを設定してください。

### デプロイフロー

1. ローカルで開発
2. `git add .` → `git commit -m "message"` → `git push origin main`
3. Vercelが自動的にビルド・デプロイ
4. デプロイ完了後、Vercel URLでアクセス可能

### ビルド履歴

| 日時 | コミット | ステータス | 備考 |
|------|---------|-----------|------|
| 2026-01-02 | 80e63f6 | ✅ 成功 | DATABASE_URLプレースホルダー対応 |
| 2026-01-02 | 80106dc | ❌ 失敗 | Prisma Client未生成エラー |
| 2026-01-02 | 4e08268 | ❌ 失敗 | Zod v4構文エラー |
| 2026-01-02 | 初回 | ❌ 失敗 | DATABASE_URL未設定エラー |

---

## 開発環境セットアップ

### 必要な環境

- **Node.js**: 18以上
- **npm**: 9以上
- **PostgreSQL**: 14以上（ローカル開発の場合）
- **Git**: 最新版

### セットアップ手順

#### 1. リポジトリのクローン

```bash
git clone https://github.com/Ikapulpo/sitada.git
cd sitada
```

#### 2. 依存関係のインストール

```bash
npm install
```

#### 3. 環境変数の設定

```bash
# .env.exampleをコピー
cp .env.example .env.local

# .env.localを編集
# DATABASE_URLを設定
```

#### 4. データベースのセットアップ

**オプションA: ローカルPostgreSQL**

```bash
# PostgreSQLをインストール（Homebrewの場合）
brew install postgresql@14

# PostgreSQLを起動
brew services start postgresql@14

# データベース作成
createdb sitadago_clinic

# .env.localのDATABASE_URLを設定
# DATABASE_URL="postgresql://postgres:password@localhost:5432/sitadago_clinic"
```

**オプションB: Vercel Postgres（推奨）**

詳細は [DATABASE_SETUP.md](./DATABASE_SETUP.md) を参照

**オプションC: Supabase**

詳細は [DATABASE_SETUP.md](./DATABASE_SETUP.md) を参照

#### 5. マイグレーション実行

```bash
# マイグレーション実行
npx prisma migrate dev

# Prisma Client生成
npx prisma generate
```

#### 6. 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

### 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動（ビルド後）
npm start

# Lintチェック
npm run lint

# Prisma Studio起動（データベースGUI）
npx prisma studio

# マイグレーション作成
npx prisma migrate dev --name migration_name

# Prisma Client再生成
npx prisma generate
```

---

## 今後の開発タスク

### フェーズ1: 基盤整備（優先度: 高）

#### タスク1.1: データベースセットアップ
- [ ] Vercel Postgresデータベース作成
- [ ] DATABASE_URL環境変数設定
- [ ] 本番環境でマイグレーション実行
- [ ] Prisma Studioでデータ確認

**推定作業時間**: 30分
**担当者**: DevOps
**関連ドキュメント**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

#### タスク1.2: メール通知機能
- [ ] SendGridアカウント作成
- [ ] 環境変数設定（SENDGRID_API_KEY, SENDGRID_FROM_EMAIL）
- [ ] メール送信ユーティリティ作成（`src/lib/email/`）
- [ ] お問い合わせ自動返信実装
- [ ] 予約確認メール実装
- [ ] スタッフ通知メール実装
- [ ] メールテンプレート作成（HTML/TEXT）

**推定作業時間**: 4時間
**担当者**: Backend Developer
**新規ファイル**:
- `src/lib/email/config.ts`
- `src/lib/email/sendContactConfirmation.ts`
- `src/lib/email/sendReservationConfirmation.ts`
- `src/lib/email/sendStaffNotification.ts`
- `src/lib/email/templates/contactConfirmation.html`
- `src/lib/email/templates/reservationConfirmation.html`

---

#### タスク1.3: 管理画面（認証）
- [ ] 認証ライブラリ選定（NextAuth.js / Clerk）
- [ ] 認証機能実装
- [ ] 管理者ユーザー作成
- [ ] ログインページ作成
- [ ] 認証ミドルウェア実装

**推定作業時間**: 6時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/admin/login/page.tsx`
- `src/lib/auth/config.ts`
- `src/middleware.ts`

---

#### タスク1.4: 管理画面（予約管理）
- [ ] 予約一覧ページ作成（`/admin/reservations`）
- [ ] 予約詳細表示
- [ ] ステータス変更機能（確認済み/完了/キャンセル）
- [ ] フィルター機能（日付、ステータス、診療科）
- [ ] 検索機能（患者名、メール）
- [ ] ページネーション実装
- [ ] API実装（`/api/admin/reservations`）

**推定作業時間**: 8時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/admin/reservations/page.tsx`
- `src/app/admin/reservations/[id]/page.tsx`
- `src/app/api/admin/reservations/route.ts`
- `src/app/api/admin/reservations/[id]/route.ts`
- `src/components/admin/ReservationList.tsx`
- `src/components/admin/ReservationDetail.tsx`

---

#### タスク1.5: 管理画面（お問い合わせ管理）
- [ ] お問い合わせ一覧ページ作成（`/admin/contacts`）
- [ ] お問い合わせ詳細表示
- [ ] ステータス変更機能（既読/返信済み）
- [ ] フィルター機能（ステータス、日付）
- [ ] 検索機能（名前、メール、件名）
- [ ] ページネーション実装
- [ ] API実装（`/api/admin/contacts`）

**推定作業時間**: 6時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/admin/contacts/page.tsx`
- `src/app/admin/contacts/[id]/page.tsx`
- `src/app/api/admin/contacts/route.ts`
- `src/app/api/admin/contacts/[id]/route.ts`
- `src/components/admin/ContactList.tsx`
- `src/components/admin/ContactDetail.tsx`

---

### フェーズ2: コンテンツ充実（優先度: 中）

#### タスク2.1: トップページ改善
- [ ] ヒーローセクション作成
- [ ] 診療科目カード作成
- [ ] アクセス情報セクション
- [ ] お知らせセクション（ブログ連携）
- [ ] CTAセクション強化
- [ ] レスポンシブ対応確認

**推定作業時間**: 4時間
**担当者**: Frontend Developer
**修正ファイル**: `src/app/page.tsx`

---

#### タスク2.2: クリニック紹介ページ充実
- [ ] クリニック概要追加
- [ ] 理念・方針の詳細
- [ ] スタッフ紹介セクション
- [ ] 院長挨拶
- [ ] 施設写真ギャラリー
- [ ] 画像最適化（Next.js Image）

**推定作業時間**: 3時間
**担当者**: Frontend Developer
**修正ファイル**: `src/app/about/page.tsx`
**必要な素材**: クライアントから提供（写真、テキスト）

---

#### タスク2.3: 診療案内ページ充実
- [ ] 診療科目の詳細説明
- [ ] 診療時間表の作成
- [ ] 休診日カレンダー
- [ ] 診療の流れ説明
- [ ] よくある質問（FAQ）
- [ ] 保険・費用について

**推定作業時間**: 3時間
**担当者**: Frontend Developer
**修正ファイル**: `src/app/medical/page.tsx`

---

#### タスク2.4: アクセス情報
- [ ] Google Maps埋め込み
- [ ] 住所・電話番号表示
- [ ] 交通アクセス（電車・バス・車）
- [ ] 駐車場情報
- [ ] 周辺地図

**推定作業時間**: 2時間
**担当者**: Frontend Developer
**必要な環境変数**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

---

#### タスク2.5: 予約システム改善
- [ ] 予約可能日時API実装
- [ ] カレンダーUI実装
- [ ] 時間枠選択UI
- [ ] 予約枠管理（定員制）
- [ ] 重複予約チェック
- [ ] 予約確認画面追加

**推定作業時間**: 10時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/api/reservations/available-slots/route.ts`
- `src/components/features/reservation/Calendar.tsx`
- `src/components/features/reservation/TimeSlotPicker.tsx`

---

### フェーズ3: 機能拡張（優先度: 中）

#### タスク3.1: ブログ機能
- [ ] BlogPostモデルの活用
- [ ] ブログ一覧ページ（`/blog`）
- [ ] 記事詳細ページ（`/blog/[slug]`）
- [ ] カテゴリ・タグ機能
- [ ] 検索機能
- [ ] ページネーション
- [ ] 管理画面（記事作成・編集）
- [ ] リッチテキストエディタ統合

**推定作業時間**: 16時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/api/blog/route.ts`
- `src/app/api/blog/[slug]/route.ts`
- `src/app/admin/blog/page.tsx`
- `src/app/admin/blog/new/page.tsx`
- `src/app/admin/blog/[id]/edit/page.tsx`
- `src/components/blog/BlogCard.tsx`
- `src/components/blog/BlogContent.tsx`

---

#### タスク3.2: 多言語対応
- [ ] next-intl設定
- [ ] 言語切り替えUI
- [ ] 翻訳ファイル作成（日本語・英語・中国語）
- [ ] 全ページの翻訳
- [ ] 多言語対応フォーム
- [ ] 言語別ルーティング

**推定作業時間**: 12時間
**担当者**: Frontend Developer
**新規ファイル**:
- `src/i18n/config.ts`
- `messages/ja.json`
- `messages/en.json`
- `messages/zh.json`
- `src/components/layout/LanguageSwitcher.tsx`

---

#### タスク3.3: 予約管理機能（ユーザー側）
- [ ] 予約履歴ページ
- [ ] 予約詳細表示
- [ ] 予約変更機能
- [ ] 予約キャンセル機能
- [ ] マイページ作成
- [ ] ユーザー認証（メールリンク認証）

**推定作業時間**: 10時間
**担当者**: Full Stack Developer
**新規ファイル**:
- `src/app/mypage/page.tsx`
- `src/app/mypage/reservations/page.tsx`
- `src/app/mypage/reservations/[id]/page.tsx`
- `src/app/api/mypage/reservations/route.ts`
- `src/app/api/mypage/reservations/[id]/route.ts`

---

### フェーズ4: 最適化・品質向上（優先度: 低）

#### タスク4.1: パフォーマンス最適化
- [ ] 画像最適化（Next.js Image使用）
- [ ] フォント最適化
- [ ] コード分割
- [ ] バンドルサイズ削減
- [ ] キャッシング戦略
- [ ] Lighthouse スコア改善（目標: 90以上）

**推定作業時間**: 6時間
**担当者**: Frontend Developer

---

#### タスク4.2: SEO対策
- [ ] メタタグ最適化
- [ ] OGP設定
- [ ] sitemap.xml生成
- [ ] robots.txt設定
- [ ] 構造化データ（JSON-LD）
- [ ] Google Search Console設定

**推定作業時間**: 4時間
**担当者**: Frontend Developer
**新規ファイル**:
- `src/app/sitemap.ts`
- `src/app/robots.ts`

---

#### タスク4.3: アクセシビリティ改善
- [ ] ARIA属性追加
- [ ] キーボードナビゲーション
- [ ] スクリーンリーダー対応
- [ ] コントラスト比確認
- [ ] フォーカス管理
- [ ] WCAG 2.1 AA準拠確認

**推定作業時間**: 4時間
**担当者**: Frontend Developer

---

#### タスク4.4: アナリティクス・監視
- [ ] Google Analytics 4設定
- [ ] Vercel Analytics有効化
- [ ] イベントトラッキング実装
- [ ] エラー監視（Sentry等）
- [ ] パフォーマンス監視

**推定作業時間**: 3時間
**担当者**: DevOps

---

#### タスク4.5: テスト
- [ ] 単体テスト（Vitest）
- [ ] 統合テスト
- [ ] E2Eテスト（Playwright）
- [ ] アクセシビリティテスト
- [ ] パフォーマンステスト

**推定作業時間**: 16時間
**担当者**: QA / Developer

---

## 開発優先度まとめ

### 即座に実施すべき（週内）
1. ✅ Vercel Postgresデータベース設定
2. ✅ 環境変数設定
3. ✅ マイグレーション実行

### 早期実施（1-2週間）
4. メール通知機能
5. 管理画面（認証・予約管理・お問い合わせ管理）

### 中期実施（1ヶ月）
6. コンテンツ充実（トップページ、クリニック紹介、診療案内）
7. 予約システム改善（カレンダーUI、予約枠管理）
8. ブログ機能

### 長期実施（2-3ヶ月）
9. 多言語対応
10. ユーザーマイページ
11. パフォーマンス最適化
12. SEO対策
13. テスト実装

---

## 関連ドキュメント

| ドキュメント | 説明 |
|------------|------|
| [README.md](./README.md) | プロジェクト概要・セットアップ |
| [DATABASE_SETUP.md](./DATABASE_SETUP.md) | データベースセットアップガイド |
| [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) | Vercelデプロイガイド |
| [GITHUB_SETUP.md](./GITHUB_SETUP.md) | GitHub連携ガイド |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | システムアーキテクチャ |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | デザインシステム |
| [INFORMATION_ARCHITECTURE.md](./INFORMATION_ARCHITECTURE.md) | 情報設計 |

---

## バージョン履歴

| バージョン | 日付 | 変更内容 |
|----------|------|---------|
| 0.1.0 | 2026-01-02 | 初版作成・Vercelデプロイ完了 |

---

**作成者**: Claude Code
**プロジェクトURL**: https://github.com/Ikapulpo/sitada
**Vercel**: [デプロイURL確認中]
