import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { reservationSchema } from '@/lib/utils/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = reservationSchema.parse(body)

    // Check if patient exists
    let patient = await prisma.patient.findUnique({
      where: { email: validatedData.email },
    })

    // Create patient if doesn't exist
    if (!patient) {
      patient = await prisma.patient.create({
        data: {
          name: validatedData.name,
          nameKana: validatedData.nameKana,
          email: validatedData.email,
          phone: validatedData.phone,
          dateOfBirth: new Date(validatedData.dateOfBirth),
          gender: validatedData.gender,
        },
      })
    }

    // Create reservation
    const reservation = await prisma.reservation.create({
      data: {
        patientId: patient.id,
        appointmentDate: new Date(validatedData.appointmentDate),
        appointmentTime: validatedData.appointmentTime,
        department: validatedData.department,
        symptoms: validatedData.symptoms,
        notes: validatedData.notes,
        status: 'PENDING',
      },
      include: {
        patient: true,
      },
    })

    // TODO: Send confirmation email to patient
    // TODO: Send notification to clinic staff
    // TODO: Schedule reminder email/SMS

    return NextResponse.json(
      {
        success: true,
        message: 'ご予約を受け付けました',
        reservation: {
          id: reservation.id,
          appointmentDate: reservation.appointmentDate,
          appointmentTime: reservation.appointmentTime,
          department: reservation.department,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Reservation error:', error)

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
