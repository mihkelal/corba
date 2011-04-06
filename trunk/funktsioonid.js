var playerBet = 0;
var pot = 0;
var biggestBetThisRing = 0;
var playerMoney = 5000;
var playerNumberWhoIsDealer = 9;

var botMoney = [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000];
var botFolded = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneyBotBettedPreviously = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var moneyBotBettedTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var shuffledCardsList = [];
var shuffledCardsListGagaCompatible = [];
var ring = 0;
var round = 1;
var doRandom = 1;

var SB = 10;
var BB = 20;

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
//DONT DECLARE STUFF HERE
//BUGGED IF DECLARED BELOW THIS LINE


function handOutDSBBBChips(){
	playerNumberWhoIsDealer++;
	if (parseInt(playerNumberWhoIsDealer) == 10){
		playerNumberWhoIsDealer -= 10;
	}

	switch (playerNumberWhoIsDealer)
	{
	case 0:
		document.getElementById("role1").innerHTML = <div id = "role1" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role2").innerHTML = <div id = "role2" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role3").innerHTML = <div id = "role3" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role10").innerHTML = <div id = "role10"></div>;
	 break;
	case 1:
		document.getElementById("role2").innerHTML = <div id = "role2" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role3").innerHTML = <div id = "role3" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role4").innerHTML = <div id = "role4" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role1").innerHTML = <div id = "role1"></div>;
	 break;
	case 2:
		document.getElementById("role3").innerHTML = <div id = "role3" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role4").innerHTML = <div id = "role4" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role5").innerHTML = <div id = "role5" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role2").innerHTML = <div id = "role2"></div>;
	 break;
	case 3:
		document.getElementById("role4").innerHTML = <div id = "role4" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role5").innerHTML = <div id = "role5" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role6").innerHTML = <div id = "role6" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role3").innerHTML = <div id = "role3"></div>;
	 break;
	case 4:
		document.getElementById("role5").innerHTML = <div id = "role5" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role6").innerHTML = <div id = "role6" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role7").innerHTML = <div id = "role7" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role4").innerHTML = <div id = "role4" class = "roll"></div>;
	 break;
	case 5:
		document.getElementById("role6").innerHTML = <div id = "role6" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role7").innerHTML = <div id = "role7" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role8").innerHTML = <div id = "role8" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role5").innerHTML = <div id = "role5" class = "roll"></div>;
	 break;
	case 6:
		document.getElementById("role7").innerHTML = <div id = "role7" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role8").innerHTML = <div id = "role8" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role9").innerHTML = <div id = "role9" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role6").innerHTML = <div id = "role6" class = "roll"></div>;
	 break;
	case 7:
		document.getElementById("role8").innerHTML = <div id = "role8" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role9").innerHTML = <div id = "role9" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role10").innerHTML = <div id = "role10" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role7").innerHTML = <div id = "role7"></div>;
	 break;
	case 8:
		document.getElementById("role9").innerHTML = <div id = "role9" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role10").innerHTML = <div id = "role10" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role1").innerHTML = <div id = "role1" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role8").innerHTML = <div id = "role8"></div>;
	 break;
	case 9:
		document.getElementById("role10").innerHTML = <div id = "role10" class = "roll"><img src = "./images/d.png" width = "30" height = "30"/></div>;
		document.getElementById("role1").innerHTML = <div id = "role1" class = "roll"><img src = "./images/sb.png" width = "30" height = "30"/></div>;
		document.getElementById("role2").innerHTML = <div id = "role2" class = "roll"><img src = "./images/bb.png" width = "30" height = "30"/></div>;
		document.getElementById("role9").innerHTML = <div id = "role9"></div>;
	 break;
	default:
		printToCommandline("Error handOutDSBBBChips()");
	}

	printToCommandline("Game on");
}

