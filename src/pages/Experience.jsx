import PageTransition from '../components/PageTransition';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <PageTransition>
      <div className="text-center mb-14">
        <div className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3">Experience</div>
        <h1 className="text-4xl font-extrabold text-slate-900">Where I've Worked</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experience.map((job) => (
          <div key={job.company} className="glass p-8 text-left">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <div className="text-slate-900 text-xl font-bold mb-1">{job.title}</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="accent-text font-semibold">{job.company}</span>
                  {job.place && (
                    <>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-500">{job.place}</span>
                    </>
                  )}
                </div>
              </div>
              <span className="text-xs accent-text border border-blue-500/20 rounded-full px-3 py-1 h-fit bg-blue-500/5">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2.5 text-slate-600">
              {job.points.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <span className="accent-text mt-1">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            {job.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {job.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-700">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
