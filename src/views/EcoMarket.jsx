import React, { useState } from 'react';
import { ShoppingCart, Leaf, Flame, Sparkles, Coffee, Store, Heart, X, CheckCircle2, Trash2, ArrowRight } from 'lucide-react';

const EcoMarket = () => {
  const [addedItems, setAddedItems] = useState(new Set());
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutState, setCheckoutState] = useState('idle'); // 'idle', 'processing', 'success'

  const products = [
    {
      id: 1,
      title: 'Bio-Espresso Cup',
      source: 'Brew Mood Alsancak',
      price: 145,
      icon: <Coffee className="w-16 h-16 text-secondary" />,
      color: 'bg-orange-50',
      tag: 'Upcycled',
    },
    {
      id: 2,
      title: 'Soil Nutrient (2kg)',
      source: 'Two Cup Bornova',
      price: 80,
      icon: <Leaf className="w-16 h-16 text-primary" />,
      color: 'bg-green-50',
      tag: 'Compost',
    },
    {
      id: 3,
      title: 'Coffee Body Scrub',
      source: 'Coffee Güzelyalı',
      price: 110,
      icon: <Sparkles className="w-16 h-16 text-purple-600" />,
      color: 'bg-purple-50',
      tag: 'Beauty',
    },
    {
      id: 4,
      title: 'Eco Bio-Fuel Pellets',
      source: 'Izmir Bio-Factory',
      price: 220,
      icon: <Flame className="w-16 h-16 text-red-500" />,
      color: 'bg-red-50',
      tag: 'Energy',
    },
  ];

  const handleAddToCart = (product) => {
    // Visual feedback
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);

    // Add to cart state
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCheckoutState('processing');
    setTimeout(() => {
      setCheckoutState('success');
      setCartItems([]);
      setTimeout(() => {
        setCheckoutState('idle');
        setIsCartOpen(false);
      }, 3000);
    }, 1500);
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in pb-10 relative">
      
      {/* Header & Cart */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Eco-Market</h1>
          <p className="text-text-muted mt-1">Shop premium upcycled products made from reclaimed coffee.</p>
        </div>
        
        <div 
          onClick={() => setIsCartOpen(true)}
          className="bg-white rounded-full px-6 py-3 shadow-md border border-gray-100 flex items-center group cursor-pointer hover:border-primary transition-colors relative"
        >
          <ShoppingCart className="w-6 h-6 text-secondary group-hover:text-primary transition-colors mr-3" />
          <span className="font-bold text-lg">{totalCartItems} Items</span>
          <span className="ml-2 text-text-muted">in Cart</span>
          
          {totalCartItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              {totalCartItems}
            </div>
          )}
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
                <span className="font-bold text-2xl text-secondary">{product.price} TL</span>
                <button
                  onClick={() => handleAddToCart(product)}
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

      {/* Cart Sidebar Overlay / Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Cart Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-2xl font-bold text-secondary flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3 text-primary" />
                Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-700 bg-white rounded-full shadow-sm hover:shadow transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 && checkoutState === 'idle' ? (
                <div className="text-center text-gray-400 flex flex-col items-center justify-center h-full space-y-4">
                  <ShoppingCart className="w-16 h-16 opacity-20" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : checkoutState === 'success' ? (
                <div className="text-center text-green-600 flex flex-col items-center justify-center h-full space-y-4 animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-20 h-20" />
                  <h3 className="text-2xl font-bold text-gray-800">Order Placed!</h3>
                  <p className="text-text-muted">Thank you for supporting the circular economy.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${item.color}`}>
                      <div className="scale-75">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.price} TL x {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-secondary mb-2">{item.price * item.quantity} TL</p>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer / Checkout */}
            {cartItems.length > 0 && checkoutState !== 'success' && (
              <div className="p-6 border-t border-gray-100 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium text-lg">Subtotal</span>
                  <span className="text-3xl font-bold text-secondary">{totalCartPrice} TL</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  disabled={checkoutState === 'processing'}
                  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-lg ${
                    checkoutState === 'processing' 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-1'
                  }`}
                >
                  {checkoutState === 'processing' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      Checkout Securely
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default EcoMarket;
