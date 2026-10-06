import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Vui lòng cung cấp địa chỉ email hợp lệ' },
        { status: 400 }
      )
    }

    const cleanEmail = email.trim()
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow',
          body: JSON.stringify({
            formType: 'newsletter',
            email: cleanEmail,
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
        '[Newsletter API] GOOGLE_SHEETS_WEBHOOK_URL is not configured. Submission received:',
        { email: cleanEmail }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Đăng ký nhận tin thành công',
    })
  } catch (error) {
    console.error('Newsletter API Error:', error)
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    )
  }
}
