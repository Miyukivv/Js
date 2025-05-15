 /*
Stwórz obiekt o nazwie text. Obiekt ten powinien mieć metody:

    check(txt, word)

    która zwraca true/false jeżeli w tekście txt znajduje się szukane słowo word

    check("ala ma kota", "kota") ---> true

    getCount(txt)

    Zwraca liczbę liter w tekście txt. Uwaga znaki interpunkcyjne też traktujmy jako litery

    getCount("ala ma kota") ---> 11

    getWordsCount(txt)

    zwraca liczbę słów w przekazanym tekście

    getWordsCount("Ala ma kota") ---> 3

    setCapitalize(txt)

    zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery

    setCapitalize("ala ma kota") ---> "Ala Ma Kota"

    setMix(txt)

    zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.

    setMix("ala ma kota") ---> "aLa mA KoTa"

    generateRandom(lng)

    Generuje tekst o długości lng, który składa się z losowych liter

    generateRandom(10) ---> "dkjiuhtjox"


*/

    const text = {
      check(txt,word){
        let arr=txt.split(' ');
      
        for (let i=0; i<arr.length; i++){
          if (arr[i] === word){
            return true;
          }
        }
        return false;
      },
      
      getCount(txt){
        return txt.length;
      },
      
      getWordsCount(txt){
        let arr=txt.split(' ');
        return arr.length;
      },
      
      setCapitalize(txt){
        let arr=txt.split(' ');
        for (let i=0; i<arr.length; i++){
          arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase(); //to powoduje ze pierwszy znak bedzie z duzej litery, a reszta z malych
        }
        return arr.join(' ');
      },
      
      setMix(txt){
        let arr=txt.split(' ');
        
        for (let i=0; i<arr.length; i++){
          let word=arr[i];
          let mixed='';
          for (let j=0; j<arr[i].length; j++){
            if (j % 2 === 0){
              mixed+=word[j].toUpperCase();
            } else {
              mixed+=word[j].toLowerCase();
            }
          }
          arr[i]=mixed;
        }
        return arr.join(' ');
      },
      
      generateRandom(lng){
        let randomTxt='';
        const letters = 'abcdefghijklmnopqrstuwxyz';
        for (let i=0; i<lng; i++){
            const idx = Math.floor(Math.random() * letters.length);
            randomTxt += letters.charAt(idx);        
        }
        return randomTxt;
      }
      
    };
    
console.log( text.generateRandom(10) ); 
console.log(text.setCapitalize("hello world"));
console.log(text.setMix("hello world"));
console.log(text.getWordsCount("hello world"));
console.log(text.getCount("hello world"));
