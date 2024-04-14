function caesarCipher(string, shift) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i)
    if (ascii >= 65 && ascii <= 90) {
      ascii = ascii + shift
      if (ascii > 90) {
        ascii = ascii - 26
      }
    } else if (ascii >= 97 && ascii <= 122) {
      ascii = ascii + shift
      if (ascii > 122) {
        ascii = ascii - 26
      }
    }
    result = result + String.fromCharCode(ascii)
  }
  return result
}

export default caesarCipher
