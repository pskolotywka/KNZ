function activeTab() {
	const tabs = document.querySelectorAll(".tabs__item");
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
	const switching = document.querySelector(".recall-options__recall-checkbox");
	const sections = document.querySelector(".section");
	const keep = document.querySelector(".recall__task-keep");

	switching.addEventListener("click", function() {
		if (switching.checked) {
			keep.classList.remove("section");
		} else {
			keep.classList.add("section");
		}
	});
}

showRecallOptions();


function setRecall() {
	const inputDate = document.querySelector(".js-date");
	const inputTime = document.querySelector(".js-time");
	const buttons = document.querySelectorAll(".js-datetime-btn");
	let currentDate;
	let currentTime;

	for (const button of buttons) {
		button.addEventListener("click", function() {
			const date = new Date();
			const intervalAttr = button.dataset.interval;
			const timeAttr = button.dataset.time;

			if (intervalAttr == "minutes") {
				currentDate = date.toISOString().slice(0, 10);
				currentTime = date.getHours() + ":" + date.setMinutes(date.getMinutes() + timeAttr);
			} else if (intervalAttr == "hours") {
				currentDate = date.toISOString().slice(0, 10);
				currentTime = date.setHours(date.getHours() + timeAttr) + ":" + date.getMinutes();
			} else if (intervalAttr == "days") {
				currentDate = date.setDate(date.getDay() + timeAttr) + "." + date.getMonth() + "." + date.getYear();
				currentTime = date.getHours() + ":" + date.getMinutes();
			}

			inputDate.value = currentDate;
			inputTime.value = currentTime;
		});
	}
}

setRecall();