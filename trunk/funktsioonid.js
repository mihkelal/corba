var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 100;
var diilercount = 7;

var bot_raha=[100, 100, 100, 100, 100, 100, 100, 100, 100];
var bot_out=[0, 0, 0, 0, 0, 0, 0, 0, 0];

var list3 = [];
var ring = 1;

var SB = 3;
var BB = 6;

var round = 0;
var Dealer = o;

function alusta_mangu() {
	diilercount++;
	if (parseInt(diilercount) == 10){
		diilercount -=10;
		round += 1;
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
	
	var alusta = document.getElementById("example1");
	alusta.appendChild(document.createElement('br'));
	alusta.appendChild(document.createTextNode("game on"));
	alusta.appendChild(document.createElement('br'));

}
function addmoney()
	{
		panus++
		document.getElementById("bet").innerHTML="$"+panus;
	}

function segamine(){

list1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
list2 = [];

var kaardidd=52;
var ajutine;
var x;

for (ajutine=0;ajutine<kaardidd;ajutine++) {
	x=Math.floor(Math.random()*kaardidd);
	while (list1[x] == 0) {
		x=Math.floor(Math.random()*kaardidd);
	}
	list2[ajutine] = list1[x];
	list1[x] = 0;
	
		
}
list3=list2;

var segamise_kuvamine = document.getElementById("example1");
segamise_kuvamine.appendChild(document.createElement('br'));
segamise_kuvamine.appendChild(document.createTextNode("kaardid on segatud"));
segamise_kuvamine.appendChild(document.createElement('br'));
para.appendChild(document.createTextNode("command line# "));
}

function mis_kaart_kellele(){
	
	var ajutine22;
	var mangija = [];
	for (ajutine22 = 0; ajutine22 < 20; ajutine22++){
		switch (ajutine22)
		{
		case 0:
			document.getElementById("player11").innerHTML="<div id='player11'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 1:
			document.getElementById("player12").innerHTML="<div id='player12'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 2:
			document.getElementById("player21").innerHTML="<div id='player21'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 3:
			document.getElementById("player22").innerHTML="<div id='player22'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 4:
			document.getElementById("player31").innerHTML="<div id='player31'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 5:
			document.getElementById("player32").innerHTML="<div id='player32'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 6:
			document.getElementById("player41").innerHTML="<div id='player41'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 7:
			document.getElementById("player42").innerHTML="<div id='player42'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 8:
			document.getElementById("player51").innerHTML="<div id='player51'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 9:
			document.getElementById("player52").innerHTML="<div id='player52'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 10:
			document.getElementById("player61").innerHTML="<div id='player61'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 11:
			document.getElementById("player62").innerHTML="<div id='player62'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 12:
			document.getElementById("player71").innerHTML="<div id='player71'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 13:
			document.getElementById("player72").innerHTML="<div id='player72'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 14:
			document.getElementById("player81").innerHTML="<div id='player81'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 15:
			document.getElementById("player82").innerHTML="<div id='player82'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 16:
			document.getElementById("player91").innerHTML="<div id='player91'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 17:
			document.getElementById("player92").innerHTML="<div id='player92'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 18:
			document.getElementById("player101").innerHTML="<div id='player101'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;
		case 19:
			document.getElementById("player102").innerHTML="<div id='player102'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";
		  break;

		default:
			document.write("error");
		}
	}
	var kaartide_kuvamine = document.getElementById("example1");
	kaartide_kuvamine.appendChild(document.createElement('br'));
	kaartide_kuvamine.appendChild(document.createTextNode("kaardid on kuvatud"));
	kaartide_kuvamine.appendChild(document.createElement('br'));
}


function fsisend(){	
	document.write(document.text.Bet);
}

function fn_bet_how_much(elem){
	panus=parseInt(elem.value);
	document.getElementById("bet").innerHTML="$"+panus;
}

function to_pot(){
	
	if (ring !=4) {
		if (parseInt(panus) <= parseInt(mangija_raha)){
			pot=parseInt(pot)+parseInt(panus);
			document.getElementById("pot").innerHTML="$"+pot;				
			mangija_raha=parseInt(mangija_raha)-parseInt(panus);
			document.getElementById("stack").innerHTML="$"+mangija_raha;
			panus = 0;
			document.getElementById("bet").innerHTML="$"+panus;
			
			Botkaigud();	
			if (ring == 1){
				document.getElementById("acard1").innerHTML="<div class='acard' id='acard1'><img src='./cards/"+ list3[21] +".png' width='34' height='50'/></div>";
			
				document.getElementById("acard2").innerHTML="<div class='acard' id='acard2'><img src='./cards/"+ list3[22] +".png' width='34' height='50'/></div>";
			
				document.getElementById("acard3").innerHTML="<div class='acard' id='acard3'><img src='./cards/"+ list3[23] +".png' width='34' height='50'/></div>";
				ring+=1;
			}
			else if (ring == 2){
				document.getElementById("acard4").innerHTML="<div class='acard' id='acard4'><img src='./cards/"+ list3[24] +".png' width='34' height='50'/></div>";
				ring+=1;	
			}
			else if (ring == 3){
				document.getElementById("acard5").innerHTML="<div class='acard' id='acard1'><img src='./cards/"+ list3[2] +".png' width='34' height='50'/></div>";
				ring+=1;
				mis_kaart_kellele();
			}

		}
		else {
			var error = document.getElementById("example1");
			error.appendChild(document.createElement('br'));
			error.appendChild(document.createTextNode("pole piisavalt raha"));
			error.appendChild(document.createElement('br'));
	}

	

	}

}

function Botkaigud(){
	Botkaik(0);
	Botkaik(1);
	Botkaik(2);
	Botkaik(3);
	Botkaik(4);
	Botkaik(5);
	Botkaik(6);
	Botkaik(7);
	Botkaik(8);
}

function Botkaik(nr){
randomnumber = 100;
var nra = nr + 1;
	if (bot_out[nr] == 0){                              // nr  nr
		if (parseInt(diilercount) == nr){ // nr - 0          // if nr == diilercount
			
		}
		else{
			if ((parseInt(diilercount)-1 == nr)||(nr == 0 && diilercount == 9)){ // nr - 1        // if nr == 0 && diilercount == 9 ||
				var randomnumber=3;                             // nr == diilercount-1
			}
			
			if ((parseInt(diilercount)-2 == nr)||(nr == 0 && diilercount == 8)||(nr == 1 && diilercount == 9)){ // nr - 3        // if nr == 0 && diilercount == 8 ||
				var randomnumber=6;                             // nr == 1 && diilercount == 9 ||
			}                                                 // nr == diilercount-2
			
			var randomn=Math.floor(Math.random()*3);
			switch(randomn)
			{
				case 0:
				alert("case0");
					bot_out[nr] = 1;                            // nr
					fn_command2("Player" + nra + "folds");             // nr
					break
				case 1:
					randomnumber = BB;
					break
				case 2:
					randomnumber = BB*2;
					suurim_panus = randomnumber;
					break
			}
			if (randomnumber <= parseInt(bot_raha[nr]) && bot_out[nr]==0){    // nr
				alert("panu");
				pot=parseInt(pot)+parseInt(randomnumber);
				document.getElementById("pot").innerHTML="$"+pot;
				bot_raha[nr]=parseInt(bot_raha[nr])-parseInt(randomnumber);        // nr   nr
				document.getElementById("stack" + nra).innerHTML="$"+bot_raha[nr];
				      // nr   nr
				alert("case0");
				fn_command2("Player" + nra + "betted $" + randomnumber);                 // nr
				alert("panu2");
			}
			else {
				bot_out[nr] = 1;                                                  // nr
				fn_command2("Player" + nra + "folds (no money)");                         // nr
			}
		}
	}
	
}

/* function Botkaik2(){
	if (bot_out[1] == 0){
		if (parseInt(diilercount) == 1){
			
		}
		else{
			if (parseInt(diilercount) == 0){
				var randomnumber=3;
			}
			if (parseInt(diilercount) == 9){
				var randomnumber=6;
			}
			
			var randomn=Math.floor(Math.random()*3);
			switch(randomn)
			{
				case 0:
					bot_out[1] = 1;
					fn_command2("Player 2 folds");
					break
				case 1:
					randomnumber = BB;
					break
				case 2:
					randomnumber = BB*2;
					suurim_panus = randomnumber;
					break
			}
			if (randomnumber <= parseInt(bot_raha[1])){
				pot=parseInt(pot)+parseInt(randomnumber);
				document.getElementById("pot").innerHTML="$"+pot;
				bot_raha[1]=parseInt(bot_raha[1])-parseInt(randomnumber);
				document.getElementById("stack2").innerHTML="$"+bot_raha[1];
				fn_command2("Player 2 betted $" + randomnumber);
			}
			else {
				bot_out[1] = 1;
				fn_command2("Player 2 folds (no money)");
			}
		}
	}
}

function Botkaik3(){
	if (bot_out[2] == 0){
		if (parseInt(diilercount) == 2){
			
		}
		else{
			if (parseInt(diilercount) == 1){
				var randomnumber=3;
			}
			if (parseInt(diilercount) == 0){
				var randomnumber=6;
			}
			
			var randomn=Math.floor(Math.random()*3);
			switch(randomn)
			{
				case 0:
					bot_out[2] = 1;
					fn_command2("Player 3 folds");
					break
				case 1:
					randomnumber = BB;
					break
				case 2:
					randomnumber = BB*2;
					suurim_panus = randomnumber;
					break
			}
			if (randomnumber <= parseInt(bot_raha[2])){
				pot=parseInt(pot)+parseInt(randomnumber);
				document.getElementById("pot").innerHTML="$"+pot;
				bot_raha[2]=parseInt(bot_raha[2])-parseInt(randomnumber);
				document.getElementById("stack3").innerHTML="$"+bot_raha[2];
				fn_command2("Player 3 betted $" + randomnumber);
			}
			else {
				bot_out[2] = 1;
				fn_command2("Player 3 folds (no money)");
			}
		}
	}
}


function Botkaik4(){
	if (bot_out[3] == 0){
		if (parseInt(diilercount) == 3){
			
		}
		else{
			if (parseInt(diilercount) == 2){
				randomnumber=3;
			}
			if (parseInt(diilercount) == 1){
				var randomnumber=6;
			}
			var randomn=Math.floor(Math.random()*3);
			switch(randomn)
			{
				case 0:
					bot_out[3] = 1;
					fn_command2("Player 4 folds");
					break
				case 1:
					randomnumber = BB;
					break
				case 2:
					randomnumber = BB*2;
					suurim_panus = randomnumber;
					break
			}
			if (randomnumber <= parseInt(bot_raha[3])){
				pot=parseInt(pot)+parseInt(randomnumber);
				document.getElementById("pot").innerHTML="$"+pot;
				bot_raha[3]=parseInt(bot_raha[3])-parseInt(randomnumber);
				document.getElementById("stack4").innerHTML="$"+bot_raha[3];
				fn_command2("Player 4 betted $" + randomnumber);
			}
			else {
				bot_out[3] = 1;
				fn_command2("Player 4 folds (no money)");
			}
		}
	}
}

function Botkaik5(){
	if (parseInt(diilercount) == 4){
		
	}
	else{
		var randomnumber=Math.floor(Math.random()*11);
		if (parseInt(diilercount) == 3){
			randomnumber=3;
		}
		if (parseInt(diilercount) == 2){
			var randomnumber=6;
		}
		if (randomnumber <= parseInt(bot_raha[4])){
			pot=parseInt(pot)+parseInt(randomnumber);
			document.getElementById("pot").innerHTML="$"+pot;
			bot_raha[4]=parseInt(bot_raha[4])-parseInt(randomnumber);
			document.getElementById("stack5").innerHTML="$"+bot_raha[4];
			fn_command2("Player 5 betted $" + randomnumber);
		}
		else {
			alert("NO MONEY (起o)");
		}
	}
}

function Botkaik6(){
	if (parseInt(diilercount) == 5){
		
	}
	else{
		var randomnumber=Math.floor(Math.random()*11);
		if (parseInt(diilercount) == 4){
			randomnumber=3;
		}
		if (parseInt(diilercount) == 3){
			var randomnumber=6;
		}
		if (randomnumber <= parseInt(bot_raha[5])){
			pot=parseInt(pot)+parseInt(randomnumber);
			document.getElementById("pot").innerHTML="$"+pot;
			bot_raha[5]=parseInt(bot_raha[5])-parseInt(randomnumber);
			document.getElementById("stack6").innerHTML="$"+bot_raha[5];
			fn_command2("Player 6 betted $" + randomnumber);
		}
		else {
			alert("NO MONEY (起o)");
		}
	}
}

function Botkaik7(){
	if (parseInt(diilercount) == 6){
		
	}
	else{
		var randomnumber=Math.floor(Math.random()*11);
		if (parseInt(diilercount) == 5){
			randomnumber=3;
		}
		if (parseInt(diilercount) == 4){
			var randomnumber=6;
		}
		if (randomnumber <= parseInt(bot_raha[6])){
			pot=parseInt(pot)+parseInt(randomnumber);
			document.getElementById("pot").innerHTML="$"+pot;
			bot_raha[6]=parseInt(bot_raha[6])-parseInt(randomnumber);
			document.getElementById("stack7").innerHTML="$"+bot_raha[6];
			fn_command2("Player 7 betted $" + randomnumber);
		}
		else {
			alert("NO MONEY (起o)");
		}
	}
}

function Botkaik8(){
if (parseInt(diilercount) == 7){
		
	}
	else{
		var randomnumber=Math.floor(Math.random()*11);
		if (parseInt(diilercount) == 6){
			randomnumber=3;
		}
		if (parseInt(diilercount) == 5){
			var randomnumber=6;
		}
		if (randomnumber <= parseInt(bot_raha[7])){
			pot=parseInt(pot)+parseInt(randomnumber);
			document.getElementById("pot").innerHTML="$"+pot;
			bot_raha[7]=parseInt(bot_raha[7])-parseInt(randomnumber);
			document.getElementById("stack8").innerHTML="$"+bot_raha[7];
			fn_command2("Player 8 betted $" + randomnumber);
		}
		else {
			alert("NO MONEY (起o)");
		}
	}
}

function Botkaik9(){
if (parseInt(diilercount) == 8){
		
	}
	else{
		var randomnumber=Math.floor(Math.random()*11);
		if (parseInt(diilercount) == 7){
			randomnumber=3;
		}
		if (parseInt(diilercount) == 6){
			var randomnumber=6;
		}
		if (randomnumber <= parseInt(bot_raha[8])){
			pot=parseInt(pot)+parseInt(randomnumber);
			document.getElementById("pot").innerHTML="$"+pot;
			bot_raha[8]=parseInt(bot_raha[8])-parseInt(randomnumber);
			document.getElementById("stack9").innerHTML="$"+bot_raha[8];
			fn_command2("Player 9 betted $" + randomnumber);
		}
		else {
			alert("NO MONEY (起o)");
		}
	}
} */

function fn_command(elem){
	var newText = document.createTextNode(elem.value);
	var para = document.getElementById("example1");
	para.appendChild(newText);
	para.appendChild(document.createElement('br'));
	para.appendChild(document.createTextNode("command line# "));
	
}


function fn_command2(elem){
	var newText = document.createTextNode(elem);
	var para = document.getElementById("example1");
	para.appendChild(newText);
	para.appendChild(document.createElement('br'));
	para.appendChild(document.createTextNode("command line# "));
	
}

function voitja(){
	mangija_raha+=pot;
	document.getElementById("stack").innerHTML="$"+mangija_raha;
	
	pot=0;
	document.getElementById("pot").innerHTML="$"+pot;	
}

function mang(){
	alusta_mangu();
	segamine();
	to_pot();
	mis_kaart_kellele();
}