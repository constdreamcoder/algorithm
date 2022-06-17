const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [currentHour, currentMinute] = input[0].split(" ").map(Number);
const cookTime = Number(input[1]);

const cookingEndTimeHour = parseInt(
	(currentHour * 60 + currentMinute + cookTime) / 60
);
const cookingEndTimeMinute = parseInt(
	(currentHour * 60 + currentMinute + cookTime) % 60
);
console.log(
	cookingEndTimeHour >= 24 ? cookingEndTimeHour - 24 : cookingEndTimeHour,
	cookingEndTimeMinute
);
