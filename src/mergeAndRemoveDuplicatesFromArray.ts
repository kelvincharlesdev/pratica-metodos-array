/**
 * mergeAndRemoveDuplicatesFromArray
 * @description
 * Merges two arrays and removes duplicates
 * @example mergeAndRemoveDuplicatesFromArray([5, 7, 9], [9, 8, 5, 10]);
 * // returns [5, 7, 9, 8, 10]
 *
 * @template T
 * @param {T[]} leftArray
 * @param {T[]} rightArray
 * @return {*}  {T[]}
 */
export const mergeAndRemoveDuplicatesFromArray = <T>(
  leftArray: T[],
  rightArray: T[],
): T[] => {
  let newArray = leftArray.concat(rightArray);
  const arrayUnique = [...new Set(newArray)];

  return arrayUnique;
};
