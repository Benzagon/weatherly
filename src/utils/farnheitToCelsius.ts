/**
 * Convert degrees in Farenheit to Celsius
 * @param  {Number} degrees Positive number, representing degrees in Farenheit
 * @return {Number} The same temperature represented in Celsius
 */
export const farenhToCels = (degrees: number) => {
    const celcius = 5/9 * (degrees - 32);
    return Math.round(celcius);
}