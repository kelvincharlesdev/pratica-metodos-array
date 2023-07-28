/**
 * arrayClone
 *
 * @template T
 * @param {T[]} arr
 */
export const arrayClone = <T>(arr: T[]): T[] => {
  const newArray = arr.map(contentArray => contentArray);

  return newArray;
};
