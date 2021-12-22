function solveForSecondTime(str){

    let firstHalf = str.substring(0,(str.length)/2).split('').reverse().join('');
    let secondHalf = str.substring((str.length-1)/2+1).split('').reverse().join('');
console.log(firstHalf);
console.log(secondHalf);
    

}

solveForSecondTime('tluciffiDsIsihTgnizamAoSsIsihT')