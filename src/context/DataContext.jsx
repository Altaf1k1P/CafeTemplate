import React, { createContext, useContext, useState, useEffect } from 'react';
import rowData from '../Data/Data.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
         setData(rowData);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
