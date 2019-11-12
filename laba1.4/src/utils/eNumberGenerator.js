export function eNumberGenerator(firstValue, numbersAmount, criticalDegree ) {
    let numberArray = [firstValue];

    for (let i = 0; i < numbersAmount; i++) {
        const randomNumber  =  0.5 + Math.random() * (10 + 1);
        const eNumber = `${randomNumber.toFixed(2)}e-${criticalDegree}`;
        numberArray.push(Number(eNumber));
    }


    return numberArray;
}
