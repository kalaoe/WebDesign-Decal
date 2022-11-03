// Part 2 (1): averageThreeNumbers
function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3; // raw average
    return Math.round(avg); // round avg to nearest whole number 
}

// Part 2 (2): createSentence
function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

// Part 2 (3): getRandomNum
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

// Part 3.1 (1)
let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

// Part 3.1 (2)
let avg = averageThreeNumbers(x, y, z);

// Part 3.1 (3)
let sentence = createSentence(avg, "duck");

// Part 3.1 (4)
console.log(sentence);