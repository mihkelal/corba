function muudaCall() {

   $.ajax({

      url: "main?action=getPot",
      cache: false,
      success: function(html){
      $("#pot").text("$ "+html(html));
    }
  });

}




function setMangija_raha2() {

	   $.ajax({

	      url: "main?action=database_setMangija_raha",
	      cache: false,
	      success: function(html){
	      $("#pot").text("$ "+html(html));
	    }
	  });

	}



function get_Suurim_panus() {
    var req = new XMLHttpRequest();
    var url = "main?action=database_getSuurim_panus"; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             suurim_panus = req.responseText;             
        }
    }
 };
 req.send(null);    
}

function getMangija_raha() {
    var req = new XMLHttpRequest();
    var url = "main?action=database_getMangija_raha"; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
        	mangija_raha = req.responseText;
            document.getElementById("pot").innerHTML= req.responseText;
        }
    }
 };
 req.send(null);    
}

function getPanus() {
    var req = new XMLHttpRequest();
    var url = "main?action=database_getPanus"; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             panus = req.responseText;             
        }
    }
 };
 req.send(null);    
}






function setMangija_raha()  {
    var req = new XMLHttpRequest();
    var url = "main?action=database_setMangija_raha&raha=6000&raha2=7000"; 
    req.open("POST", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             suurim_panus = req.responseText;             
        }
    }
 };
 req.send(null);
// req.send("raha=6000&raha2=7000");
 
 
uuesndaaa();
}

function uuesndaaa(){
    var req = new XMLHttpRequest();
    var url = "main?action=uuenda"; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             document.getElementById("pot").innerHTML= req.responseText;
        }
    }
 };
 
 
 // ... ja alles siis saada request teele
 req.send(null);
}


function uuendaInfo5() {
    var req = new XMLHttpRequest();
    var url = "main?action=rename"; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             document.getElementById("info4").textContent = req.responseText;
             document.getElementById("pot").innerHTML= "rename";
        }
    }
 };
 
 
 // ... ja alles siis saada request teele
 req.send(null);    
}




function set_pack(request, variable){
    var req = new XMLHttpRequest();
//    var url = "main?action=database_setMangija_raha&raha=6000&raha2=7000"; 
    var url = "main?action="+request+"&"+variable; 
    req.open("POST", url);
    req.send(null);
    
    getMangija_raha();
}