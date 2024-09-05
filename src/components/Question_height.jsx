import React, { useState } from 'react';

const HeightInput = ({ onHeightChange, height }) => {
  const [feet, setFeet] = useState(height ? parseInt(height.split(" ")[0]) : 6);
  const [inches, setInches] = useState(height ? parseInt(height.split(" ")[2]) : 1);

  const handleFeetChange = (e) => {
    const newFeet = Number(e.target.value);
    setFeet(newFeet);
    onHeightChange(newFeet, inches);
  };

  const handleInchesChange = (e) => {
    const newInches = Number(e.target.value);
    setInches(newInches);
    onHeightChange(feet, newInches);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-8">What is Your Height?</h1>
      <div className="flex space-x-4">
        <div className="relative">
          <select
            value={feet}
            onChange={handleFeetChange}
            className="appearance-none bg-[#000000] border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#000000] focus:border-gray-500 text-xl max-h-40 overflow-y-auto"
          >
            {[...Array(8)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} feet
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="relative">
          <select
            value={inches}
            onChange={handleInchesChange}
            className="appearance-none bg-[#000000] border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#000000] focus:border-gray-500 text-xl max-h-40 overflow-y-scroll"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i}>
                {i} inches
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeightInput;
