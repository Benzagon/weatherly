import { Typography } from "@mui/joy";
import WeatherIcon from "../main/cards/WeatherIcon";
import { dateToWeekday } from "@/utils/datetoWeekday";

const WeekCard = ({forecast}: {forecast: FiveDaysCity}) => {
    return (
        <div className="flex flex-col items-center gap-1 w-fit h-fit">
            <Typography level="title-md">{dateToWeekday(forecast.date)}</Typography>
            <WeatherIcon width={35} desc={forecast.description} wind={forecast.wind}></WeatherIcon>
            <div className="flex flex-col gap-1 items-center">
                <Typography level="title-lg">{forecast.temperature}°</Typography>
                <Typography level="body-sm">{forecast.description}</Typography>
            </div>
        </div>
    )
}
export default WeekCard;