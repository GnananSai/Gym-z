import React from 'react';

const Table = ({ title, subtitle, day, exercises }) => {
  return (
    <div className="max-w-full mx-auto md:p-4 md:mt-10 mt-7">
      <div className='flex items-start sm:items-center gap-4 sm:gap-10 mb-10'>
        <h2 className="text-red-600 font-bold text-xl sm:text-3xl">{day}</h2>
        <h1 className="text-white font-bold text-xl sm:text-3xl">{title}</h1>
        <h3 className="text-gray-400 text-xl sm:text-3xl">{subtitle}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mt-2 text-white border-collapse text-sm sm:text-xl mb-4">
          <thead className="bg-black text-white">
            <tr>
              <th className="border border-gray-700 p-4 sm:p-7 rounded-tl-lg bg-white text-black font-extrabold text-lg sm:text-2xl">
                Exercise
              </th>
              <th className="border border-gray-700 p-4 sm:p-7 bg-white text-black font-extrabold text-lg sm:text-2xl">
                Sets x Reps
              </th>
              <th className="border border-gray-700 p-4 sm:p-7 bg-white text-black font-extrabold text-lg sm:text-2xl">
                Target Muscle
              </th>
              <th className="border border-gray-700 p-4 sm:p-7 rounded-tr-lg bg-white text-black font-extrabold text-lg sm:text-2xl">
                Practical
              </th>
            </tr>
          </thead>
          <tbody className="bg-black">
            {exercises.map((exercise, index) => (
              <tr key={index} className="border border-gray-700">
                <td className="p-4 sm:p-7 sm:px-10 font-bold border border-gray-700">
                  {exercise.exercise}
                </td>
                <td className="p-4 sm:p-7 sm:px-10 font-bold border border-gray-700">
                  {exercise.setsReps}
                </td>
                <td className="p-4 sm:p-7 sm:px-10 border border-gray-700">
                  {exercise.targetMuscle || ''}
                </td>
                <td className="p-4 sm:p-7 sm:px-10 border border-gray-700">
                  {exercise.practical || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
