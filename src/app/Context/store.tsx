'use client';
import useLocalStorage from "@/hooks/useLocalStorage";
import { getFavorites } from "@/lib/fetchApi";
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
    const [favorites, setFavorites] = useState<[] | City[]>([]);

    useEffect(() => { // Mount favorites with current data
        getFavorites(localFavorites).then((res) => {
            setFavorites(res);
        });
    },[])

    useEffect(() => {
        if(favorites.length > 0 && favorites.length !== localFavorites.length) {
            //Add new favorite city names to localstorage
            setLocalFavorites([...localFavorites, favorites[favorites.length-1].name]); 
            return
        }
    }, [favorites])

    return (
        <GlobalContext.Provider value={{favorites, setFavorites}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);