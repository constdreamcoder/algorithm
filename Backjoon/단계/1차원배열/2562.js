// 참고 : https://developer-talk.tistory.com/159
let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

// 풀이 1 : for문을 이용하여 최대값과 해당 인덱스 값을 찾음
// 걸린 시간: 120ms
let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
	if (max < input[i]) {
		max = input[i];
		maxIdx = i;
	}
}

console.log(max);
console.log(maxIdx + 1);

// 풀이 2 : Math.max 메서드와 indexOf 메서드 사용
// 걸린 시간: 116ms
// let max = Math.max(...input);

// console.log(max);
// console.log(input.indexOf(max) + 1);
