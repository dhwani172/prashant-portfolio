import Section from "../components/Section.jsx";

const courses = [
   { title: "Fundamentals of Java Programming", desc: "Foundations of Java programming, object-oriented concepts, and basic algorithms." },
   { title: "Advanced Java Programming", desc: "In-depth exploration of Java features, design patterns, and best practices." },
   { title: "JavaScript", desc: "Introduction to JavaScript, including syntax, DOM manipulation, and basic algorithms." },
   // add real courses…
];

export default function Courses() {
   return (
      <Section title="Courses Taught">
         <div className="grid md:grid-cols-2 gap-6">
            {courses.map(c => (
               <div key={c.title} className="p-5 border rounded-xl">
                  <h3 className="font-semibold text-xl">{c.title}</h3>
                  <p className="mt-2">{c.desc}</p>
                  {/* Optional syllabus/material links */}
                  {/* <a className="text-sm text-blue-600 underline mt-2 inline-block" href="/materials/AIML101.pdf">Syllabus (PDF)</a> */}
               </div>
            ))}
         </div>
      </Section>
   );
}
