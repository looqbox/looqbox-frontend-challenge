import React from 'react';

type ProgressBarProps = {
  color: string;
  value: number;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ color, value, className }) => {
  return (
    <div
      className={`relative h-4 w-full rounded-xl overflow-hidden ${className}`}
      style={{ backgroundColor: '#0000001a' }}
    >
      <div
        className="absolute top-0 left-0 bottom-0 rounded-xl duration-300 transition-all animate-scroll"
        style={{ backgroundColor: `${color}a0`, width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
