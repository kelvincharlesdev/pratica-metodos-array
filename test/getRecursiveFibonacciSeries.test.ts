import { getRecursiveFibonacciSeries } from '../src/getRecursiveFibonacciSeries';

const getFibonacciSeries = (n: number): number[] => {
  const fibonacciSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 2] + fibonacciSeries[i - 1]);
  }
  return fibonacciSeries;
};

describe('getRecursiveFibonacciSeries', () => {
  it('deve retornar a série de fibonacci de 1', () => {
    const input = 1;
    const expectation = [0, 1];
    expect(getRecursiveFibonacciSeries(input)).toEqual(expectation);
  });
  it('deve retornar a série de fibonacci de 5', () => {
    const input = 5;
    const expectation = [0, 1, 1, 2, 3, 5];
    expect(getRecursiveFibonacciSeries(input)).toEqual(expectation);
  });
  const n = Math.floor(Math.random() * (2 - 10 + 1) + 10);
  it(`deve retornar a série de fibonacci de n = ${n}`, () => {
    const expectation = getFibonacciSeries(n);
    expect(getRecursiveFibonacciSeries(n)).toEqual(expectation);
  });
});
