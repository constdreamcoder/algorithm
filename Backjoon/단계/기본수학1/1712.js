let [A, B, C] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);

/**
 * idea
 * 손익분기점 계산: C(판매비용) x N(판매량) > A(고정비용) + B(가변비용) x N(생산개수)
 * -> N(판매량 or 생산개수) > A(고정비용) / {C(판매비용) - B(가변비용)} > 0
 * [참고 사이트] https://nyang-in.tistory.com/171
 */
const salesRate = Math.floor(A / (C - B)) + 1;
console.log(salesRate <= 0 ? -1 : salesRate);

// 백준에서는 틀렸다고 하는데 이유는 질문에 답변이 달리면 알아보자
