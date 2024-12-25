import React from 'react';

const WeightInput = ({ question, onDropdownChange, selectedOption }) => {
  // Generate weight options from 1 kg to 200 kg
  const weightOptions = Array.from({ length: 200 }, (_, i) => i + 1).map(weight => ({
    label: `${weight} kg`
  }));

  return (
    <div className="flex flex-col items-center space-y-4 bg-black text-white p-4 rounded-lg">
      <label className="font-inter text-center text-2xl font-bold">{question}</label>
      <select
        className="bg-black text-white border font-inter font-bold text-xl border-white rounded-lg p-2 w-32 h-12 mt-4"
        value={selectedOption || ""}
        onChange={onDropdownChange}
      >
        <option value="" disabled>Select weight</option>
        {weightOptions.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeightInput;
