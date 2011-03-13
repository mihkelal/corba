var panus = 0;
var pot = 0;
function addmoney()
{
panus++
document.getElementById("bet").innerHTML="$"+panus;
}

function fold()
{
    //while mäng käib {
	segamine();
	
    //}

}



function segamine(){

	var kaardipakk = [1,2,3,4,5,6,7,8,9,10,11,12];

	var i;
	var mangija = new Array();
	for (i=0;i<12;i++){
		mangija[i] = kaardipakk[i];
	
	}

	for (i=0;i<12;i++){
		document.write(mangija[i]);
		document.write("<br>");
	}


}

var Dealer = o;
var SB = 1;
var BB = 2;

function fsisend(){
	
	document.write(document.text.Bet);
}





function fn_bet(elem){

	
	//document.write(elem.value);
	document.getElementById("bet").innerHTML="$"+elem.value;
	panus=elem.value;
}

function to_pot(){
	pot=parseInt(pot)+parseInt(panus);
	document.getElementById("pot").innerHTML="$"+pot;
	panus = 0;
	document.getElementById("bet").innerHTML="$"+panus;
}


