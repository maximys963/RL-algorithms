const button = document.getElementById('btn');
button.addEventListener('click', getInput);
const Arr1 = [];
function getInput() {

    let input = document.getElementById('number');
    const number1 = input.value;

    if(number1 === "0"){
        let decimal_rez = document.getElementById('decimal');
        decimal_rez.value = "0";


        let final_rez = document.getElementById('result');
        final_rez.value = "0";

        let rloutput = document.getElementById('rlresult');
        rloutput.value = "0";

        let checkrlrez = document.getElementById('newrl');
        checkrlrez.value = "0";
        let binaryDecimal = document.getElementById('binarydec');
        binaryDecimal.value = "0";


    }else if(number1 === "1"){
        let decimal_rez = document.getElementById('decimal');
        decimal_rez.value = "1";


        let final_rez = document.getElementById('result');
        final_rez.value = "1";

        let rloutput = document.getElementById('rlresult');
        rloutput.value = "0.1.0";
        let checkrlrez = document.getElementById('newrl');
        checkrlrez.value = "0.1.0";
        let binaryDecimal = document.getElementById('binarydec');
        binaryDecimal.value = "1";
    }

    else {


        function factorial(n) {
            return (n !== 1) ? n * factorial(n - 1) : 1;
        }

        let Fa;
        Fa = factorial(number1);
        // console.log(Fa);
        ///////////////////////////////////////////////////
        Number.prototype.noExponents = function () {
            let data = String(this).split(/[eE]/);
            if (data.length == 1) return data[0];

            let z = '',
                sign = this < 0 ? '-' : '',
                str = data[0].replace('.', ''),
                mag = Number(data[1]) + 1;

            if (mag < 0) {
                z = sign + '0.';
                while (mag++) z += '0';
                return z + str.replace(/^\-/, '');
            }
            mag -= str.length;
            while (mag--) z += '0';
            return str + z;
        };

        // console.log(Fa.noExponents());


        let obj1 = Fa.noExponents();

        // розбивамо введене число на масив значень
        let valueElem = Number(number1);
        let rangeF = [];
        for (let i = 0; i < number1; i++) {
            rangeF[i] = valueElem;


            valueElem--

        }
        // console.log(rangeF);
        //////////////////////////////////////////////////////////////////////////////////
        // переводимо числа в двійкову форму
        let binrangeF = [];
        // debugger;

        for (let i = 0; i < rangeF.length; i++) {


            binrangeF[i] = parseInt(rangeF[i]).toString(2);
            //transfer from decimal to binary
        }
        // console.log(binrangeF);
//////////////////////////////////////////////////////////////////////////////////////////
        //переводимо ці ж числа в рл форму

        let rlbinrangeF = [];
        // debugger;
        for (let i = 0; i < binrangeF.length; i++) {
            rlbinrangeF[i] = new Array();
            for (let j = 0; j < binrangeF[i].length; j++) {

                rlbinrangeF[i][j] = binrangeF[i][j];

            }


        }
        // console.log(rlbinrangeF);
        // make reverse array of binary values in each element
        for (let i = 0; i < rlbinrangeF.length; i++) {
            rlbinrangeF[i] = rlbinrangeF[i].reverse();
        }


        //////////////////////////////////////////////////////////////////////////////////////
        // make a massive of rl values
        let rlreal = [];
        for (let i = 0; i < rlbinrangeF.length; i++) {
            rlreal[i] = new Array();
            let count = 0;
            for (let j = 0; j < rlbinrangeF.length; j++) {
                if (rlbinrangeF[i][j] === "1") {

                    rlreal[i][count] = j;
                    count++;
                }
            }
        }


        for (let i = 0; i < rlreal.length; i++) {
            rlreal[i].reverse();

        }
        /////////////////////////////////////////////////////////////////////////////////////
        // перемножаємо рл числа
        let RL_STRING = [];
        let RL_RESULT = [];
        for (let i = 0; i < rlreal.length - 1; i++) {
            RL_RESULT = [];
            RL_STRING = [];

            for (let j = 0; j < rlreal[i].length; j++) {

                for (let k = 0; k < rlreal[i + 1].length; k++) {
                    RL_STRING[RL_STRING.length] = rlreal[i][j] + rlreal[i + 1][k];
                    // console.log(RL_STRING);
                }
            }
            for (let q = 0; q < RL_STRING.length; q++) {
                for (let z = 0; z < RL_STRING.length - 1; z++) {
                    if (RL_STRING[q] === RL_STRING[z] && z !== q && RL_STRING[z] !== '-' && RL_STRING[q] !== '-') {
                        RL_STRING[q]++;
                        RL_STRING[z] = '-';
                        z = 0;
                        q = 0;
                    }
                }
            }
            let a = 0;
            for (let x = 0; x < RL_STRING.length; x++) {
                if (RL_STRING[x] !== '-') {
                    RL_RESULT[a] = RL_STRING[x];
                    a++;
                }
            }
            rlreal[i + 1] = RL_RESULT;
        }
        //////////////////////////////////////////////////////////////////////////////
        // console.log(rlreal);
        //записуємо число в рл формі
        let Result = [];
        Result[0] = "0";
        Result[1] = ".";
        Result[2] = rlreal[rlreal.length - 1].length;
        Result[3] = ".";
        // console.log(Result);
        Result = Result.concat(rlreal[rlreal.length - 1].join("."));
        let foroutRL = Result.join('');
        // console.log(foroutRL);
        let rloutput = document.getElementById('rlresult');
        rloutput.value = foroutRL;

        let numbRL = rlreal[rlreal.length - 1];
        let decRes = 0;

        for (let i = 0; i < numbRL.length; i++) {
            decRes =decRes + Math.pow(2, numbRL[i]);

        }
        decRes =decRes.noExponents();
        // console.log(decRes);

        let decimal_rez = document.getElementById('decimal');
        decimal_rez.value = decRes;


        let final_rez = document.getElementById('result');
        final_rez.value = obj1;

        let binDecRes;
        binDecRes =  parseInt(decRes).toString(2);
        // bigInt =  parseInt(decRes).toString(2);
        // console.log(bigInt);

        let binaryDecimal = document.getElementById('binarydec');
        binaryDecimal.value = binDecRes;
        let checkRez = [];
        let count1 = 0;
        let c = -1;
        for (let j = binDecRes.length; j > -1; j--) {
            if (binDecRes[j] === "1") {
                checkRez[count1] = c;
                count1++;
            }
            c++
        }
        let checkfinRez = [];
        let checkfinRezcon;
        checkfinRez[0] = "0";
        checkfinRez[1] = checkRez.length;
        checkfinRezcon = checkfinRez.concat(checkRez.reverse());
        // let checkrlrez = document.getElementById('newrl');
        // checkrlrez.value = checkfinRezcon.join('.');

////////////////////////////////////////////////////////


        function Substraction1(realRL1, realRL2) {
            // debugger;
           if(realRL1.length > realRL2.length){
               for (let i = 0; i < realRL1.length; i++) {
                  if(realRL1[i] === realRL2[i]){
                      realRL1.splice(realRL1.indexOf(realRL1[i]),1);
                      realRL2.splice(realRL2.indexOf(realRL2[i]),1);
                      i=-1;
                  }

               }
               // debugger;
               for (let i = 0; i < realRL1.length; i++) {
                   if(realRL2[i] > realRL1[i]){
                       console.log(realRL1.length - realRL2.length+2);
                       let dif = realRL1.length - realRL2.length+2;
                       for (let j = 0; j < dif; j++) {
                          realRL2.push(realRL2[j]-1);
                          if (j+1 === dif){
                              realRL2[0]= realRL2[0]-1
                          }
                           console.log(realRL2)

                       }
                   }
               }
               // for (let i = 0; i < binaryDecimal.length; i++) {
               //     for (let j = 0; j < binaryDecimal.length; j++) {
               //
               //
               //     }
               //
               // }
               // console.log(realRL1);
               // console.log(realRL2);

           }

           console.log(realRL1);
           console.log(realRL2);


        }
        // console.log(checkRez);
        // console.log(rlreal[rlreal.length-1]);

        //
        // Substraction1(rlreal[rlreal.length-1],checkRez);
        // console.log(checkRez);
        // console.log(rlreal[rlreal.length-1]);
    }
    let img = document.getElementById("img");
    img.style.visibility = "visible";
    let img2 = document.getElementById("img2");
    img2.style.visibility = "visible";


}

