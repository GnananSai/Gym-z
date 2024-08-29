"use client";

import React, { useState } from 'react';
import Question_option from '@/components/Question_option';

const quizData = [
  {
    type: 'option',
    question: "Your Gender?",
    options: [
      { label: "Male"},
      { label: "Female"}
    ],
  },
  {
    type: 'option',
    question: "How long have you been working out?",
    options: [
      { label: "Beginner", icon: "" },
      { label: "Intermediate", icon: "" },
      { label: "Advanced", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "What is your goal?",
    options: [
      { label: "Aesthetic", icon: "" },
      { label: "Power Lifter", icon: "" },
      { label: "Weight Loss", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "What are your primary target muscles?",
    options: [
      { label: "Back", icon: "" },
      { label: "Chest", icon: "" },
      { label: "Arms", icon: "" },
      { label: "Shoulders", icon: "" },
      { label: "Legs", icon: "" },
      { label: "Abs", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "What do you prefer?",
    options: [
      { label: "Strength training", icon: "" },
      { label: "Cardio", icon: "" },
      { label: "Both", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "How would you describe your physical build right now?",
    options: [
      { label: "Skinny", icon: "" },
      { label: "Obese", icon: "" },
      { label: "Skinny Fat", icon: "" },
      { label: "Muscular", icon: "" } 
    ],
  },
  {
    type: 'option',
    question: "What describes you the best?",
    options: [
      { label: "Harder for you to lose weight than gain weight.", icon: "" },
      { label: "Harder for you to gain weight than to lose it.", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "How many days can you realistically workout?",
    options: [
      { label: "2 days", icon: "" },
      { label: "3-4 days", icon: "" },
      { label: "4-5 days", icon: "" },
      { label: "6 days", icon: "" }
    ],
  },
  {
    type: 'option',
    question: "What is your blood type?",
    options: [
      { label: "A", icon: "" },
      { label: "B", icon: "" },
      { label: "O", icon: "" },
      { label: "AB", icon: "" }
    ],
  },
  {
    type: 'option',
    question: "What is your dietary preference?",
    options: [
      { label: "Vegetarian", icon: "" },
      { label: "Non-Vegetarian", icon: "" },
      { label: "Eggetarian", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "How much is daily water intake?",
    options: [
      { label: "Above 2L", icon: "" },
      { label: "Below 2L", icon: "" },
    ],
  },
  {
    type: 'option',
    question: "How is your sleep cycle?",
    options: [
      { label: "7-8 hours or more", icon: "" },
      { label: "5-6 hours", icon: "" },
      { label: "less than 5 hours", icon: "" }
    ],
  },
];

export default function GoalSelection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option.label,
    }));
  };

  const handleAgeChange = (age) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: age,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
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
      <div className="w-full max-w-3xl mx-auto p-4 pt-16 relative">
        {/* Back Button */}
        <button
          className="absolute top-4 left-4 p-2 rounded-full bg-transparent"
          onClick={handlePrevious}
          aria-label="Back"
          disabled={currentQuestionIndex === 0}
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
              width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%`
            }}
          ></div>
        </div>

        {/* Render Question Component based on type */}
        {currentQuestion.type === 'age' ? (
          <AgeGenderForm
            question={currentQuestion.question}
            onAgeChange={handleAgeChange}
            selectedAge={answers[currentQuestionIndex]}
          />
        ) : (
          <Question_option
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={answers[currentQuestionIndex]}
            onOptionChange={handleOptionChange}
          />
        )}

        {/* Footer Text */}
        <p className="text-gray-500 text-center mt-8">
          Goal-oriented workouts will be created based on your selection.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center">
          {currentQuestionIndex < quizData.length - 1 ? (
            <button
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200"
              onClick={handleNext}
              disabled={!answers[currentQuestionIndex]}
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
