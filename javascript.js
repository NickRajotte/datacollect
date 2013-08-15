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

	function getHeight() {
		data.height = window.innerHeight;

	}

	window.addEventListener('load', getHeight);

	function getWidth() {
		data.width = window.innerWidth;

	}

	window.addEventListener('load', getWidth);

	function getBrowser() {
		data.browser = window. navigator. userAgent;

	}

	window.addEventListener('load', getBrowser);


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

	document.addEventListener('mousemove', onMouseMove);



	var fullname = document.getElementById('fullname');

	function onNameKeyUp() {
		data.name = fullname.value;

	}

	fullname.addEventListener("keyup", onNameKeyUp);

	var verEmail = document.getElementById('email');

	function getemail() {
		data.email = verEmail.value;

	}
	verEmail.addEventListener("keyup", getemail);
