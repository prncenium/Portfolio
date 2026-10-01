import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/content';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
    const section = document.getElementById('about-section');
    if (!section) return;

    const handleScroll = () => {
      setVisible(section.getBoundingClientRect().top <= 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const phone = profile.phone.replace(/\D/g, '');

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-4 sm:right-6 bottom-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
