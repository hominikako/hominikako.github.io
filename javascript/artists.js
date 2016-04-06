 $(document).ready(function($){

    $( "#artistdialog" ).dialog({
      autoOpen: false,
      width: 500,
      height: 650,
      resizable: false,
      show: {
        effect: "scale",
        duration: 1000
      },
      hide: {
        effect: "scale",
        duration: 1000
      },
      open: function(event,ui){
        //$("#artistdialog").siblings('.ui-dialog-titlebar').remove();
        $('body').addClass('body-gray');

      },

	    close: function(event, ui){
        $('body').removeClass('body-gray');
		    $( "#artistdialog" ).empty();

	   }
	 });

    $( "#artist1" ).click(function() {
      $( "#artistdialog" ).load( "artist1.html" );
      $( "#artistdialog").css("background","linear-gradient(#600, #111)");
      $( "#artistdialog" ).dialog( "open" );
    });

    $( "#artist2" ).click(function() {
      $( "#artistdialog" ).load( "artist2.html" );
      $( "#artistdialog").css("background-image","linear-gradient(#006, #111)");
	    $( "#artistdialog" ).dialog( "open" );
    });

	//This is like this becasue the HTML was loaded(injected) after loading the main page.
	// see this -> http://stackoverflow.com/a/14339454
	$(document).on('mouseover','.artist_photos aside img',function(){

		$("#detail").attr("src", $(this).attr('src'));
	});



 // $("#offer").animate({
 //    bottom: "100px",
 //    }, 1200);
 //  });




