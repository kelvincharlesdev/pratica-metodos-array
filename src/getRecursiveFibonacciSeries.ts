/**
 * getRecursiveFibonacciSeries
 * @description
 * Returns the fibonacci series of a given number
 *
 * @example getRecursiveFibonacciSeries(1) // [0, 1]
 * @example getRecursiveFibonacciSeries(5) // [0, 1, 1, 2, 3, 5]
 *
 * @param {number} n
 * @return {*}  {number[]}
 */
export const getRecursiveFibonacciSeries = (n: number): number[] => {
  if (n < 2) {
    return [0, 1];
  }

  const prevSeries = getRecursiveFibonacciSeries(n - 1);
  const nextNumber = prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];

  const result = prevSeries.concat(nextNumber);
  return result;
};
