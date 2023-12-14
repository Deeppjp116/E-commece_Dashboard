import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectfeature,
  setMenu,
  handleClick,
  selectClick,
  setscreenSize,
  selectscreenSize,
  selectMenu,
  UserProfilename,
} from '../features/featuresSclice';
import { NavLink } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const toggleActiveMenu = () => {
    dispatch(setMenu(!setselectMenu));
  };

  const toggleHandelClick = (item) => {
    console.log(item);
    dispatch(handleClick(item));
  };

  const color = useSelector(selectfeature);

  const screenSize = useSelector(selectscreenSize);
  const setselectMenu = useSelector(selectMenu);
  const username = useSelector(UserProfilename);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => dispatch(setscreenSize(window.innerWidth));

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setMenu(false));
    } else {
      dispatch(setMenu(true));
    }
  }, [screenSize]);

  return (
    <>
      <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
        <NavButton
          title='Menu'
          customFunc={toggleActiveMenu}
          color={color}
          icon={<AiOutlineMenu />}
        />
        <div className='flex'>
          <TooltipComponent content='Profile' position='BottomCenter'>
            <div
              className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={() => toggleHandelClick('userProfile')}
            >
              <img
                className='rounded-full w-8 h-8'
                src={avatar}
                alt='user-profile'
              />
              <p>
                <span className='text-gray-400 text-14'>Hi,</span>{' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>
                  {username}
                </span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
          </TooltipComponent>

          <NavLink
            to='/auth0/login'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3'
          >
            Login
          </NavLink>
          <NavLink
            to='/auth0/registration'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            singin
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
