export default function HomeAbout() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Raretech Institute</h2>
          <p className="mt-4 text-gray-700">
            Raretech is an ISO 9001 Certified & Govt. Registered Institute with over <strong>10+ years</strong> of excellence in IT training...
          </p>
          <div className="mt-6">
            <a href="/about" className="btn-outline">Know More</a>
          </div>
        </div>
        <div>
          <img src="/images/graphic.jpg" alt="Raretech Institute" className="rounded-lg shadow" />
        </div>
      </div>
    </section>
  );
}
