// components/Question.js
import React from 'react';

export default function Question_option({ question, options, selectedOption, onOptionChange }) {
  return (
    <div>
      <h1 className="font-inter text-center text-2xl font-bold">
        {question}
      </h1>

      {/* Options */}
      <div className="mt-8 space-y-4">
        {options.map((option) => (
          <button
            key={option.label}
            className={`w-full flex items-center justify-between p-4 bg-transparent rounded-lg border-2 hover:bg-gray-700 ${
              selectedOption === option.label ? 'border-[#05FF00] text-[#05FF00] bg-gray-600' : 'border-gray-700'
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
