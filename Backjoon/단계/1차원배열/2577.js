let [a, b, c] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);
const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const multiply = (a * b * c + "").split("").map(Number);
for (let i = 0; i < multiply.length; i++) {
	counts[multiply[i]]++;
}
console.log(counts.join("\n"));
