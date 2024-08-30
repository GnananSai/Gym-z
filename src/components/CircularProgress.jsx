import React from 'react';

const CircularProgress = ({ time }) => {
  const totalHours = 12;
  const percentage = (time / totalHours) * 100;
  const circumference = 2 * Math.PI * 18;
  
  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <div className="absolute flex items-center justify-center w-full h-full">
        <span className="text-lg font-bold text-white">{time} Hr</span>
      </div>
      <svg className="w-full h-full transform -rotate-90">
        <circle
          className="text-gray-300"
          strokeWidth="15"
          stroke="currentColor"
          fill="transparent"
          r="32"
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-[#05FF00]"
          strokeWidth="15"
          strokeDasharray={`${circumference}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="32"
          cx="50%"
          cy="50%"
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
