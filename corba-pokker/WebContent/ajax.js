function muudaSisu() {

   $.ajax({

      url: "uusSisu.html",
      cache: false,
      success: function(html){
      $("#muudetav").html(html);
    }
  });

}