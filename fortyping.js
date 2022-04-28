function userName(name, text) {
  let message = "Привет, ";
  console.log(message + name + text);
  return message + name;
}
let namevalue = userName("я тут ", "нет");
let name22 = "туту";

function message() {
  console.log("gogo");
}

message();
message();

function message1(b) {
  console.log(b);
}

message1(2);
message1(3);
function dev(a, b) {
  let result = a / b;
  console.log(result);
}
dev(4, 2);

let a = 2;
let c = 2;
let b = 3;

function colculate(q, w, e) {
  let result = q + w - e;
  console.log(result);
}
colculate(a, b, c);

function oneelement(y) {
  if (y < 3) {
    console.log("меньше трех");
  } else {
    console.log("больше трех");
  }
}

oneelement(5);

let users = {
  name: "random",
  age: 33,
  likepeople: true,
  dontlikebadpeople: false,
  crazy: false,
};

console.log(users);

function Newfunction(create, pizza) {
  return {
    create,
    pizza,
  };
}

let newman = Newfunction(32, 33);

console.log(newman);

let New = Newfunction(44, 55);

console.log(New);

let object = {
  "like everyone": true,
  Havedog: false,
  name: "Moscow",
  people: 10000000,
  badpeople: 99999999,
};
console.log(object);

let obj = {
  for: 1,
  let: 2,
  return: 4,
  key: 7,
};

for (let key in obj) {
  if (obj[key] >= 4) {
    console.log(key);
    console.log(obj[key]);
  }
}
let codes = {
  "+49": "Германия",
  name2: "oo",
  "+41": "Швейцария",
  name: "papa",
  "44.0": "Великобритания",
  1.0: "США",
};

for (let code in codes) {
  console.log(code);
}

//let user = {};
//let user = { name: John };
//let user = { name: John, surname: Smith };
//let user = { name: Pete, surname: Smith };
//delete user["name"];

//let user = {};
//user.name = "John";        добавить свойство
//user.surname = "Smith";
//user.name = "Pete";        изменить значение свойства
//delete user.name;          удалить значение свойства

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function isEmpty(x) {
  for (let key in x) {
    return false;
  }
  return true;
}
isEmpty(salaries);
let result = isEmpty(salaries);
console.log(result);

//let sum = salaries.John + salaries.Ann + salaries.Pete;

let sum = 0;
if (isEmpty(salaries) == true) {
  sum = 0;
} else {
  //sum = salaries.John + salaries.Ann + salaries.Pete;
  for (let key in salaries) {
    console.log("sum " + sum);
    console.log("value " + salaries[key]);
    sum = sum + salaries[key];
  }
}
console.log(sum);

let obje = {
  width: 200,
  height: 300,
};

function multiplyNumeric(obje) {
  for (let key in obje) {
    if (typeof obje[key] == "number") {
      obje[key] *= 2;
      console.log(obje[key]);
    }
  }
}
multiplyNumeric(salaries);

//console.log(obje[key]);

let us = {
  name: "Джон",
  age: 30,
};

us.sayHi = function (xxx) {
  if (xxx == 30) {
    console.log("30");
  }
};

us.sayHi(us.age); // Привет!

let y = {
  name: 24,
  age: 33,

  SayHi(a, b) {
    console.log(a + b);
    console.log(this.name);
  },
};

y[us] = true;
console.log(y);

let num = Number(us);
console.log(num);

y.SayHi(y.name, y.age);

function summ(a, b) {
  let x = a * 2;
  let y = b * 2;
  let z = x + y;
  return z;
}

function Myage(c) {
  if (c > 18) {
    return true;
  } else {
    return false;
  }
}
let ccc = Myage(19);
console.log(ccc);

let ccc1 = Myage(1);
console.log(ccc1);

function pit(v) {
  if (v == true) {
    return 1;
  } else {
    return 2;
  }
}
let pit1 = pit(ccc);
console.log(pit1);

function User(name, surname) {
  this.name = name;
  this.isAdmin = false;
  this.surname = surname;
  this.sayHi = function () {
    console.log("HI");
  };
}

let user1 = new User(2, 3);
let user2 = new User("bill");

console.log(user1.sayHi()); // Вася
console.log(user1.isAdmin); // false
console.log(user1.surname);

let ooo = "12";

console.log("user surname is " + user1.surname + " roror");
console.log(`user surname is ${ooo} rorror`);

let DayofWeek = {
  weekday: "Monday",
};

switch (DayofWeek.weekday) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wensday":
    console.log("Wensday");
    break;
  case "Thusday":
    console.log("Thusday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Satuday":
    console.log("Satuday");
    break;
  case "Sunday":
    console.log("Sunday");
    break;
  default:
    console.log("What?");
}

console.log(Object.values(user1));

