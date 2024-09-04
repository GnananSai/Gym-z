import React from 'react';

const WaterIntakeBar = ({ currentIntake, recommendedIntake }) => {
  // Calculate the width percentage for the current intake
  const percentage = (currentIntake / recommendedIntake) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 mb-10">
      <h2 className="text-white text-3xl mb-10 font-inter font-bold">Water Intake</h2>
      <div className="relative h-10 sm:h-14 bg-white rounded-lg sm:rounded-2xl overflow-hidden"> {/* Reduced rounded borders for mobile */}
        <div
          className="h-full bg-[#3CC5FF]"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-white text-sm mt-2">
        <span>Recommended</span>
        <span>Your Current</span>
      </div>
      <div className="flex justify-between text-white text-sm">
        <span>{recommendedIntake}</span>
        <span>{currentIntake}</span>
      </div>
    </div>
  );
};

export default WaterIntakeBar;
