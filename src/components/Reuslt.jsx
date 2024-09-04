'use client'
import { useState } from 'react';
import YourInfo from './YourInfo';
import Workout from './Workout';
import Diet from './Diet';

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState('info'); // State to manage active tab

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <YourInfo />;
      case 'workout':
        return <Workout />;
      case 'diet':
        return <Diet />;
      default:
        return <YourInfo />;
    }
  };

  return (
    <div className="w-full p-2 sm:p-6 px-6 sm:px-20 rounded-xl shadow-lg mt-24 md:mt-20 mb-10 sm:mb-20 sm:w-full">
      {/* Tabs */}
      <div className="flex justify-center text-center border-b border-gray-300 mb-4 font-bold w-full md:w-3/4 ">
        <div
          className={`w-full cursor-pointer px-2 py-2 md:px-4 md:py-4 ${activeTab === 'info' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('info')}
        >
          YOUR INFO
        </div>
        <div
          className={`w-full cursor-pointer px-2 py-2 md:px-4 md:py-4 ${activeTab === 'workout' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('workout')}
        >
          WORKOUT
        </div>
        <div
          className={`w-full cursor-pointer px-2 py-2 md:px-4 md:py-4 ${activeTab === 'diet' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('diet')}
        >
          DIET
        </div>
      </div>

      <div className="text-white flex gap-2 md:gap-4 justify-center text-3xl md:text-6xl mt-6 md:mt-10 w-full">
        <h1 className="text-[#5F5F5F]">Your</h1>
        <h1 className="inline font-bold">PLAN IS READY</h1>
      </div>

      {/* Content */}
      <div className="p-2 sm:p-4 text-white">
        {renderContent()}
      </div>
    </div>
  );
}

// // Example components for each tab
// function Diet() {
//   return <div>Diet Content</div>;
// }
