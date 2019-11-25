import {reduceNumbers, sortToBigger, convertToStandardForm} from './rlMagicAddition';


function addNumbersToEachOther(number1, number2) {
    const sum = [];
    for (let i = 0; i < number1.length; i++) {
        for (let j = 0; j < number2.length; j++) {
            sum.push(number1[i] + number2[j])
        }
    }
    return sum;
}

export function rlMagicMultiplication(rl1, rl2) {
    const rl1TailStr = rl1.split('.').splice(2);
    const rl2TailStr = rl2.split('.').splice(2);

    const rl1TailNumb = rl1TailStr.map((sting) => (Number(sting)));
    const rl2TailNumb = rl2TailStr.map((string) => (Number(string)));

    const nonReducedSum = addNumbersToEachOther(rl1TailNumb, rl2TailNumb);

    const rlSumRawSorted = sortToBigger(nonReducedSum);

    const rlSumArray =  reduceNumbers(rlSumRawSorted);

    return convertToStandardForm(rlSumArray)

}
