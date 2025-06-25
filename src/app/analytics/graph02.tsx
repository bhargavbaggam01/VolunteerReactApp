'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler
);

const labels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const data = {
  labels,
  datasets: [
    {
      label: 'Sponsor Signups',
      data: [22, 35, 28, 40, 55, 60, 48, 52, 70, 65, 58, 80],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.15)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointRadius: 5,
      borderWidth: 3,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sponsor Signups (Last 12 Months)',
      font: {
        size: 20,
      },
      padding: {
        bottom: 20,
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.15)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const MonthlySponsorSignupsChart = () => (
  <div className="p-4 bg-white shadow-lg rounded-lg" style={{ maxWidth: '700px', margin: '2rem auto' }}>
    <Line data={data} options={options} />
  </div>
);

export default MonthlySponsorSignupsChart;
