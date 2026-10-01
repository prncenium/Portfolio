import PageTransition from '../components/PageTransition';
import { profile } from '../data/content';

const links = [
  { label: 'Email Me', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Download Resume', href: profile.resume },
];

export default function Contact() {
  return (
    <PageTransition>
      <div className="text-center mb-14">
        <div className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3">Contact</div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Let's Work Together</h1>
        <p className="text-slate-600 max-w-lg mx-auto">
          My inbox is always open. Whether you have an opportunity, a project idea, or just want to connect —
          reach out.
        </p>
      </div>

      <div className="glass p-10 md:p-14 text-center">
        <p className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-2">
          Say <span className="script text-6xl md:text-7xl">Hello</span>
        </p>
        <p className="text-slate-500 mb-10">
          {profile.email} &bull; {profile.phone}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl px-5 py-4 bg-slate-900/[0.03] border border-slate-900/10 text-slate-700 hover:border-blue-500/30 hover:text-slate-900 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
