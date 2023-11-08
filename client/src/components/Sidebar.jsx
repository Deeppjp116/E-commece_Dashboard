import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectMenu,
  selectfeature,
  selectscreenSize,
  setMenu,
  sideani,
} from '../features/featuresSclice';

const Sidebar = () => {
  const screenSize = useSelector(selectscreenSize);
  const currentColor = useSelector(selectfeature);
  const isActiveMenu = useSelector(selectMenu);
  const dispatch = useDispatch();

  const handleCloseSideBar = () => {
    if (isActiveMenu && screenSize <= 900) {
      dispatch(setMenu(false));
    }
  };
  const activeLink =
    'flex  items-center gap-2 pl-2 pt-2 pb-2 rounded-lg text-white text-md m-2 ';
  const normalLink =
    'flex  items-center gap-2 pl-2 pt-3 pb-1 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:text-white hover:text-black hover:bg-light-gray m-2';

  const sidebarClasses = isActiveMenu
    ? 'transform translate-x-0 transition-transform duration-300'
    : 'transform -translate-x-72 transition-transform duration-300';

  return (
    <div
      className={`ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10  ${sidebarClasses}
      `}
    >
      {isActiveMenu && (
        <>
          <div className='flex justify-between items-center '>
            <Link
              to='/'
              onClick={() => handleCloseSideBar}
              className='items-center gap-3 ml-2 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white  text-slate-900 '
            >
              <SiShopware /> <span>Shoopy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => dispatch(setMenu(false))}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-8 '>
            {links.map((items) => {
              const { title, links } = items; // Corrected to 'links' here

              return (
                <div key={title}>
                  <p className='text-gray-400 m-3 mt-2 uppercase'>{title}</p>
                  {links.map((Link) => {
                    // Corrected to 'links' here
                    const { name, icon } = Link;

                    return (
                      <NavLink
                        to={`/${name}`}
                        key={name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : '',
                        })}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {icon}
                        <span className='capitalize'>{name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
