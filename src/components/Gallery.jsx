export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558944351-c0e006c9a5f8?q=80&w=2068&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612538498891-d8f6e963482f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2069&auto=format&fit=crop'
  ];

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Big happy pups, big happy vibes</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Peek inside our playgroups and spa sessions.
        </p>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Happy dog ${idx + 1}`}
              className="mb-4 w-full rounded-xl object-cover ring-1 ring-slate-200"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
