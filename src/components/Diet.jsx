import React from 'react';
import WaterIntakeBar from './waterIntakeLoadBar'; // Ensure this component is imported
import CalorieGoal from './calorieGoal';
import NutritionTable from './DietTable'

const Diet = () => {
  return (
    <div className='flex flex-col w-full mt-4 gap-8'>
      {/* Row 1 */}
      <CalorieGoal/>
      <WaterIntakeBar currentIntake={10} recommendedIntake={16} /> {/* Add props accordingly */}
      <NutritionTable/>
    </div>
  );
};

export default Diet;
