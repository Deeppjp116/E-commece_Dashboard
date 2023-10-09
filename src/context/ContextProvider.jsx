import { click } from '@syncfusion/ej2-react-grids';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initalState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setisClicked({ ...initalState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setactiveMenu,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
