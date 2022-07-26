import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import logo from './images/logo.svg';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const today = moment().day();

/* Chart Data and Options */
export const data = {
  labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  datasets: [
    {
      label: '',
      backgroundColor: [
        today === 0 ? '#76B5BC' : '#EC755D',
        today === 1 ? '#76B5BC' : '#EC755D',
        today === 2 ? '#76B5BC' : '#FFFFFF',
        today === 3 ? '#76B5BC' : '#EC755D',
        today === 4 ? '#76B5BC' : '#EC755D',
        today === 5 ? '#76B5BC' : '#EC755D',
        today === 6 ? '#76B5BC' : '#EC755D',
      ],

      hoverBackgroundColor: '#FF9B86',
      borderRadius: 3,
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    },
  ],
};
export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

/* Expenses variables to use in Continued development */
const currentBalance = 921.48;
// eslint-disable-next-line 
const totalWeeklySpend = data.datasets[0].data.reduce(
  (prev, curr) => prev + curr,
  0
);
const prevMonthlySpend = 467.12;
const currMonthlySpend = 478.33;
const increaseMTD = -parseFloat(
  ((prevMonthlySpend - currMonthlySpend) / prevMonthlySpend) * 100
).toFixed(1);
console.log(moment().day());
function App() {
  return (
    <>
      <div className='App balance flex flex-col justify-center items-center'>
        <section className='balance flex flex-row justify-between rounded-2xl shadow'>
          <div className='flex flex-col justify-around'>
            <p>My balance</p>
            <h2>${currentBalance}</h2>
          </div>
          <img src={logo} alt='logo' />
        </section>

        <article className='flex flex-col justify-evenly content-between  rounded-2xl shadow'>
          <h2>Spending - Last 7 days</h2>

          <Bar options={options} data={data} />
          <div className='summary flex flex-row  content-between justify-between '>
            <div className='current flex flex-col'>
              <p>Total this month</p>
              <h1>${currMonthlySpend}</h1>
            </div>
            <div className='compare flex flex-col text-right items-end justify-end text-base'>
              <h3>
                {increaseMTD > 0 ? '+' + increaseMTD : increaseMTD.toString()}%
              </h3>
              <p>from last month</p>
            </div>
          </div>
        </article>

        <div className='attribution'>
          Challenge by{' '}
        {/* eslint-disable-next-line  */}
          <a
            href='https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by <a href='www.ChandaCodes.com'>Chanda Abdul</a>.
        </div>
      </div>
    </>
  );
}

export default App;
