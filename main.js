// function showTip() {
// 	const tips = document.querySelectorAll(".form__tip");
// 	const tooltips = document.querySelectorAll(".tooltip-wrap");
// 	const section = document.querySelector(".section");

// 		for (const tip of tips) {
// 			tip.addEventListener("click", function() {
// 				for (const tooltip of tooltips) {
// 					this.classList.add("section");
// 				}
// 			});
// 		}
// }

// showTip();

function showRegAddress() {
	const fillingCheckbox = document.querySelector(".form__address-filling-type-switch-checkbox");
	const autoFilling = document.querySelector(".form__address-auto-filling");
	const manualFilling = document.querySelector(".form__address-manual-filling");

		fillingCheckbox.addEventListener("click", function() {
			if (fillingCheckbox.checked) {
				manualFilling.style.display = "block";
				autoFilling.style.display = "none";
			} else {
				manualFilling.style.display = "none";
				autoFilling.style.display = "block";
			}
		});

// // 	const switching = document.querySelector(".recall-options__recall-checkbox");
// // 	const sections = document.querySelector(".section");
// // 	const keep = document.querySelector(".recall__task-keep");

// // 	switching.addEventListener("click", function() {
// // 		if (switching.checked) {
// // 			keep.classList.remove("section");
// // 		} else {
// // 			keep.classList.add("section");
// // 		}
// // 	});
}

showRegAddress();




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


function loanOffer() {
	const a = document.querySelector(".application-forming__script-fail");
	const b = document.querySelector(".loan-offer__not-ready");
	const c = document.querySelector(".loan-offer");

		a.addEventListener("click", function() {
		b.classList.remove("section");
		c.classList.remove("section");
	});
}


// 	const tabs = document.querySelectorAll(".loan-reason"); 
// 	const sections = document.querySelectorAll(".section");
// 	const tabActiveClass = "selected-tab";
// 	const sectionActiveClass = "section--active";

// 	for (const tab of tabs) {
// 		tab.addEventListener("click", function() {
// 			if (!(this.classList.contains(tabActiveClass))) {
// 				for (const iter of tabs) {
// 					iter.classList.remove(tabActiveClass);
// 				}
// 				this.classList.add(tabActiveClass);
// 			} 

// 			const value = tab.dataset.tab;
// 			const section = document.querySelector(`[data-section='${value}']`);
// 			for (const item of sections) {
// 				item.classList.remove(sectionActiveClass);
// 			}
// 			section.classList.add(sectionActiveClass);
// 		});
// 	}
// }		

loanOffer();



function closePopup() {
	const popup = document.querySelector(".popup");
	const closeBtn = document.querySelector(".popup__close-btn");

	closeBtn.addEventListener("click", function() {
		popup.style.display = "none";
	});
}

closePopup();


function popup() {
	const popup = document.querySelector(".popup");
	const button = document.querySelector(".info-button_conditions");
	

	button.addEventListener("click", function() {
		popup.style.display = "block";
	});

}

popup();


function disableInput() {
	const checkbox = document.querySelector(".passport-snils-checkbox");
	const input = document.querySelector(".form__passport-snils-input");

	checkbox.addEventListener("click", function() {
		checkbox.checked
			input.style.background = "#eee";
			input.disabled = !input.disabled;

	});
}	

disableInput();





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
			const timeAttr = +button.dataset.time;
      
      date.setMonth(date.getMonth() + 1);

			if (intervalAttr == "minutes") {
				currentDate = date.getDate().toString().replace( /^([0-9])$/, '0$1') + "." + (date.getMonth().toString().replace( /^([00])$/, '12')).toString().replace( /^([0-9])$/, '0$1') + "." + date.getFullYear();
        date.setMinutes(date.getMinutes() + timeAttr);
				currentTime = date.getHours().toString().replace( /^([0-9])$/, '0$1') + ":" + date.getMinutes().toString().replace( /^([0-9])$/, '0$1');
			} else if (intervalAttr == "hours") {
				currentDate = date.getDate().toString().replace( /^([0-9])$/, '0$1') + "." +(date.getMonth().toString().replace( /^([00])$/, '12')).toString().replace( /^([0-9])$/, '0$1') + "." + date.getFullYear();
        date.setHours(date.getHours() + timeAttr);
				currentTime = date.getHours().toString().replace( /^([0-9])$/, '0$1') + ":" + date.getMinutes().toString().replace( /^([0-9])$/, '0$1');
			} else if (intervalAttr == "days") {
        date.setDate(date.getDate() + timeAttr);
				currentDate = date.getDate().toString().replace( /^([0-9])$/, '0$1') + "." + (date.getMonth().toString().replace( /^([00])$/, '12')).toString().replace( /^([0-9])$/, '0$1') + "." + date.getFullYear();
				currentTime = date.getHours().toString().replace( /^([0-9])$/, '0$1') + ":" + date.getMinutes().toString().replace( /^([0-9])$/, '0$1');
			}

			inputDate.value = currentDate;
			inputTime.value = currentTime;
		});
	}
}

setRecall();



// function setRecall() {
// 	const inputDate = document.querySelector(".js-date");
// 	const inputTime = document.querySelector(".js-time");
// 	const buttons = document.querySelectorAll(".js-datetime-btn");
// 	let currentDate;
// 	let currentTime;

// 	for (const button of buttons) {
// 		button.addEventListener("click", function() {
// 			const date = new Date();
// 			const intervalAttr = button.dataset.interval;
// 			const timeAttr = button.dataset.time;

// 			if (intervalAttr == "minutes") {
// 				currentDate = date.toISOString().slice(0, 10);
// 				currentTime = date.getHours() + ":" + date.setMinutes(date.getMinutes() + timeAttr);
// 			} else if (intervalAttr == "hours") {
// 				currentDate = date.toISOString().slice(0, 10);
// 				currentTime = date.setHours(date.getHours() + timeAttr) + ":" + date.getMinutes();
// 			} else if (intervalAttr == "days") {
// 				currentDate = date.setDate(date.getDay() + timeAttr) + "." + date.getMonth() + "." + date.getYear();
// 				currentTime = date.getHours() + ":" + date.getMinutes();
// 			}

// 			inputDate.value = currentDate;
// 			inputTime.value = currentTime;
// 		});
// 	}
// }

// setRecall();