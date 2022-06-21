let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let count = 0;

for (let i = 1; i <= Number(input); i++) {
	if (i < 100) {
		count++;
		continue;
	}

	let diff1 = Number(String(i)[1]) - Number(String(i)[0]);
	let diff2 = Number(String(i)[2]) - Number(String(i)[1]);
	if (diff1 === diff2) count++;
}

console.log(count);

// 막힌 점: '한수' 라는 정의에 대해서 이해하는데 오래 걸렸다. 한마디로 문제를 이해하는데 오래걸렸다.
// 결론: '한수' 라는 것은 세 자리수 일 때뿐만 아니라 한 자리, 두 자리 수도 한수로 인정된다.
