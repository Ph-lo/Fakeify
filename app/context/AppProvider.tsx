import React, { createContext, ReactElement } from "react";

interface AppContextType {
  isHome: boolean;
  setIsHome(b: boolean): void;
  data: any;
  setData(v: any): void;
}

export const AppContext = createContext({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [isHome, setIsHome] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any>([]);

  return (
    <AppContext.Provider
      value={{
        isHome,
        setIsHome,
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
