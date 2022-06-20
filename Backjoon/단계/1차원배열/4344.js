let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
	let infos = input[i].split(" ").map(Number);
	let count = 0;

	// 총점 구하기
	// reduce를 통해 총점을 구하려고 했지만 문제에 주어진 테스트 케이스의 문자열 구조에 의해 활용하지 못 했다.
	// 하지만 찾음
	// 참고 사이트 : https://laycoder.tistory.com/184
	// 학생 점수 총합 = numbers 요소의 총합 - N
	// N은 학생 수
	// 걸린 시간 : 124ms -> 좀 더 효율적
	// let sum = numbers.reduce((acc, cValue) => acc + cValue, -N); // 초기값은 -N
	let sum = (sum = infos.reduce((acc, cValue) => acc + cValue, -infos[0]));

	// 걸린 시간 180ms
	// let sum =0
	// for (let j = 1; j < infos.length; j++) {
	// 	sum += infos[j];
	// }

	// 평균을 넘은 학생들의 비율 구하기
	for (let k = 1; k < infos.length; k++) {
		if (sum / infos[0] < infos[k]) {
			count++;
		}
	}
	console.log(((count / infos[0]) * 100).toFixed(3) + "%");
}
