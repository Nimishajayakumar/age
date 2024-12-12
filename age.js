function checkEligibility() {
	let age = document.getElementById("age").value;
	let result = document.getElementById("result");
if (age < 0) {
		result.innerHTML = "Error: Age cannot be negative";
		result.className = "error";
	} else if (age >= 18) {
		result.innerHTML = "Eligible";
		result.className = "eligible";
	} else if (age >= 10 && age < 18) {
		result.innerHTML = "Not Eligible";
		result.className = "not-eligible";
	} else if (age >= 1 && age < 10) {
		result.innerHTML = "you are too Young ";
		result.className = "youaretooyoung";
	} 
	}
