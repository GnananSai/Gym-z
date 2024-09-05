import React from 'react';

export default function Question_option({ question, options, selectedOption, onOptionChange }) {
  // Check if there are more than 5 options to enable the grid layout
  const isGrid = options.length > 5;

  return (
    <div>
      <h1 className="font-inter text-center text-2xl font-bold">
        {question}
      </h1>

      {/* Options */}
      <div
        className={`mt-8 gap-4 ${isGrid ? 'grid grid-cols-1 md:grid-cols-2' : 'space-y-4'}`}
      >
        {options.map((option) => (
          <button
            key={option.label}
            className={`w-full flex items-center justify-between p-4 bg-transparent rounded-lg border-2 hover:bg-gray-700 ${
              selectedOption === option.label ? 'border-[#22D3FF] text-[#22D3FF] bg-gray-600' : 'border-gray-700'
            }`}
            onClick={() => onOptionChange(option)}
          >
            <div className="flex items-center">
              <span className="mr-2 text-2xl">
                {option.icon}
              </span>
              {option.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
