import { PawPrint, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2067&auto=format&fit=crop"
          alt="Happy dog enjoying the day"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100 text-pink-600 ring-1 ring-pink-200">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold text-slate-800">Paws & Play</span>
        </a>
        <div className="hidden items-center gap-4 sm:flex">
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#gallery" className="text-slate-700 hover:text-slate-900">Gallery</a>
          <a href="#booking" className="rounded-full bg-pink-500 px-5 py-2 text-white shadow-sm transition hover:bg-pink-600">Book Now</a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-pink-700 ring-1 ring-pink-200">
            <PawPrint className="h-4 w-4" />
            <span className="text-sm">Brooklyn's friendliest dog daycare & grooming</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
            Big wags. Fresh cuts. Happy pups.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-700">
            At Paws & Play, your dog enjoys safe, engaging daycare and spa-level grooming in the heart of Brooklyn.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600">
              Book a Visit
            </a>
            <a href="tel:+17185551234" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50">
              <Phone className="h-4 w-4" /> (718) 555-1234
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700 ring-1 ring-sky-200">
              <MapPin className="h-4 w-4" /> Williamsburg, Brooklyn
            </div>
            <span className="text-sm">Open 7 days • 8am – 8pm</span>
          </div>
        </div>
      </section>
    </header>
  );
}
