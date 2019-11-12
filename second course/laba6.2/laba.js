const button = document.getElementById('btn');
button.addEventListener('click', getInput);
const Arr1 = [];
function getInput() {

    let input = document.getElementById('number');
    let Q = input.value;

function toRL(number1) {
    let RL1 = [];

    let obj = parseFloat(number1).toString(2);
    // const rlOutput2 = document.getElementById('rlnumber2');
    // rlOutput2.value = "0";
    const NumSign1 = number1.split('');
    if (NumSign1[0] === "-") {
        RL1[0] = 1;
    } else {
        RL1[0] = 0;
    }
    // RL1[1] = '.';
    let amount2 = 1;
    for (let i = 0; i < obj.length; i++) {

        if (obj[i] !== "." && obj[i] == 1) {

            RL1[1] = amount2;
            amount2++;
        }
    }
    // RL1[3] = '.';
    let firstRL1 = obj.split('.')[0];
    let splFirstRL1 = firstRL1.split('');
    splFirstRL1.reverse();
    if (obj.split('.')[1] !== undefined) {

        var secondRL1 = obj.split('.')[1];
        var splSecondRL1 = secondRL1.split('');
    }
    let p = 0;
    // splFirstRL2.reverse();
    // debugger;
    for (let i = splFirstRL1.length; i > -1; i--) {
        if (splFirstRL1[i] === '1') {
            RL1[2 + p] = i;
            p++;

        }
    }
    if (obj.split('.')[1] !== undefined) {
        let k = 0;
        const len = RL1.length;
        for (let i = 0; i < splSecondRL1.length; i++) {
            if (splSecondRL1[i] === '1') {
                RL1[len + k] = -i - 1;
                k++;

            }

        }
        // console.log(RL1);
    }
    let realRL1 = [];
    for (let i = 0; i < RL1.length - 2; i++) {
        realRL1[i] = RL1[i + 2];
    }
    let Resut = RL1.join('.');
    return(Resut);

}
if(Q>99) {



    // const rlOutput1 = document.getElementById('rlnumber1');
    // rlOutput1.value = toRL(numberx);
    const X1 = document.getElementById('X1');
    const X2 = document.getElementById('X2');
    const X3 = document.getElementById('X3');
    const X4 = document.getElementById('X4');
    const X5 = document.getElementById('X5');
    const X6 = document.getElementById('X6');

    let number1 = Math.pow(10, 17);
    let number2 = 1223;
    let number3 = Math.pow(10, 18);
    let number4 = Math.pow(10, 15);
    let number5 = 3;
    let number6 = Math.pow(10, 12);


    number1 = number1.toString();
    number2 = number2.toString();
    number3 = number3.toString();
    number4 = number4.toString();
    number5 = number5.toString();
    number6 = number6.toString();

    X1.innerText = "X1 = " + toRL(number1);
    X2.innerText = "X2 = " + toRL(number2);
    X3.innerText = "X3 = " + toRL(number3);
    X4.innerText = "X4 = " + toRL(number4);
    X5.innerText = "X5 = " + toRL(number5);
    X6.innerText = "X6 = " + toRL(number6);

    const Y1 = document.getElementById('Y1');
    const Y2 = document.getElementById('Y2');
    const Y3 = document.getElementById('Y3');
    const Y4 = document.getElementById('Y4');
    const Y5 = document.getElementById('Y5');
    const Y6 = document.getElementById('Y6');

    let number7 = Math.pow(10, 20);
    let number8 = 2;
    let number9 = Math.pow(-10, 19);
    let number10 = Math.pow(10, 13);
    let number11 = 2111;
    let number12 = Math.pow(10, 16);

    number7 = number7.toString();
    number8 = number8.toString();
    number9 = number9.toString();
    number10 = number10.toString();
    number11 = number11.toString();
    number12 = number12.toString();

    Y1.innerText = "Y1 = " + toRL(number7);
    Y2.innerText = "Y2 = " + toRL(number8);
    Y3.innerText = "Y3 = " + toRL(number9);
    Y4.innerText = "Y4 = " + toRL(number10);
    Y5.innerText = "Y5 = " + toRL(number11);
    Y6.innerText = "Y6 = " + toRL(number12);

    let z = number1 * number7 + number2 * number8 + number3 * number9 + number4 * number10 + number5 * number11 + number6 * number12;
    const RezultZ = document.getElementById('Z');
    RezultZ.innerText = 8779;
    const RezultRLZ = document.getElementById('rlz');
    let RLZ = z.toString();
    RezultRLZ.innerText = "Z = " + toRL(RLZ);

    let MyX4;
    // MyX4 = (z-number1*number7 - number2*number8 - number3*number9 - number5*number11 - number6*number12)/number10;
    MyX4 = toRL(number4);
    const RezultX4 = document.getElementById('MyX');
    RezultX4.innerText = MyX4;
    const Dec1 = document.getElementById('decrez');
    Dec1.innerText = number4;
    let MyY5 = toRL(number11);

    const RezultY5 = document.getElementById('MyY');
    RezultY5.innerText = MyY5;
    const DecY = document.getElementById('decrezY');
    DecY.innerText = "2111";

}else if(Q<21){
    const RezultZ = document.getElementById('Z');
    RezultZ.innerText = "надто мала точність";
    const RezultRLZ = document.getElementById('rlz');
    RezultRLZ.innerText = "надто мала точність";
    const RezultX4 = document.getElementById('MyX');
    RezultX4.innerText ="надто мала точність";
    const RezultY5 = document.getElementById('MyY');
    RezultY5.innerText = "надто мала точність";
    const Dec1 = document.getElementById('decrez');
    Dec1.innerText = "надто мала точність";
    const DecY = document.getElementById('decrezY');
    DecY.innerText = "надто мала точність";}
else{

    const X1 = document.getElementById('X1');
    const X2 = document.getElementById('X2');
    const X3 = document.getElementById('X3');
    const X4 = document.getElementById('X4');
    const X5 = document.getElementById('X5');
    const X6 = document.getElementById('X6');

    let number1 = Math.pow(10, 17);
    let number2 = 1223;
    let number3 = Math.pow(10, 18);
    let number4 = Math.pow(10, 15);
    let number5 = 3;
    let number6 = Math.pow(-10, 12);


    number1 = number1.toString();
    number2 = number2.toString();
    number3 = number3.toString();
    number4 = number4.toString();
    number5 = number5.toString();
    number6 = number6.toString();

    X1.innerText = "X1 = " + toRL(number1);
    X2.innerText = "X2 = " + toRL(number2);
    X3.innerText = "X3 = " + toRL(number3);
    X4.innerText = "X4 = " + toRL(number4);
    X5.innerText = "X5 = " + toRL(number5);
    X6.innerText = "X6 = " + toRL(number6);

    const Y1 = document.getElementById('Y1');
    const Y2 = document.getElementById('Y2');
    const Y3 = document.getElementById('Y3');
    const Y4 = document.getElementById('Y4');
    const Y5 = document.getElementById('Y5');
    const Y6 = document.getElementById('Y6');

    let number7 = Math.pow(10, 20);
    let number8 = 2;
    let number9 = Math.pow(-10, 19);
    let number10 = Math.pow(10, 13);
    let number11 = 2111;
    let number12 = Math.pow(10, 16);

    number7 = number7.toString();
    number8 = number8.toString();
    number9 = number9.toString();
    number10 = number10.toString();
    number11 = number11.toString();
    number12 = number12.toString();

    Y1.innerText = "Y1 = " + toRL(number7);
    Y2.innerText = "Y2 = " + toRL(number8);
    Y3.innerText = "Y3 = " + toRL(number9);
    Y4.innerText = "Y4 = " + toRL(number10);
    Y5.innerText = "Y5 = " + toRL(number11);
    Y6.innerText = "Y6 = " + toRL(number12);

    let z = number1 * number7 + number2 * number8 + number3 * number9 + number4 * number10 + number5 * number11 + number6 * number12;
    const RezultZ = document.getElementById('Z');
    for (let i = 0; i < 100 - Q; i++) {
       z=z-2;

    }
    let myZ = 8779;

    const RezultRLZ = document.getElementById('rlz');

    for (let i = 0; i < 100-Q; i++) {
        if (2 % i === 0) {
           myZ--
        } else {
            myZ = myZ-2;
        }
    }
    RezultZ.innerText = myZ;
    let RLZ = myZ.toString();
    RezultRLZ.innerText = "Z = " + toRL(RLZ);

    let MyX4;
    for (let i = 0; i <100-Q; i++) {
        if(Q<40){
            number4 = number4 - 9990000000000;
        }else {
            if (2 % i === 0) {
                number4 = number4 - 101011;
            } else {
                number4 = number4 - 10100;
            }
        }

    }
    number4 = number4.toString();

    MyX4 = toRL(number4);
    const RezultX4 = document.getElementById('MyX');
    // MyX4 = MyX4.split('.');
    // for (let i = 0; i < 100 - Q; i++) {
    //     MyX4[MyX4.length-1]++;
    //     MyX4[MyX4.length-3]++;
    //     MyX4[MyX4.length-7]++;
    //     MyX4[MyX4.length-9]++;
    //     MyX4[MyX4.length-11]++;
    //
    //
    //
    RezultX4.innerText = MyX4;
    const Dec1 = document.getElementById('decrez');
    let Dec1raw = "";
    Dec1raw = Dec1raw.split('');

    for (let i = 0; i < (80 - Q)/2; i++) {
        Dec1raw.pop();
        if(i > 20){
            break;
        }


    }

    Dec1.innerText = number4;
    for (let i = 0; i < 100 - Q; i++) {
        number11 = number11 -2;
    }
   number11 = number11.toString();

    let MyY5 = toRL(number11);
    // MyY5 = MyY5
    // for (let  i = 0; i < 100-Q; i++) {
    //
    //
    // }

    const RezultY5 = document.getElementById('MyY');
    RezultY5.innerText = MyY5;

    const DecY = document.getElementById('decrezY');
    DecY.innerText = number11;

}

}