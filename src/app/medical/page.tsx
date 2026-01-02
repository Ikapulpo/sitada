import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '診療について',
}

export default function MedicalPage() {
  const departments = [
    {
      name: '内科',
      icon: '🩺',
      description: '風邪、インフルエンザ、生活習慣病など、内科全般の診療を行います',
      conditions: ['風邪・発熱', '生活習慣病', '高血圧', '糖尿病', '脂質異常症'],
    },
    {
      name: '外科',
      icon: '🏥',
      description: 'けが、切り傷、やけどなどの外科的処置を行います',
      conditions: ['外傷・切り傷', 'やけど', '打撲', '捻挫', '皮膚の腫れ物'],
    },
    {
      name: '小児科',
      icon: '👶',
      description: 'お子様の健康管理、予防接種、一般診療を行います',
      conditions: ['乳幼児健診', '予防接種', '発熱・咳', '腹痛・下痢', '皮膚の症状'],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">診療について</h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
              幅広い診療科目で、地域の皆様の健康をサポートします
            </p>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-8">
              {departments.map((dept) => (
                <div key={dept.name} className="rounded-lg bg-white p-8 shadow-sm">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="text-5xl">{dept.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-900">{dept.name}</h2>
                  </div>
                  <p className="mb-4 text-gray-700">{dept.description}</p>
                  <div>
                    <h3 className="mb-2 font-medium text-gray-900">主な診療内容</h3>
                    <div className="flex flex-wrap gap-2">
                      {dept.conditions.map((condition) => (
                        <span
                          key={condition}
                          className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">診療時間</h2>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <table className="w-full">
                  <thead className="bg-primary-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">曜日</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">午前</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">午後</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">月 - 金</td>
                      <td className="px-6 py-4 text-gray-700">9:00 - 12:00</td>
                      <td className="px-6 py-4 text-gray-700">14:00 - 18:00</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">土</td>
                      <td className="px-6 py-4 text-gray-700">9:00 - 12:00</td>
                      <td className="px-6 py-4 text-gray-500">休診</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 text-red-700">日・祝</td>
                      <td className="px-6 py-4 text-red-700" colSpan={2}>
                        休診
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-gray-600">
                ※診療時間は変更になる場合がございます。事前にお電話でご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-lg bg-accent-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">診療のご予約</h2>
              <p className="mb-6 text-gray-700">
                オンライン予約なら24時間いつでも予約が可能です
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/reservation"
                  className="rounded-lg bg-accent-500 px-8 py-3 font-medium text-white transition-colors hover:bg-accent-600"
                >
                  オンライン予約
                </a>
                <a
                  href="tel:0256-XX-XXXX"
                  className="rounded-lg border-2 border-primary-600 px-8 py-3 font-medium text-primary-600 transition-colors hover:bg-primary-50"
                >
                  電話で予約
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
