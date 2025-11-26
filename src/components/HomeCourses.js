import CourseCard from "@/components/CourseCard";
import webdesign from "/public/images/webdesign.png";
import graphics from "/public/images/graphic.jpg";
import account from "/public/images/tally-accounts.jpg";
import dca from "/public/images/dca.png";
import adca from "/public/images/pda.png";
import office from "/public/images/msoffice.png";

const courses = [
  { image: webdesign, title: "Web Design & Development", desc: "Hands-on training with HTML, CSS, JS, React & projects." },
  { image: graphics, title: "Graphic Designing", desc: "Photoshop, CorelDRAW & video editing." },
  { image: account, title: "Accounts (Tally)", desc: "Tally ERP, bookkeeping & GST." },
  { image: dca, title: "DCA", desc: "MS Office, Internet & basic accounting." },
  { image: adca, title: "ADCA", desc: "Advanced MS Office & accounting." },
  { image: office, title: "MS Office", desc: "Excel, Word, PowerPoint & Access." },
];

export default function HomeCourses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Popular Courses</h2>
        <p className="text-center text-gray-600 mt-2">Industry-ready programs designed for your success</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => <CourseCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}
