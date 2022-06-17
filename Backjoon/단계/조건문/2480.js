let [a, b, c] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);
// 미리 정렬 해주면 더 손쉽게 해결 가능

if (a === b && b === c) console.log(10000 + a * 1000);
else if (a === b || b === c) console.log(1000 + b * 100);
else console.log(c * 100);
// https://kscodebase.tistory.com/379 참고
