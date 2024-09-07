function sum(a, b) {
	return a + b;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
	return str.split("").reverse().join("");
}

function calculator() {
	function sum(a, b) {
		return +a + +b;
	}
	function subtract(a, b) {
		return +a - +b;
	}
	function multiply(a, b) {
		return +a * +b;
	}
	function divide(a, b) {
		return +a / +b;
	}
	return {
		sum,
		subtract,
		multiply,
		divide,
	};
}

function caesarCipher(str, shift) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		let charCode = str.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			charCode = ((charCode - 65 + shift) % 26) + 65;
		} else if (charCode >= 97 && charCode <= 122) {
			charCode = ((charCode - 97 + shift) % 26) + 97;
		}
		newStr += String.fromCharCode(charCode);
	}
	return newStr;
}

function analyzeArray(arr) {
	//average,min,max,length
	let average = 0;
	let length = arr.length;
	let sum = arr.reduce((previousVal, currentVal) => {
		return previousVal + currentVal;
	});
	average = sum / length;

	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return { average, length, min, max };
}

module.exports = {
	sum,
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
};
