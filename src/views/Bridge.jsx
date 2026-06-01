import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const Bridge = () => {
  const hotspots = [
    { id: 1, name: 'Brew Mood Alsancak', distance: '1.2km', amount: '15kg', time: 'Updated 2h ago' },
    { id: 2, name: 'Two Cup Bornova', distance: '4.8km', amount: '20kg', time: 'Updated 4h ago' },
    { id: 3, name: 'Port Coffee Urla', distance: '32.4km', amount: '32kg', time: 'Updated 1d ago' },
  ];

  return (
    <div className="h-[80vh] flex flex-col md:flex-row gap-6 animate-in fade-in">
      
      {/* Sidebar / List */}
      <div className="w-full md:w-1/3 flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 bg-secondary text-white">
          <h2 className="text-2xl font-bold mb-1">Nearby Hotspots</h2>
          <p className="text-secondary-light text-gray-300 text-sm flex items-center">
            <MapPin className="w-4 h-4 mr-1" /> Izmir Region
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {hotspots.map((spot) => (
            <div key={spot.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{spot.name}</h3>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                  {spot.distance}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-secondary font-bold text-xl">
                  {spot.amount} <span className="text-sm font-normal text-gray-500 ml-1">ready</span>
                </div>
                <button className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm border border-gray-100">
                  <Navigation className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-3 flex items-center text-xs text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {spot.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Map Interface Placeholder */}
      <div className="w-full md:w-2/3 bg-gray-100 rounded-3xl shadow-inner overflow-hidden relative border border-gray-200 min-h-[400px]">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-[#e8e4db] opacity-70">
           {/* Abstract grid lines to look like a map */}
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#d1cfc9 1px, transparent 1px), linear-gradient(90deg, #d1cfc9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           {/* Abstract paths / roads */}
           <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
             <path d="M0,50 Q25,20 50,50 T100,50" stroke="#a3a19b" strokeWidth="2" fill="none" />
             <path d="M20,0 Q30,50 20,100" stroke="#a3a19b" strokeWidth="1.5" fill="none" />
             <path d="M70,0 Q60,50 80,100" stroke="#a3a19b" strokeWidth="3" fill="none" />
           </svg>
        </div>

        {/* Map Pins */}
        <div className="absolute top-[30%] left-[40%] animate-bounce">
          <div className="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="bg-white px-2 py-1 rounded text-xs font-bold shadow mt-1 whitespace-nowrap text-center -ml-4">
            Brew Mood
          </div>
        </div>

        <div className="absolute top-[60%] left-[20%]">
          <div className="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white opacity-80 hover:opacity-100 transition-opacity">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        <div className="absolute top-[20%] left-[70%]">
          <div className="bg-secondary text-white p-2 rounded-full shadow-lg border-2 border-white opacity-80 hover:opacity-100 transition-opacity">
            <MapPin className="w-5 h-5" />
          </div>
        </div>
        
        {/* User Location */}
        <div className="absolute top-[45%] left-[45%]">
           <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md shadow-blue-500/50"></div>
           <div className="w-12 h-12 bg-blue-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="bg-white p-3 rounded-xl shadow-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
          <button className="bg-white p-3 rounded-xl shadow-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
