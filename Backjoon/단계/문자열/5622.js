let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const dial = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};

let result = 0;
for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (dial[j].includes(input[i])) {
			result += j + 1;
			break;
		}
	}
}
// tip) 규칙을 찾지 못하면 일일히 나열하여 계산하기
console.log(result);
