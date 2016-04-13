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
        $('body').addClass('body-gray'); //changes background color
      },
	    close: function(event, ui){
        $('body').removeClass('body-gray'); //changes back background color
		    $( "#artistdialog" ).empty(); // removes the loaded info from the main page

	   }
	 });

    //Triggers when click on image of artist 1
    $( "#artist1" ).click(function() {
      $( "#artistdialog" ).load( "artist1.html" ); //Loads the HTML page into the dialog box
      $( "#artistdialog").css("background","linear-gradient(#a00, #111)"); // changes backgroun color of dialog box
      $( "#artistdialog" ).dialog( "open" ); // opens dialog box
    });

    //Triggers when click on image of artist 2
    $( "#artist2" ).click(function() {
      $( "#artistdialog" ).load( "artist2.html" ); //Loads the HTML page into the dialog box
      $( "#artistdialog").css("background-image","linear-gradient(#aaa, #111)"); // changes backgroun color of dialog box
	    $( "#artistdialog" ).dialog( "open" ); // opens dialog box
    });

  	//I am using this way of capturing the mouseover event becaue the HTML code with the style which is used as selector was loaded(injected) after loading the main page. 
  	// info -> http://stackoverflow.com/a/14339454
    // Loads the image which the mouse is passing over into a bigger area
  	$(document).on('mouseover','.artist_photos aside img',function(){
  		$("#detail").attr("src", $(this).attr('src'));
  	});

 });

 




