document.getElementById("greet").addEventListener("click", greetUser);

function greetUser() {
	let name = document.getElementById("name").value;
	if (name !== "") {
		document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
	} else {
		document.getElementById("greeting").innerHTML = "Please enter your name.";
	}
}
