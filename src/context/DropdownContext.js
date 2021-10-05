import { createContext, useState, useContext } from "react";

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [selCity, setSelCity] = useState([]);

  const values = {
    selCity,
    setSelCity,
  };

  return (
    <DropdownContext.Provider value={values}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDrop = () => useContext(DropdownContext);
