import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/content';

const MotionLink = motion(Link);

function StackCard({ project: p, index: i, total, scrollYProgress }) {
  const segments = Math.max(total - 1, 1);
  const isFirst = i === 0;
  const isLast = i === total - 1;

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [(i - 1) / segments, i / segments],
    isFirst ? ['0%', '0%'] : ['100%', '0%']
  );

  const scale = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [i / segments, (i + 1) / segments],
    isLast ? [1, 1] : [1, 0.9]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [i / segments, (i + 1) / segments],
    isLast ? [28, 28] : [28, 40]
  );

  return (
    <MotionLink
      to={`/projects/${p.id}`}
      style={{ y, scale, borderRadius, zIndex: i + 1 }}
      className="absolute inset-0 block w-full h-full overflow-hidden origin-top will-change-transform shadow-2xl shadow-slate-950/30 group"
    >
      <img
        src={p.image}
        alt={p.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />

      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-xs font-semibold text-white/70 tracking-widest">
        {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10">
        <div className="w-full sm:max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-slate-950/30">
          <div className="flex items-center justify-between mb-5">
            <span className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-xs font-bold text-white">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-xs font-semibold text-white/60">{p.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            {p.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs rounded-full px-3 py-1 bg-white/15 border border-white/25 text-white"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-white/80 text-sm leading-relaxed mb-6">{p.summary}</p>

          <span className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold rounded-full px-5 py-2.5 text-sm group-hover:gap-3 transition-all">
            View Project <span>→</span>
          </span>
        </div>
      </div>
    </MotionLink>
  );
}

export default function ProjectsShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <div className="text-center mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3 flex items-center justify-center gap-2"
        >
          <span>◆</span> Selected Work
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl sm:text-5xl font-extrabold text-slate-900"
        >
          check out some of my work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-slate-500 mt-3 max-w-xl mx-auto"
        >
          A few projects I've built, and the thinking behind them.
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="relative lg:-mx-88"
        style={{ height: `${projects.length * 100}svh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full flex items-center">
          <div className="relative w-full h-[72vh] sm:h-[95vh] lg:h-[98avh]">
            {projects.map((p, i) => (
              <StackCard
                key={p.id}
                project={p}
                index={i}
                total={projects.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
