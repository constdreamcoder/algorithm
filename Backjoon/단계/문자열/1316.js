let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

/**
 * idea: 문자열을 탐색하다가 다른 문자가 나온 순간 그 문자 이후의 문자열에서 같은 글자가 있는지 확인해보기.
 */

let count = 0;
for (let i = 1; i <= input[0]; i++) {
	for (let j = 0; j < input[i].length - 1; j++) {
		if (input[i][j] !== input[i][j + 1]) {
			if (input[i].slice(j + 1, input[i].length).indexOf(input[i][j]) !== -1) {
				count++;
				break;
			}
		}
	}
}

console.log(Number(input[0]) - count);
