function solveForSecondTime(words,text){
    

        words = words.split(', ');
        for(let word of words){
        let starstext = '*'.repeat(word.length);
        
        text = text.replace(starstext,word)
        
        }
        
        console.log(text);
        




}
solveForSecondTime('great',
'softuni is ***** place for learning new programming languages'
)