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
