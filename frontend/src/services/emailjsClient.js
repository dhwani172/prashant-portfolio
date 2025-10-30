import emailjs from "emailjs-com";
const SERVICE_ID = "service_gyu44gk";

export async function sendEmail({ name, email, subject, message }) {
   return emailjs.send(SERVICE_ID, "template_5z7q6tf", {
      user_name: name,
      user_email: email,
      subject,
      message,
   }, "user_public_key");
}
