'use client';
import { useGlobalContext } from "@/app/Context/store";
import WeatherCard from "../main/cards/WeatherCard";

const FavoritesGrid = () => {
    const {favorites} = useGlobalContext();
    return (
        <div className="flex gap-8 flex-wrap items-center justify-center">
            {favorites.map((city, index) => (
                <div key={index}>
                    <WeatherCard cityName={city}></WeatherCard>
                </div>
            ))}
        </div>
    );
};

export default FavoritesGrid;