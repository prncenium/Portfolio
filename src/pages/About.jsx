import PageTransition from '../components/PageTransition';
import { profile, education } from '../data/content';

export default function About() {
  return (
    <PageTransition>
      <div className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3">About Me</div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-56 h-56 rounded-full object-cover border-4 border-blue-500/15"
          />
        </div>

        <div className="md:col-span-3 text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Building software that <span className="script text-5xl">makes an impact</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-5">
            Skilled Full Stack Developer combining a Computer Science background from{' '}
            <strong className="text-slate-900">Delhi Technological University</strong> with practical MERN stack
            expertise from <strong className="text-slate-900">Masai School</strong>.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            I apply advanced Data Structures &amp; Algorithms knowledge to engineer scalable, high-performance
            web applications. A collaborative problem-solver committed to delivering impactful solutions in
            team-oriented environments.
          </p>

          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.title} className="glass p-4 flex items-start gap-4">
                <div>
                  <div className="text-slate-900 font-semibold">{e.title}</div>
                  <div className="text-slate-500 text-sm">
                    {e.org} &bull; {e.period} &bull; {e.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
