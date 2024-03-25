import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherIcon = ({desc}: {desc: string}) => {
    if(desc === 'Partly cloudy' || desc === 'Cloudy'){
        return (
            <CloudIcon />
        )
    }
    return (
        <WbSunnyIcon />
    )
}

export default WeatherIcon;