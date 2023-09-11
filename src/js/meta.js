"use strict";

// for (let i = 1; i <= 2; i++) {
// 	console.log(`Week ${i}`);
// 	for (let j = 1; j <= 5; j++) console.log(`Day ${j}`);
// }

// function letterFinder(word, match) {
// 	for (let i = 0; i < word.length; i++) {
// 		if (word[i] == match) console.log("Found the", match, "at", i);
// 		else console.log("---No match found at", i);
// 	}
// }

// letterFinder("test", "t");

// let storeManager = {};
// storeManager.health = 100;
// storeManager.money = 999;
// storeManager.skill = 50;
// storeManager["hair"] = "Black";
// console.log(storeManager);

// const randomNum = Math.random() * 10;
// console.log(Math.ceil(randomNum));

// const Ezra = "I love ".concat("Ezra ").concat("butsog!");
// console.log(Ezra);

// console.log(Ezra.split(" "));

// let myLove = [];
// myLove.push(Ezra);
// myLove.push("Kyot Bebe!");
// console.log(myLove.join(" =UwU= "));

// const clothes = [];
// clothes.push("white");
// clothes.push("My WiFi");
// clothes.push("Minimalist");
// clothes.push("To hell with everything");
// clothes.push("black");
// clothes.pop();

// console.log(clothes[2]);

// const favCar = {};
// favCar.color = "Navy Blue";
// favCar.convertible = true;
// console.log(favCar);

// let car = {
// 	milleage: 98765,
// 	color: "red",
// 	turnKey() {
// 		console.log("engine running");
// 	},
// 	lightsOn() {
// 		console.log("The lights are on.");
// 	},
// };

// console.log(car);
// car.turnKey();
// car.lightsOn();

// let bandInfo;

// // Put your code here
// let Doggong = {
// 	name: "Agong",
// 	nationality: "Human",
// 	genre: "random genre",
// 	members: "booger, hair, nosetrils",
// 	formed: 1999,
// 	split: 2000,
// 	albums: [
// 		{
// 			name: "Whatever",
// 			released: 2024,
// 		},
// 		{
// 			name: "Next",
// 			released: 2026,
// 		},
// 	],
// };

// bandInfo = `${Doggong.name} ${Doggong.nationality} ${Doggong.formed} - ${Doggong.split} ${Doggong.genre}, their first album named "${Doggong.albums[0].name}" was released in ${Doggong.albums[0].released}`;

// console.log(bandInfo);

// const cat = {
// 	constructor() {
// 		this.name = "Elfie";
// 		this.breed = "Aphrodite Giant";
// 		this.color = "ginger";
// 	},
// 	name: "Bertie",
// 	breed: "Cymric",
// 	color: "white",
// 	greeting: function () {
// 		console.log(`Hello, said ${this.name} the ${this.breed}.`);
// 	},
// };

// cat.greeting();
// cat.greeting(cat.constructor());
// // cat.constructor();
// // cat.greeting();

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#converting_between_strings_and_arrays
// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
// let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
let total = 0;
// number 1
//                'Underpants:6.99'
//                'Socks:5.99'
//                'T-shirt:14.99'
//                'Trousers:31.99'
//                'Shoes:23.99';
const products = [
	["Underpants", 6.99],
	["Socks", 5.99],
	["T-shirt", 14.99],
	["Trousers", 31.99],
	["Shoes", 23.99],
];
// console.log(products);

// number 2
for (let i of products) {
	console.log(i);
}

// number 3
for (let i of products) {
	// const b = i.toString();
	// console.log(b);
	// const c = b.split(",");
	// const price = Number(c);
	// // console.log(typeof i, i);
	// console.log(price);
}

// number 4

// number 5
let itemText = 0;

// const listItem = document.createElement('li');
// listItem.textContent = itemText;
// list.appendChild(listItem);

// number 6

// totalBox.textContent = 'Total: $' + total.toFixed(2);

///////////////////////////////

// const stations = [
// 	"MAN675847583748sjt567654;Manchester Piccadilly",
// 	"GNF576746573fhdg4737dh4;Greenfield",
// 	"LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
// 	"SYB4f65hf75f736463;Stalybridge",
// 	"HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];

// for (const station of stations) {
// 	// write your code just below here
// 	const cityCode = station.slice(0, 3);
// 	const semiColon = station.indexOf(";");
// 	const name = station.slice(semiColon + 1);
// 	const result = `${cityCode}: ${name}`;

// 	console.log(result);
// }
