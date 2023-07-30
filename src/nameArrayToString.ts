import { log } from 'console';

/**
 * nameArrayToString
 * @description
 * Accepts an array of names and returns a
 * string of names separated by commas and an ampersand
 *
 * @example nameArrayToString(['Bart']);
 * // returns 'Bart'
 * @example nameArrayToString(['Bart', 'Lisa']);
 * // returns 'Bart & Lisa'
 * @example nameArrayToString(['Bart', 'Lisa', 'Maggie']);
 * // returns 'Bart, Lisa & Maggie'
 * @param {string[]} nameArray
 * @return {string}
 */
export const nameArrayToString = (nameArray: string[]) => {
  let newString = '';

  for (let i = 0; i < nameArray.length; i++) {
    newString += nameArray[i];
    if (i < nameArray.length - 2) {
      newString += ', ';
    } else if (i === nameArray.length - 2) {
      newString += ' & ';
    }
  }
  return newString;
};
