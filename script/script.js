`use strict`;

//? FOR NOW CHANGE DAY HERE or call dayCounter() */
let currentDay = 16;

//* Selecting elements */
const leftBG = document.querySelector(`.left`);
const dayNumber = document.querySelector(`.day`);
const leftContent = document.querySelector(`.left--content`);
const hashTag = document.querySelectorAll(`.hashtag`);
const codeTime = document.getElementById(`code--time`);
const colored = document.querySelectorAll(`.colored`);
const twitterHandle = document.querySelector(`.twitter--handle`);
const rightBG = document.querySelector(`.right`);
const listItems = document.querySelectorAll(`.list--items`);
const listTitle = document.querySelectorAll(`.list--title`);
const darkModeBtn = document.querySelector(`#hide-checkbox`); //* checkbox

//* Not working */

//* Initial values */
const timeOfDay = new Date().getHours();
dayNumber.innerText = `DAY ${currentDay}`;

//? Fix day counter - Done on: 05/23/2023
const dayCounter = () => {
	const dateStart = new Date(2023, 04, 06);
	const dateNow = new Date() / (1000 * 3600 * 24);
	const dateComplete = new Date(2023, 07, 14);
	const remainingDays =
		(dateComplete.getTime() - dateStart.getTime()) / (1000 * 3600 * 24);
	const spentDays = Math.trunc((dateNow - remainingDays) / 1000) - 1;
	console.log(spentDays);

	dayNumber.innerText = `DAY ${spentDays}`;
};
// dayCounter(); //TODO turn this on once first day 100 is completed

//TODO animate auto mode (when time is 1PM)
const autoModeAnimation = {
	duration: 200,
	iterations: 1,
};

//* DARK MODE STARTS HERE */
const darkMode = () => {
	document.body.classList.toggle(`body--dark`);
	leftBG.classList.toggle(`left--dark`);
	twitterHandle.classList.toggle(`twitter--handle--dark`);
	rightBG.classList.toggle(`right--dark`);
	//? colored elements */
	for (const items of colored) items.classList.toggle(`colored--dark`);
	//? Hash Tags color */
	const hashTagToggler = () => {
		for (const items of hashTag) items.classList.toggle(`hashtag--dark`);
	};
	//? List Titles color */
	const darkListTitleToggler = () => {
		for (const items of listTitle) items.classList.toggle(`list--title--dark`);
	};
	//? List Items color */
	const darkListItemsToggler = () => {
		for (const items of listItems) items.classList.toggle(`list--items--dark`);
	};
	//? Interchange hashtag text: Morning 🔁 Afternoon */
	const morningAfternoonCodeSwap = () => {
		codeTime.text.includes(`Morning`)
			? (codeTime.text = `#AfternoonCode`)
			: (codeTime.text = `#MorningCode`);
	};
	morningAfternoonCodeSwap();
	hashTagToggler();
	darkListTitleToggler();
	darkListItemsToggler();
};
//? Automode: start at 1PM
const autoMode = () => {
	//? Turn on dark mode at 1PM (13:00), & turn off dark mode toggle button
	timeOfDay >= 13
		? (darkMode(), (darkModeBtn.checked = false))
		: (darkModeBtn.checked = true);
};
autoMode();

// TODO add animation to Automode
darkModeBtn.addEventListener(`click`, darkMode);