let fruts = ["apple", "pineapple", 3];

console.log(fruts);
console.log(fruts.pop());
console.log(fruts);
fruts.push(4, 5);
console.log(fruts);
console.log(fruts.length);
fruts[4] = "11";

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList);

console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

let str = "Widget with id,id";
console.log(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

let str1 = "Widget with id";

if (str1.indexOf("id")) {
  console.log("Совпадение есть");
}

let test = "give me something";
if (test.includes("2")) {
  console.log("we have it");
} else {
  console.log("sorry");
}

console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"

function sumInput(J, K, L) {
  let array = [];
  array[0] = J;
  array[1] = K;
  array[2] = L;
  for (let x of array) {
    if (typeof x === "string") {
      console.log("this is string");
    } else if (x.isEmpty) {
      console.log("write something");
    }
  }
}
sumInput("1", 2, 3);

console.log("".isEmpty);

let Fruts = ["apple", "pineapple", 3, 3, 5];

Fruts.splice(0, 2, "ffff", "gggg");
console.log(Fruts);
let RRR = Fruts.splice(0, 1);
console.log(RRR);
console.log(Fruts);
let UUU = Fruts.slice(1, 3);
console.log(UUU);

let arrrr = [1, 2, 3, "tt"];
let arrrr2 = [3, 4];
console.log(arrrr.concat(arrrr2, [5]));

["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
fruts.forEach((item, index) => {
  console.log(`${item} имеет позицию ${index} в `);
});

let ey = arrrr.find(item => item == "tt");
console.log(ey);
let Users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];
console.log(Users[0].id);
let Users1 = Users.filter(item => item.id < 3);
console.log(Users1.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item + "tttt");
console.log(lengths); // 5,7,6

let Users5 = ["яася", "зетя", "маша"];
Users5.reverse();
console.log(Users5);

let na = "Вася Петя Маша";

let ar = na.split(" ");
console.log(ar);
for (let name of ar) {
  console.log(name.length);
}
console.log(Array.isArray(ar)); // true

let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1");

map.set(2, "22");

let map2 = map.has(1);
console.log(map2);
console.log(map.keys());

let objjj = {
  name: "John",
  age: 30,
};
let obJ = Object.values(objjj);
console.log(obJ);

let mappp = new Map(Object.entries(objjj));
console.log(mappp);

let SAL = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let SAT = Object.values(SAL);
let summm = 0;
for (let value of SAT) {
  summm += value;
}
console.log(summm);

let USER = {
  name: "John",
  age: 30,
};
let USER2 = Object.keys(USER);
console.log(USER2.length);

let now = new Date("2017-01-26");
console.log(now);

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student, null, 1);
console.log(json);

let usss =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let bus = JSON.parse(usss);

console.log(bus); // 1

class Contragent {
  constructor(name, lastname, firstname) {
    this.name = name;
    this.lastname = lastname;
    this.firstname = firstname;
  }
  fullname() {
    console.log(`${this.name}`);
  }
  get name() {
    return this._name;
  }
  get lastname() {
    return this._lastname;
  }
  get firstname() {
    return this._firstname;
  }
  set name(value) {
    this._name = value;
  }
  set firstname(value) {
    this._firstname = value;
  }
  set lastname(value) {
    this._lastname = value;
  }
}
let contragent1 = new Contragent("1", "2", "3");
contragent1.fullname();

let givemename = contragent1.name;

class Client {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.emeil = email;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value <= 17) {
      console.log("you can`t");
    } else {
      console.log("you can");
    }
  }
  buy() {
    console.log(`${this.emeil} is my emeil`);
  }
}
let Client1 = new Client("Andry", 15, "email1@gmail.com");
let Client2 = new Client("Mikky", 29, "email2@gmail.con");
let Client3 = new Client("Aron", 10, "email3@gmail.com");

let Array10 = [Client1, Client2, Client3];
//let Array20 = Array10.filter(item => item.name);
//console.log(Array20.name);
for (let key of Array10) {
  if (key.name.startsWith("A")) {
    console.log("hi Andry");
  } else {
    console.log("you are not the Andry");
  }
}

class Animals {
  constructor(name) {
    this.name = name;
  }
  saySomething(q) {
    this.q = q;
    console.log(`I want to say ${this.q}`);
  }
  doSomething(w) {
    this.w = w;
    console.log(`I want to ${this.w}`);
  }
}

class Cat extends Animals {
  doSomethingElse() {
    console.log(`I am ${this.name} I want to play`);
  }
}
let C = new Cat("cat");
console.log(C);
C.saySomething("miii");
C.doSomething("eat");
C.doSomethingElse();

try {
  let myarray = [0, 1, 2];
  console.log(myarray[f]);
} catch (e) {
  console.log(`we have error ${e}`);
}
