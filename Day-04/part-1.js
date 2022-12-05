const { readFileSync } = require('fs');

const getMinMax = (elf) => {
	const original = elf['init'];
	elf['min'] = parseInt(original.substring(0,original.indexOf('-')));
	elf['max'] = parseInt(original.substring(original.indexOf('-')+1));
};

const checkIfRangeInclude = (firstMin, firstMax, secondMin, secondMax) => {
	if (firstMin <= secondMin && secondMax <= firstMax) {
		console.log('first fully include second');
		return 1;
	} else if (secondMin <= firstMin && firstMax <= secondMax) {
		console.log('second fully incluide first');
		return 1;
	}
	return 0;
};

const input = readFileSync(process.argv[2]).toString().split('\n');
console.log(input.length);


let totalIncludes = 0;
for (const pair of input) {
	let firstElf = {'init': pair.substring(0,pair.indexOf(','))};
	let secondElf = {'init': pair.substring(pair.indexOf(',')+1)};

	getMinMax(firstElf);
	getMinMax(secondElf);	
	console.log(firstElf,secondElf);

	totalIncludes += checkIfRangeInclude(firstElf['min'], firstElf['max'], secondElf['min'], secondElf['max']);
}

console.log(totalIncludes);
