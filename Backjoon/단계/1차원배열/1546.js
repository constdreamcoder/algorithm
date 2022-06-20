// 풀이 1
// 걸린 시간 : 120ms
let [input1, input2] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let numberOfSubjects = Number(input1);
let scores = input2.split(" ").map(Number);
let maxScore = Math.max(...scores);
let newAvg =
	((scores.reduce((sum, currValue) => sum + currValue, 0) / numberOfSubjects) *
		100) /
	maxScore;
console.log(newAvg);

// 풀이 2 : 가독성이 풀이 1보다 좋은
// 걸린 시간 : 120ms
// let input = require("fs")
// 	.readFileSync("/dev/stdin")
// 	.toString()
// 	.trim()
// 	.split("\n");

// const num = input[0] * 1;
// const score = input[1].split(" ");

// const max = Math.max(...score);
// let sum = 0;

// for (let i = 0; i < num; i++) {
// 	sum += (score[i] / max) * 100;
// }

// console.log(sum / num);

// 참고 사이트: https://gurtn.tistory.com/53
