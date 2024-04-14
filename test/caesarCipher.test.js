import caesarCipher from '../src/caesarCipher.js'

test('caesarCipher', () => {
  expect(caesarCipher('hello', 5)).toBe('mjqqt')
  expect(caesarCipher('world', 5)).toBe('btwqi')
  expect(caesarCipher('car', 5)).toBe('hfw')
  expect(caesarCipher('zebra', 5)).toBe('ejgwf')
  expect(caesarCipher('ZebrA', 5)).toBe('EjgwF')
  expect(caesarCipher("Zebr'A", 5)).toBe("Ejgw'F")
})
