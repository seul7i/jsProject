function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}
function PrintOutput(num){
	if (num=="") {
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=formatNumber(num);
	}
}

function formatNumber(num){
	if(num == "-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseFormat(num){
	return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for ( var i = 0; i < operator.length; i++ ){
	operator[i].addEventListener('click', function(){
		if (this.id == "clear") {
			printHistory("");
			PrintOutput("");
		}
		else if (this.id == "backspace") {
			var output = reverseFormat(getOutput()).toString();
			if (output) { // if output has a value
				output = output.substr(0, output.length-1);
				PrintOutput(output);
			}
		}
		else{
			var output = getOutput();
			var history = getHistory();

			if (output =="" && history != "") {
				if ( isNaN(history[ history.length - 1 ]) ) {
					history = history.substr(0, history.length-1);
				}
			}
			if (output != "" || history != "") {
				output = output =="" ? output : reverseFormat(output); //( condition ? true : false )
				history = history + output;
				if (this.id == "=") {
					var result = eval(history);
					PrintOutput(result); 
					printHistory(""); 
				}
				else{
					history=history+this.id;
					printHistory(history);
					PrintOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for ( var i = 0; i < number.length; i++ ){
	number[i].addEventListener('click', function(){
		var output = reverseFormat(getOutput());
		if (output != NaN) {
			output = output+this.id;
			PrintOutput(output);
		}
	})
}