import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
 host: "smtp.mailtrap.io",
 port: 2525,
 auth: {
     user: "c3301a236af14f",
     pass: "56cfff7e17c2d1"
 }
});

export class NodeMailerAdapter implements MailAdapter {
 async sendMail({subject, body}: SendMailData){

  await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gustavo Scarpellini <gustavo.scarpellini@gmail.com>',
        subject,
        html: body
    })
 }
}