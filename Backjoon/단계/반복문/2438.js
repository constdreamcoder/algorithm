let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = "";

for (let i = 1; i <= input; i++) {
	answer += "*".repeat(i) + "\n";
}

console.log(answer);
