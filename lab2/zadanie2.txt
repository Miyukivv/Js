/*
Zadanie 2

Zapoznaj się ze sposobami tworzenia klas w Javascript https://kursjs.pl/kurs/obiekty/class. Stwórz klasę book, który będzie miała:


Właściwości:

    users która będzie tablicą użytkowników (na początku pusta)

Metody:

    addUser(name, age, phone)

    która doda to tablicy users nowy obiekt, który będzie miał klucze: name, age, phone z przekazanymi do tej funkcji danymi

    showUsers()

    która po odpaleniu wypisze w konsoli tekst: Wszyscy użytkownicy w książce a następnie w pętli wypisze wszystkich użytkowników

    findByName(name)

    która wypisze w konsoli pierwszego użytkownika, który ma szukane imię lub false jeżeli nie znajdzie.

    findByPhone(phone)

    która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon lub false jeżeli nie znajdzie

    getCount()

    która wypisze ile jest użytkowników w tabeli*/

class Book  {
  constructor(){
    this.users=[];
  }
  
  addUsers(name,age,phone){
    const user = {
      name,
      age,
      phone,
    };
    this.users.push(user);
    }
    
    showUsers(){
        console.log("Wszyscy uzytkownicy w ksiazce: ");
        for (let i=0; i<this.users.length; i++){
          console.log(this.users[i].name + ' ' + this.users[i].age + ' ' + this.users[i].phone);
        }
    }
    
    findByName(name){
      for (let i=0; i<this.users.length; i++){
        if (this.users[i].name == name){
          return this.users[i];
        }
      }
      return false;
    }
    
    findByPhone(phone){
      for (let i=0; i<this.users.length; i++){
        if (this.users[i].phone == phone){
          return this.users[i];
        }
      }
      return false;
    }
    
    getCount(){
      return this.users.length;
    }
}

const book = new Book();
book.addUsers("Anna",21,"663235126");
book.showUsers();
console.log(book.findByPhone("663235126"));
console.log(book.findByName("Anna"));
console.log(book.getCount());

