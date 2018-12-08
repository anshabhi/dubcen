
function usea(input){
	var inputValues = input.split(',');
	
inputFirst.value = inputValues[0];
inputSecond.value = inputValues[1];
inputThird.value = inputValues[2];
location.href = "#inputFirst";

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
	historyDiv.innerHTML = 'Your recent history appears here';
	
}
	else {
			historyDiv.innerHTML= "<input type = button class = clear onclick = clearHistory() value = 'Clear All'>";
tabEle = "<table id='table' class='dataTable striped border bordered data-role='datatable,draggable' data-searching='true''><thead><tr><td>SR. NO</td><td>Input</td><td>Result</td><td>Date</td><td>Use</td><td>Delete</td></tr></thead><tfoot><tr><td>SR. NO</td><td>Input</td><td>Output</td><td>Date</td><td>Use</td><td>Delete</td></tr></tfoot><tbody>"
	

	for (i=0; i<historyItems.length-1;i++)
	   {
	var historyData = historyItems[i].split(')');
    
	index = i;
tabEle+= "<tr><td>" + (i+1) + "</td><td>" + historyData[0] + "</td><td>" + historyData[1] + "</td><td>" + historyData[2] + "</td><td> <button onclick = usea(\"" + historyData[0] + "\")>Use</button></td><td><button onclick = deleteEntry(" + index +")>Delete</button></td></tr>"  ;
	   }tabEle+= "</tbody></table>";
	   historyDiv.innerHTML+= tabEle;
	   $('#table').dataTable( {
    paging: true,
    searching: true
} );
	   
	   }


}
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