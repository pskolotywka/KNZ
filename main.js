function endTask() {
	const btn = document.querySelector(".end-task-modal__end-task-button");

	btn.addEventListener("click", function() {
		location.reload()
	});
}

endTask();

function closeEndTaskModal() {
	const btn = document.querySelector(".modal__cancel-btn");
	const modal = document.querySelector(".end-task-modal");

	btn.addEventListener("click", function() {
		modal.style.display = "none";
	});
}

closeEndTaskModal();

function openEndTaskModal() {
	const btn = document.querySelector(".end-task-button");
	const modal = document.querySelector(".end-task-modal");

	btn.addEventListener("click", function() {
		modal.style.display = "block";
	});
}

openEndTaskModal();


function checkboxHideShow(chbx, hideB) {
	const chckbox = document.querySelector(chbx);
	const hideBlock = document.querySelector(hideB);

	chckbox.addEventListener("click", function() {
		if (chckbox.checked) {
			hideBlock.classList.add("hidden");
		} else {
			hideBlock.classList.remove("hidden");
		}
	});
}

checkboxHideShow(".form__bail-address-swicher-checkbox", ".flat-bail-registration-block-matching");
checkboxHideShow(".form__bail-current-address-matching-swicher-checkbox", ".flat-bail-current-block-matching");


// появление чекбокса "совпадает с адресом залога в форме, при выборе кредитования в залог квартиры"

function addressLoanMatch() {
	const loanType = document.querySelector(".application-forming__script-flat");
	const checkboxReg = document.querySelector(".form__bail-address-registration-matching-swicher");
	const checkboxCur = document.querySelector(".form__bail-current-address-matching-swicher");

	loanType.addEventListener("click", function() {
		checkboxReg.classList.remove("section");
		checkboxCur.classList.remove("section");
	});
}

addressLoanMatch();


// Button enabled при значении инпут больше 0 в блоке адреса квартиры. 
function enabledAddressBtn() {
	const addressinput = document.querySelector(".js-object-address__address-input");
	const btn = document.querySelector(".js-obj-addr-nextBtn");
	const flatInput = document.querySelector(".js-obj-addr");
	const inputs = document.querySelectorAll(".js-object-address-input");
	const checkBox = document.querySelector(".object-address__flat-checkbox");
	const error = document.querySelector(".js-object-address__flat-error");

// этот цикл дает возможность с помощью чекбокса раздизейблить кнопку. Этот и нижний цикл могут друг друга перебивать в плане дизейбла кнопки
for (const input of inputs) {
	checkBox.addEventListener("click", function() {
		if (addressinput.value.length > 0 && checkBox.checked) {
			flatInput.value = "";
			btn.classList.add("button");
			btn.classList.remove("loan-offer__next-button_disable");
			btn.removeAttribute('disabled');
			error.style.display = "none";
			flatInput.style.border = "1px solid #ccc";
		} else {
			flatInput.value = "";
			btn.classList.remove("button");
			btn.classList.add("loan-offer__next-button_disable");
			btn.setAttribute('disabled', '');	
			error.style.display = "block";
			flatInput.style.border = "1px solid red";			
		}
	});
}	

// этот цикл раздизейбливает кнопку только по инпутам. Этот и верхний цикл могут друг друга перебивать в плане дизейбла кнопки
for (const input of inputs) {
	input.addEventListener("blur" , function() {
		if (addressinput.value.length > 0 && flatInput.value.length > 0) {
			btn.classList.add("button");
			btn.classList.remove("loan-offer__next-button_disable");
			btn.removeAttribute('disabled');								
		} else {
			btn.classList.remove("button");
			btn.classList.add("loan-offer__next-button_disable");
			btn.setAttribute('disabled', '');				
		}
	});	
}	
}

enabledAddressBtn();

