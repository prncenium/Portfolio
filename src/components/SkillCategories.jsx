import { skillGroups } from '../data/content';
import { FiMonitor, FiArrowRight, FiDatabase, FiLock } from 'react-icons/fi';

const categoryMeta = {
  Frontend: { icon: FiMonitor, color: '#2563eb' },
  Backend: { icon: FiArrowRight, color: '#7c3aed' },
  'Database & Tools': { icon: FiDatabase, color: '#059669' },
  'Auth & Security': { icon: FiLock, color: '#d97706' },
};

export default function SkillCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((g) => {
        const meta = categoryMeta[g.title];
        const Icon = meta?.icon;
        return (
          <div key={g.title} className="glass p-7 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: meta ? `${meta.color}14` : 'rgba(15,23,42,0.05)' }}
              >
                {Icon && <Icon size={17} style={{ color: meta.color }} />}
              </div>
              <h3 className="text-slate-900 font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full px-3 py-1.5 border font-medium"
                  style={{
                    background: meta ? `${meta.color}0d` : 'rgba(37,99,235,0.05)',
                    borderColor: meta ? `${meta.color}2a` : 'rgba(37,99,235,0.15)',
                    color: meta ? meta.color : '#1d4ed8',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
