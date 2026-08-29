import { motion } from 'framer-motion';

// Envoltorio para la aparición al hacer scroll (equivalente al [data-reveal] del prototipo),
// implementado con Framer Motion en vez de un IntersectionObserver manual.
export default function Reveal({ as: Tag = 'div', index = 0, style, children, ...rest }) {
  const delay = (index % 4) * 0.07;
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      style={style}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
