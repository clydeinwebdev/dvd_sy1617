"use strict";

let url = "http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&Episode=2";
let success = function(data){
	let app = document.getElementById("app");
	app.innerHTML = `

		Year: ${data.Year}<br/>
		Title: ${data.Title}<br/>

	`;
	// console.log(data);
}

$.ajax({
	method: "GET",
	url: url,  	
	success: success
});

