//Q)Create a function that returns number of vowels in a string.
function  countVowel(str) {
    let count = 0;
    for(const char of str) {
        if (
            char === "a" ||
            char === "e" ||        
            char === "i" ||
            char === "o" ||
            char === "u" ||
            char === "A" ||
            char === "E" ||
            char === "I" ||
            char === "O" ||
            char === "U"
        ) {
            count++;
        }
    }
    console.log(count);
}
