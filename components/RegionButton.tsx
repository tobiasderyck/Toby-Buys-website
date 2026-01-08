
import React from 'react';

interface RegionButtonProps {
  label: string;
  link: string;
  icon: string;
}

const RegionButton: React.FC<RegionButtonProps> = ({ label, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-400 rounded-lg transition-all duration-300 group"
    >
      <i className={`${icon} text-sm group-hover:scale-110 transition-transform`}></i>
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
};

export default RegionButton;
