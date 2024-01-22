const reverseString = function(start) {
// create a string variable Result that will hold the final product but for now = ""
let result = '';
// create an array variable Symbols with all the symbols that will be split("")
let symbols = start.split("");
// create an integer variable Length to store the length of the Symbols array
let length = symbols.length;
// create i = 0
let i = 1;
// as long as i is less than Length, run this code and i++
for (i; i <= length; i++) {
// add to Result Symbols[Length-i]
result += symbols[length-i];
// symbols = ['h','e','l','l','o']; i = 1; length = 5; result = symbols[5-1] = o 
// symbols = ['h','e','l','l','o']; i = 2; length = 5; result = symbols[5-2] = l
// symbols = ['h','e','l','l','o']; i = 3; length = 5; result = symbols[5-3] = l
// symbols = ['h','e','l','l','o']; i = 4; length = 5; result = symbols[5-4] = e
// symbols = ['h','e','l','l','o']; i = 5; length = 5; result = symbols[5-5] = h
}
return result;
};

// Do not edit below this line
module.exports = reverseString;
