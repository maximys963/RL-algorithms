import uuidv4 from 'uuid';

export function fillDataSouce(eNumbers, numberArrayValuation, initialValue) {
  const dataSourceArray = [];
  for (let i = 0; i < numberArrayValuation.length; i++) {
    dataSourceArray[i] = {
      key: uuidv4(),
      x: eNumbers[i],
      valuation: numberArrayValuation[i],
      sum: initialValue,
      difference: initialValue,
    };
  }
  return dataSourceArray;
}
