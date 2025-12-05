import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const layers = [
    {
      style: {
        background:
          'radial-gradient(circle at 50% 50%, rgba(226,73,25,0.38) 0%, rgba(226,73,25,0.26) 38%, rgba(0,0,0,0) 72%)'
      } as React.CSSProperties,
      delay: 0
    },
    {
      style: {
        background:
          'radial-gradient(circle at 50% 50%, transparent 0%, rgba(58,81,127,0.32) 36%, transparent 82%)'
      } as React.CSSProperties,
      delay: 0.25
    },
    {
      style: {
        background:
          'radial-gradient(ellipse at center, transparent 22%, rgba(0,0,0,0.6) 86%, rgba(0,0,0,0.85) 100%)'
      } as React.CSSProperties,
      delay: 0.5
    }
  ];

  if (reduceMotion) {
    return (
      <>
        <div className="fixed top-0 left-0 w-full h-full bg-black" />
        {layers.map((l, i) => (
          <div key={i} className="fixed top-0 left-0 w-full h-full" style={l.style} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black" />
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-full h-full"
          style={l.style}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: l.delay }}
        />
      ))}
    </>
  );
}
