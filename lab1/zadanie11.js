/*
Zadanie 11

Biorąc pod uwagę ciąg znaków s składającego się ze słów i spacji, napisz funkcję która zwraca długość ostatniego słowa w ciągu. Słowo jest maksymalnym podciągiem składającym się wyłącznie ze znaków innych niż spacje.


Przykład 1:

Input: s = "Hello World"
Output: 5

Przykład 2:

Input: s = "   fly me   to   the moon  "
Output: 4

Założenia

    1 <= s.length <= 104
    s zawiera tylko znaki angielskiego alfabetu i spacje ' '.
    W s znajduje się co najmniej jedno słowo.
*/


function length_the_last_word(s) {
  s = s.trim();

  if (s === "") return 0;

  const arr = s.split(" ");

  const last = arr[arr.length - 1];

  return last.length;
}

console.log( length_the_last_word("   fly me   to   the moon  ") ); // 4
console.log( length_the_last_word("Hello World") );   


/*
function length_the_last_word(arr){
      let arr_with_words=arr.split(' ');
      console.log(arr_with_words);
      let length=0;
      
      if (arr == ''){
        return 0;
      }
    
      for (let i=arr_with_words.length-1 ;i>=0;i--){
        length=0;
        for (let j=0; j<arr_with_words[i].length; j++){
          
          if (arr_with_words[i][j] ===' '){
            break;
          } else {
            length++;
          }
          
        }
        if (length!=0){
          return length;
        }
      }
      return 0;
    }
    
    console.log(length_the_last_word("   fly me   to   the moon  "))


*/ 