export const revalidate = 600; //Revalidate data every 10 minutes
import { farenhToCels } from "@/utils/farnheitToCelsius";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cityName = req.nextUrl.searchParams.get('name') as string;
    const apiKey = process.env.X_RapidAPI_Key;
    const apiHost = process.env.X_RapidAPI_Host;
    try {
        /// TO NOT WASTE API CALLS
        
        // const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${cityName}`, {
        //   headers: {
        //     'X-RapidAPI-Key': apiKey || '',
        //     'X-RapidAPI-Host': apiHost || ''
        //   },

        // })
        // const weatherData = await response.json();
        // const cityData: City = {
        //     name: weatherData.name,
        //     longitud: weatherData.coord.lon,
        //     latitud: weatherData.coord.lat,
        //     temperature: farenhToCels(weatherData.main.temp),
        //     description: weatherData.weather[0].main,
        //     humidity: weatherData.main.humidity,
        //     wind: weatherData.wind.speed
        //   }
        // return NextResponse.json({data: cityData});  
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