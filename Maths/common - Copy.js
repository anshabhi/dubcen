
function usea(input){
	var inputValues = input.split(',');
	
inputFirst.value = inputValues[0];
inputSecond.value = inputValues[1];
inputThird.value = inputValues[2];

calc();}
var table = document.getElementById("table");
function clearHistory(){
swal({   title: "Are you sure?",  
 text: "You will not be able to recover your history!",  
 type: "warning", 
 showCancelButton: true,   
 confirmButtonColor: "#DD6B55",  
 confirmButtonText: "Yes, delete it!",   closeOnConfirm: false }, 
 function(){   
 localStorage[id] = "";
loadHistory();
 swal("Deleted!", "Your history has been cleared!.", "success"); });

}
	  function addHistory(item) 
{ localStorage[id]+= item;
 	 loadHistory();}
function loadHistory(){
	  var history = localStorage[id];
var himsg = document.getElementById("historyMsg");
var historyItems = history.split('|');
	
	if (historyItems.length == 1){
	himsg.innerHTML = 'Your recent history appears here';
	table.innerHTML = "";}
	else {
		himsg.innerHTML = "<input type = button class = clear onclick = clearHistory() value = 'Clear All'>";

	table.innerHTML = "";
	var header = document.createElement("thead");
	header.innerHTML = "<tr><td>SR. NO</td><td>Input</td><td>Output</td><td>Date</td><td>Use</td><td>Delete</td></tr>" 
	table.appendChild(header);
	var bodyT = document.createElement("tbody");
	bodyT.innerHTML = "";
	for (i=0; i<historyItems.length-1;i++)
	   {
	var historyData = historyItems[i].split(')');
    
	index = i;
	bodyT.innerHTML+= "<tr><td>" + (i+1) + "</td><td>" + historyData[0] + "</td><td>" + historyData[1] + "</td><td>" + historyData[2] + "</td><td> <p onclick = usea(\"" + historyData[0] + "\")>Use</p></td><td><p onclick = deleteEntry(" + index +")>Delete</p></td></tr>"  ;
	   }table.appendChild(bodyT);
tsRegister();}

}


var activated;

function getID(){
activated = document.activeElement;}


function makeInput(value){
focusElement =  activated;
flag3 = 1;

if (typeof focusElement == 'undefined'){
sweetAlert("Oops...", "Please select an input field", "error");
flag3 = 0;

}
if (flag3!=0){
if (value == '')
	{	focusElement.value= '';
	focusElement.focus();}
	else{
	focusElement.value+= value;
	calc();
}}}

function deleteEntry(index){

var arrayA = new Array();
var history = localStorage[id];
var historyItems = history.split('|');
for (i = 0; i < historyItems.length;i++){
arrayA[i] = historyItems[i] + '|'; }
arrayA.splice(index,1);
localStorage[id] = "";
for (i=0;i<arrayA.length-1;i++)
localStorage[id]+= arrayA[i];


loadHistory();}

var flag = true;
function navigationAnimate(){
 if(flag){
    flag = false;
    navigation.innerHTML ="<a href = ../index.html>Home</a>";
    }
}


function navigationDeAnimate(){
flag = true;
navigation.innerHTML = "<p class = heading style = background-color:white> " + title + "</p>";}

function browseCategory(){
	var select = document.getElementById ("page");
	var selected = select.value;
	window.location = "../" +  selected+ "/index.html";

}
function browseCalc(){
 var calc = document.getElementById("calc");
         var calculator = calc.value;
window.location = calculator + ".html";}

function allOk(a,b,c){
if (a == '' || isNaN(a) || (a<=0)){
inputFirst.style.boxShadow = '0px 0px 2px red';
flag = false;
}
else
inputFirst.style.boxShadow = "";
if (b == '' || isNaN(b) || (b<=0)){
inputSecond.style.boxShadow = '0px 0px 2px red';
flag =  false;
}
else
inputSecond.style.boxShadow = "";
if (c == '' || isNaN(c) || (c<=0)){
inputThird.style.boxShadow = '0px 0px 2px  red';
flag =  false;
}
else
inputThird.style.boxShadow = "";
}
localStorage['fav'] = '';
