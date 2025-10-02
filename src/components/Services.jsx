import { ShowerHead, Scissors, Bone, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Grooming Spa',
    desc: 'Full-service baths, coat trims, deshedding, nail care, and teeth brushing with gentle products.'
  },
  {
    icon: Bone,
    title: 'Daycare Play',
    desc: 'Supervised indoor/outdoor playgroups matched by size and energy. Enrichment and naps included.'
  },
  {
    icon: ShowerHead,
    title: 'Bath & Blowout',
    desc: 'Shiny coats and happy tails with hypoallergenic shampoos and warm, relaxing blowouts.'
  },
  {
    icon: Heart,
    title: 'Puppy TLC',
    desc: 'Gentle socialization, confidence building, and short sessions for our tiniest pals.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-pink-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">What we do best</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Thoughtful care, gentle grooming, and joyful play in a clean, modern space.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-600 ring-1 ring-pink-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