function renameCardsForGaga(){
	for (var i = 0; i < 52; i++){
		if (shuffledCardsList[i] == "c2") shuffledCardsListGagaCompatible[i] = [2, 'c'];
		else if (shuffledCardsList[i] == "c3") shuffledCardsListGagaCompatible[i] = [3, 'c'];
		else if (shuffledCardsList[i] == "c4") shuffledCardsListGagaCompatible[i] = [4, 'c'];
		else if (shuffledCardsList[i] == "c5") shuffledCardsListGagaCompatible[i] = [5, 'c'];
		else if (shuffledCardsList[i] == "c6") shuffledCardsListGagaCompatible[i] = [6, 'c'];
		else if (shuffledCardsList[i] == "c7") shuffledCardsListGagaCompatible[i] = [7, 'c'];
		else if (shuffledCardsList[i] == "c8") shuffledCardsListGagaCompatible[i] = [8, 'c'];
		else if (shuffledCardsList[i] == "c9") shuffledCardsListGagaCompatible[i] = [9, 'c'];
		else if (shuffledCardsList[i] == "c10") shuffledCardsListGagaCompatible[i] = ['T', 'c'];
		else if (shuffledCardsList[i] == "cj") shuffledCardsListGagaCompatible[i] = ['J', 'c'];
		else if (shuffledCardsList[i] == "cq") shuffledCardsListGagaCompatible[i] = ['Q', 'c'];
		else if (shuffledCardsList[i] == "ck") shuffledCardsListGagaCompatible[i] = ['K', 'c'];
		else if (shuffledCardsList[i] == "ca") shuffledCardsListGagaCompatible[i] = ['A', 'c'];

		else if (shuffledCardsList[i] == "d2") shuffledCardsListGagaCompatible[i] = [2, 'd'];
		else if (shuffledCardsList[i] == "d3") shuffledCardsListGagaCompatible[i] = [3, 'd'];
		else if (shuffledCardsList[i] == "d4") shuffledCardsListGagaCompatible[i] = [4, 'd'];
		else if (shuffledCardsList[i] == "d5") shuffledCardsListGagaCompatible[i] = [5, 'd'];
		else if (shuffledCardsList[i] == "d6") shuffledCardsListGagaCompatible[i] = [6, 'd'];
		else if (shuffledCardsList[i] == "d7") shuffledCardsListGagaCompatible[i] = [7, 'd'];
		else if (shuffledCardsList[i] == "d8") shuffledCardsListGagaCompatible[i] = [8, 'd'];
		else if (shuffledCardsList[i] == "d9") shuffledCardsListGagaCompatible[i] = [9, 'd'];
		else if (shuffledCardsList[i] == "d10") shuffledCardsListGagaCompatible[i] = ['T', 'd'];
		else if (shuffledCardsList[i] == "dj") shuffledCardsListGagaCompatible[i] = ['J', 'd'];
		else if (shuffledCardsList[i] == "dq") shuffledCardsListGagaCompatible[i] = ['Q', 'd'];
		else if (shuffledCardsList[i] == "dk") shuffledCardsListGagaCompatible[i] = ['K', 'd'];
		else if (shuffledCardsList[i] == "da") shuffledCardsListGagaCompatible[i] = ['A', 'd'];

		else if (shuffledCardsList[i] == "h2") shuffledCardsListGagaCompatible[i] = [2, 'h'];
		else if (shuffledCardsList[i] == "h3") shuffledCardsListGagaCompatible[i] = [3, 'h'];
		else if (shuffledCardsList[i] == "h4") shuffledCardsListGagaCompatible[i] = [4, 'h'];
		else if (shuffledCardsList[i] == "h5") shuffledCardsListGagaCompatible[i] = [5, 'h'];
		else if (shuffledCardsList[i] == "h6") shuffledCardsListGagaCompatible[i] = [6, 'h'];
		else if (shuffledCardsList[i] == "h7") shuffledCardsListGagaCompatible[i] = [7, 'h'];
		else if (shuffledCardsList[i] == "h8") shuffledCardsListGagaCompatible[i] = [8, 'h'];
		else if (shuffledCardsList[i] == "h9") shuffledCardsListGagaCompatible[i] = [9, 'h'];
		else if (shuffledCardsList[i] == "h10") shuffledCardsListGagaCompatible[i] = ['T', 'h'];
		else if (shuffledCardsList[i] == "hj") shuffledCardsListGagaCompatible[i] = ['J', 'h'];
		else if (shuffledCardsList[i] == "hq") shuffledCardsListGagaCompatible[i] = ['Q', 'h'];
		else if (shuffledCardsList[i] == "hk") shuffledCardsListGagaCompatible[i] = ['K', 'h'];
		else if (shuffledCardsList[i] == "ha") shuffledCardsListGagaCompatible[i] = ['A', 'h'];

		else if (shuffledCardsList[i] == "s2") shuffledCardsListGagaCompatible[i] = [2, 's'];
		else if (shuffledCardsList[i] == "s3") shuffledCardsListGagaCompatible[i] = [3, 's'];
		else if (shuffledCardsList[i] == "s4") shuffledCardsListGagaCompatible[i] = [4, 's'];
		else if (shuffledCardsList[i] == "s5") shuffledCardsListGagaCompatible[i] = [5, 's'];
		else if (shuffledCardsList[i] == "s6") shuffledCardsListGagaCompatible[i] = [6, 's'];
		else if (shuffledCardsList[i] == "s7") shuffledCardsListGagaCompatible[i] = [7, 's'];
		else if (shuffledCardsList[i] == "s8") shuffledCardsListGagaCompatible[i] = [8, 's'];
		else if (shuffledCardsList[i] == "s9") shuffledCardsListGagaCompatible[i] = [9, 's'];
		else if (shuffledCardsList[i] == "s10") shuffledCardsListGagaCompatible[i] = ['T', 's'];
		else if (shuffledCardsList[i] == "sj") shuffledCardsListGagaCompatible[i] = ['J', 's'];
		else if (shuffledCardsList[i] == "sq") shuffledCardsListGagaCompatible[i] = ['Q', 's'];
		else if (shuffledCardsList[i] == "sk") shuffledCardsListGagaCompatible[i] = ['K', 's'];
		else if (shuffledCardsList[i] == "sa") shuffledCardsListGagaCompatible[i] = ['A', 's'];
	}
}

