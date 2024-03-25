import { Button, CardContent, IconButton, Skeleton, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { useGlobalContext } from '@/app/Context/store';
import { useEffect, useState } from 'react';
import { removeCity } from '@/utils/cityFunctions';
import { fetchCity } from '@/lib/fetchApi';

//Icons
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import WeatherIcon from './WeatherIcon';

interface Props {
    cityName: string
}

const WeatherCard = ({cityName}: Props) => {
    const [city, setCity] = useState<City>();
    const {favorites, setFavorites} = useGlobalContext();
    const [isFavorite, setIsFavorite] = useState<boolean>();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        //Query backend with city name
        setLoading(true);
        fetchCity(cityName).then((res: {data: City}) => {
            setCity(res.data); 
            console.log(res.data)
            setLoading(false);
            //Check if city is favorite
            if(favorites.find(e => e === res.data.name)){
                setIsFavorite(true);
                return;
            }
            setIsFavorite(false);
        });  
    }, [cityName]);

    const handleFavorite = (city: string) => {
        if(!isFavorite){
            setFavorites([...favorites, city]);
            setIsFavorite(true);
        }
        else {
            const deletedFavorites = favorites.filter((name) => removeCity(city, name));
            setFavorites(deletedFavorites);
            setIsFavorite(false);
        }
    }

    return (
        <div className='w-80 h-fit'>
            <Skeleton variant="rectangular" sx={{ width: 320, height:140 }} loading={loading}>
            {city && (
                <Card sx={{ width: 320 }}>
                    <div>
                        <Typography level="title-lg">{city.name}</Typography>
                        <Typography level="body-sm">{city.longitud + ' - ' + city.latitud}</Typography>
                        <IconButton
                            onClick={() => {handleFavorite(city.name)}}
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
                        <div className='flex items-center justify-start gap-4'>
                            <Typography fontSize="xl" fontWeight="lg" className='pb-1'>
                                {city.temperature + "°"}
                            </Typography>
                            <WeatherIcon desc={city.description}></WeatherIcon>
                        </div>
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
            </Skeleton>
        </div>
    )
}

export default WeatherCard;