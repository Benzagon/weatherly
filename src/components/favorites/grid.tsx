'use client';

import { useGlobalContext } from "@/app/Context/store";
import { Grid } from "@mui/joy";
import WeatherCard from "../main/cards/WeatherCard";

const FavoritesGrid = () => {
    const {favorites} = useGlobalContext();
    return (
        <Grid container spacing={2}>
            {favorites.map((city, index) => (
                <Grid key={index}>
                    <WeatherCard city={city}></WeatherCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default FavoritesGrid;