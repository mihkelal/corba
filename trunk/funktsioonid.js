var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 100;
var diilercount = -1;
var bot1_raha = 100;
var bot2_raha = 100;
var bot3_raha = 100;
var bot4_raha = 100;
var bot5_raha = 100;
var bot6_raha = 100;
var bot7_raha = 100;
var bot8_raha = 100;
var bot9_raha = 100;

var bot1_panus = 100;
var bot2_panus = 100;
var bot3_panus = 100;
var bot4_panus = 100;
var bot5_panus = 100;
var bot6_panus = 100;
var bot7_panus = 100;
var bot8_panus = 100;
var bot9_panus = 100;

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
    	//while m鄚g k鄜b {
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

	Botkaigud();
	
	//	list11 = [1,2,"./images/ace.png",4,5,6,7];
//
//	document.getElementById("player91").innerHTML=\""<img src=\""+list11[2]+" width="50" height="75"/>;

}

function Botkaigud(){
Botkaik1();
Botkaik2();
Botkaik3();
Botkaik4();
Botkaik5();
Botkaik6();
Botkaik7();
Botkaik8();
Botkaik9();
}

function Botkaik1(){
	var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot1_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot1_raha=parseInt(bot1_raha)-parseInt(randomnumber);
		document.getElementById("stack1").innerHTML="$"+bot1_raha;
		fn_command2("Player 1 betted $" + randomnumber);
	}
	else {
		alert("NO MONEY (起o)");
	}
}

function Botkaik2(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot2_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot2_raha=parseInt(bot2_raha)-parseInt(randomnumber);
		document.getElementById("stack2").innerHTML="$"+bot2_raha;
		fn_command2("Player 2 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik3(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot3_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot3_raha=parseInt(bot3_raha)-parseInt(randomnumber);
		document.getElementById("stack3").innerHTML="$"+bot3_raha;
		fn_command2("Player 3 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik4(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot4_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot4_raha=parseInt(bot4_raha)-parseInt(randomnumber);
		document.getElementById("stack4").innerHTML="$"+bot4_raha;
		fn_command2("Player 4 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik5(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot5_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot5_raha=parseInt(bot5_raha)-parseInt(randomnumber);
		document.getElementById("stack5").innerHTML="$"+bot5_raha;
		fn_command2("Player 5 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik6(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot6_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot6_raha=parseInt(bot6_raha)-parseInt(randomnumber);
		document.getElementById("stack6").innerHTML="$"+bot6_raha;
		fn_command2("Player 6 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik7(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot7_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot7_raha=parseInt(bot7_raha)-parseInt(randomnumber);
		document.getElementById("stack7").innerHTML="$"+bot7_raha;
		fn_command2("Player 7 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik8(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot8_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot8_raha=parseInt(bot8_raha)-parseInt(randomnumber);
		document.getElementById("stack8").innerHTML="$"+bot8_raha;
		fn_command2("Player 8 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}

function Botkaik9(){
var randomnumber=Math.floor(Math.random()*11);
	if (randomnumber <= parseInt(bot9_raha)){
		pot=parseInt(pot)+parseInt(randomnumber);
		document.getElementById("pot").innerHTML="$"+pot;
		bot9_raha=parseInt(bot9_raha)-parseInt(randomnumber);
		document.getElementById("stack9").innerHTML="$"+bot9_raha;
		fn_command2("Player 9 betted $" + randomnumber);
	}
		else {
		alert("NO MONEY (起o)");
}
}


function leia_diiler() {
	diilercount++;
	if (parseInt(diilercount) == 10){
		diilercount -=10;		
	}
	switch (parseInt(diilercount))
	{
	case 0:
		document.getElementById("role1").innerHTML=<div id = "role1" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role2").innerHTML=<div id = "role2" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role3").innerHTML=<div id = "role3" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role10").innerHTML=<div id = "role10"></div>;
	  break;
	case 1:
		document.getElementById("role2").innerHTML=<div id = "role2" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role3").innerHTML=<div id = "role3" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role4").innerHTML=<div id = "role4" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role1").innerHTML=<div id = "role1"></div>;
	  break;
	case 2:
		document.getElementById("role3").innerHTML=<div id = "role3" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role4").innerHTML=<div id = "role4" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role5").innerHTML=<div id = "role5" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role2").innerHTML=<div id = "role2"></div>;
	  break;
	case 3:
		document.getElementById("role4").innerHTML=<div id = "role4" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role5").innerHTML=<div id = "role5" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role6").innerHTML=<div id = "role6" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role3").innerHTML=<div id = "role3"></div>;
	  break;
	case 4:
		document.getElementById("role5").innerHTML=<div id = "role5" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role6").innerHTML=<div id = "role6" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role7").innerHTML=<div id = "role7" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role4").innerHTML=<div id = "role4" class= "roll"></div>;
	  break;
	case 5:
		document.getElementById("role6").innerHTML=<div id = "role6" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role7").innerHTML=<div id = "role7" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role8").innerHTML=<div id = "role8" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role5").innerHTML=<div id = "role5" class= "roll"></div>;
	  break;
	case 6:
		document.getElementById("role7").innerHTML=<div id = "role7" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role8").innerHTML=<div id = "role8" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role9").innerHTML=<div id = "role9" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role6").innerHTML=<div id = "role6" class= "roll"></div>;
	  break;
	case 7:
		document.getElementById("role8").innerHTML=<div id = "role8" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role9").innerHTML=<div id = "role9" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role10").innerHTML=<div id = "role10" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role7").innerHTML=<div id = "role7"></div>;
	  break;
	case 8:
		document.getElementById("role9").innerHTML=<div id = "role9" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role10").innerHTML=<div id = "role10" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role1").innerHTML=<div id = "role1" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role8").innerHTML=<div id = "role8"></div>;
	  break;
	case 9:
		document.getElementById("role10").innerHTML=<div id = "role10" class= "roll"><img src="./images/d.png" width="30" height="30"/></div>;
		document.getElementById("role1").innerHTML=<div id = "role1" class= "roll"><img src="./images/sb.png" width="30" height="30"/></div>;
		document.getElementById("role2").innerHTML=<div id = "role2" class= "roll"><img src="./images/bb.png" width="30" height="30"/></div>;
		document.getElementById("role9").innerHTML=<div id = "role9"></div>;
	  break;
	default:
		document.write("error");
	}

}

function fn_command(elem){


	var newText = document.createTextNode(elem.value);

	var para = document.getElementById("example1");
	
	para.appendChild(newText);
	para.appendChild(document.createElement('br'));
	para.appendChild(document.createTextNode("command line# "));
	
	//document.getElementById("example1").innerHTML=para.value;
}


function fn_command2(elem){


	var newText = document.createTextNode(elem);

	var para = document.getElementById("example1");
	
	para.appendChild(newText);
	para.appendChild(document.createElement('br'));
	para.appendChild(document.createTextNode("command line# "));
	
	//document.getElementById("example1").innerHTML=para.value;
}