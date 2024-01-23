const fibonacci = function(position) {
    let int_position = parseInt(position);
    if (int_position < 0) { return 'OOPS' } else {
        let fibonacciSequence = [0, 1];
            for (i = 0; i < 100; i++) {
                let sum = fibonacciSequence[i] + fibonacciSequence[i+1];
                // fS[0] = 1, fS[1] = 1, sum = 2
                // fS[1] = 1, fS[2] = 2, sum = 3
                fibonacciSequence.push(sum);
            };
            // so I have an array with fibonacci numbers
            // i am given an index and I need to find what number it is
            // so I need to just 
            return fibonacciSequence[int_position];
    };
};

// Do not edit below this line
module.exports = fibonacci;
