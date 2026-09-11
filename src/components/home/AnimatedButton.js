import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AnimatedButton = ({ href, download, className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target={download ? "_blank" : "_self"}
        className={className}
        download={download}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
