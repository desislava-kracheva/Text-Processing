function solve(word, text){

    let arr = text.split(' ').map(x=> x.toLowerCase());

    for(let line of arr){
if(line === word.toLowerCase()){

    console.log(line);
    break;
}  else {

    console.log(`${word} not found!`);
}

    }

}

solve('javascript',
'JavaScript is the best programming language'
)
solve('python',
'JavaScript is the best programming language'
)