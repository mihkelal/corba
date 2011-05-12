package engine;

import java.util.Random;

public class BotMove extends main {
	static void Botkaigud(int nr) {

		for (int i=0;i<=8;i++){
			if (database.bot_out[i] == 0){
				Botkaik(i);
			}
		}
		database.round++;
			
		for (int i=0;i<=8;i++){
								//if (i==1) alert(bot_bet[i]);
			if (database.bot_bet[i] < database.suurim_panus){
				if (database.bot_out[i] == 0){
					Botkaik(i);
				}
			}
		}
		database.round=1;
		
		//database.bot_bet = {0, 0, 0, 0, 0, 0, 0, 0, 0};
	;
	}
	static void Botkaik(int nr) {
		

		database.setDorandom(1);
		database.setRandomnumber(1);
		database.setNra(database.getNr() + 1);
				
		if (database.diilercount != nr) {
			if (database.bot_out[nr] == 1) {
			} else {
				if ((database.diilercount == nr - 1) || (nr == 0 && database.diilercount == 9)) {
					if (database.round < 2 && database.ring < 2) {
						database.dorandom = 0;
						if (database.SB < database.bot_raha[nr] - 1) {
							database.randomnumber = database.SB;
							if (database.suurim_panus < database.randomnumber)
								database.suurim_panus = database.randomnumber;
						} else
							fold(nr);
					}
				}
				if ((database.diilercount) == nr - 2 || (nr == 0 && database.diilercount == 8)
						|| (nr == 1 && database.diilercount == 9)) {
					if (database.round < 2 && database.ring < 2) {
						database.dorandom = 0;
						if (database.BB < database.bot_raha[nr] - 1) {
							database.randomnumber = database.BB;
							if (database.suurim_panus < database.randomnumber)
								database.suurim_panus = database.randomnumber;
						} else {
							fold(nr);
						}
					}
				}

				if (database.dorandom == 1) {
					Random generator = new Random();
					int randomn = generator.nextInt(2) + 1;
					switch (randomn) {
					case 0:
						fold(nr);
						break;
					case 1:
						database.randomnumber = (2 * database.BB) - database.bot_bet[nr];
						if (database.ring == 2) {
							database.randomnumber = (database.BB) - database.bot_bet[nr];
						} else if (database.suurim_panus > database.randomnumber) {
							database.randomnumber = (database.suurim_panus) - database.bot_bet[nr];
						} else if (database.suurim_panus < database.randomnumber) {
							database.suurim_panus = database.randomnumber;
						} else {}
						break;
					case 2:
						if (database.ring <= 2) {
							if (database.suurim_panus < 4 * database.BB) {
								database.randomnumber = (database.suurim_panus + database.BB)
										- database.bot_bet[nr];
								database.suurim_panus += database.BB;
							} else
								database.randomnumber = (database.suurim_panus) - database.bot_bet[nr];
						} else {
							if (database.suurim_panus < 8 * database.BB) {
								if (database.ring < 3) {
									database.randomnumber = (database.suurim_panus + database.BB)
											- database.bot_bet[nr];
									database.suurim_panus += database.BB;
								} else
									database.randomnumber = (database.suurim_panus + 2 * database.BB)
											- database.bot_bet[nr];
								database.suurim_panus += 2 * database.BB;
							} else
								database.randomnumber = (database.suurim_panus) - database.bot_bet[nr];
						}
						break;
					default:
					}
				}

				if (database.randomnumber <= database.bot_raha[nr] && database.bot_out[nr] == 0){
					bett(nr, database.nra, database.randomnumber);
				}
					
				else {
					if (database.bot_out[nr] == 0)
						fold(nr);
				}
			}
		}
	}

	static void fold(int nr) {
		database.bot_out[nr] = 1;
	}

	static void bett(int nr, int nra, int randomnumber){
		//POT
		database.setPot(database.getPot() + randomnumber);
		//document.getElementById("pot").innerHTML="$" + pot;
		
		//BOT_RAHA
		database.setOneBot_raha(nr, database.getOneBot_raha(nr) - randomnumber);
		//document.getElementById("stack" + nra).innerHTML="$" + bot_raha[nr];
		
		//CMD LINE
		//fn_command("Player" + nra + " betted $" + randomnumber);
		database.bot_bet[nr] = randomnumber;
	}
	

}