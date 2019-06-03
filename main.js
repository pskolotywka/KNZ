// Активация next button в блоке "готов оставить авто под залог".

function carBailNextBtn() {
	const inputs = document.querySelectorAll(".js-car-bail__refuse-reason_owner-radio");
	const nextBtn = document.querySelector(".js-nxtbtn-car-bail");

	for (const input of inputs) {
		input.addEventListener("click", function(){
			if (input.checked) {
				nextBtn.removeAttribute('disabled');
				nextBtn.classList.add("button", "open-address");
				nextBtn.classList.remove("loan-offer__next-button_disable");
			}			
		});
	}
}

carBailNextBtn();


// Активация next button в блоке "адрес объекта", если input "адрес" не пустой. 

function objectAddressNextBtn() {
	const input = document.querySelector(".object-address__address-input");
	const btn = document.querySelector(".next-button");
	const errorText = document.querySelector(".js-object-address__address-error");
	
		input.addEventListener("blur", function() {
			if (input.value.length == 0) {
				errorText.style.display = "block";
				input.classList.add("red-border-input");
			}
		});
	}

	

objectAddressNextBtn();


function backToOffer() {
	const button = document.querySelector(".info-button");
	const address = document.querySelector(".object-address__wrap");
	const scriptBlock = document.querySelector(".application-scenario");
	

	button.addEventListener("click", function() {		
		address.classList.add("section");
		scriptBlock.classList.remove("section");	
	});
}

backToOffer();


function enableFlatBailBitoon() {
	const buttonsParty = document.querySelectorAll(".flat-bail__party-co-borrowers-radio");
	const nextBtn = document.querySelector(".js-nxtbtn-flat-bail");


	for (const buttonParty of buttonsParty) {
		buttonParty.addEventListener("click", function() {
			if (buttonParty.checked) {
				nextBtn.removeAttribute('disabled');
				nextBtn.classList.add("button", "open-address");
				nextBtn.classList.remove("loan-offer__next-button_disable");
			}
		});
	}
}

enableFlatBailBitoon();


function hideOnlyOwner() {
	const notOnlyBtn = document.querySelector(".flat-bail__not-owner-radio");
	const coBorrower = document.querySelector(".flat-only-owner");
	const btnsAll = document.querySelectorAll(".js-flat-bail__owner-radio");

	for (const btn of btnsAll) {
		btn.addEventListener("click", function() {
			if (notOnlyBtn.checked) {
				coBorrower.style.display = "none";
			} else {
				coBorrower.style.display = "block";
			}
		});
	}
}	


hideOnlyOwner();


function showTip() {
	const buttons = document.querySelectorAll(".form__tip");
	const tooltips = document.querySelectorAll(".tooltip-wrap");

	for (const button of buttons) {
		button.addEventListener("click", function() {
			const tip = button.nextElementSibling;
			tip.classList.toggle("tooltip-wrap_active");
		});
	}

	document.body.addEventListener("click", function(event) {
		for (let i = 0, j = 0; i < buttons.length, j < tooltips.length; i++, j++) {
			if (event.target !== tooltips[j] && event.target !== buttons[i]) {
				tooltips[j].classList.remove("tooltip-wrap_active");
			}
		}
	});	
}

showTip();


function showForm(btn, appear, hide) {
	const btns = document.querySelectorAll(btn);
	const form = document.querySelector(appear);
	const scriptBlock = document.querySelector(hide);

	for (const btn of btns) {
		btn.addEventListener("click", function() {
			form.classList.remove("section");
			scriptBlock.classList.add("section");		
		});
	}
}

showForm(".next-button", ".form__wrap", ".object-address__wrap");
showForm(".open-form", ".form__wrap", ".application-scenario");
showForm(".js-nxtbtn-car-bail", ".auto-info", ".application-scenario");



function showAddress() {
	const btns = document.querySelectorAll(".open-address");
	const address = document.querySelector(".object-address__wrap");
	const scriptBlock = document.querySelector(".application-scenario");
	const loanBlock = document.querySelector(".loan-offer__flat-bail");

	for (const btn of btns) {
		btn.addEventListener("click", function() {
			address.classList.remove("section");
			scriptBlock.classList.add("section");	
			loanBlock.classList.add("section");	
		});
	}	
}

showAddress();


function showAdditionalFields() {
	const btn = document.querySelector(".additional-info-button");
	const field = document.querySelector(".additional-info-wrap");

	btn.addEventListener("click", function() {
		field.style.display = "block";
	});
}

showAdditionalFields();


function enableButton() {
	const btn = document.querySelector(".js-nxtbtn-not-ready");
	const inputs = document.querySelectorAll(".js-not-ready-label-radio");

	for (const input of inputs) {
	
		input.addEventListener("click", function() {
			btn.removeAttribute('disabled');
			btn.classList.add("button", "open-form");
			btn.classList.remove("loan-offer__next-button_disable");
		});
	}
}

enableButton();


