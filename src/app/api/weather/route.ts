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
        // const weatherData = await response.json()
        const weatherData = {
          "data": {
              "coord": {
                  "lon": 2.3488,
                  "lat": 48.8534
              },
              "weather": [
                  {
                      "id": 800,
                      "main": "Clear",
                      "description": "clear sky",
                      "icon": "01d"
                  }
              ],
              "base": "stations",
              "main": {
                  "temp": 65.55,
                  "feels_like": 64.44,
                  "temp_min": 63.21,
                  "temp_max": 69.39,
                  "pressure": 1027,
                  "humidity": 56
              },
              "visibility": 10000,
              "wind": {
                  "speed": 4.61,
                  "deg": 120
              },
              "clouds": {
                  "all": 0
              },
              "dt": 1711025116,
              "sys": {
                  "type": 2,
                  "id": 2041230,
                  "country": "FR",
                  "sunrise": 1711000245,
                  "sunset": 1711044273
              },
              "timezone": 3600,
              "id": 2988507,
              "name": "Paris",
              "cod": 200
          }
        }
        const cityData: City = {
          name: weatherData.data.name,
          longitud: weatherData.data.coord.lon,
          latitud: weatherData.data.coord.lat,
          temperature: farenhToCels(weatherData.data.main.temp),
          description: weatherData.data.weather[0].main,
          humidity: weatherData.data.main.humidity,
          wind: weatherData.data.wind.speed
        }
        return NextResponse.json({data: cityData});  
    } catch (error){
        console.error(error);
    }
}