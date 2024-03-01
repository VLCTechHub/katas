describe("Roman numerals", () => {
  it("converts 1 to I", () => {
    const numberToConvert = 1;

    const result = toRoman(numberToConvert);

    const expectRomanNumber = "I";
    expect(result).toBe(expectRomanNumber);
  });

  it("converts 2 to II", () => {
    const numberToConvert = 2;

    const result = toRoman(numberToConvert);

    const expectRomanNumber = "II";
    expect(result).toBe(expectRomanNumber);
  });

  it("converts 3 to III", () => {
    const numberToConvert = 3;

    const result = toRoman(numberToConvert);

    const expectRomanNumber = "III";
    expect(result).toBe(expectRomanNumber);
  });
  it("converts 4 to IV", () => {
    const numberToConvert = 4;

    const result = toRoman(numberToConvert);

    const expectRomanNumber = "IV";
    expect(result).toBe(expectRomanNumber);
  });

  it("converts 5 to V", () => {
    const numberToConvert = 5;

    const result = toRoman(numberToConvert);

    const expectRomanNumber = "V";
    expect(result).toBe(expectRomanNumber);
  });
});
const latinNumberToRomanMap = new Map([
  [10, "X"],
  [5, "V"],
  [1, "I"],
]);

function toRoman(latinNumber: number): string {
  // const keys = latinNumberToRomanMap.keys();
  // while ((latinNumber == 0)) {}

  let romanNumber = "";
  for (let count = 0; count < latinNumber; count++) {
    romanNumber += "I";
  }

  romanNumber = romanNumber.replace("IIII", "IV");
  romanNumber = romanNumber.replace("IVI", "V");

  return romanNumber;
}
