function represent() {
	let represent = document.querySelector(".tabs__li-represent");

	represent.addEventListener("click", function() {
		represent.classList.add("selected-tab");
	});
}

represent();