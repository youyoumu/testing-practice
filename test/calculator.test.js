import Calculator from '../src/Calculator.js'

test('adds 1 + 2 to equal 3', () => {
  expect(Calculator.add(1, 2)).toBe(3)
})

test('subtracts 1 - 2 to equal -1', () => {
  expect(Calculator.subtract(1, 2)).toBe(-1)
})

test('multiplies 1 * 2 to equal 2', () => {
  expect(Calculator.multiply(1, 2)).toBe(2)
})

test('divides 1 / 2 to equal 0.5', () => {
  expect(Calculator.divide(1, 2)).toBe(0.5)
})
