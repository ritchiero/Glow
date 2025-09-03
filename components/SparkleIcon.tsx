import React from 'react';

interface SparkleIconProps {
  className?: string;
}

const SparkleIcon: React.FC<SparkleIconProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M50 10 C 40 40, 40 40, 10 50 C 40 60, 40 60, 50 90 C 60 60, 60 60, 90 50 C 60 40, 60 40, 50 10 Z" 
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparkleIcon;