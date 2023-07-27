import { findFirstMostFrequent } from '../src/findFirstMostFrequent';

describe('findFirstMostFrequent', () => {
  it('deve retornar o valor mais frequente e o número de ocorrências', () => {
    const expectation = { value: 'a', occurrences: 5 };
    const inputArray = [3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3];

    expect(findFirstMostFrequent(inputArray)).toEqual(expectation);
  });

  it('deve retornar o primeiro primeiro valor vindo do array mais frequente e o número de ocorrências', () => {
    const expectation = { value: 3, occurrences: 4 };
    const inputArray = [3, 'a', 3, 'a', 2, 'a', 3, 'a', 2, 4, 9, 3];

    expect(findFirstMostFrequent(inputArray)).toEqual(expectation);
  });
});
