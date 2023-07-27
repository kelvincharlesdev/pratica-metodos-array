import { leapYear } from '../src/leapYear';

describe('leapYear', () => {
  it('deve retornar um array com os anos que foram bissextos dentro de um parametro de ano inicial e ano final', () => {
    const expectation = [2000, 2004, 2008, 2012];

    expect(leapYear(2000, 2012)).toEqual(expectation);
  });
});
