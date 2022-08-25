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
	}
	if (includesDigits(password)) {
		isRequirementValid(digitsInfo.textContent);
	}
	if (isUpperCase(password)) {
		isRequirementValid(upperCaseInfo.textContent);
	}
	if (includesSpecialCharacters(password)) {
		isRequirementValid(specialCharInfo.textContent);
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
const specialCharInfo = document.querySelector(".special");
const upperCaseInfo = document.querySelector(".upperCase");
const digitsInfo = document.querySelector(".digit");
const incorrectPassword = document.querySelector(".mismatch");
function isRequirementValid(info, passwordValue) {
	const replaceX = info.replace("✖", "✓");
	if (passwordValue >= 6 && passwordValue <= 32)
		minimumCharInfo.textContent = replaceX;
	if (info.includes("digit")) digitsInfo.textContent = replaceX;
	if (info.includes("uppercase")) upperCaseInfo.textContent = replaceX;
	if (info.includes("special")) specialCharInfo.textContent = replaceX;
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
// function error(password, confirmPassword) {
// 	password.setAttribute("style", "border-style: solid; border-color: red;");

// 	confirmPassword.setAttribute(
// 		"style",
// 		"border-style: solid; border-color: red;"
// 	);
// }
