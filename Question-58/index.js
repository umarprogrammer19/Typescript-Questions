"use strict";
// *Question 58:* Average Score Calculator:
// Write a simple program that can take lots of scores and find their average.
function averageScore(scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}
const sampleScores = [80, 77, 88, 95, 68];
const average = averageScore(sampleScores);
console.log(`Average score: ${average}`);
