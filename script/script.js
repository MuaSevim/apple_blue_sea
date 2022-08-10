"use strict";
const headerEl = document.querySelector("header");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const linksScroll = document.querySelectorAll("a");
const linksNav = document.querySelectorAll(".main-nav-link");


const navBtnHandler = () => headerEl.classList.toggle("nav-open");
btnMenu.addEventListener("click", navBtnHandler);
btnClose.addEventListener("click", navBtnHandler);
linksNav.forEach((link) => {
	link.addEventListener("click", navBtnHandler);
});

//////////// Scrolling \\\\\\\\\\\\\\\\\
linksScroll.forEach((link) => {
	const href = link.getAttribute("href");
	if (href.startsWith("#")) {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			if (href === "#") {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}

			if (href !== "#" && href.startsWith("#")) {
				const sectionEl = document.querySelector(href);
				sectionEl.scrollIntoView({ behavior: "smooth" });
			}
		});
	}
});

//////////// Sticky Navigation \\\\\\\\\\\\\\\\\
const bodyEl = document.querySelector("body");
const observer = new IntersectionObserver(
	function (entries) {
		const entry = entries[0];
		if (!entry.isIntersecting) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 1,
	}
);

observer.observe(bodyEl);
