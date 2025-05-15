/*
Zadanie 4
Zapoznaj się z informacjami o dziedziczeniu prototypowym w Javascript.


a) Jak się to ma do działania obiektów i “klas” w Javascript? Dlaczego mówimy, że w Javascript klasy są tzw. “syntax sugar”? Opisz mechanizm własnymi słowami.

W JavaScript każdy obiekt może dziedziczyć właściwości i metody z innego obiektu za pomocą protokołu prototypowego.

Mechanizm prototypowy działa w ten sposób:
-Każdy obiekt ma wewnętrzne odwołanie do innego obiektu – swojego protorysu
-Gdy próbujemy uzyskać dostęp do właściwości lub metody obiektu, JavaScript najpierw sprawdza, czy ta właściwość istnieje na samym obiekcie, jeśli nie, przeszukuje jego prototyp, a potem prototyp prototypu, itd., aż do końca łańcucha prototypów - gdy napotka null.

Klasy w JavaScript są tak naprawdę tylko skróconą, czytelną składnią dla tworzenia obiektów z prototypami. Pod spodem nadal działa ten sam mechanizm dziedziczenia prototypowego – klasy tylko go ukrywają za prostszą składnią.


b) Rozbuduj obiekty typu String dodając im metodę mirror(), która po odpaleniu dla tekstu zwróci jego odbicie:

"Ala ma kota".mirror() === "atok am alA"
*/

String.prototype.mirror = function() {
  return this.split('').reverse().join('');
};

console.log("Ala ma kota".mirror());


function createCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

const counter1 = createCounter();
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 

const counter2 = createCounter();
console.log(counter2()); 
console.log(counter2()); 