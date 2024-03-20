import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const cityName = req.nextUrl.searchParams.get('name') as string;
    const apiKey = process.env.X_RapidAPI_Key;
    const apiHost = process.env.X_RapidAPI_Host;
    try {
        const response = await fetch(`https://cities-temperature.p.rapidapi.com/weather/v1?city=${cityName}`, {
          headers: {
            'X-RapidAPI-Key': apiKey || '',
            'X-RapidAPI-Host': apiHost || ''
          },

        })
        const weatherData = await response.json()
        return NextResponse.json({data: weatherData});  
    } catch (error){
        console.error(error);
    }
}