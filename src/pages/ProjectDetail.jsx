import { Link, useParams, Navigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <PageTransition>
      <Link to="/projects" className="accent-text text-sm mb-6 inline-block">
        ← Back to Projects
      </Link>

      <div className="glass overflow-hidden text-left">
        <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
        <div className="p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{project.title}</h1>
              <p className="text-slate-500 text-sm">{project.role}</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-[var(--accent)] text-white font-semibold rounded-full px-6 py-2.5 text-sm"
              >
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="border border-blue-500/30 accent-text rounded-full px-5 py-2.5 text-sm"
              >
                Code
              </a>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">{project.description}</p>

          <h2 className="text-slate-700 font-semibold text-sm uppercase tracking-widest mb-4">Key Features</h2>
          <div className="space-y-2.5 mb-8">
            {project.features.map((f) => (
              <div key={f} className="flex gap-3 p-3.5 rounded-xl bg-slate-900/[0.02] border border-slate-900/5">
                <span className="accent-text">✓</span>
                <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
              </div>
            ))}
          </div>

          <h2 className="text-slate-700 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs rounded-full px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
