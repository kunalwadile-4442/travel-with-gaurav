import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  getContactFormEmailTemplate,
  getPopupFormEmailTemplate,
} from "@/lib/email-templates";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { error: "Email configuration is missing" },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    if (type === "contact") {
      const { first_name, last_name, email, mobile_no, consultation, project_information } = body;

      if (!first_name || !last_name || !email || !mobile_no) {
        return NextResponse.json(
          { error: "First name, last name, email and phone are required" },
          { status: 400 }
        );
      }

      const html = getContactFormEmailTemplate({
        first_name,
        last_name,
        email,
        mobile_no,
        consultation,
        project_information,
      });

      await transporter.sendMail({
        from: `"Dhanashree Tours and Travel" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `Contact Form: ${first_name} ${last_name} - Dhanashree Tours`,
        html,
      });
    } else if (type === "popup") {
      const { name, email, phone, message } = body;

      if (!name || !email || !phone) {
        return NextResponse.json(
          { error: "Name, email and phone are required" },
          { status: 400 }
        );
      }

      const html = getPopupFormEmailTemplate({
        name,
        email,
        phone,
        message,
      });

      await transporter.sendMail({
        from: `"Dhanashree Tours and Travel" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `Quick Inquiry: ${name} - Dhanashree Tours`,
        html,
      });
    } else {
      return NextResponse.json(
        { error: "Invalid form type. Use 'contact' or 'popup'" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
