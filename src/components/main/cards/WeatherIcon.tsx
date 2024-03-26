import PartlyCloudy from '../../../../public/weatherIcons/partlycloudy.gif';
import Sunny from '../../../../public/weatherIcons/sunny.gif';
import Cloudy from '../../../../public/weatherIcons/cloudy.gif';
import Raining from '../../../../public/weatherIcons/raining.gif';
import Mist from '../../../../public/weatherIcons/mist.gif';
import Wind from '../../../../public/weatherIcons/wind.gif';
import Image from 'next/image';

const WeatherIcon = ({desc, wind}: {desc: string, wind: number}) => {
    const cleanDesc = desc.toLocaleLowerCase().replace(/\s/g, '');
    if(cleanDesc === 'rain' || cleanDesc === 'lightrain') {
        return (
            <Image
                src={Raining}
                alt='Raining'
                width={40}
                unoptimized={true}
            />
        )
    }
    else if(wind >= 20.0) {
        return (
            <Image
                src={Wind}
                alt='Windy'
                width={40}
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'partlycloudy' || cleanDesc === 'overcast'){
        return (
            <Image
                src={PartlyCloudy}
                alt='Partly Cloudy'
                width={40}
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'mist') {
        return (
            <Image
                src={Mist}
                alt='Mist'
                width={40}
                unoptimized={true}
            />
        )
    }
    else if(cleanDesc === 'cloudy') {
        return (
            <Image
                src={Cloudy}
                alt='Cloudy'
                width={40}
                unoptimized={true}
            />
        )
    }
    return (
        <Image
            src={Sunny}
            alt='Sunny'
            width={40}
            unoptimized={true}
        />
    )
}

export default WeatherIcon;