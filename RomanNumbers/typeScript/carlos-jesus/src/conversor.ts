export function conversor(input: number) {
    let romanNumber = ''

    for (let i=0; i < input; i++) {
        romanNumber += 'I'
    }
    
    if (romanNumber == 'IIII') {
        romanNumber = 'IV'
    }
    
    return romanNumber;
  }