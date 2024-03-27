export const revalidate = 43200; //Revalidate data every 12 hours
import { kelvinToCels } from "@/utils/unitConvertions";
import { NextRequest, NextResponse } from "next/server";
import { exampleResponse } from "./exampleResponse";

export async function GET(req: NextRequest) {
    const latitud = req.nextUrl.searchParams.get('lat') as string;
    const longitud = req.nextUrl.searchParams.get('lon') as string;
    const apiKey = process.env.X_RapidAPI_Key;
    const apiHost = process.env.X_RapidAPI_OpenWeather_Host;
    try {
        const response = await fetch(`https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${latitud}/${longitud}`, {
          headers: {
            'X-RapidAPI-Key': apiKey || '',
            'X-RapidAPI-Host': apiHost || ''
          },

        });
        
        const weatherData = await response.json();  
        
        const indexes = [0, 8, 16, 24, 32];
        const formattedData: FiveDaysCity[] = indexes.map((index) => {
            const forecast = weatherData.list[index];
            const city: FiveDaysCity = {
                name: weatherData.city.name,
                temperature: kelvinToCels(forecast.main.temp),
                description: forecast.weather[0].main,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed,
                date: new Date(forecast.dt_txt)
            }
            return city
        })

        return NextResponse.json({formattedData});  
    } catch (error){
        console.error(error);
    }
}