// тоже самое только для блока данные по залоговому авто. 
function enableCarBlockNextBtn() {
	const inputs = document.querySelectorAll(".js-auto-info-input");
	const btn = document.querySelector(".js-auto-info-nextbtn-enable");
	const name = document.querySelector(".auto-info_model-input"); 
	const number = document.querySelector(".auto-info_number-input");
	const vin = document.querySelector(".auto-info_vin-input");

	for (const input of inputs) {
		input.addEventListener("blur" , function() {
			if (name.value.length > 0 && number.value.length > 0 && vin.value.length > 0) {
				btn.classList.add("button");
				btn.classList.remove("loan-offer__next-button_disable");
				btn.removeAttribute('disabled');											
			} else {
				btn.classList.remove("button");
				btn.classList.add("loan-offer__next-button_disable");
				btn.setAttribute('disabled', '');							
			}
		});	
	}	
}

enableCarBlockNextBtn();


// Ошибки на инпутах, если они пустые
function addressError(inp, err) {
	const input = document.querySelector(inp);
	const error = document.querySelector(err);

	input.addEventListener("blur", function() {
		
		if (input.value.length > 0) {
			error.style.display = "none";
			input.style.border = "1px solid #ccc";
		} else {
			error.style.display = "block";
			input.style.border = "1px solid red";				
		}	
	});		
}

addressError(".js-object-address-input", ".js-object-address__address-error");	
addressError(".js-obj-addr", ".js-object-address__flat-error");	
addressError(".auto-info_model-input", ".js-error-model");	
addressError(".auto-info_number-input", ".js-error-number");	
addressError(".auto-info_vin-input", ".js-error-vin");	


// После radio button "является ли клиент собственников автомобиля" вызов информации об автомобиле.
function showCarInfo() {
	const btn = document.querySelector(".js-nxtbtn-car-bail");
	const autoInfo = document.querySelector(".auto-info");
	const scenario = document.querySelector(".application-scenario");
	const radioBlock = document.querySelector(".js-car-bail-radio-block");

	btn.addEventListener("click", function() {
		autoInfo.classList.remove("section");
		radioBlock.classList.add("section");
		scenario.classList.add("section");
	});

}


showCarInfo();


// Снятие disable с button при нескольких radio button
function showCarBailNextBtn() {
	const blocks = document.querySelectorAll(".js-car-bail-block");
	const container = document.querySelector(".js-car-bail-radio-block");
	const radioInputs = container.querySelectorAll("[type=radio]");
	const btn = document.querySelector(".js-nxtbtn-car-bail");

	for (const radioInput of radioInputs) {
		radioInput.addEventListener("click", function() {
			const checkedBtns = container.querySelectorAll(":checked").length;

			function enableBtn() {
				btn.removeAttribute('disabled');
				btn.classList.add("button");
				btn.classList.remove("loan-offer__next-button_disable");
			}

			if (blocks.length == checkedBtns) {
				enableBtn();
			}
		});
	}
}


showCarBailNextBtn();


// Снятие disable с button при нескольких radio button, учитывая возможное скрытие radio button.
function showFlatBailNextBtn() {
	const blocks = document.querySelectorAll(".js-flat-bail-block");
	const container = document.querySelector(".js-flat-bail-container");
	const radioInputs = container.querySelectorAll("[type=radio]");
	const btn = document.querySelector(".js-nxtbtn-flat-bail");
	const notOnlyBtn = document.querySelector(".js-flat-only-owner");

	for (const radioInput of radioInputs) {
		radioInput.addEventListener("click", function() {			
			const checkedBtns = container.querySelectorAll(":checked").length;	

			function disableBtn() {
				btn.setAttribute('disabled', '');
				btn.classList.remove("button", "open-address");
				btn.classList.add("loan-offer__next-button_disable");
			}

			function enableBtn() {
				btn.removeAttribute('disabled');
				btn.classList.add("button", "open-address");
				btn.classList.remove("loan-offer__next-button_disable");			
			}

			if (notOnlyBtn.style.display == "block") {
				if (blocks.length == checkedBtns) {
					enableBtn();
				} else {
					disableBtn();
				}
			} else if (notOnlyBtn.style.display == "none") {
				if ((blocks.length - 1) == checkedBtns) {
					enableBtn();
				} else {
					disableBtn();
				}	
			}
		});	
	}	
}


