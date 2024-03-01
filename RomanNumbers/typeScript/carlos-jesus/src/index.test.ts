import { conversor } from './conversor'

describe('Index', () => {
  it('converts 1 to I', () => {
    const input = 1;

    const result = 'I';

    expect(conversor(input)).toEqual(result);
  });

  it('converts 2 to II', () => {
    const input = 2;

    const result = 'II';

    expect(conversor(input)).toEqual(result);
  });
});