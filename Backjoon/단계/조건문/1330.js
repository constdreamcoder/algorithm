let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
if (a === b) {
	console.log("==");
} else if (a >= b) {
	console.log(">");
} else {
	console.log("<");
}
