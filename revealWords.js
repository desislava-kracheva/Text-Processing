function solve(words, str){

words = words.split(', ');
for(let word of words){
let starsStr = '*'.repeat(word.length);

str = str.replace(starsStr,word)

}

console.log(str);
}

solve('great',
'softuni is ***** place for learning new programming languages'
)