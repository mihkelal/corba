var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 5000;
var diilercount = 9;

var bot_raha=[5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000];
var bot_out=[0, 0, 0, 0, 0, 0, 0, 0, 0];
var bot_bet=[0, 0, 0, 0, 0, 0, 0, 0, 0];
var list3 = [];
var list4 = [];
var ring = 0;
var round=1;
var dorandom=1;

var SB = 3;
var BB = 6;

var komb1 = [];
var komb2 = [];
var komb3 = [];
var komb4 = [];
var komb5 = [];
var komb6 = [];
var komb7 = [];
var komb8 = [];
var komb9 = [];
var komb10 = [];
var kombmax = [];

var Dealer = 0;

var new1 = 0;
var new2 = 0;
var new3 = 0;
var new4 = 0;

var str1;
var str2;
var str3;
var str4;

//BUGGED IF DECLARED BELOW THIS LINE


function alusta_mangu() {
	diilercount++;

	new1 = diilercount+1%10-10;
	new2 = diilercount+2%10-10;
	new3 = diilercount+3%10-10;
	new4 = diilercount+10%10-10;

	str1 = "role"+new1.toString();
	str2 = "role"+new2.toString();
	str3 = "role"+new3.toString();
	str4 = "role"+new4.toString();

	
	document.getElementById(str1).innerHTML="<div id = '"+str1+"' class= 'roll'><img src='./images/d.png' width='30' height='30'/></div>";
	document.getElementById(str2).innerHTML="<div id = '"+str2+"' class= 'roll'><img src='./images/sb.png' width='30' height='30'/></div>";
	document.getElementById(str3).innerHTML="<div id = '"+str3+"' class= 'roll'><img src='./images/bb.png' width='30' height='30'/></div>";
	document.getElementById(str4).innerHTML="<div id = '"+str4+"'></div>";

	var alusta = document.getElementById("example1");
	alusta.appendChild(document.createTextNode("game on"));
	alusta.appendChild(document.createElement('br'));
	alusta.appendChild(document.createTextNode("command line# "));
}

function rename() {
	for (i=0;i<52;i++){
		if (list3[i] == "c2") list4[i] = [2, 'c'];
		else if (list3[i] == "c3") list4[i] = [3, 'c'];
		else if (list3[i] == "c4") list4[i] = [4, 'c'];
		else if (list3[i] == "c5") list4[i] = [5, 'c'];
		else if (list3[i] == "c6") list4[i] = [6, 'c'];
		else if (list3[i] == "c7") list4[i] = [7, 'c'];
		else if (list3[i] == "c8") list4[i] = [8, 'c'];
		else if (list3[i] == "c9") list4[i] = [9, 'c'];
		else if (list3[i] == "c10") list4[i] = ['T', 'c'];
		else if (list3[i] == "cj") list4[i] = ['J', 'c'];
		else if (list3[i] == "cq") list4[i] = ['Q', 'c'];
		else if (list3[i] == "ck") list4[i] = ['K', 'c'];
		else if (list3[i] == "ca") list4[i] = ['A', 'c'];
		
		else if (list3[i] == "d2") list4[i] = [2, 'd'];
		else if (list3[i] == "d3") list4[i] = [3, 'd'];
		else if (list3[i] == "d4") list4[i] = [4, 'd'];
		else if (list3[i] == "d5") list4[i] = [5, 'd'];
		else if (list3[i] == "d6") list4[i] = [6, 'd'];
		else if (list3[i] == "d7") list4[i] = [7, 'd'];
		else if (list3[i] == "d8") list4[i] = [8, 'd'];
		else if (list3[i] == "d9") list4[i] = [9, 'd'];
		else if (list3[i] == "d10") list4[i] = ['T', 'd'];
		else if (list3[i] == "dj") list4[i] = ['J', 'd'];
		else if (list3[i] == "dq") list4[i] = ['Q', 'd'];
		else if (list3[i] == "dk") list4[i] = ['K', 'd'];
		else if (list3[i] == "da") list4[i] = ['A', 'd'];
		
		else if (list3[i] == "h2") list4[i] = [2, 'h'];
		else if (list3[i] == "h3") list4[i] = [3, 'h'];
		else if (list3[i] == "h4") list4[i] = [4, 'h'];
		else if (list3[i] == "h5") list4[i] = [5, 'h'];
		else if (list3[i] == "h6") list4[i] = [6, 'h'];
		else if (list3[i] == "h7") list4[i] = [7, 'h'];
		else if (list3[i] == "h8") list4[i] = [8, 'h'];
		else if (list3[i] == "h9") list4[i] = [9, 'h'];
		else if (list3[i] == "h10") list4[i] = ['T', 'h'];
		else if (list3[i] == "hj") list4[i] = ['J', 'h'];
		else if (list3[i] == "hq") list4[i] = ['Q', 'h'];
		else if (list3[i] == "hk") list4[i] = ['K', 'h'];
		else if (list3[i] == "ha") list4[i] = ['A', 'h'];
		
		else if (list3[i] == "s2") list4[i] = [2, 's'];
		else if (list3[i] == "s3") list4[i] = [3, 's'];
		else if (list3[i] == "s4") list4[i] = [4, 's'];
		else if (list3[i] == "s5") list4[i] = [5, 's'];
		else if (list3[i] == "s6") list4[i] = [6, 's'];
		else if (list3[i] == "s7") list4[i] = [7, 's'];
		else if (list3[i] == "s8") list4[i] = [8, 's'];
		else if (list3[i] == "s9") list4[i] = [9, 's'];
		else if (list3[i] == "s10") list4[i] = ['T', 's'];
		else if (list3[i] == "sj") list4[i] = ['J', 's'];
		else if (list3[i] == "sq") list4[i] = ['Q', 's'];
		else if (list3[i] == "sk") list4[i] = ['K', 's'];
		else if (list3[i] == "sa") list4[i] = ['A', 's'];
	}
}

