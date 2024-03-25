'use client';
import useLocalStorage from "@/hooks/useLocalStorage";
import { getFavorites } from "@/lib/fetchApi";
import { compareLocalToContext, removeCity } from "@/utils/cityFunctions";
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
    const [creatingContext, setCreatingContext] = useState(true);

    useEffect(() => { // Mount context favorites with locally stored data
        getFavorites(localFavorites).then((res) => {
            setFavorites(res);
            setCreatingContext(false);
        });
    },[])

    useEffect(() => {
        if(favorites.length !== localFavorites.length && !creatingContext) {
            if(favorites.length > localFavorites.length) {
                //Add new favorite city names to localstorage
                const lastCity = favorites[favorites.length-1].name;
                setLocalFavorites([...localFavorites, lastCity]); 
                return
            }
            //Remove a favorite
            setLocalFavorites(compareLocalToContext(localFavorites, favorites))
        }
    }, [favorites])

    return (
        <GlobalContext.Provider value={{favorites, setFavorites}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);