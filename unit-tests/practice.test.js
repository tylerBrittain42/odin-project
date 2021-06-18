const { TestWatcher } = require('jest');
const practice = require('./practice');

test('capitalization test', () => {
    expect(practice.capitalize('hello')).toBe('Hello')
})

test('string reversing test', () => {
    expect(practice.reverseString('1234')).toBe('4321')
})

test('multiplication test', () => {
    expect(practice.mult(3,2)).toBe(6)
})