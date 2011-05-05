package engine;

public class database extends main{

	static int panus = 0;
	static int pot = 0;
	static int suurim_panus = 0;
	static int diilercount = 9;

	static int[] bot_raha = { 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000 };
	static int[] bot_out = { 0, 0, 0, 0, 0, 0, 0, 0, 0 };
	static int[] bot_bet = { 0, 0, 0, 0, 0, 0, 0, 0, 0 };
	static int[] list3 = {};
	static int[] list4 = {};
	static int ring = 0;
	static int round = 1;
	static int dorandom = 1;

	static int SB = 3;
	static int BB = 6;
	static int nr = 0;
	static int randomnumber = 0;
	static int nra;
	
	public static int getPanus() {
		return panus;
	}
	public static void setPanus(int panus) {
		database.panus = panus;
	}
	public static int getPot() {
		return pot;
	}
	public static void setPot(int pot) {
		database.pot = pot;
	}
	public static int getSuurim_panus() {
		return suurim_panus;
	}
	public static void setSuurim_panus(int suurim_panus) {
		database.suurim_panus = suurim_panus;
	}
	public static int getDiilercount() {
		return diilercount;
	}
	public static void setDiilercount(int diilercount) {
		database.diilercount = diilercount;
	}
	public static int[] getBot_raha() {
		return bot_raha;
	}
	public static void setBot_raha(int[] bot_raha) {
		database.bot_raha = bot_raha;
	}
	public static int[] getBot_out() {
		return bot_out;
	}
	public static void setBot_out(int[] bot_out) {
		database.bot_out = bot_out;
	}
	public static int[] getBot_bet() {
		return bot_bet;
	}
	public static void setBot_bet(int[] bot_bet) {
		database.bot_bet = bot_bet;
	}
	public static int getRing() {
		return ring;
	}
	public static void setRing(int ring) {
		database.ring = ring;
	}
	public static int getRound() {
		return round;
	}
	public static void setRound(int round) {
		database.round = round;
	}
	public static int getDorandom() {
		return dorandom;
	}
	public static void setDorandom(int dorandom) {
		database.dorandom = dorandom;
	}
	public static int getSB() {
		return SB;
	}
	public static void setSB(int sB) {
		SB = sB;
	}
	public static int getBB() {
		return BB;
	}
	public static void setBB(int bB) {
		BB = bB;
	}
	public static int getNr() {
		return nr;
	}
	public static void setNr(int nr) {
		database.nr = nr;
	}
	public static int getRandomnumber() {
		return randomnumber;
	}
	public static void setRandomnumber(int randomnumber) {
		database.randomnumber = randomnumber;
	}
	public static int getNra() {
		return nra;
	}
	public static void setNra(int nra) {
		database.nra = nra;
	}


}
