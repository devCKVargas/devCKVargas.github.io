`use strict`;

//* Selecting elements */
const leftBG = document.querySelector(`.left`);
const dayNumber = document.querySelector(`.left--content--heading--day`);
const leftContent = document.querySelector(`.left--content`);
const hashTag = document.querySelectorAll(`.hashtag`);
const codeTime = document.getElementById(`code--time`);
const colored = document.querySelectorAll(`.colored`);
const twitterHandle = document.querySelector(`.twitter-handle`);
const rightBG = document.querySelector(`.right`);
const listItems = document.querySelectorAll(`.list--items`);
const listTitle = document.querySelectorAll(`.list--title`);
const darkModeBtn = document.querySelector(`#dark-mode-btn`); //* checkbox

//? Added day counter on: 05/23/2023 && Fixed on: 05/24/2023
const dayCounter = () => {
	const dateStart = new Date(2023, 04, 06).getTime() / (1000 * 3600 * 24);
	const dateNow = new Date().getTime() / (1000 * 3600 * 24);
	const dateComplete = new Date(2023, 07, 14).getTime() / (1000 * 3600 * 24);
	const remainingDays = dateComplete - dateNow;
	const spentDays = Math.ceil(100 - remainingDays);
	let daysBehind = 2; //TODO add if behind */
	dayNumber.innerText = `DAY ${spentDays - daysBehind} of`;
};
dayCounter();

//TODO animate auto mode (when time is 1PM)
const autoModeAnimation = {
	duration: 200,
	iterations: 1,
};

//? DARK MODE STARTS HERE */
const darkMode = () => {
	document.body.classList.toggle(`body--dark`);
	leftBG.classList.toggle(`left--dark`);
	twitterHandle.classList.toggle(`twitter-handle--dark`);
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
	hashTagToggler();
	darkListTitleToggler();
	darkListItemsToggler();
};
//? Automode: start at 1PM
const autoMode = () => {
	const timeOfDay = new Date().getHours();
	//? Turn on dark mode at 1PM (13:00), & turn off dark mode toggle button
	timeOfDay >= 13
		? (darkMode(), (darkModeBtn.checked = false))
		: (darkModeBtn.checked = true);
};
autoMode();

// TODO add animation to Automode
darkModeBtn.addEventListener(`click`, darkMode);
