import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export const sendEmailService = async (email, name, phoneNumber, address, startDate, endDate) => {
    // Create a transporter object using the default SMTP transport
    // console.log(">>>check: ",email);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USERNAME, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
    });
    //console.log(">>>check: ",transporter);

    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.EMAIL_USERNAME, // sender address
        to: email, // list of receivers
        subject: "Thông Tin booking", // Subject line
        text: "nội dung", // plain text body
        html: `<h2>Bạn đã đặt phòng thành công</h2>
               <p><b>Địa chỉ address:</b> ${address}</p>
               <p><b>Tên hotel:</b></p>
               <p><b>Họ và tên người đặt phòng:</b>${name}</p>
               <p><b>Số điện thoại người đặt phòng:</b>${phoneNumber}</p>

               <h3>Thông tin các phòng đã đặt</h3>
               <p><b>Ngày đặt phòng: ${startDate}</b></p>
                <p><b>Ngày trả phòng: ${endDate}</b></p>
               <p>Cảm ơn bạn đã tin dùng booking.com</p>`,
    };

    try {
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return info;
    } catch (error) {
        console.error("Error sending email: %s", error.message);
        throw error;
    }
};
