let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = Number(input[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
	let num = input[i].split(" ");
	answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);

// 문제에서는 하나씩 출력해도 된다고 하지만, 하나씩 출력을 하면 필히 시간 초과라는 결과를 얻었습니다.
// 따라서 하나의 문자열에 결과값과 개행 문자를 마지막에 넣어 출력했습니다.
