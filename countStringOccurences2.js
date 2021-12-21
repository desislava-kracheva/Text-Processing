function solveForSecondTime(text,word){
let counter = 0;
let arr = text.split(' ')

for( let line of arr){

    if(line == word){
        counter++;
    }
}
    
console.log(counter);
}
solveForSecondTime('softuni is great place for learning new programming languages',
'softuni'
)