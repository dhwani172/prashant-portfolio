export default function Footer() {
   return (
      <footer className="border-t">
         <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Prof. Prashant Ahire • I²IT Pune</p>
            <div className="flex gap-4">
               <a href="https://www.isquareit.edu.in" target="_blank" rel="noreferrer" className="hover:underline">I²IT Pune</a>
               <a href="mailto:prashanta@isquareit.edu.in" className="hover:underline">prashanta@isquareit.edu.in</a>
               <a href="tel:+919920924121" className="hover:underline">+91 99209 24121</a>
            </div>
         </div>
      </footer>
   );
}
