const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // e.g., "Gmail", "Yahoo", "Outlook"
    auth: {
        user: process.env.EMAIL_SERVICE_EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_SERVICE_EMAIL,
            to: to, // Pass an array of email addresses here
            subject: subject,
            text: text,
        });

        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

// const recipients = ["Shakib4657@gmail.com", "Shakib4657@gmail.com", "Shakib4657@gmail.com"];

// const subject = "Multiple Recipient Test";
// const text = "This is a test email sent to multiple recipients.";

// sendEmail(recipients, subject, text);

module.exports = sendEmail;