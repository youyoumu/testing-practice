function analyzeArray(array) {
  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length
  const sum = array.reduce((a, b) => a + b, 0)
  const average = sum / length
  return { min, max, length, average }
}

export default analyzeArray
