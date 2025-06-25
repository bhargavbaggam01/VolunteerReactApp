'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler,
  BarController,
  LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler,
  BarController,
  LineController
);

const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
const newUsersData = [
  12, 19, 15, 25, 30, 38, 45, 32, 28, 40, 55, 60, 50, 48, 52, 70, 75, 65,
  58, 62, 80, 85, 90, 78, 72, 68, 88, 95, 105, 100,
];

const movingAverage = (data: number[], windowSize: number) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (i < windowSize - 1) {
      result.push(null);
    } else {
      const window = data.slice(i - windowSize + 1, i + 1);
      const average = window.reduce((a, b) => a + b, 0) / windowSize;
      result.push(average);
    }
  }
  return result;
};

const movingAverageData = movingAverage(newUsersData, 7);

const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: '7-Day Moving Average',
      data: movingAverageData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      yAxisID: 'y',
    },
    {
      type: 'bar' as const,
      label: 'New Users',
      data: newUsersData,
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      borderRadius: 5,
      yAxisID: 'y',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '30-Day New User Growth and Trend',
      font: {
        size: 20,
      },
    },
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const MonthlyTrendChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg" style={{ maxWidth: '1000px', margin: '2rem auto' }}>
      <Chart type='bar' data={data} options={options} />
    </div>
  );
};

export default MonthlyTrendChart;
