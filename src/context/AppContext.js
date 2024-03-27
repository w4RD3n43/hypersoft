import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [AddTodo, setAddTodo] = useState(false);

  const handleClick = () => {
    setAddTodo(!AddTodo)
    console.log(AddTodo)
  }

  const value = {
    AddTodo, 
    setAddTodo,
    handleClick
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
