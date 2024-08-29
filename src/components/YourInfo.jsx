import React from 'react'

const YourInfo = () => {
  return (
    <div className='flex flex-row w-full'>
        <div className='flex gap-10'>
            <div className='bg-white text-black p-5 rounded-t-2xl'>
                <h1 className='font-bold mb-1'>Harsh Kumar</h1>
                <div className='flex justify-between mb-1'>
                    <p>Age</p>
                    <p className='font-bold'>22</p>
                </div>
                <div className='flex justify-between mb-1'>
                    <p>Height</p>
                    <p className='font-bold'>6'1</p>
                </div>
                <div className='flex justify-between mb-1'>
                    <p>Weight</p>
                    <p className='font-bold'>89KG</p>
                </div>
                <div className='flex justify-between gap-20'>
                    <p>Current Lifestyle</p>
                    <p className='font-bold'>Active</p>
                </div>

            </div>
            <div className='flex bg-gradient-to-b from-[#363636] to-[#000000] rounded-2xl p-5 justify-between'>
                <div className='flex-col mr-5'>
                    <p className='mb-32'>Primary Goal</p>
                    <p>Gain Strenght and lose fat</p>
                </div>
                <img className='w-3/5 h-fit' src="/PrimaryGoal.png"></img>
            </div>
        </div>
    </div>
  )
}

export default YourInfo