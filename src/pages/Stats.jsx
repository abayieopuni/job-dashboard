import React from 'react';
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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Stats = () => {
  return (
    <>
      <section>
        <h1>Your Website Statistics</h1>
        <p>
          Learn more about the activity and the behavior of the site visitors.
        </p>
        <br />
        <ul>
          <li>
            <button>Button 1</button>
          </li>
          <li>
            <button>Button 2</button>
          </li>
        </ul>

        {/* Bar Chart */}
        <Bar data={data} options={options} />
      </section>
    </>
  );
};

export default Stats;
