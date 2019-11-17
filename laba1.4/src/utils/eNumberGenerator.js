/* eslint-disable no-plusplus,import/prefer-default-export */
export function eNumberGenerator(numbersAmount, criticalDegree) {
  const numberArray = [];
  const numberArrayValuation = [];

  for (let i = 0; i < numbersAmount; i++) {
    const randomNumber = 0.5 + Math.random() * (10 + 1);
    const eNumber = `${randomNumber.toFixed(2)}e-${criticalDegree}`;
    const eNumberValuation = `${randomNumber.toFixed(0)}e-${criticalDegree}`;
    numberArray.push(Number(eNumber));
    numberArrayValuation.push(Number(eNumberValuation));
  }

  return [numberArray, numberArrayValuation];
}
