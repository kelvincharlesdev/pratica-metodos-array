import { getRecursiveFactorial } from '../src/getRecursiveFactorial';
function sFact(num: number) {
  let rval = 1;
  for (let i = 2; i <= num; i++) rval = rval * i;
  return rval;
}
describe('getRecursiveFactorial', () => {
  it('deve retornar o fatorial de 0', () => {
    const input = 0;
    const expectation = 1;

    expect(getRecursiveFactorial(input)).toEqual(expectation);
  });
  it('deve retornar o fatorial de 7', () => {
    const input = 7;
    const expectation = 5040;

    expect(getRecursiveFactorial(input)).toEqual(expectation);
  });
  const n = Math.floor(Math.random() * (2 - 10 + 1) + 10);
  it(`deve retornar o fatorial de n = ${n}`, () => {
    const expectation = sFact(n);

    expect(getRecursiveFactorial(n)).toEqual(expectation);
  });
});
