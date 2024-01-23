const palindromes = function(string) {
    let reversed = [];
    let stringArray = string.split('');
    console.log(`stringArray = ${stringArray}`);
    let noSymbols = stringArray.filter((letter) => (
        letter !== '.' &&
        letter !== ',' &&
        letter !== '!' &&
        letter !== '?' &&
        letter !== '-' &&
        letter !== ':' &&
        letter !== '(' &&
        letter !== ')' &&
        letter !== ';' &&
        letter !== `'` &&
        letter !== ' ' &&
        letter !== `"`));
    console.log(`noSymbols = ${noSymbols}`);
    let i = 1;
    for (i; i <= noSymbols.length; i++) {
        reversed.push(noSymbols[noSymbols.length-i]);
    }
    console.log(`reversed = ${reversed}`);
    let noSymbolsJoined = noSymbols.join('').toLowerCase();
    let reversedJoined = reversed.join('').toLowerCase();
    if (noSymbolsJoined == reversedJoined) { return true } else { return false }; 
};


// Do not edit below this line
module.exports = palindromes;
