import { Instagram, Phone, Mail, MapPin, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100 text-pink-600 ring-1 ring-pink-200">
                <PawPrint className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold text-slate-800">Paws & Play</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-600">
              Loving daycare and gentle grooming for Brooklyn dogs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Visit us</h4>
            <p className="mt-2 text-sm text-slate-600 inline-flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 123 Berry St, Brooklyn, NY</p>
            <p className="mt-2 text-sm text-slate-600 inline-flex items-center gap-2"><Phone className="h-4 w-4" /> (718) 555-1234</p>
            <p className="mt-2 text-sm text-slate-600 inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@pawsandplay.nyc</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Hours</h4>
            <p className="mt-2 text-sm text-slate-600">Mon–Sun: 8:00am – 8:00pm</p>
            <p className="mt-1 text-sm text-slate-600">Grooming by appointment</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-4 py-2 text-sm text-white shadow-sm hover:opacity-95">
              <Instagram className="h-4 w-4" /> @pawsandplaybk
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Paws & Play. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#gallery" className="hover:text-slate-700">Gallery</a>
            <a href="#booking" className="hover:text-slate-700">Book</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
