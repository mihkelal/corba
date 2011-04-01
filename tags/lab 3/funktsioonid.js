var panus = 0;
var pot = 0;
var suurim_panus = 0;
var mangija_raha = 500;
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

var Dealer = o;
//BUGGED IF DECLARED BELOW THIS LINE


function alusta_mangu() {
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

	
	
	rename();
	
	
	komb1[0] = gaga.createHand([list4[0], list4[1], list4[21], list4[22], list4[23]]).identify().rank;
	komb1[1] = gaga.createHand([list4[0], list4[1], list4[21], list4[22], list4[24]]).identify().rank;
	komb1[2] = gaga.createHand([list4[0], list4[1], list4[21], list4[22], list4[25]]).identify().rank;
	komb1[3] = gaga.createHand([list4[0], list4[1], list4[21], list4[23], list4[24]]).identify().rank;
	komb1[4] = gaga.createHand([list4[0], list4[1], list4[21], list4[23], list4[25]]).identify().rank;
	komb1[5] = gaga.createHand([list4[0], list4[1], list4[21], list4[24], list4[25]]).identify().rank;
	komb1[6] = gaga.createHand([list4[0], list4[1], list4[22], list4[23], list4[24]]).identify().rank;
	komb1[7] = gaga.createHand([list4[0], list4[1], list4[22], list4[23], list4[25]]).identify().rank;
	komb1[8] = gaga.createHand([list4[0], list4[1], list4[22], list4[24], list4[25]]).identify().rank;
	komb1[9] = gaga.createHand([list4[0], list4[1], list4[23], list4[24], list4[25]]).identify().rank;
	komb1[10] = gaga.createHand([list4[0], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb1[11] = gaga.createHand([list4[0], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb1[12] = gaga.createHand([list4[0], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb1[13] = gaga.createHand([list4[0], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb1[14] = gaga.createHand([list4[0], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb1[15] = gaga.createHand([list4[1], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb1[16] = gaga.createHand([list4[1], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb1[17] = gaga.createHand([list4[1], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb1[18] = gaga.createHand([list4[1], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb1[19] = gaga.createHand([list4[1], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb1[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[0]=(Math.max.apply(Math, komb1));
	//alert(kombmax[0]);
	
	komb2[0] = gaga.createHand([list4[2], list4[3], list4[21], list4[22], list4[23]]).identify().rank;
	komb2[1] = gaga.createHand([list4[2], list4[3], list4[21], list4[22], list4[24]]).identify().rank;
	komb2[2] = gaga.createHand([list4[2], list4[3], list4[21], list4[22], list4[25]]).identify().rank;
	komb2[3] = gaga.createHand([list4[2], list4[3], list4[21], list4[23], list4[24]]).identify().rank;
	komb2[4] = gaga.createHand([list4[2], list4[3], list4[21], list4[23], list4[25]]).identify().rank;
	komb2[5] = gaga.createHand([list4[2], list4[3], list4[21], list4[24], list4[25]]).identify().rank;
	komb2[6] = gaga.createHand([list4[2], list4[3], list4[22], list4[23], list4[24]]).identify().rank;
	komb2[7] = gaga.createHand([list4[2], list4[3], list4[22], list4[23], list4[25]]).identify().rank;
	komb2[8] = gaga.createHand([list4[2], list4[3], list4[22], list4[24], list4[25]]).identify().rank;
	komb2[9] = gaga.createHand([list4[2], list4[3], list4[23], list4[24], list4[25]]).identify().rank;
	komb2[10] = gaga.createHand([list4[2], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb2[11] = gaga.createHand([list4[2], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb2[12] = gaga.createHand([list4[2], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb2[13] = gaga.createHand([list4[2], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb2[14] = gaga.createHand([list4[2], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb2[15] = gaga.createHand([list4[2], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb2[16] = gaga.createHand([list4[2], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb2[17] = gaga.createHand([list4[2], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb2[18] = gaga.createHand([list4[2], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb2[19] = gaga.createHand([list4[2], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb2[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[1]=(Math.max.apply(Math, komb2));
	
	
	komb3[0] = gaga.createHand([list4[4], list4[5], list4[21], list4[22], list4[23]]).identify().rank;
	komb3[1] = gaga.createHand([list4[4], list4[5], list4[21], list4[22], list4[24]]).identify().rank;
	komb3[2] = gaga.createHand([list4[4], list4[5], list4[21], list4[22], list4[25]]).identify().rank;
	komb3[3] = gaga.createHand([list4[4], list4[5], list4[21], list4[23], list4[24]]).identify().rank;
	komb3[4] = gaga.createHand([list4[4], list4[5], list4[21], list4[23], list4[25]]).identify().rank;
	komb3[5] = gaga.createHand([list4[4], list4[5], list4[21], list4[24], list4[25]]).identify().rank;
	komb3[6] = gaga.createHand([list4[4], list4[5], list4[22], list4[23], list4[24]]).identify().rank;
	komb3[7] = gaga.createHand([list4[4], list4[5], list4[22], list4[23], list4[25]]).identify().rank;
	komb3[8] = gaga.createHand([list4[4], list4[5], list4[22], list4[24], list4[25]]).identify().rank;
	komb3[9] = gaga.createHand([list4[4], list4[5], list4[23], list4[24], list4[25]]).identify().rank;
	komb3[10] = gaga.createHand([list4[4], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb3[11] = gaga.createHand([list4[4], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb3[12] = gaga.createHand([list4[4], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb3[13] = gaga.createHand([list4[4], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb3[14] = gaga.createHand([list4[4], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb3[15] = gaga.createHand([list4[5], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb3[16] = gaga.createHand([list4[5], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb3[17] = gaga.createHand([list4[5], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb3[18] = gaga.createHand([list4[5], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb3[19] = gaga.createHand([list4[5], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb3[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[2]=(Math.max.apply(Math, komb3));
	
	
	komb4[0] = gaga.createHand([list4[6], list4[7], list4[21], list4[22], list4[23]]).identify().rank;
	komb4[1] = gaga.createHand([list4[6], list4[7], list4[21], list4[22], list4[24]]).identify().rank;
	komb4[2] = gaga.createHand([list4[6], list4[7], list4[21], list4[22], list4[25]]).identify().rank;
	komb4[3] = gaga.createHand([list4[6], list4[7], list4[21], list4[23], list4[24]]).identify().rank;
	komb4[4] = gaga.createHand([list4[6], list4[7], list4[21], list4[23], list4[25]]).identify().rank;
	komb4[5] = gaga.createHand([list4[6], list4[7], list4[21], list4[24], list4[25]]).identify().rank;
	komb4[6] = gaga.createHand([list4[6], list4[7], list4[22], list4[23], list4[24]]).identify().rank;
	komb4[7] = gaga.createHand([list4[6], list4[7], list4[22], list4[23], list4[25]]).identify().rank;
	komb4[8] = gaga.createHand([list4[6], list4[7], list4[22], list4[24], list4[25]]).identify().rank;
	komb4[9] = gaga.createHand([list4[6], list4[7], list4[23], list4[24], list4[25]]).identify().rank;
	komb4[10] = gaga.createHand([list4[6], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb4[11] = gaga.createHand([list4[6], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb4[12] = gaga.createHand([list4[6], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb4[13] = gaga.createHand([list4[6], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb4[14] = gaga.createHand([list4[6], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb4[15] = gaga.createHand([list4[7], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb4[16] = gaga.createHand([list4[7], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb4[17] = gaga.createHand([list4[7], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb4[18] = gaga.createHand([list4[7], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb4[19] = gaga.createHand([list4[7], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb4[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[3]=(Math.max.apply(Math, komb4));
	
	
	komb5[0] = gaga.createHand([list4[8], list4[9], list4[21], list4[22], list4[23]]).identify().rank;
	komb5[1] = gaga.createHand([list4[8], list4[9], list4[21], list4[22], list4[24]]).identify().rank;
	komb5[2] = gaga.createHand([list4[8], list4[9], list4[21], list4[22], list4[25]]).identify().rank;
	komb5[3] = gaga.createHand([list4[8], list4[9], list4[21], list4[23], list4[24]]).identify().rank;
	komb5[4] = gaga.createHand([list4[8], list4[9], list4[21], list4[23], list4[25]]).identify().rank;
	komb5[5] = gaga.createHand([list4[8], list4[9], list4[21], list4[24], list4[25]]).identify().rank;
	komb5[6] = gaga.createHand([list4[8], list4[9], list4[22], list4[23], list4[24]]).identify().rank;
	komb5[7] = gaga.createHand([list4[8], list4[9], list4[22], list4[23], list4[25]]).identify().rank;
	komb5[8] = gaga.createHand([list4[8], list4[9], list4[22], list4[24], list4[25]]).identify().rank;
	komb5[9] = gaga.createHand([list4[8], list4[9], list4[23], list4[24], list4[25]]).identify().rank;
	komb5[10] = gaga.createHand([list4[8], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb5[11] = gaga.createHand([list4[8], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb5[12] = gaga.createHand([list4[8], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb5[13] = gaga.createHand([list4[8], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb5[14] = gaga.createHand([list4[8], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb5[15] = gaga.createHand([list4[9], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb5[16] = gaga.createHand([list4[9], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb5[17] = gaga.createHand([list4[9], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb5[18] = gaga.createHand([list4[9], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb5[19] = gaga.createHand([list4[9], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb5[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[4]=(Math.max.apply(Math, komb5));
	
	
	komb6[0] = gaga.createHand([list4[10], list4[11], list4[21], list4[22], list4[23]]).identify().rank;
	komb6[1] = gaga.createHand([list4[10], list4[11], list4[21], list4[22], list4[24]]).identify().rank;
	komb6[2] = gaga.createHand([list4[10], list4[11], list4[21], list4[22], list4[25]]).identify().rank;
	komb6[3] = gaga.createHand([list4[10], list4[11], list4[21], list4[23], list4[24]]).identify().rank;
	komb6[4] = gaga.createHand([list4[10], list4[11], list4[21], list4[23], list4[25]]).identify().rank;
	komb6[5] = gaga.createHand([list4[10], list4[11], list4[21], list4[24], list4[25]]).identify().rank;
	komb6[6] = gaga.createHand([list4[10], list4[11], list4[22], list4[23], list4[24]]).identify().rank;
	komb6[7] = gaga.createHand([list4[10], list4[11], list4[22], list4[23], list4[25]]).identify().rank;
	komb6[8] = gaga.createHand([list4[10], list4[11], list4[22], list4[24], list4[25]]).identify().rank;
	komb6[9] = gaga.createHand([list4[10], list4[11], list4[23], list4[24], list4[25]]).identify().rank;
	komb6[10] = gaga.createHand([list4[10], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb6[11] = gaga.createHand([list4[10], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb6[12] = gaga.createHand([list4[10], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb6[13] = gaga.createHand([list4[10], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb6[14] = gaga.createHand([list4[10], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb6[15] = gaga.createHand([list4[11], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb6[16] = gaga.createHand([list4[11], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb6[17] = gaga.createHand([list4[11], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb6[18] = gaga.createHand([list4[11], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb6[19] = gaga.createHand([list4[11], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb6[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[5]=(Math.max.apply(Math, komb6));
	
	
	komb7[0] = gaga.createHand([list4[12], list4[13], list4[21], list4[22], list4[23]]).identify().rank;
	komb7[1] = gaga.createHand([list4[12], list4[13], list4[21], list4[22], list4[24]]).identify().rank;
	komb7[2] = gaga.createHand([list4[12], list4[13], list4[21], list4[22], list4[25]]).identify().rank;
	komb7[3] = gaga.createHand([list4[12], list4[13], list4[21], list4[23], list4[24]]).identify().rank;
	komb7[4] = gaga.createHand([list4[12], list4[13], list4[21], list4[23], list4[25]]).identify().rank;
	komb7[5] = gaga.createHand([list4[12], list4[13], list4[21], list4[24], list4[25]]).identify().rank;
	komb7[6] = gaga.createHand([list4[12], list4[13], list4[22], list4[23], list4[24]]).identify().rank;
	komb7[7] = gaga.createHand([list4[12], list4[13], list4[22], list4[23], list4[25]]).identify().rank;
	komb7[8] = gaga.createHand([list4[12], list4[13], list4[22], list4[24], list4[25]]).identify().rank;
	komb7[9] = gaga.createHand([list4[12], list4[13], list4[23], list4[24], list4[25]]).identify().rank;
	komb7[10] = gaga.createHand([list4[12], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb7[11] = gaga.createHand([list4[12], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb7[12] = gaga.createHand([list4[12], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb7[13] = gaga.createHand([list4[12], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb7[14] = gaga.createHand([list4[12], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb7[15] = gaga.createHand([list4[13], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb7[16] = gaga.createHand([list4[13], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb7[17] = gaga.createHand([list4[13], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb7[18] = gaga.createHand([list4[13], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb7[19] = gaga.createHand([list4[13], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb7[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[6]=(Math.max.apply(Math, komb7));
	
	
	komb8[0] = gaga.createHand([list4[14], list4[15], list4[21], list4[22], list4[23]]).identify().rank;
	komb8[1] = gaga.createHand([list4[14], list4[15], list4[21], list4[22], list4[24]]).identify().rank;
	komb8[2] = gaga.createHand([list4[14], list4[15], list4[21], list4[22], list4[25]]).identify().rank;
	komb8[3] = gaga.createHand([list4[14], list4[15], list4[21], list4[23], list4[24]]).identify().rank;
	komb8[4] = gaga.createHand([list4[14], list4[15], list4[21], list4[23], list4[25]]).identify().rank;
	komb8[5] = gaga.createHand([list4[14], list4[15], list4[21], list4[24], list4[25]]).identify().rank;
	komb8[6] = gaga.createHand([list4[14], list4[15], list4[22], list4[23], list4[24]]).identify().rank;
	komb8[7] = gaga.createHand([list4[14], list4[15], list4[22], list4[23], list4[25]]).identify().rank;
	komb8[8] = gaga.createHand([list4[14], list4[15], list4[22], list4[24], list4[25]]).identify().rank;
	komb8[9] = gaga.createHand([list4[14], list4[15], list4[23], list4[24], list4[25]]).identify().rank;
	komb8[10] = gaga.createHand([list4[14], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb8[11] = gaga.createHand([list4[14], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb8[12] = gaga.createHand([list4[14], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb8[13] = gaga.createHand([list4[14], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb8[14] = gaga.createHand([list4[14], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb8[15] = gaga.createHand([list4[15], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb8[16] = gaga.createHand([list4[15], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb8[17] = gaga.createHand([list4[15], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb8[18] = gaga.createHand([list4[15], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb8[19] = gaga.createHand([list4[15], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb8[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[7]=(Math.max.apply(Math, komb8));
	
	
	komb9[0] = gaga.createHand([list4[16], list4[17], list4[21], list4[22], list4[23]]).identify().rank;
	komb9[1] = gaga.createHand([list4[16], list4[17], list4[21], list4[22], list4[24]]).identify().rank;
	komb9[2] = gaga.createHand([list4[16], list4[17], list4[21], list4[22], list4[25]]).identify().rank;
	komb9[3] = gaga.createHand([list4[16], list4[17], list4[21], list4[23], list4[24]]).identify().rank;
	komb9[4] = gaga.createHand([list4[16], list4[17], list4[21], list4[23], list4[25]]).identify().rank;
	komb9[5] = gaga.createHand([list4[16], list4[17], list4[21], list4[24], list4[25]]).identify().rank;
	komb9[6] = gaga.createHand([list4[16], list4[17], list4[22], list4[23], list4[24]]).identify().rank;
	komb9[7] = gaga.createHand([list4[16], list4[17], list4[22], list4[23], list4[25]]).identify().rank;
	komb9[8] = gaga.createHand([list4[16], list4[17], list4[22], list4[24], list4[25]]).identify().rank;
	komb9[9] = gaga.createHand([list4[16], list4[17], list4[23], list4[24], list4[25]]).identify().rank;
	komb9[10] = gaga.createHand([list4[16], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb9[11] = gaga.createHand([list4[16], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb9[12] = gaga.createHand([list4[16], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb9[13] = gaga.createHand([list4[16], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb9[14] = gaga.createHand([list4[16], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb9[15] = gaga.createHand([list4[17], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb9[16] = gaga.createHand([list4[17], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb9[17] = gaga.createHand([list4[17], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb9[18] = gaga.createHand([list4[17], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb9[19] = gaga.createHand([list4[17], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb9[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[8]=(Math.max.apply(Math, komb9));
	
	
	komb10[0] = gaga.createHand([list4[18], list4[19], list4[21], list4[22], list4[23]]).identify().rank;
	komb10[1] = gaga.createHand([list4[18], list4[19], list4[21], list4[22], list4[24]]).identify().rank;
	komb10[2] = gaga.createHand([list4[18], list4[19], list4[21], list4[22], list4[25]]).identify().rank;
	komb10[3] = gaga.createHand([list4[18], list4[19], list4[21], list4[23], list4[24]]).identify().rank;
	komb10[4] = gaga.createHand([list4[18], list4[19], list4[21], list4[23], list4[25]]).identify().rank;
	komb10[5] = gaga.createHand([list4[18], list4[19], list4[21], list4[24], list4[25]]).identify().rank;
	komb10[6] = gaga.createHand([list4[18], list4[19], list4[22], list4[23], list4[24]]).identify().rank;
	komb10[7] = gaga.createHand([list4[18], list4[19], list4[22], list4[23], list4[25]]).identify().rank;
	komb10[8] = gaga.createHand([list4[18], list4[19], list4[22], list4[24], list4[25]]).identify().rank;
	komb10[9] = gaga.createHand([list4[18], list4[19], list4[23], list4[24], list4[25]]).identify().rank;
	komb10[10] = gaga.createHand([list4[18], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb10[11] = gaga.createHand([list4[18], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb10[12] = gaga.createHand([list4[18], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb10[13] = gaga.createHand([list4[18], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb10[14] = gaga.createHand([list4[18], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb10[15] = gaga.createHand([list4[19], list4[21], list4[22], list4[23], list4[24]]).identify().rank;
	komb10[16] = gaga.createHand([list4[19], list4[21], list4[22], list4[23], list4[25]]).identify().rank;
	komb10[17] = gaga.createHand([list4[19], list4[21], list4[22], list4[24], list4[25]]).identify().rank;
	komb10[18] = gaga.createHand([list4[19], list4[21], list4[23], list4[24], list4[25]]).identify().rank;
	komb10[19] = gaga.createHand([list4[19], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	komb10[20] = gaga.createHand([list4[21], list4[22], list4[23], list4[24], list4[25]]).identify().rank;
	kombmax[9]=(Math.max.apply(Math, komb10));
	
	
	var winrar = 0;
	for (i=0; i<10; i++){
		if (kombmax[i] > winrar)
			winrar = i + 1;}
	alert("A winrar is player" + winrar + "!");
	
	
	
	
	
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
			document.getElementById("pot").innerHTML="$"+pot;
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

	document.getElementById("player11").innerHTML=<div id="player11"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player12").innerHTML=<div id="player12"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player21").innerHTML=<div id="player21"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player22").innerHTML=<div id="player22"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player31").innerHTML=<div id="player31"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player32").innerHTML=<div id="player32"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player41").innerHTML=<div id="player41"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player42").innerHTML=<div id="player42"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player51").innerHTML=<div id="player51"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player52").innerHTML=<div id="player52"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player61").innerHTML=<div id="player61"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player62").innerHTML=<div id="player62"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player71").innerHTML=<div id="player71"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player72").innerHTML=<div id="player72"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player81").innerHTML=<div id="player81"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player82").innerHTML=<div id="player82"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player91").innerHTML=<div id="player91"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player92").innerHTML=<div id="player92"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player101").innerHTML=<div id="player101"><img src="./images/card back.png" width="50" height="75"/></div>;
	document.getElementById("player102").innerHTML=<div id="player102"><img src="./images/card back.png" width="50" height="75"/></div>;

	document.getElementById("acard1").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;

	document.getElementById("acard2").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;

	document.getElementById("acard3").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;

	document.getElementById("acard4").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;

	document.getElementById("acard5").innerHTML=<div><img src="./images/card back small.png" width="34" height="50"/></div>;
	ok_out();

	ring = 0;
	suurim_panus = 0;
	compare();
	mang();
	
}

function end(){
	ok();
}
