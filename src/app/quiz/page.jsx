"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar';

// Updated options with multiple questions
const questions = [
  {
    question: "What is Your Primary Goal?",
    options: [
      { label: "Muscle Gain", icon: "💪" },
      { label: "Burning Fat", icon: "🔥" },
      { label: "Gaining Strength", icon: "🏋️‍♂️" },
    ],
  },
  {
    question: "How Many Days Can You Commit to Working Out Per Week?",
    options: [
      { label: "1-2 Days", icon: "📅" },
      { label: "3-4 Days", icon: "📆" },
      { label: "5-6 Days", icon: "🗓️" },
    ],
  },
  {
    question: "What is Your Fitness Experience Level?",
    options: [
      { label: "Beginner", icon: "🔰" },
      { label: "Intermediate", icon: "🏅" },
      { label: "Advanced", icon: "🏆" },
    ],
  },
  // Add more questions as needed
];

export default function GoalSelection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option.label,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col mt-20">
      <Navbar className="sticky top-0 bg-black" />

      <div className="w-full max-w-3xl mx-auto p-4 pt-16 relative"> {/* Added pt-16 to ensure content doesn't overlap with navbar */}
        
        {/* Back Button - Positioned on the left, aligned with the content */}
        <button
          className="absolute top-4 left-4 p-2 rounded-full bg-transparent"
          onClick={handlePrevious}
          aria-label="Back"
          disabled={currentQuestionIndex === 0} // Disable back button on the first question
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div
          className="h-1 rounded-full mb-8 mt-8"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #C1C1C1 22.5%, #A4A4A4 79%, #000000 100%)'
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #000000 0%, #05FF00 100%)',
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

        {/* Title */}
        <h1 className="font-inter text-center text-2xl font-bold">
          {currentQuestion.question}
        </h1>

        {/* Options */}
        <div className="mt-8 space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.label}
              className={`w-full flex items-center justify-between p-4 bg-transparent rounded-lg border-2 border-gray-700 hover:bg-gray-700 ${answers[currentQuestionIndex] === option.label ? 'bg-gray-600' : ''
                }`}
              onClick={() => handleOptionChange(option)}
            >
              <div className="flex items-center">
                <span className="mr-2 text-2xl">
                  {option.icon}
                </span>
                {option.label}
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={answers[currentQuestionIndex] === option.label}
                onChange={() => handleOptionChange(option)}
              />
            </button>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-center mt-8">
          Goal-oriented workouts will be created based on your selection.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center">
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200"
              onClick={handleNext}
              disabled={!answers[currentQuestionIndex]} // Disable Next until an option is selected
            >
              Next
            </button>
          ) : (
            <button
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200"
              onClick={() => alert(JSON.stringify(answers))}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
