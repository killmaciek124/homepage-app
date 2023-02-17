import { Mailer } from "nodemailer-react";

const transporter = nodemailer.createTransport({
  service: "hotmail", // outlook
  secure: true,
  auth: {
    user: "killmaciek124@outlook.com",
    pass: "Pies123*",
  },
});

const options = {
  from: "killmaciek124@outlook.com",
  to: "maciej@maziuk.com.pl",
  subject: "Test subject",
  html: "<b>Hello</b>",
};

mailer.send(
  "WelcomeEmail",
  { firstName: "Mathieu" },
  {
    to: "my@email.com",
  }
);

export const mailer = Mailer(
  { transport, defaults },
  { WelcomeEmail, PasswordEmail, ReminderEmail }
);
