import Link from "next/link";
import { MessageCircle, Instagram } from "lucide-react";
export default function WebFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">RareTech Institute</h2>
          <p>ISO-certified IT & Web Development Institute • Ludhiana, Punjab</p>
          <p className="mt-2">Tel: <a href="tel:+916280009096" className="underline">+91 62800 09096</a></p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Links For Institute</h3>
          <ul className="space-y-1">
            <li><Link href="https://admin.raretech.co.in" target="_blank">Admin Panel</Link></li>
            <li><Link href="https://exam.raretech.co.in" target="_blank">Exam Panel</Link></li>
            <li><Link href="https://typing.raretech.co.in" target="_blank">Typing Tutor</Link></li>

          </ul>
        </div>
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/916280009096?text=Hello%20RareTech%2C%20I%20want%20more%20information."
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-all duration-300"
      >
        <MessageCircle size={26} />
      </Link>

      {/* Instagram Button */}
      <Link
        href="https://www.instagram.com/mand.eep_singh1/"
        target="_blank"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white p-3 rounded-full shadow-xl transition-all duration-300"
      >
        <Instagram size={26} />
      </Link>
    </div>
      </div>
      <p className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} RareTech Institute. All rights reserved.</p>
    </footer>
  );
}
