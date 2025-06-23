
function reverseString(valor){
    let sign;
    let haveSign = false;
    if (valor.split('')[0] === '-') {
      sign = valor.split('')[0];
      haveSign = true;
    }
    
    let totalWrite = valor.split('');
    let reverseString = [];
    switch (haveSign) {
      case true:
        for (let i = totalWrite.length - 1; i > 0; i--) {
          reverseString.push(totalWrite[i]);
        }
        break;
      default:
        for (let i = totalWrite.length - 1; i >= 0; i--) {
          reverseString.push(totalWrite[i]);
        }
        break;
    }

    let response = ""
    reverseString.map(item => {
        response = response + item 
    })
    if(sign){
        console.log("-" + response)
    }else{
        console.log(response)
    }
}

reverseString("-123")
