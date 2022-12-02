const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n');
console.log(input);

const points = { // AX=Rock BY=Paper CZ=Scissors
	'X': 1,
	'Y': 2,
	'Z': 3,

	'A X': 3,
	'A Y': 6,
	'A Z': 0,

	'B X': 0,
	'B Y': 3,
	'B Z': 6,

	'C X': 6,
	'C Y': 0,
	'C Z': 3
}

let score = 0;
input.forEach(round => {
	const me = round.substring(2);

	score += points[me]
	score += points[round]
});

console.log(score);

// Part Two
const cases = { // A=Rock B=Paper C=Scissors X=Loose Y=Draw Z=Win
	'A X': 'S',
	'A Y': 'R',
	'A Z': 'P',

	'B X': 'R',
	'B Y': 'P',
	'B Z': 'S',

	'C X': 'P',
	'C Y': 'S',
	'C Z': 'R'
}

const pointsTwo = {
	'X': 0,
	'Y': 3,
	'Z': 6,

	'R': 1,
	'P': 2,
	'S': 3,
}

let scoreTwo = 0;
input.forEach(round => {
	const outcome = round.substring(2);
	const me = cases[round];
	scoreTwo += pointsTwo[outcome];
	scoreTwo += pointsTwo[me];
});

console.log(scoreTwo);