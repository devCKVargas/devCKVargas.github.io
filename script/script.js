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
//** darkModeBtn flipper */
if (!darkModeBtn.checked) {
	darkModeBtn.checked = true;
} else {
	darkModeBtn.checked = false;
}

//TODO check if this is working
const autoModeAnimation = {
	duration: 200,
	iterations: 1,
};

//** DARK MODE STARTS HERE */
const darkMode = () => {
	document.body.classList.toggle(`body--dark`);
	leftBG.classList.toggle(`left--dark`);
	dayNumber.classList.toggle(`colored--dark`);
	colored[1].classList.toggle(`colored--dark`);
	twitterHandle.classList.toggle(`twitter--handle--dark`);
	rightBG.classList.toggle(`right--dark`);
	const hashTagToggler = () => {
		for (let i = 0; i < hashTag.length; i++) {
			hashTag[i].classList.toggle(`hashtag--dark`);
		}
	};
	const darkListTitleToggler = () => {
		for (let i = 0; i < listTitle.length; i++) {
			listTitle[i].classList.toggle(`list--title--dark`);
		}
	};
	const darkListItemsToggler = () => {
		for (let i = 0; i < listItems.length; i++) {
			listItems[i].classList.toggle(`list--items--dark`);
		}
	};
	const changeCodeTime = () => {
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
	changeCodeTime();
	hashTagToggler();
	darkListTitleToggler();
	darkListItemsToggler();
};

//? Automode: start at 1PM
const autoMode = () => {
	timeOfDay >= 13 ? (autoModeAnimation, changeCodeTime()) : -1;
};
autoMode();

// TODO add animation to Automode
darkModeBtn.addEventListener(`click`, darkMode);
