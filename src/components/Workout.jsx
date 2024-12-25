import React from 'react';
import Table from '../components/Table';

const Workout = () => {
  const exercises1 = [
    { exercise: 'Bench Press', setsReps: '3×12' },
    { exercise: 'Incline Dumbbell Press', setsReps: '3×12' },
    { exercise: 'Decline Dumbbell Press', setsReps: '3×12' },
    { exercise: 'Cable Flys', setsReps: '4×16' },
    { exercise: 'Tricep Pushdown', setsReps: '4×16' },
    { exercise: 'Skull Crushers', setsReps: '3×8' },
    { exercise: 'Pushups', setsReps: '3 Sets till Burnout' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Table
        title="CHEST"
        subtitle="Upper Body"
        day="DAY 1"
        exercises={exercises1}
      />
      <Table
        title="CHEST"
        subtitle="Upper Body"
        day="DAY 2"
        exercises={exercises1}
      />
    </div>
  );
};

export default Workout;
