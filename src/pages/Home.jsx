import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectsShowcase from '../components/ProjectsShowcase';
import JourneySection from '../components/JourneySection';
import TechMarquee from '../components/TechMarquee';
import SkillCategories from '../components/SkillCategories';
import Testimonials from '../components/Testimonials';
import { profile, aboutMe } from '../data/content';

export default function Home() {
  return (
    <PageTransition>
      <div
        className="relative left-1/2 -translate-x-1/2 -mt-28 sm:-mt-32 w-screen min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center px-5 sm:px-10 md:px-16 pt-24 sm:pt-28 pb-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(37,99,235,0.05), rgba(247,250,252,0.25) 85%, rgba(247,250,252,0.55)), url(/images/hero-bg.png)",
          backgroundSize: 'cover',
          backgroundPosition: '68% 35%',
        }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 text-sm sm:text-base text-slate-700 bg-white/70 backdrop-blur rounded-full px-4 py-1.5 border border-slate-900/5"
          >
            👋 Hey, I'm <span className="font-bold text-slate-900">Prince</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-slate-900 leading-[0.95] mb-5 whitespace-nowrap"
          >
            full stack<br />
            <motion.span
              className="script inline-block text-6xl sm:text-8xl md:text-9xl ml-10 sm:ml-36 md:ml-[170px] lg:ml-[260px]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              developer
            </motion.span>
          </motion.h1>
        </div>

        <div className="absolute bottom-6 left-6 md:left-16 text-xs font-semibold text-slate-600 tracking-wide uppercase flex items-center gap-1.5">
          Based in <span className="text-slate-900">{profile.location}</span>
        </div>
      </div>

      <div className="py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start mb-12 md:mb-16">
          <div className="md:col-span-3 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500">
            <span className="accent-text">◆</span> What I Do
          </div>
          <motion.div
            className="md:col-span-9 text-left md:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          >
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              {[
                'Skilled in MERN stack development,',
                'combining a strong foundation in Computer',
                'Science with practical engineering experience',
                <>
                  to build <span className="script accent-text text-2xl sm:text-3xl md:text-5xl">scalable</span>,
                  high-performance web
                </>,
                'applications.',
              ].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-t border-slate-900/10 pt-8">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold accent-text mb-2">{s.value}</div>
              <div className="text-sm font-semibold text-slate-900 border-t border-slate-900/10 pt-3">
                {s.label}
              </div>
              <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="projects-section" className="pb-14 sm:pb-20">
        <ProjectsShowcase />
      </div>

      <div id="about-section" className="py-14 sm:py-20 border-t border-slate-900/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ rotate: 0 }}
              className="bg-white p-3 pb-10 shadow-xl rounded-sm w-64 sm:w-72"
            >
              {aboutMe.image ? (
                <img
                  src={aboutMe.image}
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm text-center px-4">
                  Photo coming soon
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-7 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4"
            >
              <span className="accent-text">◆</span> About Me
            </motion.div>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[0.95]"
            >
              a little <span className="script accent-text text-5xl sm:text-6xl md:text-7xl">about</span> myself
            </motion.h2>

            {aboutMe.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="script accent-text text-4xl sm:text-5xl mt-2"
            >
              Prince.
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div id="experience-section">
        <JourneySection />
      </div>

      <div id="skills-section" className="py-14 sm:py-20 border-t border-slate-900/10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
          <span className="accent-text">◆</span> Tech Stack
        </div>
        <TechMarquee bare />

        <div className="mt-10">
          <SkillCategories />
        </div>
      </div>

      <Testimonials />
    </PageTransition>
  );
}
