import capitalize from '../src/capitalize'

test('capitalizes a string', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('world')).toBe('World')
  expect(capitalize('car')).toBe('Car')
})