function segamine(){

	//list1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
	list1 = ["c2","c3","c4","c5","c6","c7","c8","c9","c10","ca","cj","ck","cq",
	         "d2","d3","d4","d5","d6","d7","d8","d9","d10","da","dj","dk","dq",
	         "h2","h3","h4","h5","h6","h7","h8","h9","h10","ha","hj","hk","hq",
	         "s2","s3","s4","s5","s6","s7","s8","s9","s10","sa","sj","sk","sq"];
	list2 = [];

	var kaardidd=52;
	var ajutine;
	var x;

	for (ajutine=0;ajutine<kaardidd;ajutine++){
		x=Math.floor(Math.random()*kaardidd);
		while (list1[x] == 0) {
			x=Math.floor(Math.random()*kaardidd);
		}
		list2[ajutine] = list1[x];
		list1[x] = 0;
	}
	list3=list2;

	var segamise_kuvamine = document.getElementById("example1");
	segamise_kuvamine.appendChild(document.createTextNode("kaardid on segatud"));
	segamise_kuvamine.appendChild(document.createElement('br'));
	segamise_kuvamine.appendChild(document.createTextNode("command line# "));
}

function mis_kaart_kellele(){
	var ajutine22 = 0;
	var ajutine33;
	var ajutine44;
	var str;
	var mangija = [];
	
		for (ajutine33 = 1; ajutine33 < 11; ajutine33++){
			for (ajutine44 = 1; ajutine44 < 3; ajutine44++){
				str = "player"+ajutine33+ajutine44;
				ajutine22++;
				document.getElementById(str).innerHTML="<div id='"+str+"'><img src='./cards/"+ list3[ajutine22] +".png' width='50' height='75'/></div>";

			}
		}

	rename();	
	compare_gaga();	
	compare();
	
	var kaartide_kuvamine = document.getElementById("example1");
	kaartide_kuvamine.appendChild(document.createTextNode("kaardid on kuvatud"));
	kaartide_kuvamine.appendChild(document.createElement('br'));
	kaartide_kuvamine.appendChild(document.createTextNode("command line# "));
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
			
			muudaCall();
			
			mangija_raha=parseInt(mangija_raha)-parseInt(panus);
			document.getElementById("stack").innerHTML="$"+mangija_raha;
			panus = 0;
			document.getElementById("bet").innerHTML="$"+panus;
			
			Botkaigud();
			if (ring == 0){
			ring++			
			}
			else if (ring == 1){
				document.getElementById("acard1").innerHTML="<div class='acard' ><img src='./cards/"+ list3[21] +".png' width='34' height='50'/></div>";
				document.getElementById("acard2").innerHTML="<div class='acard' ><img src='./cards/"+ list3[22] +".png' width='34' height='50'/></div>";
				document.getElementById("acard3").innerHTML="<div class='acard' ><img src='./cards/"+ list3[23] +".png' width='34' height='50'/></div>";
				ring+=1;
			}
			else if (ring == 2){
				document.getElementById("acard4").innerHTML="<div class='acard' ><img src='./cards/"+ list3[24] +".png' width='34' height='50'/></div>";
				ring+=1;
			}
			else if (ring == 3){
				document.getElementById("acard5").innerHTML="<div class='acard' '><img src='./cards/"+ list3[2] +".png' width='34' height='50'/></div>";
				ring+=1;
				mangija_bet = 0;
				mis_kaart_kellele();
				uus_ring();
				
			}
		}
		else {
			var error = document.getElementById("example1");
			error.appendChild(document.createTextNode("pole piisavalt raha"));
			error.appendChild(document.createElement('br'));
			error.appendChild(document.createTextNode("command line# "));

		}
	}
}

