const password = document.querySelector("#passwordId");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".createAccount");
const minimumCharInfo = document.querySelector(".min");
const digitsInfo = document.querySelector(".digits");
const upperCaseInfo = document.querySelector(".upperCase");
const specialCharInfo = document.querySelector(".special");
const incorrectPassword = document.querySelector(".mismatch");
function checkPassword() {
	const passwordResult = password.value;
	const confirmPasswordResult = confirmPassword.value;

	if (isPasswordValid(passwordResult, confirmPasswordResult))
		console.log("TESTING");
}

function isPasswordValid(password, confirmPassword) {
	if (password !== confirmPassword)
		passwordMismatch(password, confirmPassword);

	if (password === confirmPassword) {
		incorrectPassword.textContent = "";
		if (isUpperCase(password)) {
			if (includesDigits(password)) {
				if (includesSpecialCharacters(password)) {
					if (password.length >= 6 && password.length <= 32) {
						console.log("hello123");

						return;
					}
				}
			}
		}
	}
}

password.addEventListener("keyup", checkPassword);
confirmPassword.addEventListener("keyup", checkPassword);

function passwordMismatch(password, confirmPassword) {
	if (password.length < 1 && confirmPassword.length < 1) {
		incorrectPassword.textContent = "";
		// error(password, confirmPassword);
		return;
	}
	// error(password, confirmPassword);
	incorrectPassword.textContent = "*Passwords do not match";
	return;
}

// function error(password, confirmPassword) {
// 	password.setAttribute("style", "border-style: solid; border-color: red;");

// 	confirmPassword.setAttribute(
// 		"style",
// 		"border-style: solid; border-color: red;"
// 	);
// }

function isUpperCase(password) {
	const upperCase = /[A-Z]/g;
	const upperCaseCheck = password.toString().match(upperCase);
	return upperCaseCheck;
}

// function invalidUpperCase(password) {

// }

function includesDigits(password) {
	const digits = /[0-9]/g;
	const digitsCheck = password.toString().match(digits);
	return digitsCheck;
}

function includesSpecialCharacters(password) {
	const specialCharacters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
	const specialCharactersCheck = password.toString().match(specialCharacters);

	return specialCharactersCheck;
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
