/* eslint-disable no-plusplus,import/prefer-default-export,no-console */
function sortToBigger(numbersArray) {
  return numbersArray.sort((a, b) => (b - a));
}

function reduceNumbers(rlTailArray) {
  const rlTail = [...rlTailArray];

  for (let i = 0; i < rlTail.length; i++) {
    const currentNumber = rlTail[i];
    for (let j = 0; j < rlTail.length; j++) {
      if (i !== j) {
        if (currentNumber === rlTail[j]) {
          rlTail[i] = currentNumber + 1;
          rlTail.splice(j, 1);
          i = 0;
          j = 0;
        }
      }
    }
  }

  return rlTail;
}

function convertToStandardForm(rlTail) {
  const tailLength = rlTail.length;
  const fullRlArray = [0, tailLength, ...rlTail];

  return (fullRlArray.join('.'));
}

export function rlMagicAddition(rl1, rl2) {
  const rl1TailStr = rl1.split('.').splice(2);
  const rl2TailStr = rl2.split('.').splice(2);

  const rl1TailNumb = rl1TailStr.map((sting) => (Number(sting)));
  const rl2TailNumb = rl2TailStr.map((string) => (Number(string)));

  const rlSumRaw = [...rl1TailNumb, ...rl2TailNumb];

  const rlSumRawSorted = sortToBigger(rlSumRaw);

  const rlSumArray = reduceNumbers(rlSumRawSorted);

  const rlSum = convertToStandardForm(rlSumArray);

  // console.log(rlSum);

  return rlSum;
}
