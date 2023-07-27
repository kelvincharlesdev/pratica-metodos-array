interface MostFrequentType {
  value: string | number;
  occurrences: number;
}

/**
 * findFirstMostFrequent
 * @example findFirstMostFrequent([3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]);
 * // returns { value: 'a', occurrences: 5 }
 *
 * @param {(Array<string | number>)} inputArray
 * @return {MostFrequentType}  {({ value: string | number; occurrences: number })}
 */

export const findFirstMostFrequent = (
  inputArray: Array<string | number>,
): MostFrequentType => {
  return { value: '', occurrences: 0 };
};
