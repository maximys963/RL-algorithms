export function convertToRL(number1) {
  //
  /*
    ********** | Abandon all hope, ye who enter here. | ***************
  */
  //

  const RL1 = [];
  const RL2 = [];

  const number2 = '123'; // this is clutch, believe me without it function wont work ^_^
  // /////////////////////////////////////////////////

  const obj = parseFloat(number1).toString(2);
  // //////////////////////////////////////////////////

  const obj2 = parseFloat(number2).toString(2);
  // ////////////////////////////////////////////////////

  if (obj === '0' || obj2 === '0') {
    if (obj === '0' && obj2 !== '0') {
      // const rlOutput1 = document.getElementById('rlnumber1');
      // rlOutput1.value = "0";
      const NumSign2 = number2.split('');
      if (NumSign2[0] === '-') {
        RL2[0] = 1;
      } else {
        RL2[0] = 0;
      }
      RL2[1] = '.';
      let amount2 = 1;
      for (let i = 0; i < obj2.length; i++) {
        if (obj2[i] !== '.' && obj2[i] == 1) {
          RL2[2] = amount2;
          amount2++;
        }
      }
      RL2[3] = '.';
      const firstRL2 = obj2.split('.')[0];
      const splFirstRL2 = firstRL2.split('');
      splFirstRL2.reverse();
      if (obj2.split('.')[1] !== undefined) {
        var secondRL2 = obj2.split('.')[1];
        var splSecondRL2 = secondRL2.split('');
      }
      let p = 0;
      // splFirstRL2.reverse();
      debugger;
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
      const realRL2 = [];
      for (let i = 0; i < RL2.length - 4; i++) {
        realRL2[i] = RL2[i + 4];
      }
      // const rlOutput2 = document.getElementById('rlnumber2');

      // rlOutput2.value = RL2.join('');

      // const final_rez = document.getElementById('result');
      // final_rez.value = '0';
    }
    if (obj2 === '0' && obj !== '0') {
      // const rlOutput2 = document.getElementById('rlnumber2');
      // rlOutput2.value = '0';
      const NumSign1 = number1.split('');
      if (NumSign1[0] === '-') {
        RL1[0] = 1;
      } else {
        RL1[0] = 0;
      }
      RL1[1] = '.';
      let amount2 = 1;
      for (let i = 0; i < obj.length; i++) {
        if (obj[i] !== '.' && obj[i] == 1) {
          RL1[2] = amount2;
          amount2++;
        }
      }
      RL1[3] = '.';
      const firstRL1 = obj.split('.')[0];
      const splFirstRL1 = firstRL1.split('');
      splFirstRL1.reverse();
      if (obj.split('.')[1] !== undefined) {
        var secondRL1 = obj.split('.')[1];
        var splSecondRL1 = secondRL1.split('');
      }
      let p = 0;
      // splFirstRL2.reverse();
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
      const realRL1 = [];
      for (let i = 0; i < RL1.length - 4; i++) {
        realRL1[i] = RL1[i + 4];
      }
      // const rlOutput1 = document.getElementById('rlnumber1');
      //
      // rlOutput1.value = RL1.join('');
      // const final_rez = document.getElementById('result');
      // final_rez.value = '0';
    }
    if (obj === '0' && obj2 === '0') {
      // const rlOutput1 = document.getElementById('rlnumber1');
      // rlOutput1.value = '0';
      // const rlOutput2 = document.getElementById('rlnumber2');
      // rlOutput2.value = '0';
      // const final_rez = document.getElementById('result');
      // final_rez.value = '0';
    }
  } else {
    const binaryMas = obj.split('');
    // console.log(binaryMas);

    const NumSign1 = number1.split('');
    const NumSign2 = number2.split('');
    // ////////////////////////////////sign/////////////////////////////////
    if (NumSign1[0] == '-') {
      RL1[0] = 1;
    } else {
      RL1[0] = 0;
    }

    if (NumSign2[0] == '-') {
      RL2[0] = 1;
    } else {
      RL2[0] = 0;
    }
    RL1[1] = '.';
    RL2[1] = '.';
    // /////////////////////////////////////////////////////////////////////
    let amount = 1;
    // debugger;
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] !== '.' && obj[i] == 1) {
        RL1[2] = amount;
        amount++;
      }
    }
    let amount2 = 1;
    for (let i = 0; i < obj2.length; i++) {
      if (obj2[i] !== '.' && obj2[i] == 1) {
        RL2[2] = amount2;
        amount2++;
      }
    }
    RL1[3] = '.';
    RL2[3] = '.';
    // //////////////////////////////////////////////////////////////////////
    const firstRL1 = obj.split('.')[0];
    const firstRL2 = obj2.split('.')[0];
    const splFirstRL1 = firstRL1.split('');
    const splFirstRL2 = firstRL2.split('');
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


    // ////////////////////////////////////////////////////////////
    let j = 0;
    for (let i = splFirstRL1.length; i > -1; i--) {
      if (splFirstRL1[i] === '1') {
        RL1[4 + j] = i;
        j++;
      }
    }
    // console.log(RL1);

    // ///////////////////////////////////////////////////////////////////////
    let p = 0;
    for (let i = splFirstRL2.length; i > -1; i--) {
      if (splFirstRL2[i] === '1') {
        RL2[4 + p] = i;
        p++;
      }
    }
    // console.log(RL2);
    // /////////////////////////////////////////////////////////////
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

    // /////////////////////////////////////////////////////////////
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
    const realRL1 = [];
    for (let i = 0; i < RL1.length - 4; i++) {
      realRL1[i] = RL1[i + 4];
    }

    const realRL2 = [];
    for (let i = 0; i < RL2.length - 4; i++) {
      realRL2[i] = RL2[i + 4];
    }


    // novgorod zone 1

    RL1.splice(1, 1);
    RL1.splice(2, 1);

    // const standartRL = RL1.split('.')
    console.log('realRL1');
    console.log(RL1.join('.'));

    return (RL1.join('.'));
  }
}
