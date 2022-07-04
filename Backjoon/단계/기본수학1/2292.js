let input = require("fs").readFileSync("/dev/stdin").toString().trim();

/**
 * idea: input과 last_number을 비교하여
 * input값이 last_number보다 크면 group_number에 속하지 않다는 의미이므로 group_number 하나 증가 및 last_number도 다음 그룹의 마지막 수를 저장하여
 * input값이 last_number보다 작거나 같을 때까지 계산하여 그때의 group_number을 콘솔에 출력
 * group_number: 몇번째 그룹인지 나타냄
 * last_number: 한 그룹의 마자막 숫자
 *
 */

let input_number = Number(input);
let last_number = 1;
let group_number = 1;

while (input_number >= last_number) {
	if (input_number <= last_number) break;
	last_number = last_number + 6 * group_number;
	group_number++;
}

console.log(group_number);