function backToOffer(btn, thisStep, prevStep) {
	const button = document.querySelector(btn);
	const address = document.querySelector(thisStep);
	const scriptBlock = document.querySelector(prevStep);
	

	button.addEventListener("click", function() {		
		address.classList.add("section");
		scriptBlock.classList.remove("section");	
	});
}


backToOffer(".info-button", ".object-address__wrap", ".application-scenario");
backToOffer(".auto-info__prev-btn", ".auto-info", ".application-scenario");


function hideOnlyOwner() {
	const notOnlyBtn = document.querySelector(".flat-bail__not-owner-radio");
	const coBorrower = document.querySelector(".flat-only-owner");
	const btnsAll = document.querySelectorAll(".js-flat-bail__owner-radio");

	coBorrower.style.display = "block";

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
showForm(".js-open-form", ".form__wrap", ".application-scenario");
showForm(".js-auto-info-nextbtn-enable", ".form__wrap", ".auto-info__container");


function showAddress() {
	const btns = document.querySelectorAll(".open-address");
	const address = document.querySelector(".object-address__wrap");
	const scriptBlock = document.querySelector(".application-scenario");
	const loanBlock = document.querySelector(".js-loan-offer__flat-bail");

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
	const workAddress = document.querySelector(".job-place");

	btn.addEventListener("click", function() {
		field.style.display = "block";
		workAddress.classList.remove("hidden");
		btn.style.display = "none";
	});
}


showAdditionalFields();


function enableButton() {
	const btn = document.querySelector(".js-nxtbtn-not-ready");
	const inputs = document.querySelectorAll(".js-not-ready-label-radio");

	for (const input of inputs) {

		input.addEventListener("click", function() {
			btn.removeAttribute('disabled');
			btn.classList.add("button", "js-open-form");
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
disableInput(".form__current-flat-house-swicher-checkbox", ".form__flat-current-manual-input");
disableInput(".js-flat-reg-manual-checkbox", ".js-flat-reg-manual-input");
disableInput(".js-phone-reg-manual-checkbox", ".js-phone-reg-manual-input");
disableInput(".js-current-auto-address-flat-checkbox", ".js-current-address-auto-flat-input");
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


function loanOffer() {
	const failInput = document.querySelector(".application-forming__script-fail");
	const carInput = document.querySelector(".application-forming__script-car");
	const flatInput = document.querySelector(".application-forming__script-flat");
	const failblock = document.querySelector(".loan-offer__not-ready");
	const flatblock = document.querySelector(".js-loan-offer__flat-bail");
	const carblock = document.querySelector(".loan-offer__car-bail");

	failInput.addEventListener("click", function() {
		if (failInput.checked) {
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
			showFlatBailNextBtn();
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

//Валидация форм на пустоту

// data-rule="string"
// data-rule="number"

function inputsValidate(){

	let check = {
		number: {err: 'Введите цифры!', reg: /^\d+$/},
		string: {err: 'Введите буквы!', reg: /^[a-zа-яё]+$/i},
		date:   {err: 'Укажите верную дату в формате ДД.ММ.ГГГГ', reg: /([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/},
		tel:    {err: 'Код региона или оператора связи не существует', reg: /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/},
		email:  {err: 'Не правильный формат email', reg: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i},
	}

	function checkInputs() {
		let inputs = document.querySelectorAll('input[data-rule]');
		let result = document.querySelectorAll('.form-input-error');

		for ( let i = 0; i < inputs.length; i++ ) {
			inputs[i].addEventListener('input', function() {
				let rule = this.dataset.rule;
				let value = this.value;

				if( check[rule].reg.test( value ) && value ){
					this.style.border = "1px solid green";
					result[i].innerText = "";       
				} else {
					this.style.border = "1px solid red";
					result[i].innerText = check[rule].err;
				}
			});

			inputs[i].addEventListener('blur', function() {
				if( !this.value ) {
					result[i].innerText = "Это поле обязательно для заполнения!";
					this.style.border = "1px solid red";
				}
			});
		}
	}

	checkInputs();

}

inputsValidate()

