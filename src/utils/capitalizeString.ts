/**
 * Capitalize only the first character of a string
 * @return {string} Capitalized input
 */
export const capitalizeString = (str: string) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}