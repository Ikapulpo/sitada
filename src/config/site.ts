export const siteConfig = {
  name: '三条しただ郷クリニック',
  nameEn: 'Sanjo Sitadago Clinic',
  description: '下田地区の皆様の健康を守る、かかりつけクリニック',
  descriptionEn: 'Your trusted family clinic serving the Sitadago community',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  address: '新潟県三条市',
  phone: '0256-XX-XXXX',
  email: 'info@sitadagoclinic.com',
  businessHours: {
    weekday: {
      morning: '9:00 - 12:00',
      afternoon: '14:00 - 18:00',
    },
    saturday: {
      morning: '9:00 - 12:00',
    },
    closed: ['日曜日', '祝日'],
  },
  socialLinks: {
    // 必要に応じて追加
  },
}

export type SiteConfig = typeof siteConfig
