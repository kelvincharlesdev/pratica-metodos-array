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
  const myMap = new Map<string | number, number>();

  for (const item of inputArray) {
    if (myMap.has(item)) {
      myMap.set(item, myMap.get(item) + 1);
    } else {
      myMap.set(item, 1);
    }
  }

  let mostRepeatedItem: string | number;
  let maxCount = 0;

  for (const [item, count] of myMap.entries()) {
    if (count > maxCount) {
      mostRepeatedItem = item;
      maxCount = count;
    }
  }

  return { value: mostRepeatedItem, occurrences: maxCount };
};
