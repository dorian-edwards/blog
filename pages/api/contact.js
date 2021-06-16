import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.username,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken,
        accessToken: process.env.accessToken,
      },
    })

    let info = await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: 'dorian.m.edwards@gmail.com', // list of receivers
      subject: `A Message from ${email}`, // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    })
    res.status(200).send(info)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
