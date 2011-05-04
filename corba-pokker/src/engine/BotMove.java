package engine;

import java.util.ArrayList;
import java.util.Random;

public class BotMove extends main {


	static void Botkaik(int nr) {

		
		//sellises stiilis kõik ülejäänud ToDo
		database.setDorandom(1);
		database.setRandomnumber(1);
		database.setNra(database.getNr() + 1);
		/////////////////////////
		
		if (diilercount == nr)
			fn_command("Player" + nra + " is dealer");
		else {
			if (bot_out[nr] == 1) {
			} else {
				if ((diilercount == nr - 1) || (nr == 0 && diilercount == 9)) {
					if (round < 2 && ring < 2) {
						dorandom = 0;
						if (SB < bot_raha[nr] - 1) {
							randomnumber = SB;
							if (suurim_panus < randomnumber)
								suurim_panus = randomnumber;
						} else
							fold(nr);
					}
				}
				if ((diilercount) == nr - 2 || (nr == 0 && diilercount == 8)
						|| (nr == 1 && diilercount == 9)) {
					if (round < 2 && ring < 2) {
						dorandom = 0;
						if (BB < bot_raha[nr] - 1) {
							randomnumber = BB;
							if (suurim_panus < randomnumber)
								suurim_panus = randomnumber;
						} else {
							fold(nr);
						}
					}
				}

				if (dorandom == 1) {
					Random generator = new Random();
					int randomn = generator.nextInt(2) + 1;
					switch (randomn) {
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
						if (ring <= 2) {
							if (suurim_panus < 4 * BB) {
								randomnumber = (suurim_panus + BB)
										- bot_bet[nr];
								suurim_panus += BB;
							} else
								randomnumber = (suurim_panus) - bot_bet[nr];
						} else {
							if (suurim_panus < 8 * BB) {
								if (ring < 3) {
									randomnumber = (suurim_panus + BB)
											- bot_bet[nr];
									suurim_panus += BB;
								} else
									randomnumber = (suurim_panus + 2 * BB)
											- bot_bet[nr];
								suurim_panus += 2 * BB;
							} else
								randomnumber = (suurim_panus) - bot_bet[nr];
						}
						break;
					default:
					}
				}

				if (randomnumber <= bot_raha[nr] && bot_out[nr] == 0)
					bett(nr, nra, randomnumber);
				else {
					if (bot_out[nr] == 0)
						fold(nr);
				}
			}
		}
	}

	static void fold(int nr) {
		bot_out[nr] = 1;
		fn_command("Player" + (nr + 1) + " folds");
	}

	static ArrayList<String> list = new ArrayList<String>();

}