var index;

function usea(input){
var focusID = 'inputFirst';
var focusElement = document.getElementById (focusID);
focusElement.value = input;
location.href = "#inputFirst";

calc();}
	  function addHistory(item) 
{ localStorage[id]+= item;
values = item.split(')');
 	 
loadHistory();

	 }
	 var table = document.getElementById("table");
function loadHistory(){
	  var history = localStorage[id];
var himsg = document.getElementById("historyMsg");
var historyItems = history.split('|');
	
	if (historyItems.length == 1){
	himsg.innerHTML = 'Your recent history appears here';
	table.innerHTML = "";}
	else {
		himsg.innerHTML = "<input type = button class = clear onclick = clearHistory() value = 'Clear All'>";
console.log('hi');
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
	bodyT.innerHTML+= "<tr><td>" + (i+1) + "</td><td>" + historyData[0] + "</td><td>" + historyData[1] + "</td><td>" + historyData[2] + "</td><td> <button onclick = usea(\"" + historyData[0] + "\")>Use</button></td><td><button onclick = deleteEntry(" + index +")>Delete</button></td></tr>"  ;
	   }table.appendChild(bodyT);
}

}

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
 swal("Deleted!", "Your history has been cleared!.", "success");
 });}
	
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

function navigate(){
window.location = sessionStorage['location'];}