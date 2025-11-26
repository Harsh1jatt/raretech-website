import "@/globals.css";
import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";

export const metadata = {
  title: "RareTech Ludhiana – Best Computer Institute | Web Development, Python, C/C++, Basic Computer Classes",
  description:
    "RareTech Institute of IT is the best ISO-certified computer institute in Ludhiana, Punjab. We offer Web Development, MERN Stack, Python, C, C++, Basic Computer, Digital Marketing, Tally, MSCIT, and job-oriented IT courses.",
  keywords: [
    // HIGH-VOLUME PRIMARY KEYWORDS
    "Computer Institute Ludhiana",
    "Computer Institute in Ludhiana",
    "Best Computer Institute in Ludhiana",
    "Top Computer Institute in Ludhiana",
    "Computer Center Ludhiana",
    "Computer Centre Ludhiana",
    "IT Institute Ludhiana",
    "Best IT Training Institute in Ludhiana",

    // LOCATION-BASED
    "Computer Institute in Ludhiana Punjab",
    "Computer Classes in Ludhiana",
    "Computer Training Center Ludhiana",
    "Computer Coaching Ludhiana",
    "Computer Academy Ludhiana",
    "ISO Certified Computer Institute Ludhiana",
    "Govt Approved Computer Institute Ludhiana",

    // WEB DEVELOPMENT / PROGRAMMING
    "Web Development Course Ludhiana",
    "Web Development in Ludhiana",
    "MERN Stack Course Ludhiana",
    "Full Stack Developer Course Ludhiana",
    "Frontend Development Course Ludhiana",
    "Backend Development Course Ludhiana",
    "JavaScript Course Ludhiana",
    "ReactJS Course Ludhiana",
    "NodeJS Course Ludhiana",

    // CODING COURSES
    "Python Course Ludhiana",
    "Python Classes in Ludhiana",
    "C Course Ludhiana",
    "C Classes Ludhiana",
    "C++ Course Ludhiana",
    "C++ Coaching Ludhiana",
    "Programming Classes in Ludhiana",

    // BASIC & OFFICE COURSES
    "Basic Computer Course Ludhiana",
    "Basic Computer Classes Ludhiana",
    "MS Office Course Ludhiana",
    "Tally Course Ludhiana",
    "Tally with GST Course Ludhiana",
    "ADCA Course Ludhiana",
    "DCA Course Ludhiana",

    // JOB ORIENTED
    "Job Oriented Computer Courses Ludhiana",
    "Professional IT Courses in Ludhiana",

    // DIGITAL MARKETING
    "Digital Marketing Course Ludhiana",
    "SEO Course Ludhiana",
    "Social Media Marketing Course Ludhiana",

    // GRAPHICS
    "Graphic Designing Course Ludhiana",
    "Photoshop Course Ludhiana",
    "Corel Draw Course Ludhiana",

    // LOCAL SEARCH BEHAVIOUR KEYWORDS
    "Best Computer Classes Near Me Ludhiana",
    "Computer Institute Near Me Ludhiana",
    "Top Computer Institute Near Me Ludhiana",

    // BRANDING
    "RareTech Institute of IT",
    "RareTech Ludhiana",
    "RareTech Computer Institute Ludhiana"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <WebHeader />
        {children}
        <WebFooter />
      </body>
    </html>
  );
}
