
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">New Gadget Test Incoming</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter italic leading-[0.9] mb-6">
            UNBOXING <br />
            <span className="text-cyan-400 neon-text">THE EXTREME</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0">
            Welcome to the home of Toby Buys. We test the weirdest, coolest, and most futuristic gadgets on the planet. Grab the merch, get the gear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#gadgets" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95">
              Browse Gadgets
            </a>
            <a href="#merch" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-black text-lg uppercase tracking-widest rounded-2xl border border-slate-700 transition-all active:scale-95">
              Official Merch
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative z-10 glass border-2 border-cyan-500/30 p-2 rounded-[3rem] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
             <img 
               src="https://picsum.photos/seed/toby/800/1000" 
               alt="Toby Buys Extreme Gear" 
               className="w-full h-auto rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
             <div className="absolute bottom-10 left-10">
                <p className="text-2xl font-black italic text-cyan-400">"WAAUW! CHECK DIT!"</p>
                <p className="text-sm font-bold text-slate-300">YouTube Shorts Creator</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fa-solid fa-chevron-down text-cyan-500 text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;
