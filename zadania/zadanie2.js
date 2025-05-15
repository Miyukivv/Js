function guessNumber(guesses){
  const min=1;
  const max=100;
  const randomNumber=Math.floor(Math.random()*(max-min+1)+min);
      
      for (let i=0; i<guesses.length; i++){
        if (guesses[i] === randomNumber){
          return {isCorrect:true,
          attempts: i+1};
        }
      }
      return {
        isCorrect: false,
        attempts: guesses.length
      };
}

const userGuesses = [10, 42, 75, 88, 13];   
const result = guessNumber(userGuesses);

console.log(`Czy odgadnięto? ${result.isCorrect}`);      
console.log(`Liczba prób: ${result.attempts}`);        


