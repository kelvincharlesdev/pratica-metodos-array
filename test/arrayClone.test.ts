import { arrayClone } from '../src/arrayClone';

describe('arrayClone', () => {
  it('deve retornar uma instancia de Array', function () {
    const emptyArray = [];
    const cloned = arrayClone(emptyArray);
    expect(cloned).toBeInstanceOf(Array);
  });
  it('deve retornar array do mesmo tamanho', function () {
    const inputArray = [1, 2, 3, 4];
    const cloned = arrayClone(inputArray);
    expect(cloned).toHaveLength(4);
  });
  it('deve clonar o array sem referencia ao array Input', () => {
    const input = [1, 2, 3, 4];
    const modifyClone = arrayClone(input);
    modifyClone.push(5);

    const expectation = [1, 2, 3, 4];

    expect(arrayClone(input)).toEqual(expectation);
  });
});
