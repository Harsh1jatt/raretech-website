import Image from "next/image";

export default function HomePlacements() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Placements & Careers</h2>
          <p className="mt-4 text-gray-700">We provide career opportunities and placement assistance...</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div><h3 className="text-2xl font-bold">500+</h3><p>Students Placed</p></div>
            <div><h3 className="text-2xl font-bold">50+</h3><p>Industry Partners</p></div>
            <div><h3 className="text-2xl font-bold">10+</h3><p>Years Experience</p></div>
          </div>
        </div>
        <div className="relative h-64">
          <Image src="/images/p5.png" alt="Placements" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}
