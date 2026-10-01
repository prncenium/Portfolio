import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMoreHorizontal } from 'react-icons/fi';
import { profile } from '../data/content';

const links = [
  { id: 'experience-section', label: 'Experience' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'projects-section', label: 'Work' },
  { id: 'contact-section', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [pinned, setPinned] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 80) {
        setCollapsed(false);
      } else if (currentY > lastY.current) {
        setCollapsed(true);
        setPinned(false);
      } else if (currentY < lastY.current) {
        setCollapsed(false);
      }

      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expanded = !collapsed || pinned;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => {
        setTimeout(() => scrollToSection(id), 50);
      });
    } else {
      scrollToSection(id);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4"
      onMouseEnter={() => setPinned(true)}
      onMouseLeave={() => setPinned(false)}
    >
      <div
        className="flex items-center gap-6 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-lg shadow-slate-900/5 rounded-full pl-3 pr-4 py-3.5 transition-all duration-300"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)' }}
      >
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-8 h-8 rounded-full object-cover border border-slate-900/10"
          />
          <span className="font-extrabold text-sm tracking-wide text-slate-900 uppercase hidden sm:inline">
            Prince
          </span>
        </Link>

        <div
          className={`hidden md:flex items-center gap-5 overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'max-w-[400px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={handleNavClick(l.id)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div
          className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'max-w-[140px] opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-white bg-[var(--accent)] rounded-full px-4 py-1.5 hover:opacity-90 transition whitespace-nowrap"
          >
            Resume
          </a>
        </div>

        {!expanded && (
          <button
            type="button"
            aria-label="Show navigation menu"
            onClick={() => setPinned(true)}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-full text-slate-700 hover:bg-white/60 transition"
          >
            <FiMoreHorizontal size={18} />
          </button>
        )}

        <button
          className="md:hidden text-slate-900 px-1"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          className="absolute top-16 flex flex-col gap-4 px-6 py-6 backdrop-blur-xl backdrop-saturate-150 rounded-3xl border border-white/40 shadow-lg shadow-slate-900/10"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={handleNavClick(l.id)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="accent-text text-sm font-semibold">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
