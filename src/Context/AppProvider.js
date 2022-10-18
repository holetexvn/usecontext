import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);

  const themeStyle = {
    day: {
      backgroundColor: 'rgb(228, 228, 228)',
      color: 'black',
    },
    night: {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then((res) => res.json())
      .then(({ data }) => {
        console.log({ data });
        setUserInfo(data);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ userInfo, isOpen, setIsOpen, themeStyle: themeStyle[isDay ? 'day' : 'night'], isDay, setIsDay }}
    >
      {children}
    </AppContext.Provider>
  );
};
