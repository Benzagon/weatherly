import PartlyCloudy from '../../../../public/weatherIcons/partlycloudy.gif';
import Sunny from '../../../../public/weatherIcons/sunny.gif';
import Cloudy from '../../../../public/weatherIcons/cloudy.gif';
import Raining from '../../../../public/weatherIcons/raining.gif';
import Mist from '../../../../public/weatherIcons/mist.gif';
import Wind from '../../../../public/weatherIcons/wind.gif';
import Image from 'next/image';

interface Props {
    desc: string,
    wind: number,
    width?: number
}

const WeatherIcon = ({desc, wind, width}: Props) => {
    const widthVal = width || 40;
    const cleanDesc = desc.toLocaleLowerCase().replace(/\s/g, '');
    if(cleanDesc === 'rain' || cleanDesc === 'lightrain' || cleanDesc === 'moderaterain') {
        return (
            <Image
                src={Raining}
                alt='Raining'
                width={widthVal}
                priority
                unoptimized={true}
            />
        )
    }
    else if(wind >= 20.0) {
        return (
            <Image
                src={Wind}
                alt='Windy'
                width={widthVal}
                priority
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'partlycloudy' || cleanDesc === 'overcast'){
        return (
            <Image
                src={PartlyCloudy}
                alt='Partly Cloudy'
                width={widthVal}
                priority
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'mist') {
        return (
            <Image
                src={Mist}
                alt='Mist'
                width={widthVal}
                priority
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'cloudy' || cleanDesc === 'clouds') {
        return (
            <Image
                src={Cloudy}
                alt='Cloudy'
                width={widthVal}
                priority
                unoptimized={true}
            />
        )
    }
    return (
        <Image
            src={Sunny}
            alt='Sunny'
            width={widthVal}
            priority
            unoptimized={true}
        />
    )
}

export default WeatherIcon;