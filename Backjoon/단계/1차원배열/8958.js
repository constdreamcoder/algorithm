let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
	let countO = 0;
	let sum = 0;

	for (let j = 0; j < input[i].length; j++) {
		if (input[i][j] === "O") {
			countO++;
		} else {
			countO = 0;
		}
		sum += countO;
	}
	answer += sum + "\n";
}

// for문으로 일일히 출력해서 걸린시간 : 136ms
// 걸린 시간: 120ms
// for문을 돌리면서 일일히 출력하는 것보단 한꺼번에 모아서 출력하는 게 좀 더 효율적인 것 같다.
console.log(answer);
