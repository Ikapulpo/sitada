import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { navigationConfig } from '@/config/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Clinic Info */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-gray-900">{siteConfig.name}</h3>
            <p className="mb-4 text-sm text-gray-600">{siteConfig.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 {siteConfig.address}</p>
              <p>📞 {siteConfig.phone}</p>
              <p>✉️ {siteConfig.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold text-gray-900">クイックリンク</h4>
            <nav className="flex flex-col space-y-2">
              {navigationConfig.mainNav.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-4 font-bold text-gray-900">診療時間</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <p className="font-medium">平日</p>
                <p>{siteConfig.businessHours.weekday.morning}</p>
                <p>{siteConfig.businessHours.weekday.afternoon}</p>
              </div>
              <div>
                <p className="font-medium">土曜</p>
                <p>{siteConfig.businessHours.saturday.morning}</p>
              </div>
              <p className="text-red-600">休診: 日曜日・祝日</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
