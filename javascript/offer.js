function showTerms(){
	var titleIpsum = "Terms and Conditions";
	var ipsum ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue vehicula dolor, " +
				"et dictum justo rutrum eu. Quisque blandit mi in dui condimentum rutrum. Donec consectetur  " +
				"vel nunc facilisis scelerisque. Morbi varius nisl augue, eu porttitor ante sagittis eget.  " +
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; " +
				"Duis eu enim lectus. Cras vel scelerisque lorem. Mauris a dapibus augue, at posuere dui.  " +
				"Vivamus molestie magna vel massa porta mattis. Duis ornare lacus eu nisi venenatis, sit amet rhoncus lorem pharetr";

	alert( titleIpsum + '\n\n' + ipsum);
}


function disableTattoed(){
	var checkboxes = document.getElementsByName("tattooed");
	for(i=0; i<checkboxes.length; i++){
		checkboxes[i].checked = false;
		checkboxes[i].disabled = true;
	}
}


function enableTattoed(){
	var checkboxes = document.getElementsByName("tattooed");
	for(i=0; i<checkboxes.length; i++){
		checkboxes[i].checked = false;
		checkboxes[i].disabled = false;
	}
}


function validate(){

		var noErrors = true;

		var firstName = document.getElementById("fname");
		firstName.style.backgroundColor  = "white";
		var errorFname = document.getElementById("errorFname");
		errorFname.innerHTML = "";
		if(firstName.value == "") {
			firstName.style.backgroundColor  = "red";
			errorFname.innerHTML = "<p>Please enter your first name</p>";
			errorFname.style.color= "red";
			noErrors = false;
		}

		var lastName = document.getElementById("lname");
		lastName.style.backgroundColor  = "white";
		var errorLname = document.getElementById("errorLname");
		errorLname.innerHTML = "";
		if(lastName.value == "") {
			lastName.style.backgroundColor  = "red";
			errorLname.innerHTML = "<p>Please enter your last name</p>";
			errorLname.style.color= "red";
			noErrors = false;
		}

		var emailAdd = document.getElementById("emailAddress");
		emailAdd.style.backgroundColor = "white";
		var errorEmail= document.getElementById("errorEmail")
		errorEmail.innerHTML="";
		if (emailAdd.value == "") {
			emailAdd.style.backgroundColor= "red";
			errorEmail.innerHTML = "<p>Please enter your email addresss</p>";
			errorEmail.style.color= "red";
			noErrors = false;
		}


		var tattooNum = document.getElementsByName("firstTattoo");
		var isChecked = false;
		var errorFTattoo = document.getElementById("errorFirstTattoo");
		errorFTattoo.innerHTML = "";
		for (i = 0; i < tattooNum.length; i++){
			if(tattooNum[i].checked){
				isChecked = true;
			}
		}
		if(!isChecked) {
			errorFTattoo.innerHTML = "<p>Please, fill in if this is your first tattoo</p>";
			errorFTattoo.style.color = "red";
			noErrors = false;
		}


		var isChecked = false;
		var tattoo = document.getElementsByName("tattooed");
		var errorTattoo = document.getElementById("errorTattooed");
		errorTattoo.innerHTML = "";
		for(i=0; i<tattoo.length; i++){
			if(tattoo[i].checked || tattoo[i].disabled) {
				isChecked = true;
			}
		}
		if (!isChecked) {
			errorTattoo.innerHTML = "<p>Please, state if you have got a tattoo in our studio before</p>";
			errorTattoo.style.color = "red";
			noErrors = false;
		}

		var terms = document.getElementById("terms");
		var errorTerms = document.getElementById("errorTerms");
		errorTerms.innerHTML = "";
		if(terms.checked == false){
			errorTerms.innerHTML = "<p>The Terms and Conditions must be agreed</p>";
			errorTerms.style.color = "red";
			noErrors = false;
		}

		return noErrors;
}







