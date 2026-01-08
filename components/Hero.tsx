
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Subtle Carbon Fiber Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.3em] animate-pulse">Extreme Gear Lab</span>
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter italic leading-[0.85] mb-6 drop-shadow-2xl">
            UNBOXING <br />
            <span className="text-cyan-400 neon-text">THE EXTREME</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
            Welkom bij Toby Buys. Wij testen de vaagste gadgets en unieke speeltjes met maximale energie. Geen saaie reviews, alleen maar actie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#gadgets" className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] active:scale-95 flex items-center justify-center gap-3">
              Check de Gadgets
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#merch" className="px-10 py-5 bg-slate-900/80 hover:bg-slate-800 text-white font-black text-lg uppercase tracking-widest rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all active:scale-95 backdrop-blur-sm">
              Official Merch
            </a>
          </div>
        </div>

        <div className="relative group order-1 lg:order-2 flex justify-center items-center">
          {/* Main Floating Container */}
          <div className="relative z-10 animate-[float_6s_ease-in-out_infinite] perspective-1000">
            {/* The Outer Glowing Frame */}
            <div className="relative glass border-[3px] border-cyan-400/30 p-3 rounded-[3.5rem] overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)] group-hover:border-cyan-400 transition-colors duration-500">
               
               {/* Scanline Effect Overlay */}
               <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20"></div>
               
               {/* Image Container */}
               <div className="relative aspect-square w-full max-w-[450px] overflow-hidden rounded-[2.8rem] bg-slate-900">
                  <img 
                    src="INSTAGRAM_T_HAPPY_SQUARE.png" 
                    alt="Toby Buys" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback als het bestand nog niet in de map staat
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                  
                  {/* High-end gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Branding text on image */}
                  <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-4xl font-black italic text-cyan-400 neon-text leading-none mb-2 transform -rotate-2">"WAAUW!"</p>
                      <p className="text-2xl font-black italic text-white leading-none tracking-tight">CHECK DIT!</p>
                  </div>
               </div>

               {/* Reflection/Shine effect that moves */}
               <div className="absolute -inset-full top-0 block h-full w-1/2 z-10 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]"></div>
            </div>

            {/* Decorative Gadget Badges */}
            <div className="absolute -top-4 -right-4 z-30 w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-slate-950 animate-bounce">
               <i className="fa-solid fa-bolt text-slate-950 text-2xl"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 z-30 px-4 py-2 bg-slate-950 border border-cyan-500/50 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400 shadow-xl">
               Verified Extreme
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
        }
        @keyframes shine {
          100% { left: 125%; }
        }
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </section>
  );
};

export default Hero;
