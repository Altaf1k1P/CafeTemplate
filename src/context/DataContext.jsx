import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data (replace with real fetch if needed)
    const fetchData = async () => {
      const res = await fetch('/data.json'); // OR your actual API
      const result = await res.json();
      setData(result);
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
