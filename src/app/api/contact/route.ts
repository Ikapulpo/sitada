import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { contactSchema } from '@/lib/utils/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = contactSchema.parse(body)

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        subject: validatedData.subject,
        message: validatedData.message,
        status: 'UNREAD',
      },
    })

    // TODO: Send email notification to clinic staff
    // TODO: Send confirmation email to user

    return NextResponse.json(
      {
        success: true,
        message: 'お問い合わせを受け付けました',
        id: submission.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: '入力内容に誤りがあります',
          errors: error,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'サーバーエラーが発生しました',
      },
      { status: 500 }
    )
  }
}
