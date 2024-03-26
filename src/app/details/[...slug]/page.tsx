import CurrentInfo from "@/components/details/CurrentInfo";
import WeekCard from "@/components/details/WeekCard";
import { fetchDetails } from "@/lib/fetchApi";
import { capitalizeString } from "@/utils/capitalizeString";
import { Typography } from "@mui/joy";
import { notFound } from 'next/navigation'

export default async function Details({ params }: { params: {slug: [city: string, lat: string, lon: string]}}) {
    const city = params.slug[0].replace('%20', ' ');
    const lat = params.slug[1];
    const lon = params.slug[2];
    
    if(!city || !lat || !lon){
        notFound();
    }
    const forecast:FiveDaysCity[] = (await fetchDetails(Number(lat), Number(lon))).formattedData;

    return (
        <div className='h-screen w-screen flex flex-col items-center p-20 pt-32 gap-8 justify-start'>
            <div className="flex flex-col gap-2 items-center justify-start">
                <h1 className="text-2xl text-center w-full">Right now in <span className="font-medium">{capitalizeString(city)}</span></h1>
                <CurrentInfo cityName={city}></CurrentInfo>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
                <Typography level="h4" fontWeight='medium'>5 day Forecast</Typography>
                <div className="flex justify-center gap-16 bg-[#fefefe] drop-shadow rounded-xl px-12 py-8">
                    {forecast.map((forecast, index) => (
                        <WeekCard key={index} forecast={forecast}/>
                    ))}
                </div>
            </div>
        </div>
    )
}