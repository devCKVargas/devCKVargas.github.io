# Day 35 of #100DaysOfCode

📖 Today`s discoveries
• only screen media query
• For user that uses a touch device
 ➥ @media only screen and (hover: none)
• JS: target event property // 1️⃣
 ➥ Add: bg click functionality
 		➥ If user clicked outside of the parent or child element { //do this }

👨‍💻 Advanced CSS &amp; SASS course project
• Natours landing page
➥ Deployed: to Netlify
✍
• JS: bg click functionality // 1️⃣
	➥ If user clicked outside of the parent or child element { //do this }

//$	//$ if clicked target is not a child of navMenu
//*	if (!navMenu.contains(event.target)) {
//$		//$ navMenu onclick event
//$		//$ open navMenu if it's close, vice-versa
//*		navMenu.addEventListener("click", () => {
//*			navMenu.checked = !navMenu.checked;
//*		});
//$		//$ iterate links from navLinks array 0️⃣
//*		for (const link of navLinks) {
//$			//$ if clicked target is not any link
//*			if (!link.contains(event.target)) {
//$				//$ close navMenu
//*				navMenu.checked = false;
//*			}
//*		}
//*	}