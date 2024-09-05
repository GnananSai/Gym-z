import React, { useState } from 'react';

const NameInput = ({ question, onNameChange, name }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">{question}</h1> {/* Display the question prop */}
      <div className="w-96 relative">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)} // Trigger onNameChange callback on input change
          className="w-full h-16 py-2 px-4 bg-transparent border-2 border-[#313131] rounded-lg text-center text-2xl font-inter font-bold"
          placeholder="Your Name"
        />
      </div>
    </div>
  );
};

export default NameInput;
