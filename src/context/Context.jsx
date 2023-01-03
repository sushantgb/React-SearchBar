import React, { useState, useContext } from 'react';

/* creating the context */
const AppContext = React.createContext();
/* defining the provider */
const ContextProvider = ({ children }) => {
  /* setting changeable values */
  const [contextValue, setContextValue] = useState('All');
  return (
    <AppContext.Provider value={[contextValue, setContextValue]}>
      {children}
    </AppContext.Provider>
  );
};

/* creating a custom global context hook to access across the app */
const useGlobalContext = () =>{
  return useContext(AppContext);
};

export { AppContext, ContextProvider, useGlobalContext };
