'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/utils/validation'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('送信に失敗しました')
      }

      setSubmitSuccess(true)
      reset()

      // 3秒後に成功メッセージを非表示
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
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
        <h3 className="mb-2 text-xl font-bold text-gray-900">送信完了</h3>
        <p className="text-gray-700">
          お問い合わせありがとうございます。
          <br />
          内容を確認の上、2-3営業日以内にご返信いたします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

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
          電話番号
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

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900">
          件名 <span className="text-red-600">*</span>
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          placeholder="診療について"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
          お問い合わせ内容 <span className="text-red-600">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
          placeholder="お問い合わせ内容をご記入ください"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        <span className="text-red-600">*</span> は必須項目です
      </p>
    </form>
  )
}
