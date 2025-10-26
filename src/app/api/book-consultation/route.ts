import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER, // e.g. contact@moladavhealth.com
        pass: process.env.ZOHO_PASS, // Zoho app password
      },
    });

    const {
      appointmentType,
      service,
      date,
      time,
      fullName,
      dob,
      gender,
      email,
      phone,
      reasonForAppointment,
      additionalNotes,
    } = body || {};

    const text = `
New Consultation Request

Appointment Type: ${appointmentType}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}

Full Name: ${fullName}
DOB: ${dob}
Gender: ${gender}
Email: ${email}
Phone: ${phone}

Reason for Appointment:
${reasonForAppointment || "-"}

Additional Notes:
${additionalNotes || "-"}
    `.trim();

    await transporter.sendMail({
      from: `"Moladav Healthcare LLC — Booking" <${process.env.ZOHO_USER}>`,
      to: "contact@moladavhealth.com",
      subject: `New Consultation — ${fullName || "Unnamed"} (${service || "Service"})`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Book-Consultation email error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
