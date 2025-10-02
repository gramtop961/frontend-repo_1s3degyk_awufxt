import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', dogName: '', service: 'Daycare', date: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-gradient-to-b from-pink-50/50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Book your pup's day</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Reserve daycare or grooming in seconds. We’ll confirm via email with all the details.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Flexible drop-off, pick-up windows</li>
              <li>• Safe, modern play areas</li>
              <li>• Certified, loving staff</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            {submitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900">We got it! 🐶</h3>
                <p className="mt-2 text-slate-600">
                  Thanks, {form.name || 'friend'} — we’ll email you at {form.email || 'your inbox'} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-pink-300 transition focus:ring-2"
                    placeholder="Alex Johnson"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-pink-300 transition focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Dog's name</label>
                    <input
                      type="text"
                      name="dogName"
                      value={form.dogName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-pink-300 transition focus:ring-2"
                      placeholder="Bella"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-pink-300 transition focus:ring-2"
                    >
                      <option>Daycare</option>
                      <option>Grooming Spa</option>
                      <option>Bath & Blowout</option>
                      <option>Puppy TLC</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Preferred date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none ring-pink-300 transition focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-500 px-6 py-3 font-medium text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600"
                >
                  Request Booking
                </button>
                <p className="text-center text-xs text-slate-500">No payment required to request. We respond within 1 business hour.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
