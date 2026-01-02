import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'クリニック紹介',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
              クリニック紹介
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
              地域の皆様に寄り添う、信頼できる医療を提供します
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">
              {/* Greeting */}
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">ごあいさつ</h2>
                <p className="leading-relaxed text-gray-700">
                  {siteConfig.name}は、下田地区の皆様の健康を守る、かかりつけクリニックとして診療を行っております。
                  地域に根ざした温かい医療を提供することを目指し、患者様一人ひとりに寄り添った診療を心がけております。
                </p>
                <p className="mt-4 leading-relaxed text-gray-700">
                  お子様からご高齢の方まで、幅広い年齢層の患者様に対応しております。
                  些細なことでもお気軽にご相談ください。
                </p>
              </div>

              {/* Features */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-primary-100 bg-primary-50/50 p-6">
                  <div className="mb-4 text-4xl">🏥</div>
                  <h3 className="mb-2 font-bold text-gray-900">総合診療</h3>
                  <p className="text-sm text-gray-600">
                    内科・外科をはじめ、幅広い診療科目に対応しています
                  </p>
                </div>

                <div className="rounded-lg border border-primary-100 bg-primary-50/50 p-6">
                  <div className="mb-4 text-4xl">💉</div>
                  <h3 className="mb-2 font-bold text-gray-900">予防医療</h3>
                  <p className="text-sm text-gray-600">
                    各種健診や予防接種で、病気の早期発見・予防をサポート
                  </p>
                </div>

                <div className="rounded-lg border border-primary-100 bg-primary-50/50 p-6">
                  <div className="mb-4 text-4xl">📱</div>
                  <h3 className="mb-2 font-bold text-gray-900">オンライン予約</h3>
                  <p className="text-sm text-gray-600">
                    24時間いつでもオンラインで診療予約が可能です
                  </p>
                </div>
              </div>

              {/* Facility */}
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">施設について</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    最新の医療機器を導入し、正確な診断と効果的な治療を提供できる環境を整えております。
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>バリアフリー対応で、車椅子の方も安心してご来院いただけます</li>
                    <li>広々とした待合室で、快適にお待ちいただけます</li>
                    <li>駐車場完備で、お車でのご来院も便利です</li>
                  </ul>
                </div>
              </div>

              {/* Access Info */}
              <div className="rounded-lg bg-primary-50 p-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">アクセス</h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">住所:</span> {siteConfig.address}
                  </p>
                  <p>
                    <span className="font-medium">電話:</span> {siteConfig.phone}
                  </p>
                  <p className="mt-4 text-sm text-gray-600">
                    詳しいアクセス方法は準備中です
                  </p>
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
