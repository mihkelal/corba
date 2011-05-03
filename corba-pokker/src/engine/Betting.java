package engine;


import java.util.ArrayList;


public class Betting extends main { 
	
	static int pot = 666;
	static ArrayList<String> list = new ArrayList<String>();
	
	public static int getPot() {
		return pot;
	}

	public static void setPot(int pot2) {
		pot = pot2;
	}

	public static String getList(int index) {
		return list.get(index);
	}

	public static void setList(int index, String money) {
		list.set(index, money);
	}

}