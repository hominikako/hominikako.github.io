function showTerms(){
	alert( "hlloeeee");
}


function validate(){
		var noErrors = true;


		var name1 = document.getElementById("fname");
		name1.style.backgroundColor  = "white";
		var errorFname = document.getElementById("errorFname");
		errorFname.innerHTML = "";
		if(name1.value == "") {
			name1.style.backgroundColor  = "red";
			errorFname.innerHTML = "<p>Please enter your first name</p>";
			errorFname.style.color= "midnightblue";
			noErrors = false;
		}

			var name2 = document.getElementById("lname");
			name2.style.backgroundColor  = "white";
			var errorLname = document.getElementById("errorLname");
			errorLname.innerHTML = "";

				if(name2.value == "") {
					name2.style.backgroundColor  = "red";
					errorLname.innerHTML = "<p> Please enter your last name<p/>";
					errorLname.style.color= "red";
					errorLname.style.fontSize="12";


				}

			var emailAdd = document.getElementById("emailAddress");
			emailAdd.style.backgroundColor = "white";
			var errorEmail= document.getElementById("errorEmail")
			errorEmail.innerHTML="";

				if (emailAdd.value == "") {
					emailAdd.style.backgroundColor= "red";
					errorEmail.innerHTML = "<p>Please enter your email addresss</p>";
					errorEmail.style.color= "red";
				}


			var tattooNum = document.getElementsByName("tattoo");
			var isChecked = false;
			var errorTattoo = document.getElementById("errorTattoo");
			errorTattoo.innerHTML = "";

				for (i = 0; i < tattooNum.length; i++){
					if(tattooNum[i].checked){
					isChecked = true;
					}
				}
				if(!isChecked) {
					errorTattoo.innerHTML = "<p>Please, fill in if this is your first tattoo</p>";
					errorTattoo.style.color = "red";
					noErrors = false;
				}



			var customer = document.getElementsByName("cust");
			var errorCustomer = document.getElementById("errorCust");
			errorCustomer.innerHTML = "";

				for(i=0; i<customer.length; i++){
					if(customer[i].checked) {
					isChecked = true;
					}
				}

				if (!isChecked) {
					errorCustomer.innerHTML = "<p>Please, state if u have got tattoo in our studio before</p>";
					errorCustomer.style.color = "red";
					noErrors = false;

				}


		if (noErrors){
			alert("form submitted");
			//name1 = "";
			//name2= "";
			//emailAdd.value = "";
		}
		return noErrors;
}







