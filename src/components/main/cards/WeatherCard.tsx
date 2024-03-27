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
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

interface Props {
    cityName: string
}

const WeatherCard = ({cityName}: Props) => {
    const router = useRouter()
    const [city, setCity] = useState<City>();
    const {favorites, setFavorites} = useGlobalContext();
    const [isFavorite, setIsFavorite] = useState<boolean>();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        //Query backend with city name
        setLoading(true);
        fetchCity(cityName).then((res: {data: City}) => {
            setCity(res.data); 
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
            <Skeleton variant="rectangular" sx={{ width: 320, height:180 }} loading={loading}>
            {city && (
                <Card sx={{ width: 320 }}>
                    <div>
                        <Typography level="title-lg">{city.name}</Typography>
                        <Typography level="body-sm">{city.description}</Typography>
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
                    <CardContent orientation="horizontal" className='flex justify-between'>
                        <div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-start gap-4'>
                                    <Typography fontSize="xl" fontWeight="lg">
                                        {city.temperature + "°"}
                                    </Typography>
                                    <WeatherIcon desc={city.description} wind={city.wind}></WeatherIcon>
                                </div>
                                <div className='grid gap-0'>
                                    <Typography level="body-sm">{`Wind: ${city.wind}km/h`}</Typography>
                                    <Typography level="body-sm">{`Humidity: ${city.humidity}`}</Typography>
                                </div>
                            </div>
                        </div>
                        <div className='grid pt-8'>
                            <Button
                                onClick={() => {router.push(`./details/${cityName}/${city.latitud}/${city.longitud}`)}}
                                className='m-0'
                                variant="solid"
                                size="md"
                                color="primary"
                                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                            >
                            Explore
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                )
                }
            </Skeleton>
        </div>
    )
}

export default WeatherCard;