function differentWorklessReason() {
	const radioAll = document.querySelectorAll(".workless-reasons");
	const other = document.querySelector(".workless-reason__other");	
	const input = document.querySelector(".form__reason-for-other");

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
	const workless = document.querySelector("[data-set='workless']");
	const org = document.querySelector("[data-set='org']");
	const own = document.querySelector("[data-set='own']");	
	const orgReason = document.querySelector(".form__organization");
	const ownReason = document.querySelector(".form__own-business");
	const worklessReason = document.querySelector(".form__workless");
	const jobPlace = document.querySelector(".job-place");
	const fillingTypeSwitcher = document.querySelector(".work-own-business-address-switcer");
	
	sel.addEventListener("click", function() {		
		if (workless.selected) {
			worklessReason.style.display = "flex";	
			ownReason.style.display = "none";
			orgReason.style.display = "none";
			orgReason.style.display = "none";
			jobPlace.style.display = "none";
		} else if (org.selected) {
			worklessReason.style.display = "none";	
			ownReason.style.display = "none";			
			orgReason.style.display = "flex";
			jobPlace.style.display = "flex";
			fillingTypeSwitcher.style.display = "none";
		}  else if (own.selected) {
			worklessReason.style.display = "none";	
			ownReason.style.display = "flex";
			orgReason.style.display = "none";			
			jobPlace.style.display = "flex";
			fillingTypeSwitcher.style.display = "flex";
		}
	});
}

job();



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
currentAddressHide(".js-work-organization-own-business-address-switch-checkbox", ".js-work-organization-address-wrap");


function showManagerPhone() {
	const checkbox = document.querySelector(".js-work-phone-exist-switch-checkbox");
	const hideBlock = document.querySelector(".js-manager-phone-wrap");

	checkbox.addEventListener("click", function() {		

		if (checkbox.checked) {
			hideBlock.style.display = "flex";
		} else {
			hideBlock.style.display = "none";
		}
	});	
}

showManagerPhone();


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
disableInput(".js-current-auto-address-flat-checkbox", ".js-current-address-auto-flat-input");
disableInput(".js-current-phone-auto-checkbox", ".js-current-address-auto-phone-input");
disableInput(".js-current-index-manual-checkbox", ".js-current-address-manual-input");
disableInput(".js-current-flat-house-swicher-checkbox", ".js-form__flat-current-manual-input");
disableInput(".js-current-phone-exist-switch-checkbox", ".js-current-home-phone-input");
disableInput(".js-work-phone-exist-switch-checkbox", ".form__work-phone-input");
disableInput(".js-work-organization-index-manual-checkbox", ".js-work-organization-address-manual-input");
disableInput(".js-work-organization-flat-house-swicher-checkbox", ".js-form__flat-work-organization-manual-input");
disableInput(".js-work-organization-phone-exist-switch-checkbox", ".js-work-organization-home-phone-input");
disableInput(".object-address__flat-checkbox", ".object-address__flat-input");


function disableWorkPhone() {
	const checkbox = document.querySelector(".js-work-phone-exist-switch-checkbox");
	const input1 = document.querySelector(".form__work-phone-input");
	const input2 = document.querySelector(".form__work-phone-input-add");

	checkbox.addEventListener("click", function() {
		if (!(checkbox.checked)) {
			input1.removeAttribute('disabled');
			input2.removeAttribute('disabled');
		} else {
			input1.setAttribute('disabled', 'disabled');
			input2.setAttribute('disabled', 'disabled');
		}
	});
}	

disableWorkPhone();


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
showRegFactAddress(".js-work-organization-address-filling-type-switch-checkbox", ".js-work-organization-address-auto-filling", ".js-work-organization-address-manual-filling");


function activeTab() {
	const tabs = document.querySelectorAll(".tabs__item");
	const sections = document.querySelectorAll(".section");
	const tabActiveClass = "selected-tab";
	const sectionActiveClass = "section--active";

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


// function loanOffer() {
// 	const inputs = document.querySelectorAll(".loan-reason");
// 	const sections = document.querySelectorAll(".section");
// 	const inputActiveClass = "selected-input";
// 	const sectionActiveClass = "section--active";

// 	for (const input of inputs) {
// 		input.addEventListener("click", function() {
// 			if (!(this.classList.contains(inputActiveClass))) {
// 				for (const iter of inputs) {
// 					iter.classList.remove(inputActiveClass);
// 				}
// 				this.classList.add(inputActiveClass);
// 			} 

// 			const value = input.dataset.input;
// 			const section = document.querySelector(`[data-section='${value}']`);
// 			for (const item of sections) {
// 				item.classList.remove(sectionActiveClass);
// 			}
// 			section.classList.add(sectionActiveClass);
// 		});
// 	}
// }		

// loanOffer();

// // 





function loanOffer() {
	const FailInput = document.querySelector(".application-forming__script-fail");
	const carInput = document.querySelector(".application-forming__script-car");
	const flatInput = document.querySelector(".application-forming__script-flat");
	const failblock = document.querySelector(".loan-offer__not-ready");
	const flatblock = document.querySelector(".loan-offer__flat-bail");
	const carblock = document.querySelector(".loan-offer__car-bail");

	FailInput.addEventListener("click", function() {
		if (FailInput.checked) {

			failblock.classList.remove("section");
			flatblock.classList.add("section");
			carblock.classList.add("section");

		}
	});	

	carInput.addEventListener("click", function() {
		if (carInput.checked) {

			failblock.classList.add("section");
			flatblock.classList.add("section");
			carblock.classList.remove("section");
		}
	});	

	flatInput.addEventListener("click", function() {
		if (flatInput.checked) {

			failblock.classList.add("section");
			flatblock.classList.remove("section");
			carblock.classList.add("section");
		}
	});		

}		

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



