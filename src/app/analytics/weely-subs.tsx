'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
  labels,
  datasets: [
    {
      label: 'New Subscriptions',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      borderRadius: 5,
    },
    {
      label: 'Cancellations',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Weekly Subscriptions vs Cancellations',
      font: {
        size: 20,
        weight: 'bold' as const,
      },
      padding: {
        bottom: 20,
      }
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

const WeeklyAnalysisChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg" style={{ maxWidth: '800px', margin: 'auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyAnalysisChart;
