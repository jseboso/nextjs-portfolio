import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SIZES = {
  compact: 'px-4 py-2 text-base',
  default: 'px-6 py-2.5',
  large: 'px-8 py-3 text-lg',
};

const GradientButton = ({ href, children, download, target, size = 'default', className = '', ...rest }) => {
  const sizing = SIZES[size] ?? SIZES.default;
  const resolvedTarget = target || (download ? '_blank' : '_self');

  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <Link
        href={href}
        download={download}
        target={resolvedTarget}
        rel={resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined}
        className={`inline-flex items-center gap-2 rounded-lg font-semibold ${sizing}
          text-light [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]
          bg-brandGradient bg-[length:200%_auto] bg-[0%_50%] hover:bg-[100%_50%]
          transition-[background-position] duration-500 ease-out
          shadow-[0_8px_24px_-8px_rgba(182,62,150,0.55)]
          ${className}`}
        {...rest}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default GradientButton;
