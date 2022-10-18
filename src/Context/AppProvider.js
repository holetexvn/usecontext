import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then((res) => res.json())
      .then(({ data }) => {
        console.log({ data });
        setUserInfo(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ userInfo }}>
      {children}
    </AppContext.Provider>
  );
};
