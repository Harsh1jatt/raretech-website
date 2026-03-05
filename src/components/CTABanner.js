import Link from "next/link";

export default function CTABanner(){
  return (
    <section className="py-12 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Ready to start your IT journey?</h2>
        <p className="mt-2">Enroll now and transform your future with Raretech.</p>
        <div className="mt-4">
          <Link href="/contact" className="bg-white text-blue-600 py-2 px-6 rounded font-semibold">Enroll Today</Link>
        </div>
      </div>
    </section>
  );
}
