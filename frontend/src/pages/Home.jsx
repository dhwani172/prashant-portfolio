import useVisitorCounter from "../hooks/useVisitorCounter";

export default function Home() {
   const count = useVisitorCounter();

   return (
      <section className="relative bg-slate-50 bg-radial overflow-hidden">
         {/* Decorative blobs */}
         <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl opacity-60"></div>
         <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 blur-3xl opacity-60"></div>

         <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Text column */}
            <div data-aos="fade-right">
               <div className="flex gap-2 flex-wrap">
                  <span className="chip">
                     🎓 <span className="font-medium">Educator</span>
                  </span>
               </div>

               <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Prof. Prashant Ahire
               </h1>
               <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  Faculty at <span className="font-semibold">I²IT, Pune</span>.
               </p>

               <div className="mt-6 flex gap-4">
                  <a href="/about" className="btn-primary">Learn More</a>
                  <a href="/contact" className="btn-ghost">Get in Touch</a>
               </div>
            </div>

            {/* Image column */}
            <div className="flex justify-center md:justify-end" data-aos="fade-left">
               <div className="relative">
                  <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-indigo-300 via-rose-300 to-emerald-300 opacity-60 blur-md"></div>
                  <div className="relative glass rounded-[24px] p-3 md:p-4">
                     <img
                        src="/profile.png"
                        alt="Prof. Prashant Ahire"
                        className="rounded-2xl w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-cover animate-float"
                     />
                  </div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm text-slate-700 bg-white/80 backdrop-blur ring-1 ring-slate-200">
                     I²IT Pune
                  </div>
               </div>
            </div>
         </div>

         {/* Feature cards */}
         <div className="relative max-w-6xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-3 gap-6">
               <Feature
                  emoji="📚"
                  title="Courses"
                  text="From AI/ML foundations to advanced labs, with practical projects and modern tooling."
                  href="/courses"
               />
            </div>

            {/* Announcement bar */}
            <div className="mt-10 glass rounded-2xl p-4 flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
               <p className="text-sm md:text-base text-slate-700">
                  <a href="/contact" className="ml-2 font-medium underline underline-offset-4">Contact me</a>
               </p>
            </div>
         </div>
      </section>
   );
}

/* ---------- tiny components ---------- */
function Stat({ number, label }) {
   return (
      <div className="glass rounded-2xl px-4 py-5 text-center">
         <div className="text-2xl md:text-3xl font-extrabold text-slate-900">{number}</div>
         <div className="text-xs text-slate-600 mt-1">{label}</div>
      </div>
   );
}

function Feature({ emoji, title, text, href }) {
   return (
      <a href={href} className="group block glass rounded-2xl p-6 hover:shadow-2xl transition">
         <div className="text-2xl">{emoji}</div>
         <h3 className="mt-3 text-lg font-semibold text-slate-900 flex items-center gap-2">
            {title}
            <span className="text-slate-400 group-hover:translate-x-0.5 transition">→</span>
         </h3>
         <p className="mt-2 text-slate-600">{text}</p>
      </a>
   );
}
