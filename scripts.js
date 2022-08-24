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
	const upperCase = /[A-Z]/g;
	const upperCaseCheck = password.toString().match(upperCase);
	const digits = /[0-9]/g;
	const digitsCheck = password.toString().match(digits);
	const specialCharacters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;
	const specialCharactersCheck = password.toString().match(specialCharacters);
	if (password === confirmPassword) {
		if (upperCaseCheck) {
			if (digitsCheck) {
				if (specialCharactersCheck) {
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
