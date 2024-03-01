import { conversor } from './conversor'

describe('Index', () => {
  it('converts 1 to I', () => {
    assertRomanNumber(1, 'I')
  });

  it('converts 2 to II', () => {
    assertRomanNumber(2, 'II')
  });

  it('converts 3 to III', () => {
    assertRomanNumber(3, 'III')
  });

  it('converts 4 to IV', () => {
    assertRomanNumber(4,'IV')
  })
  
  it('converts 5 to V', () => {
    assertRomanNumber(5,'V')
  })

  it('converts 6 to VI', () => {
    assertRomanNumber(6,'VI')
  })

  it('converts 8 to VIII', () => {
    assertRomanNumber(8,'VIII')
  })

  function assertRomanNumber(input: number, expectedRomanNumber: string) {
    const result = conversor(input)

    expect(result).toEqual(expectedRomanNumber)
  }
});