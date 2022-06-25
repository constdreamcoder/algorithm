let input = require("fs").readFileSync("/dev/stdin").toString().trim();

// idea: 입력값(크로아티아 언어)에 대해 한 글자로 치부될 수 있는 글자로 치환하여 문자열의 길이를 센다
const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution() {
	for (let alpha of croatian) {
		// 배열 순환
		input = input.split(alpha).join("C");
	}
	return input.length;
}

console.log(solution(input));