function shuffleCardsForGaga(){
	listOfCardNames = ["c2","c3","c4","c5","c6","c7","c8","c9","c10","ca","cj","ck","cq",
	          "d2","d3","d4","d5","d6","d7","d8","d9","d10","da","dj","dk","dq",
	          "h2","h3","h4","h5","h6","h7","h8","h9","h10","ha","hj","hk","hq",
	          "s2","s3","s4","s5","s6","s7","s8","s9","s10","sa","sj","sk","sq"];
	temporaryShuffledCardsList = [];

	var numberOfCards = 52;
	var x; //variable for shuffling

	for (var i = 0; i < numberOfCards; i++){
		x = Math.floor(Math.random() * numberOfCards);
		while (listOfCardNames[x] == 0) {
			x = Math.floor(Math.random() * numberOfCards);
		}
		temporaryShuffledCardsList[i] = listOfCardNames[x];
		listOfCardNames[x] = 0;
	}
	shuffledCardsList = temporaryShuffledCardsList;

	printToCommandline("Kaardid on segatud");
}

function handOutCardsToAllPlayers(){
	for (var i = 0; i < 20; i++){
		switch (i)
		{
		case 0:
			document.getElementById("player11").innerHTML = "<div id='player11'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 1:
			document.getElementById("player12").innerHTML = "<div id='player12'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 2:
			document.getElementById("player21").innerHTML = "<div id='player21'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 3:
			document.getElementById("player22").innerHTML = "<div id='player22'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 4:
			document.getElementById("player31").innerHTML = "<div id='player31'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 5:
			document.getElementById("player32").innerHTML = "<div id='player32'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 6:
			document.getElementById("player41").innerHTML = "<div id='player41'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 7:
			document.getElementById("player42").innerHTML = "<div id='player42'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 8:
			document.getElementById("player51").innerHTML = "<div id='player51'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 9:
			document.getElementById("player52").innerHTML = "<div id='player52'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 10:
			document.getElementById("player61").innerHTML = "<div id='player61'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 11:
			document.getElementById("player62").innerHTML = "<div id='player62'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 12:
			document.getElementById("player71").innerHTML = "<div id='player71'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 13:
			document.getElementById("player72").innerHTML = "<div id='player72'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 14:
			document.getElementById("player81").innerHTML = "<div id='player81'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 15:
			document.getElementById("player82").innerHTML = "<div id='player82'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 16:
			document.getElementById("player91").innerHTML = "<div id='player91'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 17:
			document.getElementById("player92").innerHTML = "<div id='player92'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 18:
			document.getElementById("player101").innerHTML = "<div id='player101'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		case 19:
			document.getElementById("player102").innerHTML = "<div id='player102'><img src='./cards/" + shuffledCardsList[i] + ".png' width='50' height='75'/></div>";
		 break;
		default:
			printToCommandline("Error shuffling cards");
		}
	}

	renameCardsForGaga();

	compareHandsWithGaga();

	findTheWinner();

	printToCommandline("Kaardid on kuvatud");
}

