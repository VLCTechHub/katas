import { conversor } from './conversor'

describe('Index', () => {
  it('converts 1 to I', () => {
    const input = 1;

    const result = conversor(input)

    expect(result).toEqual('I');
  });

  it('converts 2 to II', () => {
    const input = 2;
  
    const result = conversor(input)

    expect(result).toEqual('II');
  });

  it('converts 3 to III', () => {
    const input = 3;

    const result = conversor(input)

    expect(result).toEqual('III');
  });
});