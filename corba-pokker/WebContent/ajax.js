function muudaCall() {

   $.ajax({

      url: "main?action=getPot",
      cache: false,
      success: function(html){
      $("#pot").text("$ "+html(html));
    }
  });

}



function set_database(request, variable){
    var req = new XMLHttpRequest();
//    var url = "main?action=database_setMangija_raha&raha=6000&raha2=7000"; 
    var url = "main?action="+request+"&"+variable; 
    req.open("POST", url);
    req.send(null);
}


function get_database(request){
    var req = new XMLHttpRequest();
    var url = "main?action="+request; 
    req.open("GET", url); 
    req.onreadystatechange = function() { 
        if (req.readyState === 4 && req.status === 200) {
        if (req.getResponseHeader("Content-Type").match(/^text/)) {
             return_variable = req.responseText;             
        }
    }
 };
 req.send(null);
 
 return return_variable;
}