import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    let userInfo = {
        name:"rohit",
        address:"Kalanki,syuchtar",
        age:12

    }
    return (
        <GlobalContext.Provider value={userInfo}>
            {children}
        </GlobalContext.Provider>
    );
};
