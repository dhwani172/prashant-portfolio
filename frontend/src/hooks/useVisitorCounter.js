import { useEffect, useState } from "react";

// Temporary client-only counter (no Firebase yet)
export default function useVisitorCounter() {
   const [count, setCount] = useState(() => {
      const n = Number(localStorage.getItem("visitorCount") || "0");
      return n;
   });

   useEffect(() => {
      // increment once per session
      if (!sessionStorage.getItem("counted")) {
         const next = count + 1;
         localStorage.setItem("visitorCount", String(next));
         setCount(next);
         sessionStorage.setItem("counted", "1");
      }
   }, []); // runs once

   return count;
}
