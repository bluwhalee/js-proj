function gethistory(){
    return document.getElementById("hvalue").innerText;
}
function printHistory(num){
    document.getElementById("hvalue").innerText = num;
}
function getOutput(){
    return document.getElementById("ovalue").innerText;
}
function printOutput(num){
    if(num=="")
    {
        document.getElementById("ovalue").innerText = num        
    }
    else
    {
        document.getElementById("ovalue").innerText = getformat(num);
    }
}
function getformat(num){
    var n= Number(num)
    var val = n.toLocaleString('en-US')
    return val
}
function reverseNumber(num){
    return Number(num.replace(/,/g,''))
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
        else if(this.id=="backspace"){
			var output=reverseNumber(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
        else{
			var output=getOutput();
			var history=gethistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumber(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
    })
}

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumber(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}