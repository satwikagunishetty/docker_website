

function cmd(){
	var i = document.getElementById("in1").value
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://192.168.1.113/cgi-bin/code.py?cmd=" + i,true);
	xhr.send();
	xhr.onload=function(){
		var output = xhr.responseText;
        console.log(output);
		document.getElementById("d1").innerHTML= output;
		output.style.textAlign= "center";
	}
 
}
function clr(){
     document.getElementById("in1").value = "";
}
