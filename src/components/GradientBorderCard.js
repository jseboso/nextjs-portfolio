import React from 'react';

const GradientBorderCard = ({ children, className = '', innerClassName = '', rounded = 'rounded-2xl' }) => {
  return (
    <div className={`p-[2px] bg-brandGradient ${rounded} ${className}`}>
      <div className={`h-full w-full bg-light dark:bg-dark ${rounded} ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorderCard;
