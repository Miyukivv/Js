function findMissingNumbers(arr, min, max) {
  const seen = new Set(arr);
  const missing = [];
  for (let i = min; i <= max; i++) {
    if (!seen.has(i)) missing.push(i);
  }
  return missing;
}

// przykład użycia:
const mapa = [4, 1, 7, 3];
console.log(findMissingNumbers(mapa, 1, 7));
// → [2, 5, 6]