'use client'
import WeatherCard from "./cards/WeatherCard";
import Searchbar from "./inputs/Searchbar";
import { useEffect, useState } from "react";

const Indexbody = () => {
    const [searchValue, setSearchValue] = useState<string | null>(null); // Value searched by user.
    const [city, setCity] = useState<string>(); // City data, retrieved from API.

    useEffect(() => {
        searchValue !== null ? setCity(searchValue) : setCity(undefined);
    }, [searchValue]);

    return (
        <div className='w-fit grid gap-8 justify-start'>
            <div className="grid gap-6 justify-start">
                <Searchbar searchValue={searchValue} setSearchValue={setSearchValue}></Searchbar> 
                {city && <WeatherCard cityName={city}></WeatherCard>}
            </div>
        </div>
    );
};

export default Indexbody;