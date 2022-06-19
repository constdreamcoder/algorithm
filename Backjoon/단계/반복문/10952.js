let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
	let numbers = input[i].split(" ");
	answer += `${Number(numbers[0]) + Number(numbers[1])} \n`;
}

console.log(answer);
