import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-white text-slate-900">
      <div id="top" />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
    </div>
  );
}

export default App;
