// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const toAddress = process.env.CONTACT_RECEIVER || process.env.ZOHO_USER;

    await transporter.sendMail({
      from: `"BeaconofHope Psychiatry Website Contact" <${process.env.ZOHO_USER}>`,
      to: toAddress,
      replyTo: body.email,
      subject: `New Contact — ${body.fullName}`,
      text: `
Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone || "-"}
Preferred: ${body.preferred || "-"}

Message:
${body.message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
