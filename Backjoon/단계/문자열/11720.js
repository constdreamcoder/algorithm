let [count, numbers] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let sum = 0;

for (let i = 0; i < count; i++) {
	sum += Number(numbers[i]);
}

console.log(sum);
