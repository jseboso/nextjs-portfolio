import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const Spiral = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M55 62 C42 66 30 56 32 44 C34 30 50 22 64 28 C80 35 84 54 72 66 C60 78 38 76 30 62" />
  </svg>
);

const Squiggle = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M12 70 C12 55 32 55 32 70 C32 85 52 85 52 70 C52 55 72 55 72 70 C72 85 88 85 88 76" />
  </svg>
);

const ZigZag = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M12 34 L32 76 L52 34 L72 76 L88 34" />
  </svg>
);

const Star = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M50 8 L61 38 L94 38 L67 58 L78 90 L50 70 L22 90 L33 58 L6 38 L39 38 Z" />
  </svg>
);

const Diamond = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M50 6 L94 50 L50 94 L6 50 Z" />
  </svg>
);

const RingDot = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <circle {...stroke} cx="50" cy="50" r="34" />
  </svg>
);

const CurlyDoodle = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M10 55 C-4 40 8 18 26 24 C40 29 40 46 26 50 C14 53 12 40 22 34 C34 27 50 34 54 48 C58 62 46 72 34 66" />
  </svg>
);

const Arrow = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M20 85 C35 65 20 45 42 25 M30 22 L44 26 L37 40" />
  </svg>
);

const Heart = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M50 32 C42 12 12 15 12 40 C12 65 50 88 50 88 C50 88 88 65 88 40 C88 15 58 12 50 32 Z" />
  </svg>
);

const Plus = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M50 15 L50 85 M15 50 L85 50" />
  </svg>
);

const Triangle = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M50 12 L88 82 L12 82 Z" />
  </svg>
);

const Wave = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M10 60 C30 20 70 20 90 60" />
  </svg>
);

const Bolt = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path {...stroke} d="M55 8 L25 55 L45 55 L38 92 L78 40 L55 40 Z" />
  </svg>
);

const SHAPES = {
  spiral: Spiral, squiggle: Squiggle, zigzag: ZigZag, star: Star, diamond: Diamond,
  ring: RingDot, curl: CurlyDoodle, arrow: Arrow,
  heart: Heart, plus: Plus, triangle: Triangle, wave: Wave, bolt: Bolt,
};

// Base sizes are tuned for a ~1280px viewport. The vw-driven middle term keeps
// shapes shrinking for phones instead of floor-clamping to a size that's
// oversized on a narrow screen, while still growing well past the base size on
// wide desktop/ultrawide monitors.
const responsiveSize = (base) =>
  `clamp(${Math.round(base * 0.48)}px, ${((base / 1280) * 100).toFixed(2)}vw, ${Math.round(base * 2.3)}px)`;

const SHAPE_TYPES = [
  'curl', 'star', 'squiggle', 'diamond', 'spiral', 'zigzag', 'ring', 'arrow',
  'heart', 'plus', 'triangle', 'wave', 'bolt',
];
const BAND_HEIGHT = 2700;
const BAND_COUNT = 5;
const SHAPES_PER_BAND = 9;
const SIZE_RANGE = [190, 270];
const ROTATE_RANGE = [-18, 18];

const randomBetween = (min, max) => min + Math.random() * (max - min);

// Scatters shapes with a per-slot vertical jitter (so a whole band can't
// randomly cluster together) but a fully random x, so nothing lines up into
// columns. Called client-side only (see useEffect below) so every fresh page
// load gets a new arrangement without causing an SSR/client hydration mismatch.
const generateShapes = () => {
  const shapes = [];
  const slotHeight = BAND_HEIGHT / SHAPES_PER_BAND;
  let key = 0;
  for (let band = 0; band < BAND_COUNT; band++) {
    for (let slot = 0; slot < SHAPES_PER_BAND; slot++) {
      shapes.push({
        key: key++,
        type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
        top: band * BAND_HEIGHT + slot * slotHeight + randomBetween(0, slotHeight * 0.7),
        x: randomBetween(4, 92),
        size: randomBetween(...SIZE_RANGE),
        rotate: randomBetween(...ROTATE_RANGE),
        layer: Math.floor(Math.random() * 3),
      });
    }
  }
  return shapes;
};

const ShapeLayer = ({ shapes, y }) => (
  <motion.div className="absolute inset-x-0 top-0" style={{ y }}>
    {shapes.map(({ key, type, top, size, x, rotate }) => {
      const Shape = SHAPES[type];
      const dimension = responsiveSize(size);
      return (
        <div
          key={key}
          className="absolute"
          style={{ top, left: `${x}%`, width: dimension, height: dimension, transform: `rotate(${rotate}deg)` }}
        >
          <Shape className="w-full h-full" />
        </div>
      );
    })}
  </motion.div>
);

const BackgroundGraphics = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShapes(generateShapes());
  }, []);

  const speedFar = shouldReduceMotion ? 0 : 0.08;
  const speedMid = shouldReduceMotion ? 0 : 0.18;
  const speedNear = shouldReduceMotion ? 0 : 0.32;

  const yFar = useTransform(scrollY, (v) => -v * speedFar);
  const yMid = useTransform(scrollY, (v) => -v * speedMid);
  const yNear = useTransform(scrollY, (v) => -v * speedNear);

  const layerY = { 0: yFar, 1: yMid, 2: yNear };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.16] dark:opacity-[0.22] text-dark dark:text-light">
      {[0, 1, 2].map((layer) => (
        <ShapeLayer key={layer} y={layerY[layer]} shapes={shapes.filter((s) => s.layer === layer)} />
      ))}
    </div>
  );
};

export default BackgroundGraphics;
