var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 100;
var diilercount = -1;

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
			//	leia_diiler();
		//}
}



function segamine(){

//	var kaardipakk = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//	
//	kaardid [0] = new Array(4);
//
//	kaardid [0][0] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//
//	kaardid [0][1] = [];
//
//	var i;
//	var mangija = new Array();
//	for (i=0;i<12;i++){
//		mangija[i] = kaardipakk[i];
//	
//	}
//	mis_kaart_kellele();
//
//	for (i=0;i<12;i++){
//		document.write(mangija[i]);
//		document.write("<br>");
//	}

list1 = [1,2,"./images/ace.png",4,5,6,7];
list2 = [];

//document.getElementById("player91").innerHTML=<img src=list1[2] width="50" height="75"/>;
//midagi = new Array(kaart: "./images/ace.png", name: "fdd")
//src=midagi.kaart [5]

var ajutine;
var x;
//list2[10]=5;
//document.write(list2.length);
//document.write(list2[10]);
for (ajutine=0;ajutine<7;ajutine++) {
	x=Math.floor(Math.random()*7);
	while (list1[x] == 0) {
		x=Math.floor(Math.random()*7);
	}
	list2[ajutine] = list1[x];
	list1[x] = 0;
	
		
}
var ajutine2;
for (ajutine2=0;ajutine2<7;ajutine2++) {
	document.write(list2[ajutine2]);
	document.write("<br>");
}
//for (ajutine2=0;ajutine2<7;ajutine2++) {
//	<img src=list2[ajutine2] width="50" height="75"/>;
//}
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
	document.getElementById("player11").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;
	document.getElementById("player22").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;
	document.getElementById("player31").innerHTML=<div><img src="./images/p1.png" width="50" height="75" /></div>;
	document.getElementById("player42").innerHTML=<div><img src="./images/ace.png" width="50" height="75" /></div>;

//	list11 = [1,2,"./images/ace.png",4,5,6,7];
//
//	document.getElementById("player91").innerHTML=\""<img src=\""+list11[2]+" width="50" height="75"/>;

}


function leia_diiler() {
	diilercount++;
	if (parseInt(diilercount) == 10){
		diilercount -=10;		
	}
	switch (parseInt(diilercount))
	{
	case 0:
		document.getElementById("role1").innerHTML=<div id = "role1"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role10").innerHTML=<div id = "role10"></div>;
	  break;
	case 1:
		document.getElementById("role2").innerHTML=<div id = "role2"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role1").innerHTML=<div id = "role1"></div>;
	  break;
	case 2:
		document.getElementById("role3").innerHTML=<div id = "role3"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role2").innerHTML=<div id = "role2"></div>;
	  break;
	case 3:
		document.getElementById("role4").innerHTML=<div id = "role4"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role3").innerHTML=<div id = "role3"></div>;
	  break;
	case 4:
		document.getElementById("role5").innerHTML=<div id = "role5"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role4").innerHTML=<div id = "role4"></div>;
	  break;
	case 5:
		document.getElementById("role6").innerHTML=<div id = "role6"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role5").innerHTML=<div id = "role5"></div>;
	  break;
	case 6:
		document.getElementById("role7").innerHTML=<div id = "role7"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role6").innerHTML=<div id = "role6"></div>;
	  break;
	case 7:
		document.getElementById("role8").innerHTML=<div id = "role8"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role7").innerHTML=<div id = "role7"></div>;
	  break;
	case 8:
		document.getElementById("role9").innerHTML=<div id = "role9"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role8").innerHTML=<div id = "role8"></div>;
	  break;
	case 9:
		document.getElementById("role10").innerHTML=<div id = "role10"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role9").innerHTML=<div id = "role9"></div>;
	  break;
	default:
		document.write("error");
	}

}