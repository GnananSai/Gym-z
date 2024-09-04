import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const CalorieGoal = () => {
  // Data for the Pie Chart
  const data = [
    { name: 'Protein', value: 35, color: '#00FF00' }, // Green
    { name: 'Fat', value: 20, color: '#00FF00' },     // Green
    { name: 'Carb', value: 45, color: '#00FF00' },    // Green
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full h-full">

      {/* Calorie Goal Section with Gradient Background */}
      <div className="bg-gradient-to-b from-[#2A2A2A] to-black text-white rounded-2xl p-6 max-w-xs">
        <div className="flex flex-col items-center mb-6">
          <img src="/Food.png" alt="Food" className="w-fit h-fit rounded-full mb-4" />
          <h2 className="text-3xl font-bold">2600 Calories</h2>
          <p className="text-sm text-gray-400">is your recommended Daily Calorie Intake</p>
        </div>
        <div className="text-lg font-semibold space-y-4">
          <p>To maintain</p>
          <p className="text-2xl">2200 Cal</p>
          <p>Shred</p>
          <p className="text-2xl">1800 Cal</p>
          <p>Bulk</p>
          <p className="text-2xl">3000 Cal</p>
        </div>
      </div>

      {/* Pie Chart Section with Increased Margin */}
      <div className="md:ml-12 mt-8 lg:mt-0"> {/* Adjusted margin here */}
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={3}
            dataKey="value"
            cornerRadius={4}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="flex justify-between mt-4 text-white font-bold">
          <p className="text-lg">Protein <span className="text-green-500">35%</span></p>
          <p className="text-lg">Fat <span className="text-green-500">20%</span></p>
          <p className="text-lg">Carb <span className="text-green-500">45%</span></p>
        </div>
      </div>
    </div>
  );
};

export default CalorieGoal;
