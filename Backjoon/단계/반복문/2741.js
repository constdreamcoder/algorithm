let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = "";
for (let i = 1; i <= Number(input); i++) {
	answer += i + "\n";
}

console.log(answer);

// 문제에서는 하나씩 출력해도 된다고 하지만, 하나씩 출력을 하면 필히 시간 초과라는 결과를 얻었습니다.
// 따라서 하나의 문자열에 결과값과 개행 문자를 마지막에 넣어 출력했습니다.
