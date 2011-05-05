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


