'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reservationSchema, type ReservationFormData } from '@/lib/utils/validation'
import { departmentLabels, genderLabels, type Department, type Gender } from '@/types'
import { getTimeSlots } from '@/lib/utils/date'

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('予約に失敗しました')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'エラーが発生しました。もう一度お試しください。'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="rounded-lg border-2 border-green-200 bg-green-50 p-8 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">予約完了</h3>
        <p className="text-gray-700">
          ご予約ありがとうございます。
          <br />
          予約確認のメールをお送りしました。
          <br />
          ご予約日時の前日にリマインダーをお送りします。
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 rounded-lg bg-primary-600 px-6 py-2 text-white hover:bg-primary-700"
        >
          新しい予約を作成
        </button>
      </div>
    )
  }

  const timeSlots = getTimeSlots()
  const departments: Department[] = ['INTERNAL_MEDICINE', 'SURGERY', 'PEDIATRICS', 'GENERAL']
  const genders: Gender[] = ['MALE', 'FEMALE', 'OTHER']

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
            お名前 <span className="text-red-600">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="山田 太郎"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Name Kana */}
        <div>
          <label htmlFor="nameKana" className="mb-2 block text-sm font-medium text-gray-900">
            フリガナ <span className="text-red-600">*</span>
          </label>
          <input
            {...register('nameKana')}
            type="text"
            id="nameKana"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="ヤマダ タロウ"
          />
          {errors.nameKana && (
            <p className="mt-1 text-sm text-red-600">{errors.nameKana.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
            メールアドレス <span className="text-red-600">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="example@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">
            電話番号 <span className="text-red-600">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            placeholder="090-1234-5678"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium text-gray-900">
            生年月日 <span className="text-red-600">*</span>
          </label>
          <input
            {...register('dateOfBirth')}
            type="date"
            id="dateOfBirth"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="mb-2 block text-sm font-medium text-gray-900">
            性別 <span className="text-red-600">*</span>
          </label>
          <select
            {...register('gender')}
            id="gender"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          >
            <option value="">選択してください</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {genderLabels[gender]}
              </option>
            ))}
          </select>
          {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
        </div>

        {/* Appointment Date */}
        <div>
          <label htmlFor="appointmentDate" className="mb-2 block text-sm font-medium text-gray-900">
            予約日 <span className="text-red-600">*</span>
          </label>
          <input
            {...register('appointmentDate')}
            type="date"
            id="appointmentDate"
            min={new Date().toISOString().split('T')[0]}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          />
          {errors.appointmentDate && (
            <p className="mt-1 text-sm text-red-600">{errors.appointmentDate.message}</p>
          )}
        </div>

        {/* Appointment Time */}
        <div>
          <label htmlFor="appointmentTime" className="mb-2 block text-sm font-medium text-gray-900">
            予約時間 <span className="text-red-600">*</span>
          </label>
          <select
            {...register('appointmentTime')}
            id="appointmentTime"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          >
            <option value="">選択してください</option>
            <optgroup label="午前">
              {timeSlots.slice(0, 6).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </optgroup>
            <optgroup label="午後">
              {timeSlots.slice(6).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.appointmentTime && (
            <p className="mt-1 text-sm text-red-600">{errors.appointmentTime.message}</p>
          )}
        </div>
      </div>

      {/* Department */}
      <div>
        <label htmlFor="department" className="mb-2 block text-sm font-medium text-gray-900">
          診療科 <span className="text-red-600">*</span>
        </label>
        <select
          {...register('department')}
          id="department"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
        >
          <option value="">選択してください</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {departmentLabels[dept]}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
        )}
      </div>

      {/* Symptoms */}
      <div>
        <label htmlFor="symptoms" className="mb-2 block text-sm font-medium text-gray-900">
          症状（任意）
        </label>
        <textarea
          {...register('symptoms')}
          id="symptoms"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          placeholder="現在の症状をご記入ください"
        />
        {errors.symptoms && <p className="mt-1 text-sm text-red-600">{errors.symptoms.message}</p>}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-gray-900">
          備考（任意）
        </label>
        <textarea
          {...register('notes')}
          id="notes"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          placeholder="その他のご要望などがございましたらご記入ください"
        />
        {errors.notes && <p className="mt-1 text-sm text-red-600">{errors.notes.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-accent-500 px-6 py-3 font-medium text-white transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? '予約中...' : '予約する'}
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        <span className="text-red-600">*</span> は必須項目です
      </p>
    </form>
  )
}
