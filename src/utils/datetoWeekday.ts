/**
 * Convert Date to appropiate day of the week
 * @return {string} Day of the week
 */
export const dateToWeekday = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {weekday: 'short'})
}