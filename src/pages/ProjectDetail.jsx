import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiPlay, FiImage, FiCode } from 'react-icons/fi';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/content';
import { techIcons } from '../data/techIcons';

const GALLERY_SLOTS = 3;

function ProjectVideo({ src, title }) {
  if (src) {
    return (
      <video
        src={src}
        title={`${title} demo`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover bg-slate-900"
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-blue-50 text-slate-400">
      <span className="w-14 h-14 rounded-full bg-white/80 border border-slate-900/10 flex items-center justify-center shadow-sm">
        <FiPlay size={20} className="ml-1 text-slate-400" />
      </span>
      <span className="text-sm font-medium">Demo video coming soon</span>
    </div>
  );
}

function GallerySlot({ src, index, title, className }) {
  if (src) {
    return (
      <div className={`rounded-2xl overflow-hidden border border-slate-900/10 shadow-lg shadow-slate-900/5 ${className}`}>
        <img src={src} alt={`${title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-dashed border-slate-900/15 bg-slate-900/[0.02] flex flex-col items-center justify-center gap-2 text-slate-400 ${className}`}
    >
      <FiImage size={20} />
      <span className="text-xs">Screenshot {index + 1}</span>
    </div>
  );
}

function TechTile({ name }) {
  const meta = techIcons[name];
  const Icon = meta?.icon;
  return (
    <div className="shrink-0 w-[108px] sm:w-[124px] rounded-2xl border border-slate-900/10 bg-white/80 p-4 flex flex-col items-center gap-3 shadow-sm shadow-slate-900/5">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: meta ? `${meta.color}14` : 'rgba(15,23,42,0.05)' }}
      >
        {Icon ? <Icon size={22} style={{ color: meta.color }} /> : <FiCode size={20} className="text-slate-500" />}
      </div>
      <span className="text-xs font-medium text-slate-600 text-center">{name}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  // Repeat the tag list so the belt is always wider than the screen,
  // and the -50% translate in .marquee-track loops seamlessly.
  const beltItems = [...project.tags, ...project.tags, ...project.tags, ...project.tags];

  const backToProjects = (e) => {
    e.preventDefault();
    navigate('/');
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  };

  const gallerySlots = Array.from({ length: GALLERY_SLOTS }, (_, i) => project.gallery?.[i] || null);

  return (
    <PageTransition topClass="pt-24 sm:pt-28">
      <div className="text-left">
        <a
          href="/#projects-section"
          onClick={backToProjects}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white/80 border border-slate-900/10 rounded-full px-4 py-2 shadow-sm hover:bg-white transition mb-10"
        >
          <FiArrowLeft size={16} /> Back to Projects
        </a>

        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-xs rounded-full px-3 py-1.5 border border-slate-900/10 bg-white/70 text-slate-600">
            {project.badge}
          </span>
          {project.live && (
            <span className="text-xs rounded-full px-3 py-1.5 border border-green-500/20 bg-green-500/10 text-green-700 font-semibold">
              ● Live
            </span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6 max-w-4xl">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10">
          <div>
            <p className="text-xs text-slate-400 mb-1">Role</p>
            <p className="text-sm font-semibold text-slate-900">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Category</p>
            <p className="text-sm font-semibold text-slate-900">{project.badge}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Status</p>
            <p className="text-sm font-semibold text-green-600">● {project.live ? 'Live' : 'In progress'}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--accent)] text-white font-semibold rounded-full px-6 py-2.5 text-sm hover:opacity-90 transition"
            >
              Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-900/15 text-slate-700 font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-white/70 transition"
            >
              View Code
            </a>
          )}
        </div>

        <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">{project.description}</p>

        {/* Wider than the text column so the video reads as the hero of the page */}
        <div
          className="relative left-1/2 -translate-x-1/2 rounded-3xl overflow-hidden border border-slate-900/10 bg-white shadow-xl shadow-slate-900/5 aspect-[4/3] md:aspect-video mb-12"
          style={{ width: 'min(calc(100vw - 2rem), 1700px)' }}
        >
          <ProjectVideo src={project.video} title={project.title} />
        </div>

        {/* Gallery: fixed slots, empty ones are placeholders until images are added.
            First two sit above the features, the third sits below them. */}
        <div
          className="relative left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mb-16"
          style={{ width: 'min(calc(100vw - 2rem), 1400px)' }}
        >
          {gallerySlots.slice(0, 2).map((src, i) => (
            <GallerySlot key={i} src={src} index={i} title={project.title} className="aspect-[4/3] md:aspect-[16/11]" />
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">Key features</h2>
          </div>
          <div className="space-y-3">
            {project.features.map((f) => (
              <div key={f} className="flex gap-3 p-4 rounded-2xl bg-white/70 border border-slate-900/10">
                <span className="accent-text font-bold">✓</span>
                <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <GallerySlot src={gallerySlots[2]} index={2} title={project.title} className="aspect-[4/3] md:aspect-[16/9]" />
        </div>

        {/* Tech stack belt */}
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Built with</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Tech stack</h2>
        </div>
        <div className="marquee-fade -mx-4 sm:-mx-6 overflow-hidden">
          <div className="marquee-track flex gap-4 w-max px-4">
            {beltItems.map((t, i) => (
              <TechTile key={`${t}-${i}`} name={t} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
