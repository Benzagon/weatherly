'use client';
import { useGlobalContext } from "@/app/Context/store";
import WeatherCard from "../main/cards/WeatherCard";
import { Typography } from "@mui/joy";

const FavoritesGrid = () => {
    const {favorites} = useGlobalContext();
   
    if(favorites.length > 0) {
        return (
            <div className="flex gap-8 flex-wrap items-center justify-center">
                {favorites.map((city, index) => (
                    <div key={index}>
                        <WeatherCard cityName={city}></WeatherCard>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="flex gap-2 flex-col items-center justify-center">
            <Typography level="body-lg">Saved locations will be displayed here...</Typography>
        </div>
    );
};

export default FavoritesGrid;