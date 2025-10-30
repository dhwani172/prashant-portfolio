import { Outlet, NavLink } from "react-router-dom";

const link =
  "px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <span className="font-semibold text-lg">Prashant Ahire</span>
          <nav className="flex gap-2">
            <NavLink to="/" end className={({ isActive }) => isActive ? `${link} bg-slate-900 text-white` : link}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${link} bg-slate-900 text-white` : link}>About</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? `${link} bg-slate-900 text-white` : link}>Courses</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${link} bg-slate-900 text-white` : link}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Prof. Prashant Ahire • I²IT Pune</p>
          <div className="flex gap-4">
            <a href="https://www.isquareit.edu.in" target="_blank" rel="noreferrer" className="hover:underline">I²IT Pune</a>
            <a href="mailto:prashanta@isquareit.edu.in" className="hover:underline">prashanta@isquareit.edu.in</a>
            <a href="tel:+919920924121" className="hover:underline">+91 99209 24121</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
