import { z } from 'zod'

// Reservation form validation schema
export const reservationSchema = z.object({
  name: z.string().min(2, '名前は2文字以上で入力してください'),
  nameKana: z.string().min(2, 'フリガナは2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z
    .string()
    .min(10, '電話番号は10桁以上で入力してください')
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください'),
  dateOfBirth: z.string().min(1, '生年月日を入力してください'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'], {
    message: '性別を選択してください',
  }),
  appointmentDate: z.string().min(1, '予約日を選択してください'),
  appointmentTime: z.string().min(1, '予約時間を選択してください'),
  department: z.enum(['INTERNAL_MEDICINE', 'SURGERY', 'PEDIATRICS', 'GENERAL'], {
    message: '診療科を選択してください',
  }),
  symptoms: z.string().optional(),
  notes: z.string().optional(),
})

export type ReservationFormData = z.infer<typeof reservationSchema>

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string().min(2, 'お名前は2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[0-9-]+$/.test(val),
      '電話番号は数字とハイフンのみで入力してください'
    ),
  subject: z.string().min(3, '件名は3文字以上で入力してください'),
  message: z.string().min(10, 'お問い合わせ内容は10文字以上で入力してください'),
})

export type ContactFormData = z.infer<typeof contactSchema>

// Patient registration schema
export const patientSchema = z.object({
  name: z.string().min(2, '名前は2文字以上で入力してください'),
  nameKana: z.string().min(2, 'フリガナは2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z
    .string()
    .min(10, '電話番号は10桁以上で入力してください')
    .regex(/^[0-9-]+$/, '電話番号は数字とハイフンのみで入力してください'),
  dateOfBirth: z.string().min(1, '生年月日を入力してください'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  address: z.string().optional(),
  postalCode: z.string().optional(),
})

export type PatientFormData = z.infer<typeof patientSchema>
