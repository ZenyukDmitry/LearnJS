let x = 5;

//if (x>4)
//console.log ("The number is greater than 4")
//else
//console.log ("The number is smaller than 4")

function nan(x) {
  if (x > 4) {
    //     sum (4,5)
    console.log("The number is greater than 4");
  } else {
    //     sum (3,1)
    console.log("The number is smaller than 4");
  }
}

nan(3);

function compare(x) {
  if (x) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
compare(true);

function compare2(x) {
  if ((x >= 1) & (x < 5)) {
    console.log(100);
  } else if (x > 5 && x < 10) {
    console.log(200);
  } else if (x > 10 && x < 15) {
    console.log(300);
  } else {
    console.log(400);
  }
}
compare2(1);

function gg(y) {
  if (y == "yes") {
    console.log("Круто");
  } else if (y == "no") {
    console.log("Не круто");
  } else if (y == "куку") {
    console.log("кууууууу");
  } else {
    //console.log ("няма")
  }
}
gg("кук");

let a = "пп";

function type(a) {
  if (typeof a == "number") {
    console.log("This is number");
  } else if (typeof a == "string") {
    console.log("This is string");
  } else {
    //console.log("пп")
  }
}

type(null);

let xx = false;

//console.log(typeof xx)
let yy = Number(xx);

console.log(typeof yy);
//console.log(yy)

let qq = "44.55";

let ss = "66.55";
ss + qq;
//console.log (ss/qq)

let u = 1;

console.log(-u);

let first = 3;
let second = 4;

function sum(a, b) {
  let result = a + b;
  return result;
}
let c = sum(first, second);
console.log(c);

function minus(first, second) {
  return first - second;
}
let d = minus(first, second);
console.log(d);

function divide(first, second) {
  return first / second;
}
let i = divide(first, second);
console.log(i);

function multiply(first, second) {
  return first * second;
}
let f = multiply(c, second);
console.log(f);

let year = 123;
if (year == 122) console.log("пп");

let age = 1;
let result = age > 18 ? age * 2 : age * 3;
console.log(result);

let hh = "male@.ru";
let rusalt = hh.includes("male1") ? "ок" : "не ок";
console.log(rusalt);

let message =
  age < 3
    ? "Здравствуй, малыш!"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";
console.log(message);

let text = "ECMAScript";
if (text == "ECMAScript") {
  console.log("Верно");
} else {
  console.log("Не верно");
}

let tex = "ECMAScri11pt";
let ggg = tex == "ECMAScript" ? "Верно" : "Не верно";
console.log(ggg);

let hour = 11;

if (hour < 10 || hour > 18) {
  console.log("Офис закрыт.");
}

let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
  console.log("The time is 12:30");
}

let firstName = null;
let lastName = 1;
let nickName = "Суперкодер";

//console.log(firstName ?? lastName ?? nickName ?? "Аноним");

let ii = 0;
while (ii < 0) {
  // выводит 0, затем 1, затем 2
  console.log(ii);
  ii++;
}

let P = 0;
do {
  //console.log( P );
  P++;
} while (P < 0);

let freerooms = 0;
while (freerooms <= 10) {
  //console.log (freerooms)
  freerooms = freerooms + 3 - 2;
}
if (freerooms > 10) {
  console.log("усе");
}

let availeblerooms = 10;
for (let iii = availeblerooms; iii > 5; iii = iii - 1) {
  if (iii % 2 == 0) {
    console.log("уря");
    continue;
  }
  console.log(iii);
}

for (let rrr = 50; rrr > 1; rrr = rrr - 1) {
  if (rrr % 2 == 0) {
    console.log("четное");
    continue;
  }
  console.log(rrr);
}
for (let rrrr = 0; rrrr < 50; rrrr = rrrr + 1) {
  if (rrrr % 5 == 0) {
    console.log("четное");
    continue;
  }
  console.log(rrrr);
}
let aaa = 0;
while (aaa < 20) {
  console.log(aaa);
  aaa++;
  if (aaa == 8) {
    break;
  }
}
let A = 2 + 1;

switch (A) {
  case "3":
    console.log("Маловато");
    break;
  case 3:
    console.log("туту");
    break;
  case "4":
    console.log("В точку!");
    break;
  case "5":
    console.log("Перебор");
    break;
  default:
    console.log("Нет таких значений");
}

let browser = 44;
if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (browser === "Chrome") {
  console.log("Okay we support these browsers too");
} else if (browser === "Firefox") {
  console.log("Okay we support these browsers too");
} else if (browser === "Safari") {
  console.log("Okay we support these browsers too");
} else if (browser === "Opera") {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

switch (2) {
  case 0:
    console.log("Вы ввели число 0");
    break;
  case 1:
    console.log("Вы ввели число 1");
    break;
  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}

let Daysofmonths = 211;
switch (Daysofmonths) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Days from 1 per 10");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    console.log("Days from 11 per 20");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
    console.log("Days from 21 per 30");
    break;
  default:
    console.log("What are you doing man?");
}

function userName(name, text) {
  let message = "Привет, ";
  console.log(message + name + text);
  return message + name;
}
let namevalue = userName("я тут ", "нет");
let name22 = "туту";

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // ключи
  console.log(key); // name, age, isAdmin
  // значения ключей
  console.log(user[key]); // John, 30, true
}
