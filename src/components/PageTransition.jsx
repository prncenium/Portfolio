import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function PageTransition({ children, topClass = 'pt-28 sm:pt-32' }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`px-4 sm:px-6 ${topClass} pb-14 sm:pb-20 max-w-6xl mx-auto`}
    >
      {children}
    </motion.div>
  );
}
