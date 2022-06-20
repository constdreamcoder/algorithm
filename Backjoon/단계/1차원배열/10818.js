let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
// 풀이 1 : sort를 이용해서 내림차순으로 배열 정렬
// 걸린 시간: 960ms
let nums = input[1]
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);
console.log(`${nums[0]} ${nums[input[0] - 1]}`);
// 풀이 2 : Math.max, Math.min 내장함수 이용
// 걸린 시간: 816ms
// let maxNum = Math.max(...input[1].split(" ").map(Number));
// let minNum = Math.min(...input[1].split(" ").map(Number));
// console.log(`${minNum} ${maxNum}`);
