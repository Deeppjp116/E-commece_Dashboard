import React, { useEffect, useState } from 'react';
import { BsBoxSeam, BsCurrencyRupee } from 'react-icons/bs';
import GoPrimitiveDot from '@meronex/icons/go/GoPrimitiveDot';
import { Stacked, Pie, Button, SparkLine } from '../components';

import { SparklineAreaData, ecomPieChartData, salesData } from '../data/dummy';

import { useDispatch, useSelector } from 'react-redux';
import { selectfeature } from '../features/featuresSclice';
import productdata, { totalProductsdata } from '../features/productdata';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiBarChart } from 'react-icons/fi';
import { selectcustomers } from '../features/customerdatamodle';
import { selectsalesdata } from '../features/salesdatamodle';
import axios from 'axios';

const Ecommerce = () => {
  const totalProducts = useSelector(totalProductsdata);
  const currentColor = useSelector(selectfeature);
  const customersdata = useSelector(selectcustomers);
  const sales = useSelector(selectsalesdata);

  const [sparklinedata, setsparklinedata] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get('http://localhost:9999/ecommerce')
      .then((response) => {
        const newdata = response.data;
        setsparklinedata(newdata);
        console.log(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
          <div className='bg-white dark:bg-secondary-dark-bg text-gray-700 p-4 rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='bg-white text-3xl w-12 h-12 flex items-center justify-center rounded-full'>
                  <span
                    style={{
                      color: '#03C9D7',
                      backgroundColor: '#E5FAFB',
                    }}
                    className='rounded-full p-3'
                  >
                    {<MdOutlineSupervisorAccount />}
                  </span>
                </div>
                <p className='text-2xl font-semibold mt-4'>
                  {customersdata.length}
                </p>
              </div>
              <p className={`text-xl text-red-600`}>-4%</p>
            </div>
            <p className='text-lg mt-2'>Customers</p>
          </div>
          <div className='bg-white dark:bg-secondary-dark-bg text-gray-700 p-4 rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='bg-white text-3xl w-12 h-12 flex items-center justify-center rounded-full'>
                  <span
                    style={{
                      color: 'rgb(255, 244, 229)',
                      backgroundColor: 'rgb(254, 201, 15)',
                    }}
                    className='rounded-full p-3'
                  >
                    {<BsBoxSeam />}
                  </span>
                </div>
                <p className='text-2xl font-semibold mt-4'>
                  {totalProducts.length}
                </p>
              </div>
              <p className={`text-xl text-green-600`}>+23%</p>
            </div>
            <p className='text-lg mt-2'>Products</p>
          </div>
          <div className='bg-white dark:bg-secondary-dark-bg text-gray-700 p-4 rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='bg-white text-3xl w-12 h-12 flex items-center justify-center rounded-full'>
                  <span
                    style={{
                      color: 'rgb(0, 194, 146)',
                      backgroundColor: 'rgb(235, 250, 242)',
                    }}
                    className='rounded-full p-3'
                  >
                    <HiOutlineRefresh />
                  </span>
                </div>
                <p className='text-2xl font-semibold mt-4'>5677</p>
              </div>
              <p className={`text-xl text-red-600`}>-12%</p>
            </div>
            <p className='text-lg mt-2'>Refunds</p>
          </div>
          <div className='bg-white dark:bg-secondary-dark-bg text-gray-700 p-4 rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='bg-white text-3xl w-12 h-12 flex items-center justify-center rounded-full'>
                  <span
                    style={{
                      color: 'rgb(228, 106, 118)',
                      backgroundColor: 'rgb(255, 244, 229)',
                    }}
                    className='rounded-full p-3'
                  >
                    <FiBarChart />
                  </span>
                </div>
                <p className='text-2xl font-semibold mt-4'>{sales.length}</p>
              </div>
              <p className={`text-xl text-green-600`}>+38%</p>
            </div>
            <p className='text-lg mt-2'>Sales</p>
          </div>
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
