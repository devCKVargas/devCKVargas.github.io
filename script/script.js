`use strict`;

//? //** CHANGE DAY HERE */
//? //** CHANGE DAY HERE */
//? //** CHANGE DAY HERE */
//TODO turn this 👇 into a function
const currentDay = 15;
//TODO turn this ☝ into a function
//? //** CHANGE DAY HERE */
//? //** CHANGE DAY HERE */
//? //** CHANGE DAY HERE */

//** Selecting elements */
const leftBG = document.querySelector(`.left`);
const dayNumber = document.querySelector(`.day`);
const leftContent = document.querySelector(`.left--content`);
const hashTag = document.querySelectorAll(`.hashtag`);
const codeTime = document.querySelector(`.code--time`);
const colored = document.querySelectorAll(`.colored`);
const twitterHandle = document.querySelector(`.twitter--handle`);
const rightBG = document.querySelector(`.right`);
const listItems = document.querySelectorAll(`.list--items`);
const listTitle = document.querySelectorAll(`.list--title`);
// const darkModeBtn = document.querySelector(`#darkModeBtn`);
const darkModeBtn = document.querySelector(`#hide-checkbox`); //* checkbox

//** Not working */

//** Initial values */
const timeOfDay = new Date().getHours();
dayNumber.innerText = `DAY ${currentDay}`;
//TODO animate auto mode (when time is 1PM)
const autoModeAnimation = {
	duration: 200,
	iterations: 1,
};

//** DARK MODE STARTS HERE */
const darkMode = () => {
	document.body.classList.toggle(`body--dark`);
	leftBG.classList.toggle(`left--dark`);
	dayNumber.classList.toggle(`colored--dark`);
	//**TODO: Check colored array */
	colored[1].classList.toggle(`colored--dark`);
	twitterHandle.classList.toggle(`twitter--handle--dark`);
	rightBG.classList.toggle(`right--dark`);
	//! Hash Tags color */
	const hashTagToggler = () => {
		for (let i = 0; i < hashTag.length; i++) {
			hashTag[i].classList.toggle(`hashtag--dark`);
		}
	};
	//! List Titles color */
	const darkListTitleToggler = () => {
		for (let i = 0; i < listTitle.length; i++) {
			listTitle[i].classList.toggle(`list--title--dark`);
		}
	};
	//! List Items color */
	const darkListItemsToggler = () => {
		for (let i = 0; i < listItems.length; i++) {
			listItems[i].classList.toggle(`list--items--dark`);
		}
	};
	//! Interchange hashtag text: Morning 🔁 Afternoon */
	const replaceString = () => {
		if (codeTime.textContent.includes(`Morning`)) {
			codeTime.textContent = codeTime.textContent.replace(
				`Morning`,
				`Afternoon`
			);
		} else {
			codeTime.textContent = codeTime.textContent.replace(
				`Afternoon`,
				`Morning`
			);
		}
	};
	//! darkModeBtn flipper */\

	replaceString();
	hashTagToggler();
	darkListTitleToggler();
	darkListItemsToggler();
};

//! Automode: start at 1PM
const autoMode = () => {
	//? Turn on dark mode at 1PM (13:00), & turn off dark mode toggle button
	timeOfDay >= 13
		? (darkMode(), (darkModeBtn.checked = false))
		: (darkModeBtn.checked = true);
};
autoMode();

// TODO add animation to Automode
darkModeBtn.addEventListener(`click`, darkMode);
