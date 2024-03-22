import { Button, CardContent, IconButton, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
import { useGlobalContext } from '@/app/Context/store';

interface Props {
    city: City | undefined
}

const WeatherCard = ({city}: Props) => {
    const {favorites, setFavorites} = useGlobalContext();
    const handleFavorite = (city: City) => {
        if(!favorites.includes(city)){
            setFavorites([...favorites, city]);
        }
        console.log(favorites);
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
                        aria-label="bookmark Bahamas Islands"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                        >
                        <BookmarkAdd />
                    </IconButton>
                </div>
                {/* <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                    />
                </AspectRatio> */}
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
                    aria-label="Explore Bahamas Islands"
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