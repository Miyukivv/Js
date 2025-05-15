/*
Zadanie 1
Zapoznaj się ze sposobami tworzenia obiektów w Javascript  Stwórz obiekt currentUser. Obiekt niech ma właściwości: name, surname, email, www, userType, isActive oraz metodę show(), która wypisze wszystkie te właściwości w konsoli. Dodatkowo stwórz metodę setActive(active), która przestawi właściwość isActive na przekazaną wartość, która może być true/false.*/

let name = "anna";
let surname = "kowalska";
let email = "anna.kowalska@interia.pl";
let www = "www.annakowalska.pl";
let userType="user";

const currentUser ={
  name: name,
  surname: surname,
  email: email,
  www: www,
  userType: userType,
  isActive: false,
  
  show(){
    console.log(this.name + ' ' + this.surname + ' ' + this.email + ' ' + this.www + ' ' + this.userType + ' ' +this.isActive + ' ')
  },
  
  setActive(active){
    this.active=active;
  }
};

currentUser.show();


