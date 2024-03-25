'use client'
import { fetchCity } from "@/lib/fetchApi";
import WeatherCard from "./cards/WeatherCard";
import Searchbar from "./inputs/Searchbar";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/joy";

const Indexbody = () => {
    const [searchValue, setSearchValue] = useState<string | null>(null); // Value searched by user.
    const [city, setCity] = useState<City>(); // City data, retrieved from API.
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Query backend with city name on search submit
        if(searchValue !== null) {
            setLoading(true);
            fetchCity(searchValue).then((res) => {setCity(res.data); setLoading(false)}) // Fetch data, and set state
        } 
        else {
            setCity(undefined);
        }
    }, [searchValue]);

    return (
        <div className='w-fit grid gap-6 justify-start'>
            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue}></Searchbar>
            <Skeleton variant="rectangular" sx={{ width: 320, height:140 }} loading={loading}>
                {city && <WeatherCard city={city}></WeatherCard>}
            </Skeleton>
        </div>
    );
};

export default Indexbody;