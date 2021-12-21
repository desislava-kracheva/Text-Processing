function solveForSecondTime(text, word){

    while(text.includes(word)){
    
    text = text.replace(word, ('*'.repeat(word.length)))
    
    }
    
    console.log(text);
    }
solveForSecondTime('A small sentence with some words', 'small')