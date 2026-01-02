import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/features/contact/ContactForm'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
              お問い合わせ
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
              診療に関するご質問やご相談など、お気軽にお問い合わせください
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 grid gap-6 md:grid-cols-2">
                {/* Phone */}
                <div className="rounded-lg border border-primary-100 bg-white p-6">
                  <div className="mb-4 text-4xl">📞</div>
                  <h2 className="mb-2 text-xl font-bold text-gray-900">お電話でのお問い合わせ</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    診療時間内にお電話ください
                  </p>
                  <p className="text-2xl font-bold text-primary-600">{siteConfig.phone}</p>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>平日: 9:00 - 12:00 / 14:00 - 18:00</p>
                    <p>土曜: 9:00 - 12:00</p>
                    <p className="text-red-600">休診: 日曜日・祝日</p>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-lg border border-primary-100 bg-white p-6">
                  <div className="mb-4 text-4xl">✉️</div>
                  <h2 className="mb-2 text-xl font-bold text-gray-900">メールでのお問い合わせ</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    24時間受付しております
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-lg font-medium text-primary-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="mt-4 text-sm text-gray-600">
                    ※返信には2-3営業日いただく場合がございます
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">お問い合わせフォーム</h2>
                <ContactForm />
              </div>

              {/* Access Info */}
              <div className="mt-12 rounded-lg bg-primary-50 p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">アクセス</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">住所</h3>
                    <p className="text-gray-700">{siteConfig.address}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">アクセス方法</h3>
                    <ul className="list-inside list-disc space-y-1 text-gray-700">
                      <li>駐車場完備</li>
                      <li>詳しいアクセス情報は準備中です</li>
                    </ul>
                  </div>
                  <div className="mt-6 rounded-lg border border-gray-300 bg-gray-100 p-6 text-center">
                    <p className="text-gray-600">地図は準備中です</p>
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
