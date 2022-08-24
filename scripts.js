const password = document.querySelector("#passwordId");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".createAccount");

function checkPassword() {
	const passwordResult = password.value;
	const confirmPasswordResult = confirmPassword.value;
	if (passwordResult)
		if (isPasswordValid(passwordResult, confirmPasswordResult))
			console.log("TESTING");
}

function isPasswordValid(password, confirmPassword) {
	if (password === confirmPassword) {
		if (isUpperCase(password)) {
			if (includesDigits(password)) {
				if (includesSpecialCharacters(password)) {
					if (password.length >= 8 && password.length <= 32) {
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

function isUpperCase(password) {
	const upperCase = /[A-Z]/g;
	const upperCaseCheck = password.toString().match(upperCase);
	return upperCaseCheck;
}

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
