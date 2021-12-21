function solveForSecondTime(word, text){

    let arr = text.split(' ').map(x=> x.toLowerCase());

    for(let line of arr){
if(line === word.toLowerCase()){

    console.log(line);
    break;
}  

    }

    if(!arr.includes(word)){

        console.log(`${word} not found!`);
    }

}

solveForSecondTime('javascript',
'JavaScript is the best programming language'
)
solveForSecondTime('python',
'JavaScript is the best programming language'
)