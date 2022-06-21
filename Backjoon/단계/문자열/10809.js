let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let alphabetList = [];

// input의 길이(입력값 길이)는 가변적이기 때문에 for문 계산길이(26번)는 알파벳 길이로 하는 것이 더 효율적이다.
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
	alphabetList.push(input.indexOf(String.fromCharCode(i)));
}
console.log(alphabetList.join(" "));

// 이 풀이의 문제점
// 1. 처음 0번째부터
// 2.
//
// let alphabetList = [
// 	-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
// 	-1, -1, -1, -1, -1, -1, -1,
// ];

// for (let i = 0; i < input.length; i++) {
// 	if (i !== 0 && input[i - 1] === input[i]) continue;
// 	alphabetList[input.charCodeAt(i) - 97] = i;
// }
// console.log(alphabetList.join(" "));
