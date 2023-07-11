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

// const themeToggle = document.querySelector("#toggle");
// const htmlElement = document.documentElement;

// const setDarkMode = () => {
// 	htmlElement.classList.add("dark");
// 	htmlElement.classList.remove("os-default");
// 	htmlElement.classList.remove("light");
// 	localStorage.setItem("theme", "dark");
// };

// const setLightMode = () => {
// 	htmlElement.classList.add("light");
// 	htmlElement.classList.remove("os-default");
// 	htmlElement.classList.remove("dark");
// 	localStorage.setItem("theme", "light");
// };

// const setSystemTheme = () => {
// 	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
// 	if (systemTheme === "dark") {
// 		setDarkMode();
// 		themeToggle.checked = true;
// 	} else {
// 		setLightMode();
// 		themeToggle.checked = false;
// 	}
// };

// themeToggle.addEventListener("click", () => {
// 	if (themeToggle.checked) {
// 		setDarkMode();
// 	} else {
// 		setLightMode();
// 	}
// });

// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setSystemTheme);

// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
// 	setDarkMode();
// 	themeToggle.checked = true;
// } else if (savedTheme === "light") {
// 	setLightMode();
// 	themeToggle.checked = false;
// } else {
// 	setSystemTheme();
// }

const themeToggle = document.querySelector("#toggle");
const htmlElement = document.documentElement;

const setTheme = (theme) => {
	htmlElement.classList.add(theme);
	htmlElement.classList.remove(theme === "dark" ? "light" : "dark");
	localStorage.setItem("theme", theme);
};

const setSystemTheme = () => {
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	setTheme(systemTheme);
	themeToggle.checked = systemTheme === "dark";
};

const toggleTheme = () => {
	const theme = themeToggle.checked ? "dark" : "light";
	setTheme(theme);
};

themeToggle.addEventListener("click", toggleTheme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setSystemTheme);

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || savedTheme === "light") {
	setTheme(savedTheme);
	themeToggle.checked = savedTheme === "dark";
} else {
	setSystemTheme();
}
