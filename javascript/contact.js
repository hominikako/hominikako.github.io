function validateTextBox(){
			
		if (document.getElementById('name').value == ""){
			alert('Please enter your name');
			document.getElementById('name').focus();
			document.getElementById('name').style.border ="2px solid red";
			return false;
		}
		
		if (document.getElementById ('email').value == ""){
			alert ('Please enter your e-mail');
			document.getElementById('email').focus();
			document.getElementById ('email').style.border = "3px solid red";
			return false;
		}
		
		if (document.getElementById ('subject').value== ""){
			alert ("What is the subject of your inquiry?");
			document.getElementById('subject').focus();
			document.getElementById ('subject').style.border = "3px solid red";
			return false;
		}
		
		if (document.getElementById ('inquiry').value== ""){
			alert ("Please enter your inquiry");
			document.getElementById('inquiry').focus();
			document.getElementById ('inquiry').style.border = "3px solid red";
			return false;
		}

		alert('Your inquiry has been sent. Thank you!')
	}