function Botkaigud(){
	switch(ring)
	{
	case 0:
		break;
	case 1:
		fn_command("Ring " + (ring) + " - preflop");
		break;
	case 2:
		fn_command("Ring " + (ring) + " - flop");
		break;
	case 3:
		fn_command("Ring " + (ring) + " - turn");
		break;
	case 4:
		fn_command("Ring " + (ring) + " - river");
		break;
	default:
	}
	for (i=0;i<=8;i++){
		if (bot_out[i] == 0){
			Botkaik(i);
		}
	}
	round++;
	fn_command("Round " + (round));
		
	for (i=0;i<=8;i++){
							//if (i==1) alert(bot_bet[i]);
		if (bot_bet[i] < suurim_panus){
			if (bot_out[i] == 0){
				Botkaik(i);
			}
		}
	}
	round=1;
	
	bot_bet=[0, 0, 0, 0, 0, 0, 0, 0, 0];
;
}

function Botkaik(nr){

	dorandom = 1;
	var randomnumber = 1;
	var nra = nr + 1;
	if (parseInt(diilercount) == nr)
		fn_command("Player" + nra + " is dealer");
	else{
		if (bot_out[nr] == 1){}
		else{
			if ((parseInt(diilercount) == nr - 1) || (nr == 0 && diilercount == 9)){
				if (round < 2 && ring < 2){
					dorandom = 0;
					if (SB < bot_raha[nr] - 1){
						randomnumber = SB;
						if (suurim_panus < randomnumber)
							suurim_panus = randomnumber;
					}
					else
						fold(nr);
				}
			}
			if ((parseInt(diilercount) == nr - 2) || (nr == 0 && diilercount == 8) || (nr == 1 && diilercount == 9)){
				if (round < 2 && ring < 2){
					dorandom = 0;
					if (BB < bot_raha[nr] - 1){
						randomnumber = BB;
						if (suurim_panus < randomnumber)
							suurim_panus = randomnumber;
					}
					else{
						fold(nr);
					}
				}
			}
			
			if (dorandom == 1){
				var randomn = (Math.floor(Math.random() * 2))+1;
				switch(randomn)
				{
				case 0:
					fold(nr);
					break;
				case 1:
					randomnumber = (2 * BB) - bot_bet[nr];
					if (ring == 2)
						randomnumber = (BB) - bot_bet[nr];
					if (suurim_panus > randomnumber)
						randomnumber = (suurim_panus) - bot_bet[nr];
					if (suurim_panus < randomnumber)
						suurim_panus = randomnumber;
					break;
				case 2:
					if (ring <= 2){
						if (suurim_panus < 4 * BB){
							randomnumber = (suurim_panus+BB) - bot_bet[nr];
							suurim_panus += BB;
						}
						else 
							randomnumber = (suurim_panus) - bot_bet[nr];
					}
					else{
						if (suurim_panus < 8 * BB){
							if (ring < 3){
								randomnumber = (suurim_panus + BB) - bot_bet[nr];
								suurim_panus += BB;
							}
							else
								randomnumber = (suurim_panus + 2 * BB) - bot_bet[nr];
								suurim_panus += 2 * BB;
						}
						else
							randomnumber = (suurim_panus) - bot_bet[nr];
					}
					break;
				default:
				}
			}
			
			if (randomnumber <= bot_raha[nr] && bot_out[nr]==0)
				bett(nr, nra, randomnumber);
			else {
				if (bot_out[nr] == 0)
					fold(nr);
			}
		}
	}
}

