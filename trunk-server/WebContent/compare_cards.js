function compare(){
		
	var winrar = 0;
	for (i=0; i<10; i++){
		if (kombmax[i] > winrar)
			winrar = i + 1;}
	alert("A winrar is player" + winrar + "!");
	
	voitja(winrar);
	
	
}

function voitja(winrar){
	if (winrar == 10){
		mangija_raha+=pot;
	document.getElementById("stack").innerHTML="$"+mangija_raha;
	pot=0;
	document.getElementById("pot").innerHTML="$"+pot;	
	}
	else {
	bot_raha[winrar]+=pot;
	document.getElementById("stack"+winrar).innerHTML="$"+bot_raha[winrar];
	pot=0;
	document.getElementById("pot").innerHTML="$"+pot;	

	}
	
}

function compare_gaga(){
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
	
}