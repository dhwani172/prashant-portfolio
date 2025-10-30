import { useState } from "react";
import Section from "../components/Section.jsx";
import { storeSubmission } from "../services/firebase";
import { sendEmail } from "../services/emailjsClient";

export default function Contact() {
   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
   const [loading, setLoading] = useState(false);
   const [ok, setOk] = useState("");

   const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

   async function onSubmit(e) {
      e.preventDefault();
      setOk(""); setLoading(true);
      try {
         // 1) store
         await storeSubmission(form);
         // 2) email ack to user (EmailJS template should send to user_email)
         await sendEmail(form);
         setOk("Message sent successfully! Check your email for acknowledgment.");
         setForm({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
         alert("Failed to send. Please try again.");
         console.error(err);
      } finally {
         setLoading(false);
      }
   }

   return (
      <Section title="Contact">
         <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={onSubmit} className="space-y-4 p-6 border rounded-xl">
               <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input className="w-full border rounded px-3 py-2" name="name" required value={form.name} onChange={onChange} />
               </div>
               <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full border rounded px-3 py-2" name="email" required value={form.email} onChange={onChange} />
               </div>
               <div>
                  <label className="block text-sm mb-1">Subject</label>
                  <input className="w-full border rounded px-3 py-2" name="subject" required value={form.subject} onChange={onChange} />
               </div>
               <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea className="w-full border rounded px-3 py-2" name="message" rows="5" required value={form.message} onChange={onChange} />
               </div>
               <button disabled={loading} className="px-4 py-2 bg-slate-900 text-white rounded-md">
                  {loading ? "Sending..." : "Send"}
               </button>
               {ok && <p className="text-green-600">{ok}</p>}
            </form>

            <div className="p-6 border rounded-xl">
               <h3 className="font-semibold text-xl mb-2">Official Contact</h3>
               <p>📧 Email: <a className="text-blue-600 underline" href="mailto:prashanta@isquareit.edu.in">prashanta@isquareit.edu.in</a></p>
               <p>📞 Phone: <a className="text-blue-600 underline" href="tel:+919920924121">+91 99209 24121</a></p>
               <p className="text-sm text-slate-500 mt-4">An automatic email acknowledgment will be sent when you submit this form.</p>
            </div>
         </div>
      </Section>
   );
}
