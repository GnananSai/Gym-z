import React from 'react';

const NutritionTable = () => {
  const foods = [
    { name: 'Fish', grams: 150, protein: 20, carbs: 40, fat: 10 },
    { name: 'Chicken Breast', grams: 100, protein: 25, carbs: 45, fat: 10 },
    { name: 'Soyabean', grams: 150, protein: 10, carbs: 30, fat: 15 },
    { name: 'Beef', grams: 150, protein: 20, carbs: 40, fat: 10 },
    { name: 'Whey', grams: 150, protein: 25, carbs: 40, fat: 13 },
    { name: 'Eggs', grams: 150, protein: 31, carbs: 21, fat: 11 },
    { name: 'Fish', grams: 150, protein: 19, carbs: 40, fat: 7 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto md:p-4 md:mt-10 mt-7">
      <h2 className="text-white font-bold text-2xl sm:text-3xl mb-4">Some Foods to Include in Your Diet</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base mb-4 border-2 border-white rounded-lg overflow-hidden">
          <thead className="bg-white text-black">
            <tr>
              <th className="p-3 sm:p-4 text-left font-extrabold text-lg sm:text-xl">Food</th>
              <th className="p-3 sm:p-4 text-left font-extrabold text-lg sm:text-xl">Nutrients</th>
            </tr>
          </thead>
          <tbody className="bg-black text-white">
            {foods.map((food, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-3 sm:p-4">
                  <div className="font-bold">{food.name}</div>
                  <div className="text-sm text-gray-400">{food.grams} Gms</div>
                </td>
                <td className="p-3 sm:p-4">
                  <div className="flex space-x-4">
                    <span>P - {food.protein}g</span>
                    <span>C - {food.carbs}g</span>
                    <span>F - {food.fat}g</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NutritionTable;