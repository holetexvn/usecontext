import React, { createContext } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  )
}
