const form = document.querySelector(".order__form");
const name = form.querySelector("#name");
const phone = form.querySelector("#phone");
const email = form.querySelector("#email");


console.log(email);

addEventListeners ();

function addEventListeners() {
	form.addEventListener("submit", orderHandler);
};

function orderHandler(e) {

	console.log(e.target);
	e.preventDefault();
}