function bett(nr, nra, randomnumber){
	//POT
	pot=parseInt(pot) + randomnumber;
	document.getElementById("pot").innerHTML="$" + pot;
	
	//BOT_RAHA
	bot_raha[nr] = bot_raha[nr] - randomnumber;
	document.getElementById("stack" + nra).innerHTML="$" + bot_raha[nr];
	
	//CMD LINE
	fn_command("Player" + nra + " betted $" + randomnumber);
	bot_bet[nr] = randomnumber;
}

function fold(nr){
	bot_out[nr] = 1;
	fn_command("Player" + (nr + 1 ) + " folds");
}


function fn_command(elem){
	var newText; 
	if (elem != "[object HTMLInputElement]"){
		newText = document.createTextNode(elem);
	}		
	else {
		newText = document.createTextNode(elem.value);	
	}
	var para = document.getElementById("example1");
	para.appendChild(newText);
	para.appendChild(document.createElement('br'));
	para.appendChild(document.createTextNode("command line# "));
}


function mang(){
	alusta_mangu();
	segamine();
	document.getElementById("player101").innerHTML="<div id='player101'><img src='./cards/"+ list3[18] +".png' width='50' height='75'/></div>";
	document.getElementById("player102").innerHTML="<div id='player102'><img src='./cards/"+ list3[19] +".png' width='50' height='75'/></div>";
	ring=0;
	to_pot();
}

function fold(){
	var fold2 = document.getElementById("example1");
	fold2.appendChild(document.createTextNode("Player folds"));
	fold2.appendChild(document.createElement('br'));
	fold2.appendChild(document.createTextNode("command line# "));
	to_pot();
	to_pot();
	to_pot();
}

function check(){
	if (suurim_panus == panus){
		to_pot();
	}
	else {
		var puudu = document.getElementById("example1");
		puudu.appendChild(document.createTextNode("pole piisavalt raha"));
		puudu.appendChild(document.createElement('br'));
		puudu.appendChild(document.createTextNode("command line# "));
	}
}


function raise(){
	panus=suurim_panus;
	panus+=BB;
	document.getElementById("bet").innerHTML="$"+panus;
	to_pot();
}

function call(){
	if (suurim_panus - panus < mangija_raha){
		panus = suurim_panus - panus;
		to_pot();
	}
	else {
		var puudu = document.getElementById("example1");
		puudu.appendChild(document.createTextNode("pole piisavalt raha"));
		puudu.appendChild(document.createElement('br'));
		puudu.appendChild(document.createTextNode("command line# "));
	}
	
}

function ok(){
	for (ajutine22 = 1; ajutine22 < 11; ajutine22++){
		for (ajutine33 = 1; ajutine33 < 3; ajutine33++){
			str = "player"+ajutine22+ajutine33;
			document.getElementById(str).innerHTML="<div id='"+str+"'><img src='./images/card back.png' width='50' height='75'/></div>";
			
		}
	}

	document.getElementById("acard1").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	document.getElementById("acard2").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	document.getElementById("acard3").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	document.getElementById("acard4").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	document.getElementById("acard5").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	ok_out();

	ring = 0;
	suurim_panus = 0;
	
	mang();
	
}

function end(){
	ok();
	
	document.getElementById("player101").innerHTML=<div id="player101"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player102").innerHTML=<div id="player102"><img src="./images/card back.png" width="50" height="75"/></div>;
	end_pressed();
}
