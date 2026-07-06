import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-50 to-green-50 overflow-hidden min-h-[550px] flex items-center">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 -mt-12 -mr-12 w-96 h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" /> 100% Certified Organic Sourcing
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
              Freshness Packaged <br />
              <span className="text-emerald-600">Straight From Farms</span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              Skip the preservatives. Enjoy nutrient-dense fruits, vegetables, and pantry staples harvested daily and delivered straight to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition duration-200 group">
                Shop Fresh Harvest
                <ShoppingBag className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium px-8 py-3.5 rounded-xl transition duration-200">
                Explore Subscription Boxes
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-100/60 max-w-sm mx-auto md:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-800">24hr</p>
                <p className="text-xs text-slate-500">Farm-to-Home</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">Zero</p>
                <p className="text-xs text-slate-500">Toxic Sprays</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">Local</p>
                <p className="text-xs text-slate-500">Eco-Friendly</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 border-4 border-white bg-white">
              {/* Fallback pattern or wrapper container for your hero graphic */}
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Abundant box of fresh organic local vegetables" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Floating feature badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-xs font-bold text-slate-700">Next delivery slot: Today 4 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;