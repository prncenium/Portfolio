import { technologies } from '../data/content';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
  SiVite,
  SiSocketdotio,
  SiPostman,
  SiHtml5,
} from 'react-icons/si';

const techMeta = {
  React: { icon: SiReact, color: '#2563eb' },
  'Node.js': { icon: SiNodedotjs, color: '#3c873a' },
  Express: { icon: SiExpress, color: '#334155' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  JavaScript: { icon: SiJavascript, color: '#b58b00' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  Tailwind: { icon: SiTailwindcss, color: '#06b6d4' },
  Redux: { icon: SiRedux, color: '#764abc' },
  Firebase: { icon: SiFirebase, color: '#d9a404' },
  Git: { icon: SiGit, color: '#f05032' },
  Vite: { icon: SiVite, color: '#8f6bff' },
  'Socket.io': { icon: SiSocketdotio, color: '#334155' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  HTML5: { icon: SiHtml5, color: '#e34f26' },
};

function TechTile({ name }) {
  const meta = techMeta[name];
  const Icon = meta?.icon;
  return (
    <div className="shrink-0 w-[108px] sm:w-[124px] rounded-2xl border border-slate-900/10 bg-white/80 p-4 flex flex-col items-center gap-3 shadow-sm shadow-slate-900/5">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: meta ? `${meta.color}14` : 'rgba(15,23,42,0.05)' }}
      >
        {Icon && <Icon size={22} style={{ color: meta.color }} />}
      </div>
      <span className="text-xs font-medium text-slate-600 text-center">{name}</span>
    </div>
  );
}

export default function TechMarquee({ title = 'Technologies', bare = false }) {
  const marqueeItems = [...technologies, ...technologies];

  if (bare) {
    return (
      <div className="marquee-fade relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <div className="marquee-track flex gap-4 w-max px-5 sm:px-10 md:px-16">
          {marqueeItems.map((t, i) => (
            <TechTile key={`${t}-${i}`} name={t} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-8">
      {title && (
        <h2 className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-6">{title}</h2>
      )}
      <div className="marquee-fade -mx-8 overflow-hidden">
        <div className="marquee-track flex gap-4 w-max px-8">
          {marqueeItems.map((t, i) => (
            <TechTile key={`${t}-${i}`} name={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
