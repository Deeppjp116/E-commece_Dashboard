import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setactiveMenu, screenSize, setScreenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setactiveMenu(false);
    }
  };
  const activeLink =
    'flex  items-center gap-2 pl-2 pt-3 pb-1 rounded-lg text-white text-md m-2';
  const normalLink =
    'flex  items-center gap-2 pl-2 pt-3 pb-1 rounded-lg text-md text-gray-700 dark:text-gra-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center '>
            <Link
              to='/'
              onClick={() => handleCloseSideBar}
              className='items-center gap-3 ml-2 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white  text-slate-900'
            >
              <SiShopware /> <span>Shoopy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() =>
                  setactiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-8 '>
            {links.map((items) => {
              const { title, links } = items;
              return (
                <div key={title}>
                  <p className='text-gray-400 m-3 mt-2 uppercase'>{title}</p>
                  {links.map((Links) => {
                    const { name, icon } = Links;
                    return (
                      <NavLink
                        to={`/${name}`}
                        key={name}
                        onClick={() => handleCloseSideBar}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {icon}
                        <span className='capitalize '>{name}</span>
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
