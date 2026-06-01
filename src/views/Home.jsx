import React from 'react';
import { ArrowRight, Leaf, Recycle, Heart, Globe, Store } from 'lucide-react';

const Home = ({ setCurrentView }) => {
  return (
    <div className="space-y-20 pb-10">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-secondary text-white shadow-2xl mt-4">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="relative z-10 px-6 py-24 md:py-32 text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/30 border border-primary-light text-sm font-semibold mb-6 tracking-wide">
            A Circular Economy Initiative
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Your morning coffee, <span className="text-primary-light text-[#a7f3d0]">changed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Your bridge to zero waste. We connect cafes with producers to recycle nutrient-rich coffee grounds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setCurrentView('bridge')}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
            >
              Explore The Bridge
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentView('login')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Join the Network
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Store className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">For Cafes</h3>
            <p className="text-text-muted leading-relaxed">
              Don't throw away those grounds! Log your daily waste, schedule pickups, and earn green badges to attract eco-conscious customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group">
            <div className="w-16 h-16 bg-secondary-light/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Recycle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">For Producers</h3>
            <p className="text-text-muted leading-relaxed">
              Source high-quality, nutrient-rich coffee grounds from local cafes to create compost, bio-fuels, or beauty products.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-3">For Consumers</h3>
            <p className="text-text-muted leading-relaxed">
              Shop upcycled products in our Eco-Market and support businesses that care about our planet's future.
            </p>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center justify-center md:justify-start">
            <Globe className="w-6 h-6 mr-2 text-primary" />
            Global Impact
          </h3>
          <p className="text-text-muted">
            ReCoffee directly supports the United Nations Sustainable Development Goals.
          </p>
        </div>
        
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-md flex items-center w-64 border-l-4 border-[#bf8d2c]">
            <div className="bg-[#bf8d2c] text-white font-bold w-12 h-12 flex items-center justify-center rounded-lg text-xl mr-4 flex-shrink-0">
              12
            </div>
            <div>
              <p className="font-bold text-sm leading-tight text-gray-800">RESPONSIBLE</p>
              <p className="font-bold text-sm leading-tight text-gray-800">CONSUMPTION</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-md flex items-center w-64 border-l-4 border-[#3f7e44]">
            <div className="bg-[#3f7e44] text-white font-bold w-12 h-12 flex items-center justify-center rounded-lg text-xl mr-4 flex-shrink-0">
              13
            </div>
            <div>
              <p className="font-bold text-sm leading-tight text-gray-800">CLIMATE</p>
              <p className="font-bold text-sm leading-tight text-gray-800">ACTION</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
