import React from 'react';
import CircularProgress from './CircularProgress';
import BMIGauge from './BMIGauge';

const YourInfo = () => {
  return (
    <div className='flex flex-col w-full mt-4'>
      {/* Row1 */}
      <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 mb-5 sm:mb-10'>
        <div className='bg-white text-black p-5 sm:p-7 rounded-t-2xl w-full sm:w-1/4 font-bold'>
          <h1 className='font-bold mb-4 text-2xl sm:text-3xl'>Harsh Kumar</h1>
          <div className='flex justify-between mb-3 text-lg sm:text-xl'>
            <p>Age</p>
            <p className='font-bold'>22</p>
          </div>
          <div className='flex justify-between mb-3 text-lg sm:text-xl'>
            <p>Height</p>
            <p className='font-bold'>6'1</p>
          </div>
          <div className='flex justify-between mb-3 text-lg sm:text-xl'>
            <p>Weight</p>
            <p className='font-bold'>89KG</p>
          </div>
          <div className='flex justify-between gap-5 text-lg sm:text-xl'>
            <p>Current Lifestyle</p>
            <p className='font-bold'>Active</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row bg-gradient-to-b from-[#363636] to-[#000000] rounded-2xl p-5 sm:p-7 justify-between w-full sm:w-1/2'>
          <div className='flex-col mb-5 sm:mb-0 sm:mr-5 font-bold'>
            <p className='mb-5 sm:mb-24 text-2xl sm:text-3xl'>Primary Goal</p>
            <p className='text-xl sm:text-2xl'>Gain Strength and lose fat</p>
          </div>
          <img className='w-full sm:w-3/5 h-fit ' src="/PrimaryGoal.png" alt="Primary Goal" />
        </div>

        <div className='flex bg-gradient-to-b from-[#363636] to-[#000000] rounded-2xl p-5 justify-between w-full md:w-1/4'>
                <div className='flex-col font-bold p-1'>
                    <p className='mb-16 text-4xl '>Body Type</p>
                    <p className='text-2xl'>You are a Mesomorph</p>
                </div>
                <img className='w-3/6 h-fit' src="/Body.png"></img>
            </div>
      </div>

      {/* Row2 */}
      <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 mb-5 sm:mb-10'>
        <div className='flex flex-col sm:flex-row bg-gradient-to-b from-[#363636] to-[#000000] rounded-2xl p-5 justify-between w-full sm:w-1/4'>
          <div className='flex-col font-bold p-1'>
            <p className='mb-2 text-3xl sm:text-4xl'>Sleep</p>
            <div className='flex justify-between px-5 mb-5 mt-5'>
              <CircularProgress time={6} />
              <CircularProgress time={8} />
            </div>
            <p className='text-lg sm:text-xl font-normal'>We recommend you to increase your sleep time by 2 Hours</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row bg-gradient-to-b from-[#363636] to-[#000000] rounded-2xl p-5 sm:p-7 justify-between w-full sm:w-1/2'>
          <div className='flex-col mb-5 sm:mb-0 sm:mr-5 font-bold'>
            <p className='text-2xl sm:text-3xl'>Calendar</p>
            <p className='text-lg sm:text-xl font-normal text-[#929292] mt-5'>Tap day to know about it</p>
            <div className='flex w-full gap-2 mt-2'>
              <p className='text-lg sm:text-xl'>26 September</p>
              <p className='text-lg sm:text-xl text-[#FF2225]'>- Chest Day</p>
            </div>
            <p className='font-normal text-lg sm:text-xl mt-10'>You have to follow <br />Day 1 to train your chest</p>
          </div>
          <img className='w-full sm:w-2/5 h-fit' src="/Calender.png" alt="Calendar" />
        </div>

        <div className='flex bg-white rounded-2xl p-5 justify-between w-full sm:w-1/4'>
          <BMIGauge bmi={20} />
        </div>
      </div>

      {/* Row 3 */}
      <div className='flex gap-10'>
        <div className='flex bg-white rounded-t-2xl p-5 justify-between  w-full md:w-1/4 text-black'>
                <div className='flex-col font-bold p-1 py-6'>
                    <p className='mb-16 text-4xl '>Cardio</p>
                    <p className='text-xl'>20 Mins <br></br> Cardio Daily is recommended</p>
                </div>
                <img className='w-3/6 h-fit' src="/Cardio.png"></img>
            </div>
        </div>
    </div>
  );
};

export default YourInfo;
