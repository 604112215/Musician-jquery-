//jquery

$(document).ready(function(){

	$('.INTRO img a').simpleLightbox();

	$(".Hide").hide();

	$("#seemore").click(function(){
      // $(".Hide").show();
       $(".Hide").toggle();})

	// $("#seemore").click(function(){
 //       $("#seemore").html("See more");

 //       })
	


	let albumPlay=2;
	 $("#right").click(function(){
       if(albumPlay< 6){
       $("#play").attr("src","pictures/"+albumPlay+".jpg");
       albumPlay++; 
		}else{$(play).attr("src","pictures/"+albumPlay+".jpg");
				albumPlay=1;}

	   })

	

		$("#colum1 img").hover(function(){
		$(this).css({"width":"100", "height":"100","border":"1px solid #1DDBB7"});}
	    ,function(){
	    	$(this).css({"width":"100", "height":"100","border":"0px solid #1DDBB7"});
	    })

		

		// $("#colum1 img").hover(function(){
		// $(this).css("border","3px solid #1DDBB7");}
	 //    ,function(){$(this).css("border","0px solid #1DDBB7");}
	 //    })



     

})