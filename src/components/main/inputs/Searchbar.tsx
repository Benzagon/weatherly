import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const top100Films = [
    'Buenos Aires',
    'Madrid',
    'San Pablo'
  ]

interface Props {
    setSearchValue: Dispatch<SetStateAction<string | null>>,
    searchValue: string | null
}

const Searchbar = ({searchValue, setSearchValue}: Props) => {
    return (
        <div className="w-80">
            <Autocomplete 
                value={searchValue}
                onChange={(event: any, newValue: string | null) => {
                    setSearchValue(newValue);
                }}
                fullWidth={true}
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Search for a city..." />}
            />
        </div>
    );
};

export default Searchbar;