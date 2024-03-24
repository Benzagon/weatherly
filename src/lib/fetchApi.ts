export const fetchCity = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/weather/?name=${name}`);
    if(!res.ok) throw new Error('Failed to fetch city weather data');
    return await res.json();
}

//fetchFavorites
export const getFavorites = async (localFavorites: string[]) => {
    const favorites = localFavorites.map(async (name) => {
        try {
            const cityData = await fetchCity(name);
            return cityData.data;
        } catch (error) {
            console.error('Error fetching city data:', error);
            throw error;
        }
    });
    return Promise.all(favorites); // Wait for all promises to resolve
};