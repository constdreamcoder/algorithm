let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let input_temp = input;
let tmp = "";
let count = 0;

if (input.split("").length <= 1) {
	input_temp = "0" + input;
}
while (true) {
	tmp = (input_temp + "").split("");
	let sum = (Number(tmp[0]) + Number(tmp[1]) + "").split("");
	input_temp = sum.length <= 1 ? tmp[1] + sum[0] : tmp[1] + sum[1];
	count++;
	if (Number(input_temp) === Number(input)) {
		console.log(count);
		return;
	}
}

// 더 나은 풀이 - 나는 데이터 타입을 바꿔가면서 구현했지만 단순히 'Number' 형으로만 구현이 가능하다는 것을 확인하였다.
// 참고 사이트: https://gurtn.tistory.com/34
// let input = Number(require("fs").readFileSync("/dev/stdin").toString());

// let num = input;
// let sum;
// let i = 0;

// while (true) {
// 	i++;

// 	sum = Math.floor(num / 10) + (num % 10);
// 	num = (num % 10) * 10 + (sum % 10);

// 	if (input === num) {
// 		break;
// 	}
// }

// console.log(i);
