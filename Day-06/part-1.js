const { readFileSync } = require('fs');

const input = readFileSync(process.argv[2]).toString().split('\n');

const checkIfDup = (array) => {
	let uniqueValues = new Set();

	for (let i = 0; i < array.length; i++) {
		if (!uniqueValues.has(array[i])) {
			uniqueValues.add(array[i]);
		} else {
			return true;
		}
	}

	return false;
};

input.forEach(dataBuffer => {
	let lastChars = [];

	for (const i in dataBuffer) {
		const char = dataBuffer[i];
		lastChars.push(char);
		
		if (checkIfDup(lastChars)) {
			const shifts = lastChars.indexOf(char);
			for (let j=0;j<=shifts;j++) {
				lastChars.shift();
			}
			continue;
		}
		
		if (lastChars.length == 4) {
			console.log(parseInt(i)+1);
			break;
		}
	}

	console.log(dataBuffer, lastChars);
});