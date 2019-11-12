const button = document.getElementById('btn');
button.addEventListener('click', getInput);
const Arr1 = [];
function getInput() {
    let RL1 = [];
    let RL2 = [];
///////////////////////////////////////////////////

    let input = document.getElementById('number');
    let number1 = input.value;

    let obj = parseFloat(number1).toString(2);
////////////////////////////////////////////////////
    let input2 = document.getElementById('number2');
    let number2 = input2.value;

    let obj2 = parseFloat(number2).toString(2);
//////////////////////////////////////////////////////
    let binOut = document.getElementById('binary');
    binOut.value = obj;
    let binOut2 = document.getElementById('binary2');
    binOut2.value = obj2;
    if (obj === '0' || obj2 === "0") {
        if (obj === "0" && obj2 !== "0") {
            const rlOutput1 = document.getElementById('rlnumber1');
            rlOutput1.value = "0";
            const NumSign2 = number2.split('');
            if (NumSign2[0] === "-") {
                RL2[0] = 1;
            } else {
                RL2[0] = 0;
            }
            RL2[1] = '.';
            let amount2 = 1;
            for (let i = 0; i < obj2.length; i++) {

                if (obj2[i] !== "." && obj2[i] == 1) {

                    RL2[2] = amount2;
                    amount2++;
                }
            }
            RL2[3] = '.';
            let firstRL2 = obj2.split('.')[0];
            let splFirstRL2 = firstRL2.split('');
            splFirstRL2.reverse();
            if (obj2.split('.')[1] !== undefined) {

                var secondRL2 = obj2.split('.')[1];
                var splSecondRL2 = secondRL2.split('');
            }
            let p = 0;
            // splFirstRL2.reverse();
            // debugger;
            for (let i = splFirstRL2.length; i > -1; i--) {
                if (splFirstRL2[i] === '1') {
                    RL2[4 + p] = i;
                    p++;

                }
            }
            if (obj2.split('.')[1] !== undefined) {
                let q = 0;
                const len2 = RL2.length;
                for (let i = 0; i < splSecondRL2.length; i++) {
                    if (splSecondRL2[i] === '1') {
                        RL2[len2 + q] = -i - 1;
                        q++;

                    }

                }
                // console.log(RL2);
            }
            let realRL2 = [];
            for (let i = 0; i < RL2.length - 4; i++) {
                realRL2[i] = RL2[i + 4];
            }
            const rlOutput2 = document.getElementById('rlnumber2');

            rlOutput2.value = RL2.join('');

            // let final_rez = document.getElementById('result');
            // final_rez.value = '0';


        }
        if (obj2 === "0" && obj !== "0") {

            const rlOutput2 = document.getElementById('rlnumber2');
            rlOutput2.value = "0";
            const NumSign1 = number1.split('');
            if (NumSign1[0] === "-") {
                RL1[0] = 1;
            } else {
                RL1[0] = 0;
            }
            RL1[1] = '.';
            let amount2 = 1;
            for (let i = 0; i < obj.length; i++) {

                if (obj[i] !== "." && obj[i] == 1) {

                    RL1[2] = amount2;
                    amount2++;
                }
            }
            RL1[3] = '.';
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
                    RL1[4 + p] = i;
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
            for (let i = 0; i < RL1.length - 4; i++) {
                realRL1[i] = RL1[i + 4];
            }
            const rlOutput1 = document.getElementById('rlnumber1');

            rlOutput1.value = RL1.join('');
            // let final_rez = document.getElementById('result');
            // final_rez.value = '0';


        }
        if (obj === '0' && obj2 === "0") {
            const rlOutput1 = document.getElementById('rlnumber1');
            rlOutput1.value = "0";
            const rlOutput2 = document.getElementById('rlnumber2');
            rlOutput2.value = "0";
            // let final_rez = document.getElementById('result');
            // final_rez.value = '0';
        }
    }

        let binaryMas = obj.split('');
        // console.log(binaryMas);

        const NumSign1 = number1.split('');
        const NumSign2 = number2.split('');
//////////////////////////////////sign/////////////////////////////////
        if (NumSign1[0] == "-") {
            RL1[0] = 1;
        } else {
            RL1[0] = 0;
        }

        if (NumSign2[0] == "-") {
            RL2[0] = 1;
        } else {
            RL2[0] = 0;
        }
        RL1[1] = '.';
        RL2[1] = '.';
///////////////////////////////////////////////////////////////////////
        let amount = 1;
        // debugger;
        for (let i = 0; i < obj.length; i++) {

            if (obj[i] !== "." && obj[i] == 1) {
                RL1[2] = amount;
                amount++;
            }

        }
        let amount2 = 1;
        for (let i = 0; i < obj2.length; i++) {

            if (obj2[i] !== "." && obj2[i] == 1) {

                RL2[2] = amount2;
                amount2++;
            }
        }
        RL1[3] = '.';
        RL2[3] = '.';
        ////////////////////////////////////////////////////////////////////////
        let firstRL1 = obj.split('.')[0];
        let firstRL2 = obj2.split('.')[0];
        let splFirstRL1 = firstRL1.split('');
        let splFirstRL2 = firstRL2.split('');
        splFirstRL1.reverse();
        splFirstRL2.reverse();
        // debugger;

        if (obj.split('.')[1] !== undefined) {
            var secondRL1 = obj.split('.')[1];
            var splSecondRL1 = secondRL1.split('');
        }

        if (obj2.split('.')[1] !== undefined) {

            var secondRL2 = obj2.split('.')[1];
            var splSecondRL2 = secondRL2.split('');
        }


        // console.log(secondRL2);
        // console.log(secondRL1);


//////////////////////////////////////////////////////////////
        let j = 0;
        for (let i = splFirstRL1.length; i > -1; i--) {
            if (splFirstRL1[i] === '1') {
                RL1[4 + j] = i;
                j++;

            }
        }
        // console.log(RL1);

        /////////////////////////////////////////////////////////////////////////
        let p = 0;
        for (let i = splFirstRL2.length; i > -1; i--) {
            if (splFirstRL2[i] === '1') {
                RL2[4 + p] = i;
                p++;

            }
        }
        // console.log(RL2);
///////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////
        if (obj2.split('.')[1] !== undefined) {
            let q = 0;
            const len2 = RL2.length;
            for (let i = 0; i < splSecondRL2.length; i++) {
                if (splSecondRL2[i] === '1') {
                    RL2[len2 + q] = -i - 1;
                    q++;

                }

            }
            // console.log(RL2);
        }
    let realRL1D = [];
    let realRL2D = [];
        let realRL1 = [];
        for (let i = 0; i < RL1.length - 4; i++) {
            realRL1[i] = RL1[i + 4];
            realRL1D[i] = RL1[i + 4];
        }

        let realRL2 = [];
        for (let i = 0; i < RL2.length - 4; i++) {
            realRL2[i] = RL2[i + 4];
            realRL2D[i] = RL2[i + 4];
        }



        // console.log(realRL1);
        // console.log(realRL2);


        const rlOutput1 = document.getElementById('rlnumber1');
        rlOutput1.value = RL1.join('');
        const rlOutput2 = document.getElementById('rlnumber2');
        rlOutput2.value = RL2.join('');


        // console.log(`realRL1 перед входженням в алгоритм ${realRL1}`);
        // console.log(`realRL2 перед входженням в алгоритм ${realRL2}`);


       function Substraction(realRL1, realRL2) {
          let sign = 0;
           if (Number(number1) > Number(number2)) {
               console.log(`first is bigger`);
               for (let i = 0; i < realRL1.length; i++) {
                   for (let k = 0; k < realRL2.length; k++) {
                       if (realRL1[i] === realRL2[k]) {
                           realRL2.splice(realRL2.indexOf(realRL2[k]), 1);
                           realRL1.splice(realRL1.indexOf(realRL1[i]), 1);
                           i = -1;
                           k = -1;
                           // видаляю однакові значення
                       }
                   }

               }
               // console.log(realRL1);
               // console.log(realRL2);
               if (realRL2[0] === undefined) {
                   //якщо до цього моменту друге число(відємник) повністю віднялося то виводимо результат
                   // console.log(`Результат віднімання ${realRL1}`)

               }else{

                   let itertator1 = 2;

                   for (let i = 0; i < realRL1[0] - realRL2[realRL2.length-1]; i++) {
                       realRL1.push(realRL1[0] - itertator1);
                       if(i+1 === realRL1[0] - realRL2[realRL2.length-1]){
                           realRL1.push(realRL1[0] - itertator1);

                       }
                       itertator1++;


                   }
                   realRL1[0]--;

                   // console.log("1 "+ realRL1);
                   // console.log("2 "+realRL2);




                   for (let i = 0; i < realRL1.length; i++) {
                       for (let k = 0; k < realRL2.length; k++) {
                           if (realRL1[i] === realRL2[k]) {
                               realRL2.splice(realRL2.indexOf(realRL2[k]), 1);
                               realRL1.splice(realRL1.indexOf(realRL1[i]), 1);
                               i = -1;
                               k = -1;

                           }

                       }


                   }

                   // console.log(realRL1);
                   console.log("realRL2 after splice" + realRL2);


                   for (let i = 0; i < realRL1.length; i++) {
                       for (let k = 0; k < realRL1.length; k++) {
                           if (realRL1[i] === realRL1[k] && i !== k) {
                               realRL1[i]++;
                               realRL1.splice(realRL1.indexOf(realRL1[k]), 1);
                               i = -1;
                               k = -1;
                           }

                       }
                   }
                   // console.log(realRL1);

                   function compareNumeric(a, b) {
                       if (a > b) return -1;
                       if (a < b) return 1;
                   }

                   realRL1.sort(compareNumeric);
                   // console.log("after sort = "+ realRL1);
                   sign = 0;
                   // console.log("sign = " + sign);
                   // realRL2[0] = sign;






               }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
           }else if(number2 === number1){
               realRL1 = [];
               realRL1[0]= 0;
               // console.log("its works");
               let realResult = [];
               realResult[0] = 0;



               let final_rez = document.getElementById('result');
               final_rez.value = 0
           }else{
               // console.log(`second is bigger`);
               // console.log(realRL1);
               // console.log(realRL2);
               let exchangeMas = [];
               let exchangeMas2 = [];
               for (let i = 0; i < realRL1.length; i++) {
               exchangeMas[i] = realRL1[i];

               }
               for (let i = 0; i < realRL2.length; i++) {
                   exchangeMas2[i] = realRL2[i];

               }
               // console.log("before 1 " + realRL1);
               // console.log("before 2 " +realRL2);
               realRL1 = [];
               realRL2 = [];

               for (let i = 0; i < exchangeMas2.length; i++) {
                   realRL1[i] = exchangeMas2[i];

               }
               for (let i = 0; i < exchangeMas.length; i++) {
                  realRL2[i] = exchangeMas[i];

               }
               // console.log("after 1 "+ realRL1);
               // console.log("after 2 "+ realRL2);


               for (let i = 0; i < realRL1.length; i++) {
                   for (let k = 0; k < realRL2.length; k++) {
                       if (realRL1[i] === realRL2[k]) {
                           realRL2.splice(realRL2.indexOf(realRL2[k]), 1);
                           realRL1.splice(realRL1.indexOf(realRL1[i]), 1);
                           i = -1;
                           k = -1;
                           // видаляю однакові значення
                       }
                   }

               }
               // console.log(realRL1);
               // console.log(realRL2);
               if (realRL2.length === 0) {
                   //якщо до цього моменту друге число(відємник) повністю віднялося то виводимо результат
                   // console.log(`Результат віднімання ревл рл 1${realRL1}`);
                   realRL2[0]= 1;
                   // console.log(`все скоротилося віднімання  реалрс2 ${realRL2}`)

               }else {

                   let itertator1 = 2;

                   for (let i = 0; i < realRL1[0] - realRL2[realRL2.length - 1]; i++) {
                       realRL1.push(realRL1[0] - itertator1);
                       if (i + 1 === realRL1[0] - realRL2[realRL2.length - 1]) {
                           realRL1.push(realRL1[0] - itertator1);

                       }
                       itertator1++;


                   }
                   realRL1[0]--;

                   // console.log("1 " + realRL1);
                   // console.log("2 " + realRL2);


                   for (let i = 0; i < realRL1.length; i++) {
                       for (let k = 0; k < realRL2.length; k++) {
                           if (realRL1[i] === realRL2[k]) {
                               realRL2.splice(realRL2.indexOf(realRL2[k]), 1);
                               realRL1.splice(realRL1.indexOf(realRL1[i]), 1);
                               i = -1;
                               k = -1;

                           }

                       }


                   }
                   console.log("realRL2 after splice" +realRL2);

                   // console.log(realRL1);
                   // console.log(realRL2);


                   for (let i = 0; i < realRL1.length; i++) {
                       for (let k = 0; k < realRL1.length; k++) {
                           if (realRL1[i] === realRL1[k] && i !== k) {
                               realRL1[i]++;
                               realRL1.splice(realRL1.indexOf(realRL1[k]), 1);
                               i = -1;
                               k = -1;
                           }

                       }
                   }

                   // console.log(realRL1);

                   function compareNumeric(a, b) {
                       if (a > b) return -1;
                       if (a < b) return 1;
                   }

                   realRL1.sort(compareNumeric);
                   // console.log("after sort = " + realRL1);
                   sign = 1;
                   console.log("sign = " + sign);



               }

               }



return[realRL1,realRL2,sign]}


    // console.log("1 до виклика = "+realRL1);
    // console.log("2 до вмклика  = "+realRL2);



    let REZARR = [];


    REZARR = Substraction(realRL1,realRL2);
    console.log(REZARR);
    realRL1 = [];
    realRL2 = [];
    // debugger;
    // for (let i = 0; i < REZARR.length; i++) {
    //     for (let k = 0; k < REZARR[i].length; k++) {
    //        if(i===0){
    //            realRL1[k] = REZARR[i][k];
    //        }else{
    //            realRL2[k] = REZARR[i][k];
    //        }
    //
    //     }
    // }
    realRL1 = REZARR[0];
    realRL2 = REZARR[1];


    // console.log("after  1 "+ realRL1);
    // console.log("after  2  "+ realRL2);



    // let final_rez = document.getElementById('result');
    //     final_rez.value = realResult.concat(realRL1).join('.')
    //    console.log("віднімання "+realRL1);

//
// debugger;

   if(realRL2[0] === 0 || realRL2.length === 0){
       let realResult = [];
       realResult[0] = 0;
       realResult[1] = realRL1.length;
       // realResult.concat(realRL1);
       // // realResult.join('.');
       // console.log(`real1 = ${realRL1}`);
       // console.log(`real2 = ${realRL2}`);
       let final_rez = document.getElementById('result');
       final_rez.value = realResult.concat(realRL1).join('.')


   }else if(realRL2[0] === 1){
       let realResult = [];
       realResult[0] = 1;
       realResult[1] = realRL1.length;
       // realResult.concat(realRL1);
       // realResult.join('.');
       // console.log(`real1 = ${realRL1}`);
       // console.log(`real2 = ${realRL2}`);
       let final_rez = document.getElementById('result');
       final_rez.value = realResult.concat(realRL1).join('.');
   }










   if(number1 === '0' ){
       let final_rez_d = document.getElementById('divide');
       final_rez_d.value = 0;
   }else if(number2 === '0' ){
       let final_rez_d = document.getElementById('divide');
       final_rez_d.value = "do not divide into 0";
   }else if(number1 ===  number2){
       let final_rez_d = document.getElementById('divide');
       final_rez_d.value = "0.1.0";
   }
   else{
       let arrAdd = [];
       let diffRL = 0;
       let Q = 100;
       let divRes = [];
       // console.log(realRL1D);
       // console.log(realRL2D);
       let REZULTSUB;
       let signR;
       // debugger;
       if(parseInt(number1) > parseInt(number2)){
           console.log(` number1 = ${number1}`);
           console.log(` number2 = ${number2}`);
           console.log(` number1 > number2`);
       for (let i = 0; i < Q; i++) {
           console.log(` realRL1D = ${realRL1D}`);
           console.log(` realRL2D = ${realRL2D}`);
           diffRL = realRL1D[0] - realRL2D[0];
           console.log(` різниця ${diffRL}`);
           // diffRL різниця між першими числами алгоритму ділення
           for (let k = 0; k < realRL2D.length; k++) {
             arrAdd[k] = realRL2D[k]+diffRL;

           }
           console.log(` змінений дільник ${arrAdd}`);
           REZULTSUB = Substraction(realRL1D, arrAdd);
           console.log( REZULTSUB);
           realRL1D = [];

           realRL1D = REZULTSUB[0];


           if(isNaN(diffRL)){
               console.log("finish");
               break;
           }
           arrAdd = [];
           divRes[i]= diffRL;

       }}else{
           // console.log(` number1 = ${number1}`);
           // console.log(` number2 = ${number2}`);
           // console.log(` number1 < number2 `);
           console.log(realRL1D);
           console.log(realRL2D);
           for (let i = 0; i < Q; i++) {
               console.log(i);
               diffRL = realRL1D[0] - realRL2D[0];
               if(isNaN(diffRL)){
                   console.log("finish");
                   break;
               }
               console.log( diffRL);

               for (let k = 0; k < realRL2D.length; k++) {
                   arrAdd[k] = realRL2D[k]+diffRL;
               }

               console.log("changed 2 = " + arrAdd);
               // відсіювання однакових цифер
               // debugger;


               for (let k = 0; k < realRL1D.length; k++) {
                   for (let l = 0; l < arrAdd.length; l++) {
                       if(realRL1D[k] === arrAdd[l]){
                           realRL1D.splice(realRL1D.indexOf(realRL1D[k]), 1);
                           arrAdd.splice(arrAdd.indexOf(arrAdd[l]), 1);
                           k=-1;
                           l=-1;
                       }
                   }
               }
               console.log(realRL1D);
               console.log(arrAdd);

               if(realRL1D[0] === undefined && arrAdd[0] !== undefined){
                   realRL1D = arrAdd;
                   diffRL--;
               }else if(realRL1D[0] === undefined && arrAdd[0] === undefined){
                   divRes[i]= diffRL;
                   // break;

               } else {
                   // console.log("before realRL1D " + realRL1D);
                   // console.log("before arrAdd " + arrAdd);
                   // console.log("arrAdd[arrAdd.length-1] " + arrAdd[arrAdd.length-1]);
// debugger;
                   for (let k = -1; k < realRL1D[0]-arrAdd[arrAdd.length-1]; k++) {
                       realRL1D.push(--realRL1D[0]);
                       if(realRL1D[realRL1D.length] === arrAdd[arrAdd.length-1]){
                           break;
                       }


                   }
                   // console.log(realRL1D);
                   // console.log(arrAdd);
                   for (let k = 0; k < realRL1D.length; k++) {
                       for (let l = 0; l < arrAdd.length; l++) {
                           if(realRL1D[k] === arrAdd[l]){
                               realRL1D.splice(realRL1D.indexOf(realRL1D[k]), 1);
                               arrAdd.splice(arrAdd.indexOf(arrAdd[l]), 1);
                               k=-1;
                               l=-1;

                           }
                       }
                   }
                   // console.log("after after realRL1D " + realRL1D);
                   // console.log("after after arrAdd " + arrAdd);
                   if(realRL1D[0] === undefined ){
                       diffRL--;
                       realRL1D = arrAdd;
                       // console.log(" after undefined realRL1D = " + realRL1D)
                   }
                   // console.log(" without undefined realRL1D = " + realRL1D);


                   // console.log(` diffRL = ${diffRL}`);
                   // debugger;
                   console.log(i);



               }
               arrAdd = [];
               divRes[i]= diffRL;

           }

       }

       // function Cleaning() {
       //
       // }


       let devideRezult = [];
       devideRezult[0]= 0;
       devideRezult[1]=divRes.length;
       // console.log(divRes);
       let final_rez_d = document.getElementById('divide');
       final_rez_d.value = devideRezult.concat(divRes).join(".");




   }
   if(Number(number1) === Number(number2)){
       let final_rez = document.getElementById('result');
       final_rez.value = 0;




   }
 





}








