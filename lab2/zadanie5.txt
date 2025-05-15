/*
Zadanie 5

Zapoznaj się z informacjami o tzw. domknięciach (ang. clousures) w JavaScript.


a) Opisz mechanizm własnymi słowami.
Domknięcie to mechanizm, w którym funkcja zapamiętuje swoje otoczenie, nawet po zakończeniu wykonania tego zakresu.

Innymi słowy, jeżeli funkcja zostanie utworzona wewnątrz innej funkcji, to będzie pamiętać zmienne z tej „zewnętrznej” funkcji, nawet jeśli zostanie wywołana później.

Dlaczego to działa?
Bo funkcje w JavaScript „zamrażają” kontekst, w którym zostały utworzone.

b) Stwórz funkcję createCounter, która zwraca funkcję inkrementującą licznik. Funkcja zwrócona przez createCounter powinna:


   -Zwiększać wartość licznika o 1 przy każdym wywołaniu,
   -Zwracać bieżącą wartość licznika po każdej inkrementacji.

Dodatkowo funkcja createCounter powinna działać tak, że za każdym razem, gdy wywołujesz createCounter, tworzysz nowy licznik, który ma swoją własną odrębną wartość, niezależną od innych liczników. Użyj w tym celu mechanizmu domknięć.
*/


function createCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

const counter1 = createCounter();
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter1()); //3

const counter2 = createCounter();
console.log(counter2()); //1
console.log(counter2()); //2