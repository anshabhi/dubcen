var prefix = [ 'googol','yotta','zetta','exa','peta','tera','giga','mega','kilo','hecto','deka','','deci','centi','	milli',	'micro','nano',	'pico',	'femto','atto',	'zepto','yocto'];

var MemoryPrefix = ['kibi','mebi','gibi','tebi','pebi','exi','zebi','yebi'];

var LengthUnitName = ['meter' , 'inch', 'foot', 'yard' , 'fathom' , 'furlong' , 'mile', 'naut-mile ' , 'league', 'pica' , 'point' , 'red-shift' ,'rod', 'light-year' , 'parsec', 'angstrom', 'astronomical-unit' , 'mil'];  

var MassUnitName = ['gram' , 'pound' , 'ounce' , 'AMU', 'slug' , 'ton' , 'tonne' , 'carat' ,'grain','dram','stone'];

var TimeUnitName = ['second','minute','hour','day','week','fortnight','year','decade','century'];

var VolumeUnitName = ['liter' , 'gallon','quart','cup','pint','fluid-ounce', 'tablespoon','teaspoon','bushel'];

var TemperatureUnitName = ['kelvin', 'celsius' , 'fahrenheit', 'rankine'];

var PressureUnitName = ['bar','pascal', 'torr', 'psi' , 'atm','mmHg','inHg'];

var ConcentrationUnitName = ['molar'];

var ActivityUnitName = ['katal','unit'];

var MemoryUnitName = ['bit','byte'];

var FluxUnitName = ['weber','maxwell'];

var MagFieldUnitName = ['tesla','gauss'];

var EnergyUnitName = ['joule','erg','btu','calorie','Calorie','therm','Wh'];

var ForceUnitName = ['Newton','dyne','pound-force'];

var AngleUnitName = ['radian','gradian','degree'];

var LuminosityUnitName = ['candela','lumen'];

var ChargeUnitName = ['coulomb','Ah'];

var RadiationUnitName = ['gray','roentgen','sievert','becquerel','curie'];

var ResolutionUnitName = ['dot','pixel','ppi','dpi'];




