export const revalidate = 600; //Revalidate data every 10 minutes
import { farenhToCels } from "@/utils/unitConvertions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cityName = req.nextUrl.searchParams.get('name') as string;
    const apiKey = process.env.X_RapidAPI_Key;
    const apiHost = process.env.X_RapidAPI_WeatherAPI_Host;
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`, {
          headers: {
            'X-RapidAPI-Key': apiKey || '',
            'X-RapidAPI-Host': apiHost || ''
          },

        })
        const weatherData = await response.json();  
        const cityData: City = {
            name: weatherData.location.name,
            longitud: weatherData.location.lon,
            latitud: weatherData.location.lat,
            temperature: farenhToCels(weatherData.current.temp_f),
            description: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            wind: weatherData.current.wind_kph
          }
        return NextResponse.json({data: cityData});  
    } catch (error){
        console.error(error);
    }
}