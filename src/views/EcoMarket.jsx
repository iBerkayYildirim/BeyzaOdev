import React, { useState } from 'react';
import { ShoppingCart, Leaf, Flame, Sparkles, Coffee, Store, Heart } from 'lucide-react';

const EcoMarket = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      title: 'Bio-Espresso Cup',
      source: 'Brew Mood Alsancak',
      price: '145 TL',
      icon: <Coffee className="w-16 h-16 text-secondary" />,
      color: 'bg-orange-50',
      tag: 'Upcycled',
    },
    {
      id: 2,
      title: 'Soil Nutrient (2kg)',
      source: 'Two Cup Bornova',
      price: '80 TL',
      icon: <Leaf className="w-16 h-16 text-primary" />,
      color: 'bg-green-50',
      tag: 'Compost',
    },
    {
      id: 3,
      title: 'Coffee Body Scrub',
      source: 'Coffee Güzelyalı',
      price: '110 TL',
      icon: <Sparkles className="w-16 h-16 text-purple-600" />,
      color: 'bg-purple-50',
      tag: 'Beauty',
    },
    {
      id: 4,
      title: 'Eco Bio-Fuel Pellets',
      source: 'Izmir Bio-Factory',
      price: '220 TL',
      icon: <Flame className="w-16 h-16 text-red-500" />,
      color: 'bg-red-50',
      tag: 'Energy',
    },
  ];

  const handleAddToCart = (id) => {
    setCartCount(prev => prev + 1);
    setAddedItems(prev => new Set(prev).add(id));
    
    // Reset the "Added" state after 2 seconds for feedback effect
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in pb-10">
      
      {/* Header & Cart */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Eco-Market</h1>
          <p className="text-text-muted mt-1">Shop premium upcycled products made from reclaimed coffee.</p>
        </div>
        
        <div className="bg-white rounded-full px-6 py-3 shadow-md border border-gray-100 flex items-center group cursor-pointer hover:border-primary transition-colors">
          <ShoppingCart className="w-6 h-6 text-secondary group-hover:text-primary transition-colors mr-3" />
          <span className="font-bold text-lg">{cartCount} Items</span>
          <span className="ml-2 text-text-muted">in Cart</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full transform hover:-translate-y-1">
            
            {/* Image Placeholder area */}
            <div className={`h-48 ${product.color} relative flex items-center justify-center overflow-hidden`}>
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm z-10">
                {product.tag}
              </div>
              
              {/* Subtle background abstract shape */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-18.1,95.5,-3.3C94.1,11.5,85.2,25.7,75.4,38C65.6,50.3,54.9,60.8,42.2,69.5C29.5,78.2,14.8,85.1,-0.5,85.9C-15.8,86.7,-31.6,81.4,-44.6,72.7C-57.6,64,-67.8,51.9,-75.7,38.3C-83.6,24.7,-89.2,9.6,-88.1,-4.9C-87,-19.4,-79.2,-33.3,-69.2,-44.7C-59.2,-56.1,-47.1,-65,-33.9,-71.4C-20.7,-77.8,-6.4,-81.7,7.7,-83C21.8,-84.3,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </div>

              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                {product.icon}
              </div>
              
              {/* Hover overlay like button */}
              <div className="absolute top-4 left-4">
                 <button className="p-2 bg-white/50 backdrop-blur-md rounded-full text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{product.title}</h3>
              <p className="text-sm text-text-muted flex items-center mb-4">
                <Store className="w-4 h-4 mr-1 text-gray-400" />
                From: {product.source}
              </p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="font-bold text-2xl text-secondary">{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                    addedItems.has(product.id)
                      ? 'bg-primary-dark text-white'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {addedItems.has(product.id) ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoMarket;
