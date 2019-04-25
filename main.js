function differentWorklessReason() {
	const radioAll = document.querySelectorAll(".workless-reasons");
	const other = document.querySelector(".workless-reason__other");	
	const input = document.querySelector(".form__reason-for-other-input");

	for (const radio of radioAll) {
		radio.addEventListener("click", function() {
			if (other.checked) {
				input.style.display = "flex";
			} else {
				input.style.display = "none";
			}	
		});
	}
}

differentWorklessReason();


function job() {
	const sel = document.querySelector(".js-work-select");
	const options = sel.options;
	// console.log(options);
	// const org = document.querySelector(".form__organization");
	// const own = document.querySelector(".form__own-business");
	const workless = document.querySelector("[data-set='workless']");
	const org = document.querySelector("[data-set='org']");
	const own = document.querySelector("[data-set='own']");	
	const orgReason = document.querySelector(".form__organization");
	const ownReason = document.querySelector(".form__own-business");
	const worklessReason = document.querySelector(".form__workless");


	
	sel.addEventListener("click", function() {		
		if (workless.selected) {
			worklessReason.style.display = "flex";	
			ownReason.style.display = "none";
			orgReason.style.display = "none";
		} else if (org.selected) {
			worklessReason.style.display = "none";	
			ownReason.style.display = "none";
			orgReason.style.display = "flex";
		}  else if (own.selected) {
			worklessReason.style.display = "none";	
			ownReason.style.display = "flex";
			orgReason.style.display = "none";
		}
	});
}

job();


function showTip() {
	const tips = document.querySelectorAll(".form__tip");
	const tooltips = document.querySelectorAll(".tooltip-wrap");
	const section = document.querySelector(".section");

		for (const tip of tips) {
			tip.addEventListener("click", function() {
				for (const tooltip of tooltips) {
					this.classList.add("section");
				}
			});
		}
}

showTip();

function currentAddressHide(check, hide) {
	const checkbox = document.querySelector(check);
	const hideBlock = document.querySelector(hide);

	checkbox.addEventListener("click", function() {		

		if (checkbox.checked) {
			hideBlock.style.display = "none";
		} else {
			hideBlock.style.display = "flex";
		}
	});	
}

currentAddressHide(".js-form-address-swicher-checkbox", ".js-current-address-wrap");



function disableInput(check, inp) {
	const checkbox = document.querySelector(check);
	const input = document.querySelector(inp);

	checkbox.addEventListener("click", function() {
		if (!(checkbox.checked)) {
			input.removeAttribute('disabled');
		} else {
			input.setAttribute('disabled', 'disabled');
		}
	});
}	

disableInput(".passport-snils-checkbox", ".form__passport-snils-input");
disableInput(".form__index-remember-switch-checkbox", ".form__reg-address-manual-input");
disableInput(".reg-flat-auto-checkbox", ".reg-flat-auto-input");
disableInput(".reg-phone-auto-checkbox", ".reg-phone-auto-input");
disableInput(".form__current-flat-house-swicher-checkbox", ".form__flat-current-manual-input");
disableInput(".js-flat-reg-manual-checkbox", ".js-flat-reg-manual-input");
disableInput(".js-phone-reg-manual-checkbox", ".js-phone-reg-manual-input");
disableInput(".js-form-address-swicher-checkbox", ".js-phone-reg-manual-input");
disableInput(".js-current-auto-address-flat-checkbox", ".js-current-address-auto-flat-input");
disableInput(".js-current-phone-auto-checkbox", ".js-current-address-auto-phone-input");
disableInput(".js-current-index-manual-checkbox", ".js-current-address-manual-input");
disableInput(".js-current-flat-house-swicher-checkbox", ".js-form__flat-current-manual-input");
disableInput(".js-current-phone-exist-switch-checkbox", ".js-current-home-phone-input");


function showRegFactAddress(check, hidden, show) {
	const fillingCheckbox = document.querySelector(check);
	const autoFilling = document.querySelector(hidden);
	const manualFilling = document.querySelector(show);

		fillingCheckbox.addEventListener("click", function() {
			if (fillingCheckbox.checked) {
				manualFilling.style.display = "flex";
				autoFilling.style.display = "none";
			} else {
				manualFilling.style.display = "none";
				autoFilling.style.display = "flex";
			}
		});
}

showRegFactAddress(".form__address-filling-type-switch-checkbox", ".form__address-auto-filling", ".form__address-manual-filling");
showRegFactAddress(".js-current-address-filling-type-switch-checkbox", ".js-current-address-auto-filling", ".js-current-address-manual-filling");


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