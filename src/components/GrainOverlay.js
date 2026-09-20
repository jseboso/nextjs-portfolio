import React from 'react';

const GrainOverlay = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"
      aria-hidden="true"
    >
      <svg className="w-full h-full">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
};

export default GrainOverlay;
