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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const labels = ['Art', 'Tech', 'Education', 'Sports', 'Health', 'Music', 'Science'];
const data = {
  labels,
  datasets: [
    {
      label: 'Sponsorship Amount ($K)',
      data: [120, 200, 150, 90, 170, 130, 110],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(100, 200, 100, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(100, 200, 100, 1)',
      ],
      borderWidth: 2,
      borderRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Sponsorship Amounts by Category',
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

const SponsorshipCategoryChart = () => (
  <div className="p-4 bg-white shadow-lg rounded-lg" style={{ maxWidth: '700px', margin: '2rem auto' }}>
    <Bar data={data} options={options} />
  </div>
);

export default SponsorshipCategoryChart;
