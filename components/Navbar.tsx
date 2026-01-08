
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center neon-border">
          <span className="text-slate-950 font-black text-xl italic">TB</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-black tracking-tighter italic leading-none">
            TOBY <span className="text-cyan-400">BUYS</span>
          </h1>
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Extreme Gear Tests</p>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-8">
        <a href="#gadgets" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Gadgets</a>
        <a href="#merch" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Merch</a>
        <div className="flex gap-3">
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fa-brands fa-youtube"></i></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
