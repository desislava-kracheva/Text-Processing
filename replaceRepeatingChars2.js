function solveForSecondTime(str){

    let arr = str.split('') ;
    
    let newArr = [];

    for (let i = 0; i< arr.length; i++){

        if(arr[i] !== arr[i+1]){
            newArr.push(arr[i])
        }
    }
console.log(newArr.join(''));
}
solveForSecondTime('aaaaabbbbbcdddeeeedssaa')