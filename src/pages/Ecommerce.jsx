import React from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot';
import { Stacked, Pie, Button, SparkLine } from '../components';

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';

const Ecommerce = () => {
  const blue = { r: 255, g: 128, b: 204 };
  const red = { r: 216, g: 242, b: 130 };
  return (
    <div className='mt-12s'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-cover bg-center'>
          <div className=' flex justify-between items-center '>
            <div className='mt-4'>
              <p className='font-bold text-yellow-100'>Earnings </p>
              <p className='text-2xl font-bold'>&#8377;06,112.33</p>
            </div>
          </div>
          <div className='mb-2'>
            <Button
              color='black'
              bgColor={red}
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3 '>
                <span className='text-lg font-semibold '>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-600 mt-1 '>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10  flex-wrap justify-center '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between '>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4 '>
              <div className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl '>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </div>
              <div className='flex items-center gap-2 text-green-400  hover:drop-shadow-xl '>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </div>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10 '>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>&#8377;39,693</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-5'>
                <p>
                  <span className='text-3xl font-semibold'>
                    &#8377;1,48,693
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-10'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkLine'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className=' mt-10'>
                <Button
                  color='white'
                  bgColor={blue}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <Stacked width='320px' height='360px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;