const links = document.getElementsByTagName("a");

for (const link of links) {
	const linkInfo = document.createElement("span");
	linkInfo.className = "link-info";
	linkInfo.textContent = "Opens in a new tab";
	link.parentNode.style.position = "relative";
	// link.insertAdjacentElement("afterend", linkInfo);
	link.parentNode.insertBefore(linkInfo, link.nextSibling);
}

const dayCounter = () => {
	const dayNumber = document.querySelector("#current-day");
	// const dateStart = new Date(2023, 4, 6).getTime() / (1000 * 3600 * 24); //! May 6, 2023
	const dateNow = new Date().getTime() / (1000 * 3600 * 24);
	const dateComplete = new Date(2023, 7, 14).getTime() / (1000 * 3600 * 24); //! Supposedly finish date: August 14, 2023
	const remainingDays = dateComplete - dateNow;
	const spentDays = Math.ceil(100 - remainingDays);
	let rest = 11; //TODO add rest day */
	dayNumber.innerText = `Day ${spentDays - rest}`;
};
dayCounter();

// const autoMode = () => {
// 	const timeOfDay = new Date().getHours();
// 	//! Turn on dark mode at 1PM (13:00), & turn off dark mode toggle button
// 	timeOfDay >= 13 ? (darkMode(), (darkModeBtn.checked = false)) : (darkModeBtn.checked = true);
// };
// autoMode();
