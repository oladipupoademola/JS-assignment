// Maths Method

// math random
var x = Math.random(10);
console.log(x)

// pow method
var x= Math.pow(4, 3);
console.log(x)

//Math PI
var x = Math.PI;
console.log(x)

//Math round
var x = Math.round(2.5);
console.log(x)

//Math sign
var x = Math.sign(3);
console.log(x)

//Math abs
var x = Math.abs(-7.25);
console.log(x)

//Math ceil
var x =Math.ceil(1.4);
console.log(x)

//Math exp
var x = Math.exp(3);
console.log(x)

//Math floor
var x = Math.floor(1.6);
console.log(x)

//Math fround
var x = Math.fround(2.60);
console.log(x)



// Array Method
// Array Length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

// Array Pop
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)

//Array Push
const freshFruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)

// Array Shift
const ffruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)

// Array Unshift
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits)

// Array copywithin
const fruiits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits)

// Array flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

// Array splice
// const fruitts = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

// Array slice
const fruuits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)

// Array concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)


// Array string
// String length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

// String at()
const name = "W3Schools";
let letter = name.at(2);
console.log(letter)


// Uppercase ()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2)

// Lowercase ()
let texxt1 = "Hello World!";       
let texxt2 = text1.toLowerCase();
console.log(texxt2)

// concat ()
let teext1 = "Hello";
let teext2 = "World";
let text3 = teext1.concat(" ", teext2);
console.log(text3)

// trim
let ttext1 = "      Hello World!      ";
let ttext2 = text1.trim();
console.log(ttext2)

// trimstart()
let text11 = "     Hello World!     ";
let text21 = text1.trimStart();
console.log(text21)

//padstart()
let texte = "5";
let padded = texte.padStart(4,"0");
console.log(padded)

// pad end
let textee = "5";
let paddedd = textee.padEnd(4,"0");
console.log(paddedd)

// repeat()
let textte = "Hello world!";
let result = textte.repeat(2);
console.log(result)

