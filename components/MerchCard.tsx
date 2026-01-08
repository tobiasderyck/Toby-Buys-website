
import React from 'react';
import { MerchItem } from '../types';

interface MerchCardProps {
  item: MerchItem;
}

const MerchCard: React.FC<MerchCardProps> = ({ item }) => {
  return (
    <div className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:neon-border">
      <div className="aspect-[3/4] overflow-hidden bg-slate-900 relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/90 to-transparent">
            <span className="text-2xl font-black text-cyan-400">{item.price}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-2">{item.description}</p>
        <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm uppercase tracking-widest rounded-xl transition-all active:scale-95">
          Buy Now <i className="fa-solid fa-cart-shopping ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default MerchCard;
