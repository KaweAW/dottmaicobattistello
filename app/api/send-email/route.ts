import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, reason } = await request.json()

    // Here you would typically use a service like SendGrid, AWS SES, or similar
    // For now, we'll simulate sending an email
    const emailData = {
      to: "kawe.longon@gmail.com",
      subject: `Contact Form: ${firstName} ${lastName}`,
      text: `
        Reason for contact: ${reason}
        
        Reply to: ${email}
      `,
    }

    // Log the email data (replace with actual email sending logic)
    console.log("Email would be sent:", emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

