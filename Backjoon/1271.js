let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = BigInt(input[0]);
var b = BigInt(input[1]);
console.log((a / b).toString());
console.log((a % b).toString());

// BigInt를 사용하면 Number 범위를 넘는 정수도 오차없이 안전하게 계산이 가능하다고 한다.
// 참고 사이트:  https://jaekwan.tistory.com/150
// n 제거를 위해 toString() 메서드 사용
