export const fetchCity = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/weather/?name=${name}`);
    if(!res.ok) throw new Error('Failed to fetch city weather data');
    return await res.json();
}