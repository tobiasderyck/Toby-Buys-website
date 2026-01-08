
import React from 'react';
import { Gadget } from '../types';
import RegionButton from './RegionButton';

interface GadgetCardProps {
  gadget: Gadget;
}

const GadgetCard: React.FC<GadgetCardProps> = ({ gadget }) => {
  return (
    <div className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:neon-border">
      {/* Tag */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full">
        {gadget.tag}
      </div>
      
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
        <img 
          src={gadget.image} 
          alt={gadget.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:neon-text transition-all">
          {gadget.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-6 h-10">
          {gadget.description}
        </p>

        {/* Region Buttons */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center mb-1">Select Region</p>
          <div className="flex gap-2">
            <RegionButton label="USA" link={gadget.links.usa} icon="fa-solid fa-flag-usa" />
            <RegionButton label="EU" link={gadget.links.eu} icon="fa-solid fa-euro-sign" />
            <RegionButton label="CANADA" link={gadget.links.canada} icon="fa-solid fa-leaf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
