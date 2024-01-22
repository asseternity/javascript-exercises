const repeatString = function(string, num) {
// create an empty string variable repeatedString that will hold the repeated string
let repeatedString = '';
// create an integer variable iterations = num
let iterations = num;
if (iterations < 0) { return 'ERROR' };
// create i = 0;
let i = 0;
// as long as i is less than iterations do the below code, and add 1 to i after every run
for (i; i < iterations; i++) {
    repeatedString += string;
}
return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
