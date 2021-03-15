const assertEquals = require('./../test-framework');
const countEvenNumber = require('./../countEvenNumber');

let input, expectedOutput, actualOutput, result;
// Test 1
// Setup
input = [1, 2, 3, 4, 5, 6];
expectedOutput = 3;
console.log(`Testing ${input} gives output ${expectedOutput}`);

// Execute
actualOutput = countEvenNumber(input);

// Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${input}. Result: ${result}`);


// Test 2
// Setup
input = [0, 1, 2];
expectedOutput = 2;
console.log(`Testing ${input} gives output ${expectedOutput}`);

// Execute
actualOutput = countEvenNumber(input);

// Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${input}. Result: ${result}`);


// Test 3
// Setup
input = [1, 3, 5];
expectedOutput = 0;
console.log(`Testing ${input} gives output ${expectedOutput}`);

// Execute
actualOutput = countEvenNumber(input);

// Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${input}. Result: ${result}`);