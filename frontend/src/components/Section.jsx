export default function Section({ id, title, children }) {
   return (
      <section id={id} className="py-16" data-aos="fade-up">
         <div className="max-w-6xl mx-auto px-4">
            {title && <h2 className="text-3xl font-semibold mb-6">{title}</h2>}
            {children}
         </div>
      </section>
   );
}
