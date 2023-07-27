import { nameArrayToString } from '../src/nameArrayToString';

describe('camelCase', () => {
  it('deve transformar o array de 1 nome corretamente', () => {
    const nomes = ['Bart'];
    const expectation = 'Bart';

    expect(nameArrayToString(nomes)).toEqual(expectation);
  });

  it('deve transformar o array de 2 nomes corretamente', () => {
    const nomes = ['Bart', 'Maggie'];
    const expectation = 'Bart & Maggie';

    expect(nameArrayToString(nomes)).toEqual(expectation);
  });

  it('deve transformar o array de 3 nomes corretamente', () => {
    const nomes = ['Bart', 'Lisa', 'Maggie'];
    const expectation = 'Bart, Lisa & Maggie';

    expect(nameArrayToString(nomes)).toEqual(expectation);
  });
});
