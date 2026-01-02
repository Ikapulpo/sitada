// Department types
export type Department = 'INTERNAL_MEDICINE' | 'SURGERY' | 'PEDIATRICS' | 'GENERAL'

export const departmentLabels: Record<Department, string> = {
  INTERNAL_MEDICINE: '内科',
  SURGERY: '外科',
  PEDIATRICS: '小児科',
  GENERAL: '一般診療',
}

export const departmentLabelsEn: Record<Department, string> = {
  INTERNAL_MEDICINE: 'Internal Medicine',
  SURGERY: 'Surgery',
  PEDIATRICS: 'Pediatrics',
  GENERAL: 'General Practice',
}

// Gender types
export type Gender = 'MALE' | 'FEMALE' | 'OTHER'

export const genderLabels: Record<Gender, string> = {
  MALE: '男性',
  FEMALE: '女性',
  OTHER: 'その他',
}

// Reservation status types
export type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW'

export const reservationStatusLabels: Record<ReservationStatus, string> = {
  PENDING: '予約待ち',
  CONFIRMED: '確認済み',
  COMPLETED: '完了',
  CANCELLED: 'キャンセル',
  NO_SHOW: '無断キャンセル',
}

// Contact status types
export type ContactStatus = 'UNREAD' | 'READ' | 'REPLIED' | 'ARCHIVED'

export const contactStatusLabels: Record<ContactStatus, string> = {
  UNREAD: '未読',
  READ: '既読',
  REPLIED: '返信済み',
  ARCHIVED: 'アーカイブ済み',
}

// Navigation item type
export interface NavItem {
  title: string
  titleEn?: string
  titleZh?: string
  href: string
  highlight?: boolean
}

// Business hours type
export interface BusinessHours {
  weekday: {
    morning: string
    afternoon: string
  }
  saturday: {
    morning: string
  }
  closed: string[]
}
