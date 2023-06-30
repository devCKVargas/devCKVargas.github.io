const links = document.getElementsByTagName("a");

for (const link of links) {
	const linkInfo = document.createElement("span");
	linkInfo.className = "link-info";
	linkInfo.textContent = "Opens in a new tab";
	link.parentNode.style.position = "relative";
	// link.insertAdjacentElement("afterend", linkInfo);
	link.parentNode.insertBefore(linkInfo, link.nextSibling);
}
