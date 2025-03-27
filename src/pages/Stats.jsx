import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: ' Bar Chart',
    },
  },
};

const weeklyLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const monthlyLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

export const weeklyData = {
  labels: weeklyLabels,
  datasets: [
    {
      label: 'Weekly',
      data: weeklyLabels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const monthlyData = {
  labels: monthlyLabels,
  datasets: [
    {
      label: 'Monthly',
      data: monthlyLabels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Stats = () => {
  const [isWeekly, setIsWeekly] = useState(true);

  return (
    <>
      <section className="border-2 shadow-lg m-6 p-6">
        <h1 className='font-medium '>Your Website Statistics</h1>
        <p className=" text-lg leading-[1.5]">
          Learn more about the activity and the behavior of the site visitors.
        </p>
        <br />
        <ul className="flex justify-center gap-3 ">
          <li>
            <button
              onClick={() => setIsWeekly(true)}
              className={`relative bg-transparent text-lg border-2 outline-0 rounded-md p-1 ${isWeekly ? 'bg-blue-500 ' : 'text-blue-500'}`}
            >
              Weekly Data
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsWeekly(false)}
              className={`relative bg-transparent text-lg border-2 outline-0 rounded-md p-1 ${!isWeekly ? 'bg-blue-500' : 'text-blue-500'}`}
            >
              Monthly Data
            </button>
          </li>
        </ul>

        {/* Bar Chart */}
        <Bar data={isWeekly ? weeklyData : monthlyData} options={options} />
      </section>
    </>
  );
};

export default Stats;
