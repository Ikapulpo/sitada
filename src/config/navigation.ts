export const navigationConfig = {
  mainNav: [
    {
      title: 'クリニック紹介',
      titleEn: 'About',
      titleZh: '诊所介绍',
      href: '/about',
    },
    {
      title: '診療について',
      titleEn: 'Medical Services',
      titleZh: '医疗服务',
      href: '/medical',
    },
    {
      title: '健診・予防接種',
      titleEn: 'Checkups & Vaccinations',
      titleZh: '体检与疫苗接种',
      href: '/checkup',
    },
    {
      title: 'オンライン予約',
      titleEn: 'Online Reservation',
      titleZh: '在线预约',
      href: '/reservation',
      highlight: true,
    },
    {
      title: 'ブログ・お知らせ',
      titleEn: 'News & Blog',
      titleZh: '博客与通知',
      href: '/news',
    },
    {
      title: 'お問い合わせ',
      titleEn: 'Contact',
      titleZh: '联系我们',
      href: '/contact',
    },
  ],
}

export type NavigationConfig = typeof navigationConfig
