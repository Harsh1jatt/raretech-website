import Image from "next/image";

export default function CourseCard({ image, title, text }) {
  return (
    <div className="border rounded shadow-md p-4 hover:scale-105 transition transform bg-white dark:bg-gray-900">
      <Image src={image} alt={title} width={300} height={180} className="rounded mb-3 object-cover"/>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  );
}
