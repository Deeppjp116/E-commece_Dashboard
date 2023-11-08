import React from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot';
import { Stacked, Pie, Button, SparkLine } from '../components';

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  salesData,
} from '../data/dummy';

import { useSelector } from 'react-redux';
import { selectfeature } from '../features/featuresSclice';

const Ecommerce = () => {
  const currentColor = useSelector(selectfeature);

  return (
    <div className='container mx-auto pt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div
          className='bg-white dark:bg-secondary-dark-bg p-6 lg:p-8 rounded-lg shadow-lg'
          style={{ background: currentColor }}
        >
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-4xl font-extrabold text-blue-600'>Earnings</p>
              <p className='text-5xl font-extrabold'>&#8377;06,112.33</p>
            </div>
            <Button
              data={salesData}
              color='white'
              bgColor={{ r: 50, g: 205, b: 50 }}
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:bg-secondary-dark-bg text-gray-700 p-4 rounded-lg shadow-md'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <div className='bg-white text-3xl w-12 h-12 flex items-center justify-center rounded-full'>
                    <span
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className='rounded-full p-3'
                    >
                      {item.icon}
                    </span>
                  </div>
                  <p className='text-2xl font-semibold mt-4'>{item.amount}</p>
                </div>
                <p className={`text-xl text-${item.pcColor}`}>
                  {item.percentage}
                </p>
              </div>
              <p className='text-lg mt-2'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-lg shadow-lg'>
          <div className='flex justify-between'>
            <p className='text-4xl font-extrabold text-green-500'>
              Revenue Updates
            </p>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <GoPrimitiveDot />
                <span>Expense</span>
              </div>
              <div className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <GoPrimitiveDot />
                <span>Budget</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 mt-8'>
            <div>
              <p className='text-3xl font-semibold text-green-500'>
                &#8377;39,693
              </p>
              <p className='text-gray-600 mt-2'>Budget</p>
            </div>
            <div>
              <p className='text-3xl font-semibold text-red-500'>
                &#8377;1,48,693
              </p>
              <p className='text-gray-600 mt-2'>Expense</p>
            </div>
          </div>
          <div className='mt-10'>
            <SparkLine
              currentColor={currentColor}
              id='line-sparkLine'
              type='Line'
              height='80px'
              width='100%'
              data={SparklineAreaData}
              color={currentColor}
            />
          </div>
          <div className='mt-10'>
            <Button
              color='white'
              bgColor='bg-blue-500'
              text='Download Report'
              borderRadius='10px'
            />
          </div>
        </div>
        <div className='rounded-lg overflow-hidden'>
          <Stacked width='100%' height='360px' />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
