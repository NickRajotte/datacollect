//declare json information to call up later
var data = {
		'title' : "",
		'mousex' : [],
		'mousey' : [],
		'name' : "",
		'email' : "",
		'height' : "",
		'width' : "",
		'browser' : ""
	};


	function showResults() {
		console.clear();
		console.log(data);
	}

	var results = document.getElementById('showResults');

	results.addEventListener("click", showResults);


	function hello(e) {
		console.log(e);
	}

	window.addEventListener("load", hello);



	/* window onload */	
	function onWindowLoad() {
		data.title = document.title;

	}

	window.addEventListener('load', onWindowLoad);
	//this function will get the height deminsions of the browser being used
	function getHeight() {
		data.height = window.innerHeight;

	}
	//this loads the height infor into the console
	window.addEventListener('load', getHeight);
	//This gets the width information of the browser
	function getWidth() {
		data.width = window.innerWidth;

	}

	window.addEventListener('load', getWidth);
	//function to get the browser information
	function getBrowser() {
		data.browser = window. navigator. userAgent;

	}
	//displays the brower information in the consol
	window.addEventListener('load', getBrowser);

	//grabs the mouse coordinates to see where thewy go with the mouse on the page
	function onMouseMove(e){
		data.mousex.push(e.clientX),
		data.mousey.push(e.clientY);

		if ( data.mousex.length > 100 ) {
			document.removeEventListener('mousemove', onMouseMove);
		}
		if ( data.mousey.length > 100 ) {
			document.removeEventListener('mousemove', onMouseMove);
		}
	}

	//display it in the console
	document.addEventListener('mousemove', onMouseMove);



	var fullname = document.getElementById('fullname');
	//grabs the name box information to store
	function onNameKeyUp() {
		data.name = fullname.value;

	}
	
	fullname.addEventListener("keyup", onNameKeyUp);
	//grabs email field when information is typed in
	var verEmail = document.getElementById('email');

	function getemail() {
		data.email = verEmail.value;

	}
	verEmail.addEventListener("keyup", getemail);
