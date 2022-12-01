const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString();

let split = input.split('\n');
console.log(split);

let Elfs = [];
let Elf = 0;
split.forEach((val) => {
	if (val == '') {
		Elfs.push(Elf);
		Elf = 0;
	} else {
		Elf += Number(val);
	}
});
Elfs.push(Elf)

console.log(Elfs,Math.max(...Elfs));

// Part Two
let Elf1 = Math.max(...Elfs);

Elfs.find((val, i) => {
	if (val == Elf1) {
		Elfs[i] = 0;
		return true;
	}
	return false;
});

let Elf2 = Math.max(...Elfs);

Elfs.find((val, i) => {
	if (val == Elf2) {
		Elfs[i] = 0;
		return true;
	}
	return false;
});

let Elf3 = Math.max(...Elfs);

let ElfTop = Elf1 + Elf2 + Elf3

console.log(Elf1, Elf2, Elf3, ElfTop);