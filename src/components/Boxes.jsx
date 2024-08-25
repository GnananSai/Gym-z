import React from 'react'

export const Boxes = () => {
  return (
    <div>
        <div className="absolute top-0 right-0 bg-black p-4 rounded-lg">
        <div className="text-yellow-400 text-xl font-bold">38:14</div>
        <div className="text-sm text-gray-500">TIME</div>
      </div>
      <div className="absolute top-16 right-0 bg-black p-4 rounded-lg">
        <div className="text-pink-500 text-xl font-bold">165</div>
        <div className="text-sm text-gray-500">EST CALORIES</div>
      </div>
    </div>
  )
}
