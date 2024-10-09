import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log('Pasa por aca y el user es: ', process.env.EMAIL_USER);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log('Crea el transporter');

  try {
    // Envía el correo
    await transporter.sendMail({
      from: `"Formulario de contacto" <${process.env.EMAIL_USER}>`,
      to: "femarsur@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });
    console.log('Envia el correo');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
