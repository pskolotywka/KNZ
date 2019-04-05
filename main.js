function activeTab() {
	const tabs = document.querySelectorAll(".tabs__li");
	const sections = document.querySelectorAll(".section");
	const tabActiveClass = "selected-tab";
	const sectionActiveClass = "section--active";

	// for (let i = 0; i < tabs.length; i++) 
	for (const tab of tabs) {
		tab.addEventListener("click", function() {
			if (!(this.classList.contains(tabActiveClass))) {
				for (const iter of tabs) {
					iter.classList.remove(tabActiveClass);
				}
				this.classList.add(tabActiveClass);
			} 

			const value = tab.dataset.tab;
			const section = document.querySelector(`[data-section='${value}']`);
			for (const item of sections) {
				item.classList.remove(sectionActiveClass);
			}
			section.classList.add(sectionActiveClass);
		});
	}
}		

activeTab();


function showRecallOptions() {
	let switching = document.querySelector(".recall-options__recall-checkbox");
	const sections = document.querySelector(".section");
	const keep = document.querySelector(".recall__task-keep");

	switching.addEventListener("click", function() {

		switching.checked {
			keep.classList.remove("section");
			keep.classList.add("section");
		}

		// if (switching.checked) {
		// 	keep.classList.remove("section");
		// 	console.log(switching);
		// } else {
		// 	keep.classList.add("section");
		// }
	});
}

showRecallOptions();

		