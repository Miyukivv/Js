/*Napisz funkcję znajdującą najdłuższy wspólny ciąg prefiksów w tablicy ciągów. Jeśli nie ma wspólnego prefiksu, zwróć pusty ciąg.


Przykład 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Przykład 2:

Input: strs = ["dog","racecar","car"]
Output: ""

Założenia:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] składa się tylko z małych angielskich liter.*/

function  prefix(arr){
  let x = "";
  
  //po dlugosci pierwszego slowa
  for (let i=0; i<arr[0].length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[0][i] !== arr[j][i]){
        return x;
      }
    }
    x+=arr[0][i];
  }
  return x;
}

console.log(prefix( ["flower","flow","flight"]));
console.log(prefix(["dog","racecar","car"]))