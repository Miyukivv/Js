// 1) Znajdź brakujące liczby pomiędzy min i max
function findMissingNumbers(arr, min, max) {
  const seen = new Set(arr);
  const missing = [];
  for (let i = min; i <= max; i++) {
    if (!seen.has(i)) missing.push(i);
  }
  return missing;
}

// 2) Wybierz tylko te zaklęcia, które zawierają liczbę
function wybierzZaklecia(spells) {
  return spells.filter(s => /\d+/.test(s));
}


// === PRZYKŁADY ===

const mapa = [4, 1, 7, 3];
console.log(findMissingNumbers(mapa, 1, 7));
// → [2, 5, 6]

const wszystkieZaklecia = [
  "ognista kula",
  "tarcza ochronna 3",
  "mistyczne słowo",
  "lodowy pocisk 12",
  "bezsilny czar",
  "błyskawica5"
];
console.log(wybierzZaklecia(wszystkieZaklecia));
// → ["tarcza ochronna 3", "lodowy pocisk 12", "błyskawica5"]