import React, { useState } from 'react';
import { BookOpen, MapPin, Truck, CheckCircle2, ChevronRight, Droplets, Flame, Sprout } from 'lucide-react';

const ProducerPortal = () => {
  const [claimedRoute, setClaimedRoute] = useState(null);

  const urgentPickups = [
    { id: 1, name: 'Brew Mood Alsancak', distance: '1.2km', amount: '15kg', urgency: 'High', time: 'Waiting for 2h' },
    { id: 2, name: 'Two Cup Bornova', distance: '4.8km', amount: '20kg', urgency: 'Medium', time: 'Waiting for 4h' }
  ];

  const handleClaim = (id) => {
    setClaimedRoute(id);
    setTimeout(() => {
      setClaimedRoute(null);
    }, 4000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500 pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Producer Dashboard</h1>
          <p className="text-text-muted mt-1">Manage your pickups and learn best processing practices.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold flex items-center">
            <Truck className="w-5 h-5 mr-2" />
            120 kg Recycled This Month
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Guiding / Routing */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-3 bg-red-50 rounded-xl text-red-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Active Routing</h2>
          </div>
          <p className="text-text-muted mb-6">Claim urgent pickups to optimize your collection route today.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {urgentPickups.map((pickup) => (
              <div key={pickup.id} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:border-primary/30 transition-all group relative overflow-hidden">
                {/* Status indicator */}
                <div className={`absolute top-0 right-0 w-2 h-full ${pickup.urgency === 'High' ? 'bg-red-400' : 'bg-orange-300'}`}></div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1">{pickup.name}</h3>
                <p className="text-sm text-gray-500 flex items-center mb-4">
                  <MapPin className="w-4 h-4 mr-1" /> {pickup.distance} away
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Available Load</span>
                    <span className="font-bold text-secondary">{pickup.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Status</span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {pickup.time}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => handleClaim(pickup.id)}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center transition-all ${
                    claimedRoute === pickup.id 
                      ? 'bg-green-600 text-white' 
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {claimedRoute === pickup.id ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Route Claimed!
                    </>
                  ) : (
                    <>
                      <Truck className="w-5 h-5 mr-2" />
                      Start Route
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Informing / Knowledge Base */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Resource Center</h2>
          </div>
          <p className="text-text-muted mb-6">Learn how to process and upcycle collected coffee grounds.</p>

          <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
            
            <a href="#" className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Composting 101</h4>
                <p className="text-xs text-text-muted leading-relaxed">Ideal ratios for mixing nitrogen-rich coffee grounds with carbon-rich brown matter.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 ml-auto my-auto group-hover:text-primary transition-colors" />
            </a>

            <div className="h-px bg-gray-100 mx-4"></div>

            <a href="#" className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Bio-fuel Pellets</h4>
                <p className="text-xs text-text-muted leading-relaxed">Step-by-step guide to compressing dried grounds into efficient heating pellets.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 ml-auto my-auto group-hover:text-primary transition-colors" />
            </a>

            <div className="h-px bg-gray-100 mx-4"></div>

            <a href="#" className="flex items-start p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Proper Drying</h4>
                <p className="text-xs text-text-muted leading-relaxed">How to prevent mold growth in wet grounds before processing.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 ml-auto my-auto group-hover:text-primary transition-colors" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProducerPortal;
