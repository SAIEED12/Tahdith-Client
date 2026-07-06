import React from 'react';
import { Leaf, Navigation, Zap, ShoppingCart } from 'lucide-react';

const categories = [
  { name: 'Vegetables', icon: '🥦', count: '42 Items', slug: 'vegetables' },
  { name: 'Fruits', icon: '🍎', count: '28 Items', slug: 'fruits' },
  { name: 'Dairy & Eggs', icon: '🥚', count: '15 Items', slug: 'dairy-eggs' },
  { name: 'Grains & Oils', icon: '🌾', count: '22 Items', slug: 'grains-oils' },
];

const featuredProducts = [
  { id: 1, name: 'Organic Red Tomatoes', price: '2.40', unit: 'kg', originalPrice: '3.00', img: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300', badge: '15% OFF' },
  { id: 2, name: 'Fresh Farm Spinach', price: '1.80', unit: 'bunch', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300', badge: 'Freshly Picked' },
  { id: 3, name: 'Raw Unfiltered Honey', price: '8.50', unit: 'jar', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Organic Avocados', price: '5.20', unit: 'box', originalPrice: '6.50', img: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300', badge: 'Popular' }
];

export default function MainFeaturesList() {
  return (
    <div className="bg-white py-12 space-y-16">
      
      {/* SECTION 1: QUICK CATEGORIES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Explore Organic Categories</h2>
          <p className="text-slate-500 text-sm">Sourced ethically, handled with absolute care.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.slug} className="group cursor-pointer border border-slate-100 hover:border-emerald-200 bg-slate-50/50 hover:bg-emerald-50/30 p-6 rounded-2xl text-center transition duration-200">
              <span className="text-4xl block mb-2 transform group-hover:scale-110 transition-transform">{cat.icon}</span>
              <h3 className="font-semibold text-slate-800 text-base">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: HARVEST OF THE WEEK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
          <div>
            <div className="flex items-center gap-2 text-amber-600 font-semibold text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-current" /> Limited Stock Available
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">This Week's Fresh Harvest</h2>
          </div>
          <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition">View All Products &rarr;</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition relative flex flex-col group">
              {product.badge && (
                <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-full z-10 shadow-sm">
                  {product.badge}
                </span>
              )}
              
              <div className="aspect-square bg-slate-50 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
              </div>

              <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm line-clamp-1 group-hover:text-emerald-600 transition">{product.name}</h3>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-base font-bold text-slate-900">${product.price}</span>
                    <span className="text-xs text-slate-400">/ {product.unit}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through ml-1">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-medium text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 transition duration-150">
                  <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}