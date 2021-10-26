/*
Errors occur when switching to calculator2.
You can fix the negative outcomes of the tests using by changing the return values of the methods.
Therfore the outcome is dependent on the input and is not using the same value for all tests.
*/

require("../../app/hello_world")
var calculator = require("../../lib/calculator")

describe('Test caculator add, subtract and multiply', () => {
    it('add should be 30 ', () => {
        expect(calculator.add(10, 20)).toBe(30)
    });

    it('add should be 20 ', () => {
        expect(calculator.subtract(30, 10)).toBe(20)
    });

    it('add should be 10 ', () => {
        expect(calculator.multiply(1, 10)).toBe(10)
    });
});

describe('Test hello world', () => {
    it('should output "hello world" ', () => {

    });
});