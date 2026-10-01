import { useEffect, useState } from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { profile } from '../data/content';

const FOOTER_WORDS = ['create', 'Code', 'Connect'];

export default function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % FOOTER_WORDS.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      id="contact-section"
      className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden text-white"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(122,184,248,0.55) 0%, rgba(37,99,235,0.7) 55%, rgba(29,78,216,0.85) 100%), url(https://res.cloudinary.com/xjo36sha/image/upload/v1790870145/Gemini_Generated_Image_fs29gsfs29gsfs29.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pt-20 sm:pt-24 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <h2
            className="md:col-span-8 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]"
            style={{ color: '#fff' }}
          >
            lets{' '}
            <span
              key={wordIndex}
              className="script text-5xl sm:text-6xl md:text-7xl rise-vanish-word"
              style={{ color: '#fff' }}
            >
              {FOOTER_WORDS[wordIndex]}
            </span>
            <br />
            incredible work together.
          </h2>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div
              className="relative rounded-2xl border-2 border-white/70 shadow-xl overflow-hidden bg-black/20"
              style={{ transform: 'rotate(6deg)', width: '200px', height: '284px' }}
            >
              <video
                src="https://res.cloudinary.com/xjo36sha/video/upload/v1790859986/Omg_the_original_happy_happy_happy_cat_video_rTheMatpatEffect_-_Trim.mp4"
                className="w-full h-full object-cover scale-125"
                autoPlay
                muted
                loop
                playsInline
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(255,255,255,0.75) 0%, rgba(147,197,253,0.45) 50%, rgba(37,99,235,0.6) 100%)',
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-20 mt-16 sm:mt-20">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/60 mb-1">Email</p>
            <a href={`mailto:${profile.email}`} className="font-semibold hover:underline">
              {profile.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Social</p>
            <div className="flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:opacity-90 transition"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:opacity-90 transition"
              >
                <FiGithub size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-white/60 mb-1">Resume</p>
            <a
              href="https://drive.google.com/file/d/1099ey_5PfEbByJbnket3ohE1gYPPURxD/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-5">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>

      <div className="select-none pointer-events-none -mt-4 sm:-mt-6">
        <p
          className="text-center font-extrabold text-white/15 leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(5rem, 18vw, 13rem)' }}
        >
          {profile.name.split(' ')[0].toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
