function solveForSecondTime(text){

let pattern = /#[A-Za-z]+/g;

const found = text.match(pattern);

for(line of found){

console.log(line.substring(1));

}
}

solveForSecondTime('Nowadays everyone uses # to tag a #special word in #socialMedia')