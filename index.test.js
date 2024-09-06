const main = require("./index");
import * as testing from "./index";

test("it should exist", () => {
	expect(main).toBeDefined();
});
test("adds 1 + 2 to equal 3", () => {
	expect(testing.sum(1, 2)).toBe(3);
});

describe("capitalize", () => {
	test("capitalize first letter 1st", () => {
		expect(testing.capitalize("boobs")).toBe("Boobs");
	});
	test("capitalize first letter 2nd", () => {
		expect(testing.capitalize("cats")).toBe("Cats");
	});
});

describe("reverse string", () => {
	test("1st", () => {
		expect(testing.reverseString("hello")).toBe("olleh");
	});
	test("2nd", () => {
		expect(testing.reverseString("booyah")).toBe("hayoob");
	});
});

describe("calculator", () => {
	let calculator = testing.calculator();
	test("1st addition", () => {
		expect(calculator.sum(1, 2)).toBe(3);
	});
	test("2nd addition", () => {
		expect(calculator.sum(3, 5)).toBe(8);
	});

	test("1st subtraction", () => {
		expect(calculator.subtract(1, 2)).toBe(-1);
	});
	test("2nd subtraction", () => {
		expect(calculator.subtract(5, 3)).toBe(2);
	});

	test("1st multiplication", () => {
		expect(calculator.multiply(1, 2)).toBe(2);
	});
	test("2nd multiplication", () => {
		expect(calculator.multiply(4, 3)).toBe(12);
	});

	test("1st division", () => {
		expect(calculator.divide(1, 2)).toBe(0.5);
	});
	test("2nd division", () => {
		expect(calculator.divide(6, 2)).toBe(3);
	});
});

describe("caesarCipher", () => {
	test("test shifting", () => {
		expect(testing.caesarCipher("abc", 3)).toBe("def");
	});
	test("test shifting alphabet end", () => {
		expect(testing.caesarCipher("xyz", 3)).toBe("abc");
	});
	test("case sensitive", () => {
		expect(testing.caesarCipher("AbC", 3)).toBe("DeF");
	});
	test("special characters insensitive", () => {
		expect(testing.caesarCipher("a, b,c!", 3)).toBe("d, e,f!");
	});
});
