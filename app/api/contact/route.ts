import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, subject, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Vui lòng cung cấp họ tên và số điện thoại' },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow',
          body: JSON.stringify({
            formType: 'contact',
            name: String(name).trim(),
            phone: String(phone).trim(),
            email: email ? String(email).trim() : '',
            subject: subject ? String(subject).trim() : '',
            message: message ? String(message).trim() : '',
            submittedAt: new Date().toLocaleString('vi-VN', {
              timeZone: 'Asia/Ho_Chi_Minh',
            }),
          }),
        })

        if (!response.ok) {
          console.error('Google Sheets webhook returned status:', response.status)
        }
      } catch (webhookErr) {
        console.error('Error forwarding to Google Sheets webhook:', webhookErr)
      }
    } else {
      console.warn(
        '[Contact API] GOOGLE_SHEETS_WEBHOOK_URL is not configured. Submission received:',
        { name, phone, email }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thông tin liên hệ đã được ghi nhận',
    })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    )
  }
}
