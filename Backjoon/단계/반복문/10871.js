let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let answer = "";
let inputs = input[0].split(" ");
let numbers = input[1].split(" ");
for (let i = 0; i < Number(inputs[0]); i++) {
	if (Number(numbers[i]) < Number(inputs[1])) {
		answer += numbers[i] + " ";
	}
}

console.log(answer);
