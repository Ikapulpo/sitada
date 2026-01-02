import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'オンライン予約',
}

export default function ReservationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
              オンライン予約
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
              24時間いつでも診療予約が可能です
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border-2 border-accent-200 bg-accent-50 p-12 text-center">
                <div className="mb-6 text-6xl">🚧</div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  オンライン予約システムは準備中です
                </h2>
                <p className="mb-8 text-gray-700">
                  現在、オンライン予約システムを開発中です。
                  <br />
                  近日中にサービスを開始する予定です。
                </p>
                <div className="mx-auto max-w-md rounded-lg bg-white p-6">
                  <h3 className="mb-4 font-bold text-gray-900">当面の予約方法</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    恐れ入りますが、お電話にてご予約ください
                  </p>
                  <a
                    href="tel:0256-XX-XXXX"
                    className="block rounded-lg bg-primary-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700"
                  >
                    📞 電話で予約する
                  </a>
                  <p className="mt-4 text-xs text-gray-500">
                    診療時間内にお電話ください
                    <br />
                    平日: 9:00-12:00 / 14:00-18:00
                    <br />
                    土曜: 9:00-12:00
                  </p>
                </div>
              </div>

              {/* Planned Features */}
              <div className="mt-12">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                  予定されている機能
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-2 text-2xl">📅</div>
                    <h3 className="mb-2 font-bold text-gray-900">24時間予約受付</h3>
                    <p className="text-sm text-gray-600">
                      診療時間外でもいつでも予約が可能になります
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-2 text-2xl">📱</div>
                    <h3 className="mb-2 font-bold text-gray-900">スマホ対応</h3>
                    <p className="text-sm text-gray-600">
                      スマートフォンから簡単に予約できます
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-2 text-2xl">🔔</div>
                    <h3 className="mb-2 font-bold text-gray-900">リマインダー通知</h3>
                    <p className="text-sm text-gray-600">
                      予約日前日にメール・SMSで通知をお送りします
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-2 text-2xl">✅</div>
                    <h3 className="mb-2 font-bold text-gray-900">予約確認・変更</h3>
                    <p className="text-sm text-gray-600">
                      マイページで予約状況の確認・変更が可能です
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
