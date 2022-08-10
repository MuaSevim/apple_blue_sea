const empCards = document.querySelectorAll(".emp-open");
const empModalContainer = document.querySelector(".modal-container");
const empClose = document.getElementById("emp-close");
const empOverlay = document.querySelector(".emp-card--overlay");

//////////// Opening Team Card \\\\\\\\\\\\\\\\\
empCards.forEach((card) => {
	card.addEventListener("click", () => {
		empModalContainer.classList.remove("hidden");
		empModalContainer.classList.remove("hiden");
	});
});

//////////// Closing Team Card \\\\\\\\\\\\\\\\\
empOverlay.addEventListener("click", () => {
	empModalContainer.classList.add("hidden");
});
empClose.addEventListener("click", () => {
	empModalContainer.classList.add("hidden");
});