function playerAction(){
	if (ring != 4) {
		if (playerBet <= playerMoney){
			pot +=playerBet;
			document.getElementById("pot").innerHTML = "$" + pot;
			playerMoney -= playerBet;
			document.getElementById("stack").innerHTML = "$" + playerMoney;
			playerBet = 0;
			document.getElementById("bet").innerHTML = "$" + playerBet;

			botActions();
			if (ring == 0){
			ring++
			}
			else if (ring == 1){
				document.getElementById("acard1").innerHTML = "<div class ='acard' ><img src='./cards/" + shuffledCardsList[21] + ".png' width='34' height='50'/></div>";
				document.getElementById("acard2").innerHTML = "<div class ='acard' ><img src='./cards/" + shuffledCardsList[22] + ".png' width='34' height='50'/></div>";
				document.getElementById("acard3").innerHTML = "<div class ='acard' ><img src='./cards/" + shuffledCardsList[23] + ".png' width='34' height='50'/></div>";
				ring += 1;
			}
			else if (ring == 2){
				document.getElementById("acard4").innerHTML = "<div class ='acard' ><img src='./cards/" + shuffledCardsList[24] + ".png' width='34' height='50'/></div>";
				ring += 1;
			}
			else if (ring == 3){
				document.getElementById("acard5").innerHTML = "<div class ='acard' '><img src='./cards/" + shuffledCardsList[2] + ".png' width='34' height='50'/></div>";
				ring += 1;
				mangija_bet = 0;
				handOutCardsToAllPlayers();
				uus_ring();
			}
		}
		else{
			printToCommandline("Pole piisavalt raha");
		}
	}
}

