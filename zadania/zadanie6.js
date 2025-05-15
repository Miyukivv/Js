function binaryToDecimal(binStr) {
  // parseInt z drugim argumentem 2 traktuje ciąg jako liczbę binarną
  return parseInt(binStr, 2);
}

console.log(binaryToDecimal("1010"));   
console.log(binaryToDecimal("1101")); 
console.log(binaryToDecimal("0001"));   
console.log(binaryToDecimal("100000")); 

/*
function binaryToDecimal(binStr) {
  let result = 0;
  for (let i = 0; i < binStr.length; i++) {
    const bit = binStr[i];
    if (bit !== '0' && bit !== '1') {
      throw new Error(`Niepoprawny znak w zapisie binarnym: "${bit}"`);
    }
    result = result * 2 + Number(bit);
  }
  return result;
}

console.log(binaryToDecimal("1010"));   
console.log(binaryToDecimal("1101"));   
console.log(binaryToDecimal("0001"));   
console.log(binaryToDecimal("100000")); 
*/