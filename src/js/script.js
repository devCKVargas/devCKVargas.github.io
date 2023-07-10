const links = document.getElementsByTagName("a");
// const themeToggle = document.querySelector("#toggle");

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

//! theme toggle button
const themeToggle = document.querySelector("#toggle");
const htmlElement = document.documentElement;

htmlElement.classList.add("os-default");

const setDarkMode = () => {
	htmlElement.classList.add("dark");
	htmlElement.classList.remove("os-default");
	htmlElement.classList.remove("light");
};

const setLightMode = () => {
	htmlElement.classList.add("light");
	htmlElement.classList.remove("os-default");
	htmlElement.classList.remove("dark");
};

themeToggle.addEventListener("click", () => {
	htmlElement.classList.toggle("os-default");

	if (themeToggle.checked) setDarkMode();
	else setLightMode();
});

//! theme reacts to device color-scheme
const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");
const setColorScheme = (colorScheme) => {
	if (colorScheme.matches) {
		// console.log("🌙: Dark mode");
		themeToggle.checked = true;
	} else {
		// console.log("💡: Light mode");
		themeToggle.checked = false;
	}
};

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener("change", setColorScheme);
