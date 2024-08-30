'use client'
import { useState } from 'react';
import YourInfo from './YourInfo';

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState('info'); // State to manage active tab

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <YourInfo/>;
      case 'workout':
        return <Workout />;
      case 'diet':
        return <Diet />;
      default:
        return <YourInfo />;
    }
  };

  return (
    <div className="w-full p-6 px-20 rounded-xl shadow-lg mt-20 mb-20">
      {/* Tabs */}
      <div className="flex justify-center text-center border-b border-gray-300 mb-4 font-bold max-w-4xl text-2xl">
        <div
          className={`w-full cursor-pointer px-4 py-4 ${activeTab === 'info' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('info')}
        >
          YOUR INFO
        </div>
        <div
          className={`w-full cursor-pointer px-4 py-4 ${activeTab === 'workout' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('workout')}
        >
          WORKOUT
        </div>
        <div
          className={`w-full cursor-pointer px-4 py-4 ${activeTab === 'diet' ? 'bg-gradient-to-r from-[#2B2B2B] to-[#424242] text-white rounded-t-xl' : 'bg-gray-100 rounded-t-xl'}`}
          onClick={() => setActiveTab('diet')}
        >
          DIET
        </div>
      </div>

      <div className='text-white flex gap-4 justify-center text-6xl mt-10'>
        <h1 className='text-[#5F5F5F]'>Your</h1>
        <h1 className='inline font-bold'>PLAN IS READY</h1>
      </div>

      {/* Content */}
      <div className="p-4 text-white">
        {renderContent()}
      </div>
    </div>
  );
}

// Example components for each tab


function Workout() {
  return <div>Workout Content</div>;
}

function Diet() {
  return <div>Diet Content</div>;
}
