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
    if(obj === '0' || obj2 === "0"  ){
        if(obj === "0" && obj2 !=="0"){
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
            debugger;
            for (let i = splFirstRL2.length; i > -1 ; i--) {
                if (splFirstRL2[i] === '1') {
                    RL2[4 + p] = i;
                    p++;

                }
            }
            if(obj2.split('.')[1] !== undefined) {
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

            let final_rez = document.getElementById('result');
            final_rez.value = '0';



        }
        if (obj2 === "0" && obj !=="0"){

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
            for (let i = splFirstRL1.length; i > -1 ; i--) {
                if (splFirstRL1[i] === '1') {
                    RL1[4 + p] = i;
                    p++;

                }
            }
            if(obj.split('.')[1] !== undefined) {
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
            let final_rez = document.getElementById('result');
            final_rez.value = '0';


        }
        if( obj === '0' && obj2 === "0") {
            const rlOutput1 = document.getElementById('rlnumber1');
            rlOutput1.value = "0";
            const rlOutput2 = document.getElementById('rlnumber2');
            rlOutput2.value = "0";
            let final_rez = document.getElementById('result');
            final_rez.value = '0';
        }
    }
    else {
        let binaryMas = obj.split('');
        // console.log(binaryMas);

        const NumSign1 = number1.split('');
        const NumSign2 = number2.split('');
//////////////////////////////////sign/////////////////////////////////
        if(NumSign1[0] == "-"){
            RL1[0] = 1;
        }else{
            RL1[0] = 0;
        }

        if(NumSign2[0] == "-"){
            RL2[0] = 1;
        }else{
            RL2[0] = 0;
        }
        RL1[1] = '.';
        RL2[1] = '.';
///////////////////////////////////////////////////////////////////////
        let amount = 1;
        // debugger;
        for (let i = 0; i < obj.length; i++) {

            if(obj[i] !== "." && obj[i] == 1){
                RL1[2] = amount;
                amount++;
            }

        }
        let amount2 = 1;
        for (let i = 0; i < obj2.length; i++) {

            if(obj2[i] !== "." && obj2[i] == 1){

                RL2[2] = amount2;
                amount2++;
            }
        }
        RL1[3]= '.';
        RL2[3]= '.';
        ////////////////////////////////////////////////////////////////////////
        let firstRL1 = obj.split('.')[0];
        let firstRL2 = obj2.split('.')[0];
        let splFirstRL1 = firstRL1.split('');
        let splFirstRL2 = firstRL2.split('');
        splFirstRL1.reverse();
        splFirstRL2.reverse();
        // debugger;

        if(obj.split('.')[1] !== undefined){
            var secondRL1 = obj.split('.')[1];
            var splSecondRL1 = secondRL1.split('');
        }

        if(obj2.split('.')[1] !== undefined){

            var secondRL2 = obj2.split('.')[1];
            var splSecondRL2 = secondRL2.split('');
        }


        // console.log(secondRL2);
        // console.log(secondRL1);




//////////////////////////////////////////////////////////////
        let j = 0;
        for (let i = splFirstRL1.length; i > -1 ; i--) {
            if(splFirstRL1[i] === '1'){
                RL1[4+j] = i;
                j++;

            }
        }
        // console.log(RL1);

        /////////////////////////////////////////////////////////////////////////
        let p = 0;
        for (let i = splFirstRL2.length; i > -1 ; i--) {
            if(splFirstRL2[i] === '1'){
                RL2[4+p] = i;
                p++;

            }
        }
        // console.log(RL2);
///////////////////////////////////////////////////////////////
        if(obj.split('.')[1] !== undefined) {
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
        if(obj2.split('.')[1] !== undefined) {
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
        let realRL1 =[];
        for (let i = 0; i < RL1.length-4; i++) {
            realRL1[i] = RL1[i+4];
        }

        let realRL2 = [];
        for (let i = 0; i < RL2.length-4; i++) {
            realRL2[i] = RL2[i+4];
        }

        // console.log(realRL1);
        // console.log(realRL2);


        const rlOutput1 = document.getElementById('rlnumber1');
        rlOutput1.value = RL1.join('');
        const rlOutput2 = document.getElementById('rlnumber2');
        rlOutput2.value = RL2.join('');
        ////////////////////////////////////////////////////////////////////////
        let RL_SUM = [];
        let RL_STRING = [];
// debugger;
        if(realRL1.length > realRL2.length){
            for (let i = 0; i < realRL1.length; i++) {
                RL_SUM[i]= new Array();
                for (let k = 0; k < realRL2.length; k++) {

                    RL_SUM[i][k] = realRL1[i] + realRL2[k];
                    RL_STRING[RL_STRING.length] = realRL1[i] + realRL2[k];


                }
            }

        }else{
            for (let i = 0; i < realRL2.length; i++) {
                RL_SUM[i]= new Array();
                for (let k = 0; k < realRL1.length; k++) {

                    RL_SUM[i][k] = realRL2[i] + realRL1[k];
                    RL_STRING[RL_STRING.length] = realRL2[i] + realRL1[k];


                }
            }
        }
        ////////////////////////////////////////////////////////////////////////////////


        // console.log(RL_SUM);
        // console.log(RL_STRING);
        RL_STRING.sort(
            (a,b)=>{if (a > b) return 1;
                if (a < b) return -1;}
        );

        // console.log(RL_STRING);
        RL_STRING.reverse();
        // console.log(RL_STRING);
        // console.log('next step');

        // debugger;
        for (let i = 0; i < RL_STRING.length; i++) {
            for (let k = 0; k < RL_STRING.length - 1; k++) {
                if (RL_STRING[i] === RL_STRING[k] && k !== i && RL_STRING[k] !== '-' && RL_STRING[i] !== '-' ) {
                    RL_STRING[i]++;
                    RL_STRING[k] = '-';
                    k = 0;
                    i = 0;

                }
            }
        }
        // console.log(RL_STRING);

        let RL_RESULT = [];
        let z = 0;

        for (let i = 0; i < RL_STRING.length; i++) {
            if(RL_STRING[i] !== '-'){
                RL_RESULT[z+4] = RL_STRING[i];
                z++;
            }
        }
        // console.log(RL_RESULT);


        if(RL1[0] == '0' && RL2[0] == '0' || RL1[0] == '1' && RL2[0] == '1'){
            RL_RESULT[0] = "0";
            RL_RESULT[1] = ".";
            RL_RESULT[2] =  RL_RESULT.length -4;
            RL_RESULT[3] = "."


        }else{
            RL_RESULT[0] = "1";
            RL_RESULT[1] = ".";
            RL_RESULT[2] =  RL_RESULT.length -4;
            RL_RESULT[3] = "."
        }
        // console.log(RL_RESULT);


        let final_rez = document.getElementById('result');
        final_rez.value = RL_RESULT.join(',') ;


    }

}

