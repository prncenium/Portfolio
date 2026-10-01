import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/content';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 640px)');
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const isDesktop = useIsDesktop();

  return (
    <div className="py-14 sm:py-20 border-t border-slate-900/10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
          <span className="accent-text">◆</span> Recommendations
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-5 leading-[0.95]">
          what people <span className="script accent-text text-5xl sm:text-6xl md:text-7xl">say</span> about me
        </h2>
        <p className="text-slate-500 text-base sm:text-lg">
          A few words from people I've worked with, shipped alongside, and problem-solved next to.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {testimonials.map((t, i) => {
          const fromX = i % 2 === 0 ? -160 : 160;
          const fromY = i < 2 ? -160 : 160;

          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: fromX, y: fromY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ rotate: 0, y: -4 }}
              style={{ rotate: isDesktop ? t.rotate : 0 }}
              className="glass p-6 sm:p-7 flex gap-5 items-start relative"
            >
            <span
              className="absolute -top-3 left-8 text-2xl select-none"
              style={{ color: 'var(--muted)' }}
              aria-hidden="true"
            >
              📎
            </span>

            <div className="shrink-0 bg-white p-2 pb-4 shadow-lg rounded-sm w-20 sm:w-24">
              {t.avatar ? (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full aspect-square rounded-sm object-cover"
                />
              ) : (
                <div
                  className="w-full aspect-square rounded-sm flex items-center justify-center text-white font-extrabold text-lg"
                  style={{ background: 'var(--accent)' }}
                >
                  {initials(t.name)}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="script text-xl sm:text-2xl leading-tight text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500 font-medium mb-3">
                {t.role}, {t.company}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.quote}</p>
            </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
