let [x, y] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n")
	.map(Number);

if (x > 0) y > 0 ? console.log(1) : console.log(4);
if (x < 0) y > 0 ? console.log(2) : console.log(3);
// 런타임 에러 (EACCES) 문제 발생
// 	.readFileSync(0) 로 해결
