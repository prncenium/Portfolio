import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { education, experience } from '../data/content';

const journey = [
  { ...education[1], org: education[1].org, type: 'Education' },
  { ...experience[2], org: experience[2].company, type: 'Work' },
  { ...education[0], org: education[0].org, type: 'Education' },
  { ...experience[1], org: experience[1].company, type: 'Work' },
  { ...experience[0], org: experience[0].company, type: 'Work' },
];

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const TILTS = [-2, 2.5, -2.5, 1.75];

function JourneyCard({ item, index }) {
  const isPresent = item.period.includes('Present');
  const flipped = index % 2 === 1;
  const tilt = TILTS[index % TILTS.length];

  const pill = (
    <span
      className={`text-xs font-semibold rounded-full px-3 py-1 border ${
        isPresent
          ? 'text-emerald-700 border-emerald-500/25 bg-emerald-500/5'
          : 'accent-text border-blue-500/20 bg-blue-500/5'
      }`}
    >
      {item.period}
    </span>
  );
  const dot = <span className={`w-2.5 h-2.5 rounded-full ${isPresent ? 'bg-emerald-500' : 'bg-blue-500'}`} />;
  const connectorLine = <span className="w-px h-6 bg-slate-900/10" />;

  const card = (
    <div className="relative text-left" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="relative z-20 bg-white rounded-2xl border border-slate-900/5 shadow-lg shadow-slate-900/5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 shrink-0 rounded-xl border border-slate-900/10 overflow-hidden flex items-center justify-center p-1.5 ${
                item.logoDark ? 'bg-slate-900' : 'bg-slate-50'
              }`}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
              ) : (
                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide text-center leading-tight">
                  Logo
                </span>
              )}
            </div>
            <div>
              <div className="text-slate-900 font-bold text-base sm:text-lg leading-tight">{item.title}</div>
              <div className="text-sm text-slate-500">{item.org}</div>
            </div>
          </div>
          {item.place && (
            <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
              <PinIcon />
              {item.place}
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 -mt-5 bg-white rounded-2xl border border-slate-900/5 shadow-xl shadow-slate-900/10 p-6 sm:p-8 pt-10">
        <ul className="space-y-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
          {item.points.slice(0, 3).map((p) => (
            <li key={p} className="flex gap-2.5 items-start">
              <span className="accent-text mt-0.5">•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className={`shrink-0 w-[75vw] sm:w-[46vw] md:w-[30vw] lg:w-[24vw] flex flex-col ${
        flipped ? 'self-end' : 'self-start'
      }`}
    >
      {flipped ? (
        <>
          {card}
          <div className="flex flex-col items-center">
            {connectorLine}
            {dot}
            <span className="mt-3">{pill}</span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            {pill}
            <span className="mt-3">{dot}</span>
            {connectorLine}
          </div>
          {card}
        </>
      )}
    </div>
  );
}

function JourneyCardMobile({ item }) {
  const isPresent = item.period.includes('Present');

  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-900/15 ring-4 ring-white" />
      <span className="absolute left-[4.5px] top-5 bottom-[-1.5rem] w-px bg-slate-900/10 last:hidden" />

      <span
        className={`inline-block text-xs font-semibold rounded-full px-3 py-1 border mb-3 ${
          isPresent
            ? 'text-emerald-700 border-emerald-500/25 bg-emerald-500/5'
            : 'accent-text border-blue-500/20 bg-blue-500/5'
        }`}
      >
        {item.period}
      </span>

      <div className="bg-white rounded-2xl border border-slate-900/5 shadow-lg shadow-slate-900/5 p-5">
        <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 shrink-0 rounded-xl border border-slate-900/10 overflow-hidden flex items-center justify-center p-1.5 ${
                item.logoDark ? 'bg-slate-900' : 'bg-slate-50'
              }`}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.org} className="w-full h-full object-contain" />
              ) : (
                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide text-center leading-tight">
                  Logo
                </span>
              )}
            </div>
            <div>
              <div className="text-slate-900 font-bold text-base leading-tight">{item.title}</div>
              <div className="text-sm text-slate-500">{item.org}</div>
            </div>
          </div>
          {item.place && (
            <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
              <PinIcon />
              {item.place}
            </div>
          )}
        </div>

        <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          {item.points.slice(0, 3).map((p) => (
            <li key={p} className="flex gap-2.5 items-start">
              <span className="accent-text mt-0.5">•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function JourneyHeading() {
  return (
    <div className="text-center mb-10 sm:mb-14 px-5">
      <div className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3 flex items-center justify-center gap-2">
        <span>◆</span> Experience
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3">the journey so far</h2>
      <p className="text-slate-500 max-w-xl mx-auto">
        From college classrooms to production codebases — two internships and two chapters of
        learning, and counting.
      </p>
    </div>
  );
}

export default function JourneySection() {
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current && viewportRef.current) {
        setDistance(
          Math.max(trackRef.current.scrollWidth - viewportRef.current.offsetWidth, 0)
        );
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <>
      {/* Mobile: simple vertical timeline, no scroll-jacking or overlap */}
      <div className="sm:hidden py-4">
        <JourneyHeading />
        <div className="flex flex-col gap-10 px-5">
          {journey.map((item, i) => (
            <JourneyCardMobile key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop/tablet: horizontal scroll-driven carousel */}
      <div
        ref={containerRef}
        className="hidden sm:block relative left-1/2 -translate-x-1/2 w-screen"
        style={{ height: `calc(100svh + ${distance}px)` }}
      >
        <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden py-10">
          <JourneyHeading />

          <div ref={viewportRef} className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-900/10 z-0" />
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="journey-track relative z-10 flex items-center gap-10 sm:gap-12 pl-[16vw] sm:pl-[13vw] pr-[3vw] py-10 w-max will-change-transform"
            >
              {journey.map((item, i) => (
                <JourneyCard key={i} item={item} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
