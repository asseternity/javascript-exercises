const sumAll = function(integer1, integer2) {
    let finalSum = 0;
    let starter;
    let finisher;
    if (integer1 < 0 || integer2 < 0 || typeof integer1 !== 'number' || typeof integer2 !== 'number') { return 'ERROR' } else {
    if (integer1 < integer2) { 
        starter = integer1; finisher = integer2;
        } else {
           starter = integer2; finisher = integer1; 
        }
// as long as s is <= finisher, run this code, then s++
    for (starter; starter <= finisher; starter++)
// add s to finalSum
    {
        finalSum += starter;
    }
    return finalSum;
}};

// s = 1, f = 4
// s = 1, fS = 1
// s = 2, fS = 3
// s = 3, fS = 6
// s = 4, fS = 10

// Do not edit below this line
module.exports = sumAll;
