let [a, b] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

// 분 단위가 45분보다 클 때
if (b - 45 >= 0) {
	console.log(`${a} ${Math.abs(b - 45)}`);
	// 분 단위가 45분보다 작을 때
} else if (b - 45 < 0) {
	// 시 단위가 0일 때 시 기준으로 24시=0시 이므로 '0시-1시간=23시'로 설정
	console.log(`${a !== 0 ? a - 1 : 23} ${Math.abs(60 + b - 45)}`);
}
