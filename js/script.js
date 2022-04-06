function init(){
//add your javascrip between these two lnes of code
	function alertText(){
		var outputtext = document.getElementById("textoutput");
		var alerttext = document.getElementById("entryinput").value;
		outputtext.innerHTML = alerttext;	
		alert("Jacob Holtz: " + alerttext);
	}

	var entrybutton = document.getElementById("entrybutton");
	entrybutton.addEventListener("click", alertText);







	window.addEventListener('load', init);
}