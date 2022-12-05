const { readFileSync } = require('fs');

const input = readFileSync(process.argv[2]).toString().split('\n');

const getMinMax = (elf) => {
	const original = elf['init'];
	
	elf['min'] = parseInt(original.substring(0,original.indexOf('-')));
	elf['max'] = parseInt(original.substring(original.indexOf('-')+1));
};

const inRange = (value, min, max) => {
	if (min <= value && value <= max) return true;
	return false;
};

const checkIfOverlap = (firstElf, secondElf) => {
	if (
		inRange(secondElf.min,firstElf.min,firstElf.max) ||
		inRange(secondElf.max,firstElf.min,firstElf.max) ||
		inRange(firstElf.min,secondElf.min,secondElf.max) ||
		inRange(firstElf.max,secondElf.min,secondElf.max) 
	)	return true;

	return false;
};

let totalOverlaps = 0;
for (let row of input) {
	let firstElf = {'init': row.substring(0,row.indexOf(','))};
	let secondElf = {'init': row.substring(row.indexOf(',')+1)};
	getMinMax(firstElf);
	getMinMax(secondElf);
	if (checkIfOverlap(firstElf,secondElf))
		totalOverlaps++;
}

console.log(totalOverlaps);