const password = document.querySelector("#passwordId");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".createAccount");
submitButton.disabled = true;
function checkPassword() {
	const passwordResult = password.value;
	const confirmPasswordResult = confirmPassword.value;
	isPasswordValid(passwordResult, confirmPasswordResult);
}

function isPasswordValid(password, confirmPassword) {
	if (password !== confirmPassword) {
		passwordMismatch(password, confirmPassword);
	} else if (password === confirmPassword) {
		incorrectPassword.textContent = "";
	}
	if (password.length >= 6 && password.length <= 32) {
		isRequirementValid(minimumCharInfo.textContent, password.length);
	} else {
		minimumCharInfo.style.color = "red";
		minimumCharInfo.textContent = "✖Minimum 6 characters";
	}
	if (includesDigits(password)) {
		isRequirementValid(digitsInfo.textContent);
	} else {
		digitsInfo.style.color = "red";
		digitsInfo.textContent = "✖At least one digit";
	}
	if (isUpperCase(password)) {
		isRequirementValid(upperCaseInfo.textContent);
	} else {
		upperCaseInfo.style.color = "red";
		upperCaseInfo.textContent = "✖At least one uppercase letter";
	}
	if (includesSpecialCharacters(password)) {
		isRequirementValid(specialCharInfo.textContent);
	} else {
		specialCharInfo.style.color = "red";
		specialCharInfo.textContent = "✖At least one special character";
	}
	if (allRequirementsMet()) {
		if (password.value === confirmPassword.value)
			submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

password.addEventListener("keyup", checkPassword);
confirmPassword.addEventListener("keyup", checkPassword);

function passwordMismatch(password, confirmPassword) {
	if (password.length < 1 && confirmPassword.length < 1) {
		incorrectPassword.textContent = "";
	} else {
		incorrectPassword.textContent = "*Passwords do not match";
	}
}
const minimumCharInfo = document.querySelector(".min");
const digitsInfo = document.querySelector(".digit");
const upperCaseInfo = document.querySelector(".upperCase");
const specialCharInfo = document.querySelector(".special");
const incorrectPassword = document.querySelector(".mismatch");

function initialRed() {
	minimumCharInfo.style.color = "red";
	digitsInfo.style.color = "red";
	upperCaseInfo.style.color = "red";
	specialCharInfo.style.color = "red";
}
initialRed();

function allRequirementsMet() {
	if (minimumCharInfo.style.color == "green") {
		if (digitsInfo.style.color == "green") {
			if (upperCaseInfo.style.color == "green") {
				if (specialCharInfo.style.color == "green") {
					return true;
				}
			}
		}
	}
	return false;
}

function isRequirementValid(info, passwordLength) {
	const replaceX = info.replace("✖", "✓");
	if (passwordLength >= 6 && passwordLength <= 32) {
		minimumCharInfo.textContent = replaceX;
		minimumCharInfo.style.color = "green";
	}
	if (info.includes("digit")) {
		digitsInfo.textContent = replaceX;
		digitsInfo.style.color = "green";
	}
	if (info.includes("uppercase")) {
		upperCaseInfo.textContent = replaceX;
		upperCaseInfo.style.color = "green";
	}
	if (info.includes("special")) {
		specialCharInfo.textContent = replaceX;

		specialCharInfo.style.color = "green";
	}
}

function includesDigits(password) {
	const digits = /[0-9]/g;
	const digitsCheck = password.match(digits);
	if (digitsCheck) {
		if (digitsCheck.length >= 1) {
			return true;
		}
	}
	return false;
}

function isUpperCase(password) {
	const upperCase = /[A-Z]/g;
	const upperCaseCheck = password.match(upperCase);
	if (upperCaseCheck) {
		if (upperCaseCheck.length >= 1) {
			return true;
		}
	}
	return false;
}

function includesSpecialCharacters(password) {
	const specialCharacters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
	const specialCharactersCheck = password.match(specialCharacters);

	if (specialCharactersCheck) {
		if (specialCharactersCheck.length >= 1) {
			return true;
		}
	}
	return false;
}

const checkbox = document.querySelector(".checkBox");
checkbox.addEventListener("click", showPassword);

function showPassword() {
	if (password.type === "password") {
		password.type = "text";
		confirmPassword.type = "text";
	} else {
		password.type = "password";
		confirmPassword.type = "password";
	}
}

const firstNameInput = document.querySelector("#fname");
const firstSymbol = document.querySelector(".firstNameSymbol");
firstSymbol.style.color = "transparent";
firstNameInput.addEventListener("keyup", () =>
	styleFirstName(firstNameInput.value)
);
function styleFirstName(input) {
	if (input) {
		firstNameInput.style.borderStyle = "solid";
		firstNameInput.style.borderColor = "#596d48";
		firstSymbol.style.color = "green";
	} else {
		firstNameInput.style.borderStyle = "solid";
		firstNameInput.style.borderColor = "#e5e7eb";
		firstNameInput.style.backgroundColor = " #FF7276";
		firstSymbol.style.color = "#FF033E";

		firstSymbol.textContent = "✖";
	}
}

const lastNameInput = document.querySelector("#lname");
const lastSymbol = document.querySelector(".lastNameSymbol");
lastSymbol.style.color = "transparent";
lastNameInput.addEventListener("keyup", () =>
	styleLastName(lastNameInput.value)
);
function styleLastName(input) {
	if (input) {
		lastNameInput.style.borderStyle = "solid";
		lastNameInput.style.borderColor = "#596d48";
		lastSymbol.style.color = "green";
	} else {
		lastNameInput.style.borderStyle = "solid";
		lastNameInput.style.borderColor = "#e5e7eb";
		lastNameInput.style.backgroundColor = " #FF7276";
		lastSymbol.style.color = "#FF033E";

		lastSymbol.textContent = "✖";
	}
}
const email = document.querySelector("#email");
const emailSymbol = document.querySelector(".emailSymbol");
emailSymbol.style.color = "transparent";
email.addEventListener("keyup", () => styleEmail(email.value));

function styleEmail(input) {
	const alphanumerical = /[^\W]|_/g;
	if (input.includes("@")) {
		const atSymbol = input.indexOf("@");
		const atSymbolLength = atSymbol + 1;
		if (input[atSymbolLength]) {
			if (input[atSymbolLength].match(alphanumerical)) {
				email.style.borderStyle = "solid";
				email.style.borderColor = "#596d48";
				email.style.backgroundColor = "white";
				emailSymbol.style.color = "green";
				emailSymbol.textContent = "✓";
			}
		} else {
			email.style.borderStyle = "solid";
			email.style.borderColor = "#e5e7eb";
			email.style.backgroundColor = " #FF7276";
			emailSymbol.style.color = "#FF033E";

			emailSymbol.textContent = "✖";
		}
	} else {
		email.style.borderStyle = "solid";
		email.style.borderColor = "#e5e7eb";
		email.style.backgroundColor = " #FF7276";
		emailSymbol.style.color = "#FF033E";

		emailSymbol.textContent = "✖";
	}
}

const passwordInput = document.querySelector("#passwordId");
const passwordSymbol = document.querySelector(".passwordSymbol");
passwordSymbol.style.color = "transparent";
passwordInput.addEventListener("keyup", () =>
	stylePassword(passwordInput.value)
);

function stylePassword() {
	if (allRequirementsMet()) {
		{
			passwordInput.style.borderStyle = "solid";
			passwordInput.style.borderColor = "#596d48";
			passwordInput.style.backgroundColor = "white";
			passwordSymbol.style.color = "green";
			passwordSymbol.textContent = "✓";
		}
	} else {
		passwordInput.style.borderStyle = "solid";
		passwordInput.style.borderColor = "#e5e7eb";
		passwordInput.style.backgroundColor = " #FF7276";
		passwordSymbol.style.color = "#FF033E";

		passwordSymbol.textContent = "✖";
	}
}

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordSymbol = document.querySelector(".confirmPasswordSymbol");
confirmPasswordSymbol.style.color = "transparent";
confirmPasswordInput.addEventListener("keyup", () =>
	styleConfirmPassword(confirmPassword.value)
);

function styleConfirmPassword() {
	if (allRequirementsMet()) {
		{
			confirmPasswordInput.style.borderStyle = "solid";
			confirmPasswordInput.style.borderColor = "#596d48";
			confirmPasswordInput.style.backgroundColor = "white";
			confirmPasswordSymbol.style.color = "green";
			confirmPasswordSymbol.textContent = "✓";
		}
	} else {
		confirmPasswordInput.style.borderStyle = "solid";
		confirmPasswordInput.style.borderColor = "#e5e7eb";
		confirmPasswordInput.style.backgroundColor = "#FF7276";
		confirmPasswordSymbol.style.color = "#FF033E";

		confirmPasswordSymbol.textContent = "✖";
	}
}
