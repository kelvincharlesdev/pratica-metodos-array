import { camelCase } from '../src/camelCase';

describe('camelCase', () => {
  it('deve transformar os textos em camel case', () => {
    const expectation = 'loremIpsum';
    const frases = ['lorem_ipsum', 'lorem ipsum', 'lorem-ipsum'];

    frases.forEach(frase => expect(camelCase(frase)).toEqual(expectation));
  });
});
