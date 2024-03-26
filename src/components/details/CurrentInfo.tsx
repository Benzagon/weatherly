'use client'
import { fetchCity } from "@/lib/fetchApi";
import { Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import WeatherIcon from "../main/cards/WeatherIcon";
import DataCard from "./DataCard";

import AirIcon from '@mui/icons-material/Air';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';

interface Props {
    cityName: string
}

const CurrentInfo = ({cityName}: Props) => {
    const [city, setCity] = useState<City>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Query backend with city name
        setLoading(true);
        fetchCity(cityName).then((res: {data: City}) => {
            setCity(res.data); 
            setLoading(false);
        });  
    }, [cityName]);

    return (
        <>
            {city &&
            <>
                <h3 className="text-base text-gray-400">{city.description}</h3>
                <div className="w-full flex items-center justify-center gap-8 mt-4">
                    <WeatherIcon width={80} desc={city.description} wind={city.wind}></WeatherIcon>
                    <Typography level="h2" fontWeight='md' fontSize={'3rem'}>{city.temperature + "°"}</Typography>
                    <div className="grid gap-1">
                        <DataCard value={city.wind} unit="kph" icon={<AirIcon/>}></DataCard>
                        <DataCard value={city.humidity} unit="%" icon={<WaterDropOutlinedIcon/>}></DataCard>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default CurrentInfo;