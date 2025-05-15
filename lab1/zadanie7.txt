/*Biorąc pod uwagę tablicę liczb całkowitych nums posortowaną w porządku niemalejącym, usuń duplikaty w miejscu, tak aby każdy unikalny element pojawił się tylko raz. Względna kolejność elementów powinna pozostać taka sama. Następnie zwróć liczbę unikalnych elementów w nums.

Rozważmy, że liczba unikalnych elementów numswynosi k, aby uzyskać akceptację, należy wykonać następujące czynności:

    Zmienić tablicę numsw taki sposób, aby pierwsze k elementów nums zawierało unikalne elementy w kolejności, w jakiej były one początkowo obecne w nums. Pozostałe elementy nums nie mają znaczenia, podobnie jak rozmiar nums.
    Zwraca k.

Przykład:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Wyjaśnienie: Twoja funkcja powinna zwrócić k = 2, przy czym pierwsze dwa elementy nums to odpowiednio 1 i 2. Nie ma znaczenia, co pozostawisz poza zwróconym k (dlatego są to podkreślenia).
*/

function unicated_elements(nums) {
    if (nums.length === 0) return 0;
  let k=1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]){
      nums[k]=nums[i];
      k++;
    }
  }
  return k;
}

let max=10;
let min=1;
let nums=[1,2,2,3,5,5,6,6];
console.log("k:");
let k=unicated_elements(nums);
let unique=nums.slice(0, k);
console.log("k: " + k +": "+ unique)
