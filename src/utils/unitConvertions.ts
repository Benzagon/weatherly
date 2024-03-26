/**
 * Convert degrees in Farenheit to Celsius
 * @param  {Number} degrees Positive number, representing degrees in Farenheit
 * @return {Number} The same temperature represented in Celsius
 */
export const farenhToCels = (degrees: number) => {
    const celcius = 5/9 * (degrees - 32);
    return Math.round(celcius);
}

/**
 * Convert degrees in Kelvin to Celsius
 * @param  {Number} degrees Positive number, representing degrees in Kelvin
 * @return {Number} The same temperature represented in Celsius
 */
export const kelvinToCels = (degrees: number) => {
    const celcius = degrees - 273.15;
    return Math.round(celcius);
}