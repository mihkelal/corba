function eelLaadimine(){
	$(document).ready(function(){
		
		
		$(".nupp").hide();
		$("#ok").hide();
		  $("#mang").click(function(){
		    $("#mang").hide(1000);
		    $("#chatbox").css("margin-top", "-80px"); 
		    $(".nupp").show(1000);


		  });
		});
}

function uus_ring(){
	$(document).ready(function(){
		$(".nupp").hide();
		$("#ok").show(1000);
		$("#chatbox").css("margin-top", "-200px");
		});
}

function ok_out(){
	$(document).ready(function(){
		$(".nupp").show(1000);
		$("#ok").hide();
		 $("#chatbox").css("margin-top", "-80px"); 
		});
}

