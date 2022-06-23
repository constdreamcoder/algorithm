let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let answer = "";
for (let i = 1; i <= Number(input[0]); i++) {
	let testCase = input[i].split(" ");

	for (let j = 0; j < testCase[1].length; j++) {
		answer += testCase[1][j].repeat(testCase[0]);
	}
	answer += "\n";
}
console.log(answer);
