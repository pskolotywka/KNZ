function activeTab() {
	const tabs = document.querySelectorAll(".tabs__li");
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener("click", function() {
				if (tabs[i] )
				tabs[i].classList.add("selected-tab");
		});
	}
}		
		