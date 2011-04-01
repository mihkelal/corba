function compare(){
	//ToDo
	voitja();
	
	
}

function voitja(){
	mangija_raha+=pot;
	document.getElementById("stack").innerHTML="$"+mangija_raha;
	pot=0;
	document.getElementById("pot").innerHTML="$"+pot;	
}