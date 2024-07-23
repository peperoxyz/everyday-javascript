// creating a triangle shaped character

function triangle(rows, character) {
	let result = "";
	for (let i = 1; i <= rows; i++) {
		result = result + character.repeat(i) + "\n";
	}
	return result;
}

console.log(triangle(6, "%"));
