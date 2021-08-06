import { createContext, useContext, useState } from "react";

const ButtonStateContext = createContext();

export const ButtonStateProvider = ({ children }) => {
  const [buttonState, setButtonState] = useState({
    sortAsc: false,
    sortDsc: false,
    moreThan: false,
    lessThan: false
  });
  return (
    <ButtonStateContext.Provider value={{ buttonState, setButtonState }}>
      {children}
    </ButtonStateContext.Provider>
  );
};

export const useButtonState = () => useContext(ButtonStateContext);
