import CurrentInfo from "@/components/details/CurrentInfo";
import { capitalizeString } from "@/utils/capitalizeString";

export default function Details({ params }: { params: { city: string } }) {
    const city = params.city;
    return (
        <div className='h-screen w-screen flex flex-col items-center p-20 pt-32 gap-2 justify-start'>
            <h1 className="text-2xl text-center w-full">Right now in <span className="font-medium">{capitalizeString(city)}</span> it's</h1>
            <CurrentInfo cityName={city}></CurrentInfo>
        </div>
    )
}