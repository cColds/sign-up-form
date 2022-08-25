const password = document.querySelector("#passwordId");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".createAccount");

function checkPassword() {
	const passwordResult = password.value;
	const confirmPasswordResult = confirmPassword.value;

	if (isPasswordValid(passwordResult, confirmPasswordResult))
		console.log("TESTING");
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
