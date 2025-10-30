import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const linkClass = ({ isActive }) =>
   "px-3 py-2 rounded-md text-sm font-medium " +
   (isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100");

export default function Navbar() {
   const [open, setOpen] = useState(false);
   return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
         <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-semibold text-lg">Prashant Ahire</Link>
            <button className="md:hidden p-2 border rounded" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
            <nav className={`md:flex gap-2 ${open ? "block mt-3" : "hidden"} md:mt-0`}>
               <NavLink to="/" className={linkClass} end>Home</NavLink>
               <NavLink to="/about" className={linkClass}>About</NavLink>
               <NavLink to="/courses" className={linkClass}>Courses</NavLink>
               <NavLink to="/achievements" className={linkClass}>Achievements</NavLink>
               <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </nav>
         </div>
      </header>
   );
}
