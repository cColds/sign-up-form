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
					if (password.value === confirmPassword.value) return true;
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

function invalidUpperCase(password) {
	console.log(password.textContent);
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
firstNameInput.addEventListener("keyup", () => {
	if (firstNameInput.value) {
		firstNameInput.style.borderStyle = "solid";
		firstNameInput.style.borderColor = "#596d48";
		firstSymbol.style.color = "green";
	} else {
		firstNameInput.style.borderStyle = "solid";
		firstNameInput.style.borderColor = "#e5e7eb";
		firstSymbol.style.color = "#FF033E";
		firstNameInput.style.backgroundColor = " #FF7276";
		firstSymbol.textContent = "✖";
	}
	if (!firstNameInput.value) {
		firstNameInput.style.borderStyle = "solid";
		firstNameInput.style.borderColor = "red";
	}
});
