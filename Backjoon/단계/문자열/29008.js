let inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((input) => input.split("").reverse().join(""));

console.log(Math.max(...inputs));
