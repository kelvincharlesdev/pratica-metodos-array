import { mergeAndRemoveDuplicatesFromArray } from '../src/mergeAndRemoveDuplicatesFromArray';

describe('mergeAndRemoveDuplicatesFromArray', () => {
  it('deve retornar um array com os valores do array1 e array2', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [4, 4, 5, 6, 3];
    const expectation = [1, 2, 3, 4, 5, 6];

    expect(mergeAndRemoveDuplicatesFromArray(array1, array2)).toEqual(
      expectation,
    );
  });
  it('deve retornar um array com os valores do array1 e array2', () => {
    const array1 = ['a', 'b', 'c'];
    const array2 = ['c', 'c', 'd', 'e'];
    const expectation = ['a', 'b', 'c', 'd', 'e'];

    expect(mergeAndRemoveDuplicatesFromArray(array1, array2)).toEqual(
      expectation,
    );
  });
});
