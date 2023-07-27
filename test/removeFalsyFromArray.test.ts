import { removeFalsyFromArray } from '../src/removeFalsyFromArray';

describe('removeFalsyFromArray', () => {
  it('deve retornar um array sem valores falsy', () => {
    const input = [0, 1, false, 2, '', 3];
    const expectation = [1, 2, 3];

    expect(removeFalsyFromArray(input)).toEqual(expectation);
  });
  it('deve retornar um array sem valores falsy', () => {
    const input = [null, 1, NaN, 2, undefined];
    const expectation = [1, 2];

    expect(removeFalsyFromArray(input)).toEqual(expectation);
  });
  it('deve retornar um array sem valores falsy', () => {
    const input = [null, 1, NaN, 2, undefined, '', 0];
    const expectation = [1, 2];

    expect(removeFalsyFromArray(input)).toEqual(expectation);
  });
});
