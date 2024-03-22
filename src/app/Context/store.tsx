'use client';
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";

interface ContextProps {
    favorites: City[],
    setFavorites: Dispatch<SetStateAction<City[]>>
}

const GlobalContext = createContext<ContextProps>({
    favorites: [],
    setFavorites: (): City[] => [],
});

export const GlobalContextProvider = ({ children }: Readonly<{children: React.ReactNode;}>) => {
    const [localFavorites, setLocalFavorites] = useLocalStorage('FAVORITE_CITIES', []);
    const [favorites, setFavorites] = useState<[] | City[]>(localFavorites);

    useEffect(() => {
        setLocalFavorites(favorites);
    }, [favorites])

    return (
        <GlobalContext.Provider value={{favorites, setFavorites}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);