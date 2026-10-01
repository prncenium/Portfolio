import PageTransition from '../components/PageTransition';
import TechMarquee from '../components/TechMarquee';
import SkillCategories from '../components/SkillCategories';

export default function Skills() {
  return (
    <PageTransition>
      <div className="text-center mb-14">
        <div className="text-xs tracking-[0.2em] uppercase accent-text font-semibold mb-3">Skills</div>
        <h1 className="text-4xl font-extrabold text-slate-900">Tech Stack &amp; Toolkit</h1>
      </div>

      <div className="mb-10">
        <TechMarquee />
      </div>

      <SkillCategories />
    </PageTransition>
  );
}
