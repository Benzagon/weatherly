import { Typography } from "@mui/joy";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement
    value: number,
    unit: string
}

const DataCard = ({icon, value, unit}: Props) => {
    return (
        <div className="flex w-fit gap-2 items-center justify-start">
            <div className="font-normal text-gray-500">
                {icon}
            </div>
            <div className="flex gap-1 items-center">
                <Typography level="title-lg">{String(value)}</Typography>
                <Typography level="body-sm">{unit}</Typography>
            </div>
        </div>
    )
}

export default DataCard;