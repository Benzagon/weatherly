'use client'
import { fetchCity } from "@/lib/fetchApi";
import WeatherCard from "./cards/WeatherCard";
import Searchbar from "./inputs/Searchbar";
import { useEffect, useState } from "react";

const exampleCity = {
    name: 'Buenos Aires',
    latitud: 20,
    longitud: 20,
    temperature: 19,
    description: 'nublado',
    humidity: 20,
    wind: 10
}

const Indexbody = () => {
    const [searchValue, setSearchValue] = useState<string | null>(null); // Value searched by user.
    const [city, setCity] = useState<City>(); // City data, retrieved from API.

    useEffect(() => {
        //Query backend with city name
        // searchValue !== null ? setCity(exampleCity) : setCity(undefined)
        if(searchValue !== null) {
            fetchCity(searchValue).then((res) => setCity(res.data))
        } 
        else {
            setCity(undefined);
        }
    }, [searchValue]);

    return (
        <div className='w-fit grid gap-6'>
            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue}></Searchbar>
            <WeatherCard city={city}></WeatherCard>
        </div>
    );
};

export default Indexbody;