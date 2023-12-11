const inputs = document.querySelector("#input");
const listItem = document.querySelector(".list-item");
const btn = document.getElementById("btn");
const arr = JSON.parse(localStorage.getItem("tasks")) || [];

btn.addEventListener("click", function () {
	const item = inputs.value;
	if (item === "") {
		alert("Please enter tasks");
	} else {
		add(item);
	}
});
function add(x) {
	let list = document.createElement("li");
	list.innerHTML = `${x}`;
	arr.push(x);
	localStorage.setItem("tasks", JSON.stringify(arr));
	listItem.appendChild(list);

	let deletebtn = document.createElement("button");
	deletebtn.textContent = "Remove";
	deletebtn.addEventListener("click", function () {
		listItem.removeChild(list);
		let index = arr.indexOf(x);
		arr.splice(index, 1);
		localStorage.setItem("tasks", JSON.stringify(arr));
		console.log(index);
	});
	list.appendChild(deletebtn);
}
function showExistingData() {
	// Clear the existing content in the list
	listItem.innerHTML = "";

	// Loop through the array and create list items for each element
	arr.forEach(function (item) {
		let list = document.createElement("li");
		list.innerHTML = `${item}`;
		listItem.appendChild(list);

		let deletebtn = document.createElement("button");
		deletebtn.textContent = "Remove";
		deletebtn.addEventListener("click", function () {
			listItem.removeChild(list);
			let index = arr.indexOf(item);
			arr.splice(index, 1);
			localStorage.setItem("tasks", JSON.stringify(arr));
			console.log(index);
		});
		list.appendChild(deletebtn);
	});
}
showExistingData();
