let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

// 히스토그램 사용: 각 문자들의 빈도수 출력
const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
	result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
	if (result[j] === max && index !== j) {
		isSame = true;
		break;
	}
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));

// 참고 사이트: https://gurtn.tistory.com/49
