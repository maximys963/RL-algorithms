const button = document.getElementById('btn');
button.addEventListener('click', getInput);
const Arr1 = [];
function getInput() {

    const Dmilus = [[1,0,0,0,0],[0,0,0,0,1],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,2,0]];
    const Dplus = [[0,1,0,0,0],[0,2,0,0,0],[0,0,0,1,0],[1,0,0,0,0],[0,0,0,0,1]];
    const Mi = [2,2,2,2,2];


    console.log( Dmilus.length*Dmilus[0].length);
    let D = [];

    for (let i = 0; i < Dmilus.length; i++) {
        D[i] = [];
        for (let j = 0; j < Dmilus[0].length; j++) {
            D[i][j] = Dplus[i][j] - Dmilus[i][j];
        }
    }
    console.log(D);

   let Estart = [0,0,1,0,0];

    function MGenerate(Estart) {
        let M = [0,0,0,0];
        for (let i = 0; i < D[0].length; i++) {
            for (let j = 0; j < D.length; j++) {
                M[i] += D[j][i] * Estart[j];
            }
        }
        return(M)
    }

    let M = MGenerate(Estart);




    function MAddition(Mi, M){
        let MiPlus = [];
        for (let i = 0; i <Mi.length; i++) {
            MiPlus[i] = Mi[i] + M[i];
        }
        return(MiPlus);
    }
    let M1Plus = MAddition(Mi,M);
    console.log(M1Plus);
    ///////////////////////////////////////////////
    let E2start = [0,0,0,1,0];
    let M1 = MGenerate(E2start);
    let M2Plus = MAddition(M1Plus, M1);
    console.log(M2Plus);
    ////////////////////////////////////////////
    let E3start = [1,0,0,0,0];
    let M2 = MGenerate(E3start);
    let M3Plus = MAddition(M2Plus, M2);
    console.log(M3Plus);
    ///////////////////////////////////////////
    let E4start = [0,1,0,0,0];
    let M3 = MGenerate(E4start);
    let M4Plus = MAddition(M3Plus, M3);
    console.log(M4Plus);
    ////////////////////////////////////////////
    let E5start = [0,0,0,0,1];
    let M4 = MGenerate(E5start);
    let M5Plus = MAddition(M4Plus, M4);
    console.log(M5Plus);


    let Rezult1 = document.getElementById('1it');
    let Rezult2 = document.getElementById('2it');
    let Rezult3 = document.getElementById('3it');
    let Rezult4 = document.getElementById('4it');
    let Rezult5 = document.getElementById('5it');
    let Rezult6 = document.getElementById('6it');

    Rezult1.innerText = `{${Mi}}`;
    Rezult2.innerText = `{${M1Plus}}`;
    Rezult3.innerText = `{${M2Plus}}`;
    Rezult4.innerText = `{${M3Plus}}`;
    Rezult5.innerText = `{${M4Plus}}`;
    Rezult6.innerText = `{${M5Plus}}`;

    let start1 = document.getElementById('t2');
    let start2 = document.getElementById('t3');
    let start3 = document.getElementById('t4');
    let start4 = document.getElementById('t5');
    let start5 = document.getElementById('t6');


    start1.innerText = `e(k) = {${Estart}}`;
    start2.innerText = `e(k) = {${E2start}}`;
    start3.innerText = `e(k) = {${E3start}}`;
    start4.innerText = `e(k) = {${E4start}}`;
    start5.innerText = `e(k)=  {${E5start}}`;
    



















}
