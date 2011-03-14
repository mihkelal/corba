var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 100;

var Dealer = o;
var SB = 1;
var BB = 2;

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

	var kaardipakk = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	
	kaardid [0] = new Array(4);

	kaardid [0][0] = [1,2,3,4,5,6,7,8,9,10,11,12,13];

	kaardid [0][1] = [];

	var i;
	var mangija = new Array();
	for (i=0;i<12;i++){
		mangija[i] = kaardipakk[i];
	
	}
	mis_kaart_kellele();

	for (i=0;i<12;i++){
		document.write(mangija[i]);
		document.write("<br>");
	}


}

function mis_kaart_kellele(){
	
	var ajutine;
	var mangija = [];
	for (ajutine = 0; ajutine < 20; ajutine++){
		switch (5)
		{
		case 5:
			document.getElementById("player11").innerHTML=<img src="./images/ace.png" width="50" height="75"/>;
		  break;
		default:
		  document.write("error");
		}
	}

}


//document.getElementById("player11").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;
//document.getElementById("player22").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;
//document.getElementById("player31").innerHTML=<div><img src="./images/p1.png" width="50" height="75" /></div>;
//document.getElementById("player42").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;

function fsisend(){
	
	document.write(document.text.Bet);
}





function fn_bet(elem){

	
	//document.write(elem.value);
	
	panus=parseInt(elem.value)+parseInt(panus);
	document.getElementById("bet").innerHTML="$"+panus;
}

function fn_bet_how_much(elem){

	panus=parseInt(elem.value);
	document.getElementById("bet").innerHTML="$"+panus;
}

function to_pot(){
	if (parseInt(panus) <= parseInt(mangija_raha)){
		pot=parseInt(pot)+parseInt(panus);
		document.getElementById("pot").innerHTML="$"+pot;				
		mangija_raha=parseInt(mangija_raha)-parseInt(panus);
		document.getElementById("stack").innerHTML="$"+mangija_raha;
		panus = 0;
		document.getElementById("bet").innerHTML="$"+panus;

	}

}


