var calculator = require("../../lib/calculator")
var hello_world = require("../../app/hello_world")

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