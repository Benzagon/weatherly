/**
 * Removes city from array, if index is matched, using its name.
 * @param  {string} nameToRemove City to remove from array
 * @param  {string} value Value to compare
 * @return {boolean} true if deleted 
 */
export const removeCity = (nameToRemove:string, value:string) => {
    // If the value at the current array index matches the specified value
    if (value === nameToRemove) {
        return false;
    }
    return true;
}

/**
 * Updates localStorage list by comparing it to a new list of Cities and keeping only matching items
 * @param  {string[]} staleArray Stale list of names, stored in localStorage
 * @param  {City[]} updatedArray New, updated data
 * @return {string[]} New list of city names, with updated data
 */
export const compareLocalToContext = (staleArray: string[], updatedArray: City[]) => {
    const newArray: string[] = [];
    updatedArray.map((city) => {
        if(staleArray.indexOf(city.name) !== -1) {
            newArray.push(city.name);
        }
    })
    return newArray;
}