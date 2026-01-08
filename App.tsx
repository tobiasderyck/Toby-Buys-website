
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GadgetCard from './components/GadgetCard';
import MerchCard from './components/MerchCard';
import { GADGETS, MERCH } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      
      <main>
        <Hero />

        {/* Affiliate Gadgets Section */}
        <section id="gadgets" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl sm:text-6xl font-black italic tracking-tighter mb-4">
                  LATEST <span className="text-cyan-400">TESTED GEAR</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-xl">
                  Click the links below to snag the gadgets you've seen in our recent videos. We've sourced the best links for your region!
                </p>
              </div>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live Stock
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {GADGETS.map((gadget) => (
                <GadgetCard key={gadget.id} gadget={gadget} />
              ))}
            </div>

            {/* AliExpress Promo */}
            <div className="mt-16 p-8 glass rounded-[2rem] border-2 border-dashed border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                        <i className="fa-solid fa-bolt"></i>
                    </div>
                    <div>
                        <h4 className="text-2xl font-black italic">WANT THEM CHEAPER?</h4>
                        <p className="text-slate-400">Check our global AliExpress storefront for massive savings on all unique finds.</p>
                    </div>
                </div>
                <a 
                  href="https://aliexpress.com" 
                  target="_blank" 
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg uppercase tracking-widest rounded-xl transition-all"
                >
                  AliExpress Store <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>
          </div>
        </section>

        {/* Merch Section */}
        <section id="merch" className="py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[100px] rounded-full transform translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black italic tracking-tighter mb-4">
                THE <span className="text-cyan-400">MERCH DROP</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Rep the brand. High-quality gear for the high-energy unboxers. Limited edition drops.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {MERCH.map((item) => (
                <MerchCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900 glass">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-950 font-black text-xl italic">TB</span>
                </div>
                <h2 className="text-2xl font-black italic tracking-tighter">TOBY <span className="text-cyan-400">BUYS</span></h2>
              </div>
              <p className="text-slate-400 max-w-md mb-8">
                The #1 destination for unique gadgets and extreme gear tests. Join the community and discover the future of toys, tech, and everyday carry.
              </p>
              <div className="flex gap-4">
                {['youtube', 'tiktok', 'instagram', 'twitter', 'discord'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all">
                    <i className={`fa-brands fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#gadgets" className="hover:text-cyan-400 transition-colors">All Gadgets</a></li>
                <li><a href="#merch" className="hover:text-cyan-400 transition-colors">Official Merch</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Gift Cards</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Affiliate FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Toby</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <p>© 2024 TOBY BUYS EXTREME GEAR TESTS. ALL RIGHTS RESERVED.</p>
            <p className="text-center">As an Amazon Associate I earn from qualifying purchases. Affiliate links help support the tests!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