function botActions(){
	switch(ring)
	{
	case 0:
		printToCommandline("Ring " + (ring) + " - preflop");
		break;
	case 1:
		printToCommandline("Ring " + (ring) + " - flop");
		break;
	case 2:
		printToCommandline("Ring " + (ring) + " - turn");
		break;
	case 3:
		printToCommandline("Ring " + (ring) + " - river");
		break;
	default:
	}
	for (var i = 0; i <= 8; i++){
		if (botFolded[i] == 0){
			botAction(i);
		}
	}
	round++;
	printToCommandline("Round " + (round));

	for (var i = 0; i <= 8; i++){
		if (moneyBotBettedPreviously[i] < biggestBetThisRing){
			if (botFolded[i] == 0){
				botAction(i);
			}
		}
	}
	round = 1;

	moneyBotBettedPreviously = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function botAction(botNumber){
	doRandom = 1;
	var amountBotWillBet = 1;
	var botNumberPlusOne = botNumber + 1;
	if (playerNumberWhoIsDealer == botNumber)
		printToCommandline("Player" + botNumberPlusOne + " is dealer");
	else{
		if (botFolded[botNumber] == 1){}
		else{
			if ((playerNumberWhoIsDealer == botNumber - 1) || (botNumber == 0 && playerNumberWhoIsDealer == 9)){
				if (round < 2 && ring < 2){
					doRandom = 0;
					if (SB < botMoney[botNumber] - 1){
						amountBotWillBet = SB;
						if (biggestBetThisRing < amountBotWillBet)
							biggestBetThisRing = amountBotWillBet;
					}
					else
						botActionFold(botNumber);
				}
			}
			if ((parseInt(playerNumberWhoIsDealer) == botNumber - 2) || (botNumber == 0 && playerNumberWhoIsDealer == 8) || (botNumber == 1 && playerNumberWhoIsDealer == 9)){
				if (round < 2 && ring < 2){
					doRandom = 0;
					if (BB < botMoney[botNumber] - 1){
						amountBotWillBet = BB;
						if (biggestBetThisRing < amountBotWillBet)
							biggestBetThisRing = amountBotWillBet;
					}
					else{
						botActionFold(botNumber);
					}
				}
			}

			if (doRandom == 1){
				var randomn = (Math.floor(Math.random() * 2)) + 1;
				switch(randomn)
				{
				case 0:
					botActionFold(botNumber);
					break;
				case 1:
					amountBotWillBet = (2 * BB) - moneyBotBettedPreviously[botNumber];
					if (ring == 2)
						amountBotWillBet = (BB) - moneyBotBettedPreviously[botNumber];
					if (biggestBetThisRing > amountBotWillBet)
						amountBotWillBet = (biggestBetThisRing) - moneyBotBettedPreviously[botNumber];
					if (biggestBetThisRing < amountBotWillBet)
						biggestBetThisRing = amountBotWillBet;
					break;
				case 2:
					if (ring <= 2){
						if (biggestBetThisRing < 4 * BB){
							amountBotWillBet = (biggestBetThisRing + BB) - moneyBotBettedPreviously[botNumber];
							biggestBetThisRing += BB;
						}
						else
							amountBotWillBet = (biggestBetThisRing) - moneyBotBettedPreviously[botNumber];
					}
					else{
						if (biggestBetThisRing < 8 * BB){
							if (ring < 3){
								amountBotWillBet = (biggestBetThisRing + BB) - moneyBotBettedPreviously[botNumber];
								biggestBetThisRing += BB;
							}
							else
								amountBotWillBet = (biggestBetThisRing + 2 * BB) - moneyBotBettedPreviously[botNumber];
								biggestBetThisRing += 2 * BB;
						}
						else
							amountBotWillBet = (biggestBetThisRing) - moneyBotBettedPreviously[botNumber];
					}
					break;
				default:
				}
			}

			if (amountBotWillBet <= botMoney[botNumber] && botFolded[botNumber]==0)
				botActionBet(botNumber, botNumberPlusOne, amountBotWillBet);
			else{
				if (botFolded[botNumber] == 0)
					botActionFold(botNumber);
			}
		}
	}
}

function botActionBet(botNumber, botNumberPlusOne, amountBotWillBet){
	//POT
	pot += amountBotWillBet;
	document.getElementById("pot").innerHTML = "$" + pot;

	//TOTALBET
	moneyBotBettedTotal[botNumber] += amountBotWillBet;
	document.getElementById("bet" + botNumberPlusOne).innerHTML = "$" + moneyBotBettedTotal[botNumber];

	//BOTMONEY
	botMoney[botNumber] -= amountBotWillBet;
	document.getElementById("stack" + botNumberPlusOne).innerHTML = "$" + botMoney[botNumber];

	//CMD LINE
	printToCommandline("Player" + botNumberPlusOne + " betted $" + amountBotWillBet);
	moneyBotBettedPreviously[botNumber] = amountBotWillBet;
}

function botActionFold(botNumber){
	botFolded[botNumber] = 1;
	printToCommandline("Player" + (botNumber + 1) + " folds");
}


function printToCommandline(textParameter){
	var textToPrint;
	if (textParameter != "[object HTMLInputElement]"){
		textToPrint = document.createTextNode(textParameter);
	}
	else{
		textToPrint = document.createTextNode(textParameter.value);
	}
	var commandlineTextArea = document.getElementById("example1");
	commandlineTextArea.appendChild(document.createTextNode(" "));
	commandlineTextArea.appendChild(textToPrint);
	commandlineTextArea.appendChild(document.createElement('br'));
	commandlineTextArea.appendChild(document.createTextNode("command line# "));
}

function initialGameSetup(){
	handOutDSBBBChips();
	shuffleCardsForGaga();
	document.getElementById("player101").innerHTML = "<div id='player101'><img src='./cards/" + shuffledCardsList[18] + ".png' width='50' height='75'/></div>";
	document.getElementById("player102").innerHTML = "<div id='player102'><img src='./cards/" + shuffledCardsList[19] + ".png' width='50' height='75'/></div>";
	ring = 0;
	playerAction();
}

function playerFold(){
	printToCommandline("Player folds");
	playerAction();
	playerAction();
	playerAction();
}

function playerCheck(){
	if (biggestBetThisRing == playerBet){
		playerAction();
	}
	else{
		printToCommandline("Pole piisavalt raha");
	}
}

function playerRaise(){
	playerBet = biggestBetThisRing;
	playerBet += BB;
	document.getElementById("bet").innerHTML = "$" + playerBet;
	playerAction();
}

function playerCall(){
	if (biggestBetThisRing - playerBet < playerMoney){
		playerBet = biggestBetThisRing - playerBet;
		playerAction();
	}
	else{
		printToCommandline("Pole piisavalt raha");
	}
}

function resetGame(){
	document.getElementById("player11").innerHTML = <div id = "player11"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player12").innerHTML = <div id = "player12"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player21").innerHTML = <div id = "player21"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player22").innerHTML = <div id = "player22"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player31").innerHTML = <div id = "player31"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player32").innerHTML = <div id = "player32"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player41").innerHTML = <div id = "player41"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player42").innerHTML = <div id = "player42"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player51").innerHTML = <div id = "player51"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player52").innerHTML = <div id = "player52"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player61").innerHTML = <div id = "player61"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player62").innerHTML = <div id = "player62"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player71").innerHTML = <div id = "player71"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player72").innerHTML = <div id = "player72"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player81").innerHTML = <div id = "player81"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player82").innerHTML = <div id = "player82"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player91").innerHTML = <div id = "player91"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player92").innerHTML = <div id = "player92"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player101").innerHTML = <div id = "player101"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player102").innerHTML = <div id = "player102"><img src = "./images/card back.png" width = "50" height = "75"/></div>;

	document.getElementById("acard1").innerHTML = <div><img src = "./images/card back small.png" width = "34" height = "50"/></div>;
	document.getElementById("acard2").innerHTML = <div><img src = "./images/card back small.png" width = "34" height = "50"/></div>;
	document.getElementById("acard3").innerHTML = <div><img src = "./images/card back small.png" width = "34" height = "50"/></div>;
	document.getElementById("acard4").innerHTML = <div><img src = "./images/card back small.png" width = "34" height = "50"/></div>;
	document.getElementById("acard5").innerHTML = <div><img src = "./images/card back small.png" width = "34" height = "50"/></div>;

	ok_out();

	ring = 0;

	biggestBetThisRing = 0;

	initialGameSetup();
}

function end(){
	resetGame();
	document.getElementById("player101").innerHTML = <div id = "player101"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	document.getElementById("player102").innerHTML = <div id = "player102"><img src = "./images/card back.png" width = "50" height = "75"/></div>;
	end_pressed();
}
