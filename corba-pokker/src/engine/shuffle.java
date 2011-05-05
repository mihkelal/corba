package engine;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.Random;


public class shuffle { 
	
	static ArrayList arrayList2 = new ArrayList();
	 
public static boolean segamine(){
    ArrayList arrayList = new ArrayList();
    
	int cards=52;
	int temp;
	double random;
	
    for (int i = 0; i < cards; i++){
    	arrayList.add(new Integer(i));
        
    }
    for (int ii = 0; ii < cards; ii++){
    	arrayList2.add(new Integer(0));
        
    }


	for (temp=0;temp<cards;temp++){
		random=Math.floor(Math.random()*cards);
		while (arrayList.indexOf(new Integer((int) random)) == 0) {
			random=Math.floor(Math.random()*cards);
		}
		arrayList2.set(temp, arrayList.get((int) random));
		arrayList.set((int) random, 0);
		
	}
	
	for (temp=0;temp<cards;temp++){
		System.out.println(arrayList.get(temp));
		
	}
	return true;
}


	public static int saaElement(int element){
		int number;
		number = (Integer) arrayList2.get(element);
		return  number;
	}

}