import React from 'react';

const BMIGauge = ({ bmi }) => {
  const getRotation = () => {
    const totalRange = 240; // Total degrees covered by the gauge
    const minBMI = 0;
    const maxBMI = 40; // Set the maximum BMI value for the gauge
    const boundedBMI = Math.min(Math.max(bmi, minBMI), maxBMI);
    return (boundedBMI / maxBMI) * totalRange - 120; // Rotate between -120 to +120 degrees
  };

  return (
    <div className="relative w-64 h-64  flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('/Gauge.png')`,
        }}
      />
      {/* Needle */}
      <div
        className="absolute w-1 h-20 bg-black origin-bottom"
        style={{
          transform: `rotate(${getRotation()}deg)`,
          top: '35%', // Adjust the position of the needle
        }}
      />
    </div>
  );
};

export default BMIGauge;
