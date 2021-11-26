function solve(str){

let arr = str.split(' ');

arr.forEach(word => {
    if(word[0] === '#'&& word.length > 1){

         let isOnlyLetters = true;
         word = word.slice(1);
         for(const char of word){

            let code = char.charCodeAt();
            
            if(code < 65 || code > 90 && code < 97 || code > 122){

                isOnlyLetters = false;
                break;

            }
            
         }
         if(isOnlyLetters){

            console.log(word);
         }

    }
});

}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')