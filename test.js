const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return numbers;
};

const testGenerateNumbers = () => {
    const numbers = generateNumbers();
    console.assert(numbers.size === 6, "Test failed: Should generate 6 numbers");
    for (const number of numbers) {
        console.assert(number >= 1 && number <= 45, "Test failed: Number out of range");
    }
    console.log("All tests passed!");
};

testGenerateNumbers();