let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);
const uniqueNums = new Set();
for (let i = 0; i < input.length; i++) {
	uniqueNums.add(input[i] % 42);
}
console.log(uniqueNums.size);
