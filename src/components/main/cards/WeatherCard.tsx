import { Button, CardContent, IconButton, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useGlobalContext } from '@/app/Context/store';
import { useEffect, useState } from 'react';
import { removeCity } from '@/utils/cityFunctions';

interface Props {
    city: City
}

const WeatherCard = ({city}: Props) => {
    const {favorites, setFavorites} = useGlobalContext();
    const [isFavorite, setIsFavorite] = useState<boolean>();
    
    //Check if city is favorite
    useEffect(() => {
        if(favorites.find(e => e.name === city.name)){
            setIsFavorite(true);
            return
        }
        setIsFavorite(false)
    },[city]);

    const handleFavorite = (city: City) => {
        if(!isFavorite){
            setFavorites([...favorites, city]);
            setIsFavorite(true);
        }
        else {
            const deletedFavorites = favorites.filter((obj) => removeCity(city.name, obj.name));
            setFavorites(deletedFavorites);
            setIsFavorite(false);
        }
    }

    return (
        <div className='w-80 h-72'>
            {city && (
                <Card sx={{ width: 320 }}>
                <div>
                    <Typography level="title-lg">{city.name}</Typography>
                    <Typography level="body-sm">{city.longitud + ' - ' + city.latitud}</Typography>
                    <IconButton
                        onClick={() => {handleFavorite(city)}}
                        aria-label="Mark favorite city"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                        >
                        {isFavorite ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </div>
                <CardContent orientation="horizontal">
                    <div>
                    <Typography level="body-xs">Current temperature:</Typography>
                    <Typography fontSize="xl" fontWeight="lg">
                        {city.temperature + "°"}
                    </Typography>
                    </div>
                    <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    >
                    Explore
                    </Button>
                </CardContent>
            </Card>
            )
            }
        </div>
    )
}

export default WeatherCard;