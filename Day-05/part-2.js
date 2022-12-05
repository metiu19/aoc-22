const { readFileSync } = require('fs');

const input = readFileSync(process.argv[2]).toString().split('\n\n');

const cargo = input[0].split('\n');
const columnsRow = cargo.pop().trim();
const columns = parseInt(columnsRow.substring(columnsRow.lastIndexOf(' ')+1));

var depot = new Array(columns);

cargo.forEach((row, i) => {
	for (let j=0; j<columns; j++) {
		if (depot[j] == undefined) depot[j] = [];
		depot[j][i] = row[1+(3*j)+(1*j)];
	}
});

depot.forEach((row, i) => {
	row.reverse();
	depot[i] = row.filter(item => item != ' ');
});




const moveItems = (quantity, from, to) => {
	let tempStorage = [];
	for (let i=0;i<quantity;i++) {
		tempStorage.push(depot[from].pop());
	}
	for (let i=0;i<quantity;i++) {
		depot[to].push(tempStorage.pop());
	}
	
};

const instructionsList = input[1].split('\n');

instructionsList.forEach(instruction => {
	instruction = instruction.substring(5);
	const quantity = parseInt(instruction.substring(0,instruction.indexOf(' ')));
	instruction = instruction.substring(instruction.indexOf('from ')+5);
	const origin = parseInt(instruction.substring(0,instruction.indexOf(' ')))-1;
	instruction = instruction.substring(instruction.indexOf('to ')+3);
	const destination = parseInt(instruction.substring(instruction.indexOf(' ')))-1;

	moveItems(quantity, origin, destination);
});

let out = '';
depot.forEach(col => {
	out = `${out}${col[col.length-1]}`;
});

console.log(out);