'use client';
import React, { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    favorites: City[],
    setFavorites: Dispatch<SetStateAction<City[]>>
}

const GlobalContext = createContext<ContextProps>({
    favorites: [],
    setFavorites: (): City[] => []
});

export const GlobalContextProvider = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    const [favorites, setFavorites] = useState<[] | City[]>([]);
    return (
        <GlobalContext.Provider value={{favorites, setFavorites}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);