var id = 201;
var heading = document.getElementById("heading");
function start(){
 /* Elements*/
 var quan = document.getElementById("mySelect");
 
var inputSelect = document.getElementById ("input");
 var outputSelect = document.getElementById ("output");
 
 inputScript = "<select id =" + "prefixList" + " onchange = " + "calc()" + ">  </select> <select id = " + "1stUnit" + " onchange = " + "calc()" + "> </select> <select id = " + "2ndUnit " + " onchange = " + "calc()" + " > </select> " +" <select id = " + "3rdUnit " + " onchange = " + "calc()" + " > </select>" ;

 outputScript =  "<select id =" + "prefixListOut" + " onchange = " + "calc()" + ">  </select> <select id = " + "1stUnitOut" + " onchange = " + "calc()" + "> </select> <select id = " + "2ndUnitOut" + " onchange = " + "calc()" + " > </select>" +" <select id = " + "3rdUnitOut" + " onchange = " + "calc()" + "> </select>" ;
 inputSelect.innerHTML+= inputScript;
 outputSelect.innerHTML+= outputScript;
 
 loadOptions();
}


 function loadOptions(){
	 var selectedInd;
	 /*Elements*/
	  var quan = document.getElementById("mySelect");
      if (sessionStorage['200'] == 'undefined'){
	  selectedInd = quan.selectedIndex; 	 
}
	  else 
	  {	 

		  selectedInd = sessionStorage['200'] - 201;
quan.selectedIndex = parseFloat(selectedInd);
	  sessionStorage['200'] = 'undefined';

	  }  
	 
	 var pref = document.getElementById ("prefixList");
	 var prefOut = document.getElementById("prefixListOut");
 var unit1 = document.getElementById ("1stUnit");
 var unit2 = document.getElementById ("2ndUnit");
	 var unit3 = document.getElementById("3rdUnit");
	 var unit1Out = document.getElementById ("1stUnitOut");
	 var unit2Out = document.getElementById ("2ndUnitOut");
	 var unit3Out = document.getElementById("3rdUnitOut");
	 var fromV = document.getElementById ("fromVal").value;
	 var toV = document.getElementById("toVal");
	 
	 unit1.innerHTML = " ";
unit2.innerHTML = " ";
unit3.innerHTML = " ";
unit1Out.innerHTML = " ";
unit2Out.innerHTML = " ";
unit3Out.innerHTML = " ";


unit1.className = " ";
unit2.className = " ";
unit3.className = " ";
unit1Out.className = " ";
unit2Out.className = " ";
unit3Out.className = " ";
 pref.innerHTML = " ";
 prefOut.innerHTML = " ";

	 /*Elements*/
	 	 

	 if (selectedInd == 5 || selectedInd ==7)
	 {
	 unit1.className = 'transparent';
	 unit2.className = 'transparent';
	 unit3.className = 'transparent';

unit1Out.className= 'transparent';
unit2Out.className = 'transparent';
unit3Out.className = 'transparent'; 
heading.innerHTML = 'Memory';
		 for (i =0 ; i<MemoryPrefix.length ;i++)
	 {
    var option = document.createElement("option");
	 
option.text = MemoryPrefix[i];
 pref.add(option);
 
 var option = document.createElement("option");
	 
option.text = MemoryPrefix[i];
	 prefOut.add(option);
	 
	 }}
	 
	 else
	 { 
	   for (i =0 ; i<prefix.length ;i++)
	 {
    var option = document.createElement("option");
	 
option.text = prefix[i];
 pref.add(option);
 pref.selectedIndex = 11;
 var option = document.createElement("option");
	 prefOut.selectedIndex = 11;
option.text = prefix[i];
 prefOut.add(option);}
 
	 }
	 	

	 if (selectedInd == 0){id = '201'; 
	 setOptions ("  ","","transparent",LengthUnitName,TimeUnitName,""," / ","^2","");
	 	 
}
 
  else if (selectedInd == 1){ id = '202';
  setOptions ("","transparent","transparent",LengthUnitName,"","","^2","","");
  	 
}
 else if (selectedInd == 2){id = '203';
 setOptions ("","","transparent",MassUnitName,LengthUnitName,"","/","^3","","");
 }
else if (selectedInd == 3){

	id = '204';
	 setOptions ("","transparent","transparent",EnergyUnitName,"","","","","","");

	
	}
		 
 else if (selectedInd == 4){ id = '205';
 setOptions ("","transparent","transparent",ForceUnitName,"","","","","");}
 
 else if (selectedInd == 5){ id = '206';
 setOptions("","transparent","transparent",MemoryUnitName,"","","","","");}
 
else if (selectedInd == 6){ id = '207';
setOptions ("","transparent","transparent",LengthUnitName,"","","","",""); }
 
 else if (selectedInd == 7){ id = '208';

  setOptions ("","","transparent",MemoryUnitName,TimeUnitName,""," / ","","");}

		 
else if (selectedInd == 8){ id = '209';
setOptions ("","","transparent",LengthUnitName,TimeUnitName,""," / ","","","");}

	else if (selectedInd == 9){id = '210';
	setOptions ("","transparent","transparent",TemperatureUnitName,"","","","","");}
		
else if (selectedInd == 10) { id = '211';
	setOptions ("","transparent","transparent",VolumeUnitName,"","","","^3","","");
}
 else if (selectedInd == 11){ id = '212';
 setOptions ("","transparent","transparent",MassUnitName, " ", " ", " "," " ," ");}

else if (selectedInd == 12){id = '213';
setOptions ("" ,"","transparent", AngleUnitName, TimeUnitName," ","/","^2"," " );}

else if (selectedInd == 13){id = '214';
setOptions ("","transparent","transparent",AngleUnitName,"","","","","");}

else if (selectedInd ==  14){ id = '215';
setOptions ("","transparent","transparent",MagFieldUnitName,"","","","");}

else if (selectedInd == 15){ id = '216';
	setOptions ("","transparent","transparent",ConcentrationUnitName,"","","","","");
}
else if (selectedInd == 16){id = '217';
	setOptions ("","transparent","transparent",LuminosityUnitName,"","","","","");
}
else if (selectedInd == 17){ id = '218';
	setOptions ("","transparent","transparent",FluxUnitName,"","","","","");
}
else if (selectedInd == 18){ id = '219';
	setOptions ("","","transparent",MassUnitName,LengthUnitName,"","","^2","");
}
else if (selectedInd == 19){ id = '220';
	setOptions ("","","",MassUnitName,LengthUnitName,TimeUnitName,""," / ","");
}
else if (selectedInd == 20){ id = '221';
setOptions("","","transparent",EnergyUnitName,TimeUnitName,""," / " , "","");}

else if (selectedInd == 21){ id = '222';
	setOptions ("","transparent","transparent",PressureUnitName,"","","","","");
}
else if (selectedInd == 22){ id = '223';
setOptions("","transparent","transparent",['ohm'],"","","","",""); }

else if (selectedInd == 23){id = '224';
setOptions ("","","transparent",['ohm'],LengthUnitName,"","","","");
}

else if (selectedInd == 24){id = '225';
setOptions ("","","transparent",AngleUnitName,LengthUnitName," / ","","","");}

else if (selectedInd == 25){ id = '226';
setOptions ("","transparent","transparent",TimeUnitName,"","","","","");}

else if (selectedInd == 26){ id = '227';
setOptions ("","transparent","transparent",ChargeUnitName,"","","","","");

}

}

 
 function setOptions (  unit1c, unit2c ,  unit3c ,  U1 ,  U2  ,  U3 ,U1sp, U2sp , U3sp ){
	 	 /*Elements*/
	  var quan = document.getElementById("mySelect");

	  var selectedInd = quan.selectedIndex;
	 
	 
	 var pref = document.getElementById ("prefixList");
	 var prefOut = document.getElementById("prefixListOut");
 var unit1 = document.getElementById ("1stUnit");
 var unit2 = document.getElementById ("2ndUnit");
	 var unit3 = document.getElementById("3rdUnit");
	 var unit1Out = document.getElementById ("1stUnitOut");
	 var unit2Out = document.getElementById ("2ndUnitOut");
	 var unit3Out = document.getElementById("3rdUnitOut");
	 var fromV = document.getElementById ("fromVal").value;
	 var toV = document.getElementById("toVal");
	 
	 unit1.innerHTML = " ";
unit2.innerHTML = " ";
unit3.innerHTML = " ";
unit1Out.innerHTML = " ";
unit2Out.innerHTML = " ";
unit3Out.innerHTML = " ";


unit1.className = unit1Out.className = unit1c;
unit2.className = unit2Out.className = unit2c;
unit3.className = unit3Out.className = unit3c;


/*Elements*/
	 

 for (i in U1){
	 var option = document.createElement("option")
	 option.innerHTML = 
 unit1.innerHTML+= "<option>" + U1[i] + U1sp + "</option>"; 
  var option = document.createElement("option")
	 option.innerHTML = U1[i] + U1sp;
 unit1Out.add(option);
 }

 for (i in U2){
	 var option = document.createElement("option")
	 option.innerHTML = U2[i] + U2sp;
 unit2.add(option);
 var option = document.createElement("option")
	 option.innerHTML = U2[i] + U2sp;
 unit2Out.add(option);}
 
 for (i in U3){
	 var option = document.createElement("option")
	 option.innerHTML = U3[i] + U3sp;
 unit3.add(option);
 	 var option = document.createElement("option")
	 option.innerHTML = U3[i] + U3sp;
 unit3Out.add(option);
 
 }
 heading.innerHTML = quan.value;
  if (localStorage[id] == undefined)
localStorage[id] = "";
 loadHistory();
 
 
var u1 = 1 +  pref.value + unit1.value + " " + unit2.value + " " + unit3.value ;
 var u2 = prefOut.value + unit1Out.value + " " + unit2Out.value + " "  + unit3Out.value  ;
 
 var iu = Qty(u1).to(Qty(u2));
 
 working.innerHTML = "<span style =" +  "text-align:center;"+ ">"+ Qty(u1) + "=" + iu + "</span>"; 
 } 
	 	 
		 
		 function calc(){
			 	 	 /*Elements*/
	 
	 
	 var pref = document.getElementById ("prefixList");
	 var prefOut = document.getElementById("prefixListOut");
 var unit1 = document.getElementById ("1stUnit");
 var unit2 = document.getElementById ("2ndUnit");
	 var unit3 = document.getElementById("3rdUnit");
	 var unit1Out = document.getElementById ("1stUnitOut");
	 var unit2Out = document.getElementById ("2ndUnitOut");
	 var unit3Out = document.getElementById("3rdUnitOut");
	 var fromV = document.getElementById ("fromVal").value;
	 var toV = document.getElementById("toVal");
			 
			 var u1 = Qty(1 +  pref.value + unit1.value + " " + unit2.value + " " + unit3.value );
 var u2 = Qty(prefOut.value + unit1Out.value + " " + unit2Out.value + " "  + unit3Out.value ) ;
 
 var iu = u1.to(u2);
 content = new BigNumber(parseFloat(iu.toString().split(' ')[0]).toPrecision(10)) + iu.toString().split(' ')[1];
 working.innerHTML = "<span style =" +  "text-align:center; left : 50%;"+ ">"+ Qty(u1) + "=" + content + "</span>";
			 
			 
			/*Elements*/ 
	var InputContent =  fromV + pref.value + unit1.value + " " + unit2.value + " " + unit3.value ;
 
 var OutputContent = prefOut.value + unit1Out.value + " " + unit2Out.value + " "  + unit3Out.value  ;
	
	
	
	var InputUnit = Qty(InputContent); 
	
	var OutputUnit = Qty(OutputContent) ;
	try {
   var Converted = InputUnit.to(OutputContent);	
}
catch(err) {
     sweetAlert(err.message);
}
	
	
toV.innerHTML = new BigNumber(parseFloat(Converted.toString().split(' ')[0]).toPrecision(10));
	

var object = new Date();

var item = InputUnit.toString() + ')' + new BigNumber(parseFloat(Converted.toString().split(' ')[0]).toPrecision(10)) + Converted.toString().split(' ')[1]  + ')' + object.toLocaleString() + '|';
			 addHistory(item);
		 }

