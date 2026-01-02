import { siteConfig } from '@/config/site'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-primary-50 to-white">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            下田地区の皆様の健康を守る
            <br />
            <span className="text-primary-600">かかりつけクリニック</span>
          </h2>
          <p className="mb-8 text-lg text-gray-600">{siteConfig.description}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="w-full rounded-lg bg-accent-500 px-8 py-3 text-center font-medium text-white transition-colors hover:bg-accent-600 sm:w-auto"
            >
              オンライン予約
            </a>
            <a
              href="#contact"
              className="w-full rounded-lg border-2 border-primary-600 px-8 py-3 text-center font-medium text-primary-600 transition-colors hover:bg-primary-50 sm:w-auto"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">診療時間</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                平日: {siteConfig.businessHours.weekday.morning} /{' '}
                {siteConfig.businessHours.weekday.afternoon}
              </p>
              <p>土曜: {siteConfig.businessHours.saturday.morning}</p>
              <p className="text-red-600">休診: 日曜日・祝日</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">お電話でのご予約</h3>
            <p className="text-2xl font-bold text-primary-600">{siteConfig.phone}</p>
            <p className="mt-2 text-sm text-gray-600">受付時間内にお電話ください</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-gray-900">所在地</h3>
            <p className="text-sm text-gray-600">{siteConfig.address}</p>
            <a href="#access" className="mt-2 inline-block text-sm text-primary-600 hover:underline">
              アクセス →
            </a>
          </div>
        </div>

        {/* Development Notice */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-primary-200 bg-primary-50 p-6 text-center">
          <p className="text-sm text-primary-800">
            🚧 このサイトは現在開発中です。近日公開予定です。
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
