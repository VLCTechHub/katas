export function conversor(input: number) {
    let romanNumber = ''

    if (input >= 5) {
        romanNumber += 'V'
        input -= 5
    }

    for (let i=0; i < input; i++) {
        romanNumber += 'I'
    }
    
    if (romanNumber == 'IIII') {
        romanNumber = 'IV'
    }
    
    return romanNumber;
  }