function makeInput(value){
	
	var fromVal = document.getElementById("fromVal");
	var toVal = document.getElementById("toVal");

	if (value == '')
	{	fromVal.value= '';
		toVal.innerHTML = '';

}
	else{
	fromVal.value+= value;

calc();
}}

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
tabEle = "<table id='table' style = 'width : 100%; ' data-role='datatable' data-searching='true''><thead><tr><td>SR. NO</td><td>Input</td><td>Result</td><td>Date</td><td>Delete</td></tr></thead><tfoot><tr><td>SR. NO</td><td>Input</td><td>Output</td><td>Date</td><td>Delete</td></tr></tfoot><tbody>"
	

	for (i=0; i<historyItems.length-1;i++)
	   {
	var historyData = historyItems[i].split(')');
    
	index = i;
tabEle+= "<tr><td>" + (i+1) + "</td><td>" + historyData[0] + "</td><td>" + historyData[1] + "</td><td>" + historyData[2] + "</td><td><button onclick = deleteEntry(" + index +")>Delete</button></td></tr>"  ;
	   }tabEle+= "</tbody></table>";
	   historyDiv.innerHTML+= tabEle;
	   $('#table').dataTable( {
    paging: true,
    searching: true
} );
	   
	   }


}

function browse(){
	var select = document.getElementById ("page");
	var selected = select.value;
	window.location = "../" +  selected+ "/index.html";
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
 swal("Deleted!", "Your history has been cleared!.", "success"); });

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