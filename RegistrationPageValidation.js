$(document).ready(function() {

//alert ("Helloooooooooooooo");

  	  // on page submit -- validate the data
    $("#regform").submit(function(){
    	//alert ("Inside RegPageValidation js");
		clearError();
		$('input[type="submit"]').attr('disabled','disabled');
		var submitForm=true;
		if(!requiredCheck()){
			submitForm=false;
		}
		if(!submitForm){
			$('input[type="submit"]').removeAttr('disabled');
		}

	return submitForm;
	});

	function clearError(){

		$(".errorbox-bad").removeClass("errorbox-bad");
		$('#errorMsg').css("visibility","hidden");
	}



	//Function to check for required fields
	function requiredCheck(){

		//alert("Inside requiredCheck");
		var setFocusTo="";
		var isComplete=true;
		var errorMsg = "Errorrrrrr";
		var validMobileNumber=true;
		var validPincode=true;
		var errMsg1="Oops! The Mobile Number provided is invalid.";
		var errMsg2="Oops! The pincode provided is invalid.";
		var errMsg3="Oops! The Mobile Number and the Pincode provided are invalid.";
		//check for first name
		if($("#txtFirstName").val()==""){
			$("#txtFirstName").addClass("errorbox-bad");
			isComplete=false;
		}
		
		//check for last name
		if($("#txtLastName").val()==""){
			$("#txtLastName").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for delivery address
		if($("#txtDeliveryAddress").val()==""){
			$("#txtDeliveryAddress").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for pin code
		if($("#txtPincode").val()==""){
			$("#txtPincode").addClass("errorbox-bad");
			isComplete=false;
		} else if(!validateNumber($("#txtPincode").val())){
			$("#txtPincode").addClass("errorbox-bad");
			validPincode=false;			
			isComplete=false;
		}

		//check for MobileNumber
		if($("#txtMobileNumber").val()==""){
			$("#txtMobileNumber").addClass("errorbox-bad");
			isComplete=false;
		} else if(!validateNumber($("#txtMobileNumber").val())){
			$("#txtMobileNumber").addClass("errorbox-bad");
			validMobileNumber=false;	
			isComplete=false;		
		}


		//check for Child First Name
		if($("#txtChildFirstName").val()==""){
			$("#txtChildFirstName").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for Child Last Name
		if($("#txtChildLastName").val()==""){
			$("#txtChildLastName").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for age
		if($("#dAge option:selected").text()==""){
			$("#dAge").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for gender
		if($("#dGender option:selected").text()==""){
			$("#dGender").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for activity level
		if($("#dActivityLevel option:selected").text()==""){
			$("#dActivityLevel").addClass("errorbox-bad");
			isComplete=false;
		}


		//check for Section
		if($("#txtSection").val()==""){
			$("#txtSection").addClass("errorbox-bad");
			isComplete=false;
		}


		//check for school name
		if($("#txtSchoolName").val()==""){
			$("#txtSchoolName").addClass("errorbox-bad");
			isComplete=false;
		}

		//check for School Address
		if($("#txtSchoolAddress").val()==""){
			$("#txtSchoolAddress").addClass("errorbox-bad");
			isComplete=false;
		}	



		if(!isComplete){
			$('#errorMsg').css("visibility","visible");
		}

		if(!validMobileNumber && !validPincode){
			$("#errorMsg1").html(errMsg3);
			$('#errorMsg1').css("visibility","visible");
		}
		else if(!validPincode){
			$("#errorMsg1").html(errMsg2);
			$('#errorMsg1').css("visibility","visible");
		}
		else if(!validMobileNumber){
			$("#errorMsg1").html(errMsg1);
			$('#errorMsg1').css("visibility","visible");
		}else{
			$('#errorMsg1').css("visibility","hidden");
		}

		return isComplete;

	}

	function validateNumber(data){

		//validating ph no
		var filter = /^[0-9]+$/;
		if (!filter.test(data)) {
			return false;
		 }
		else{
			return true;
		}
		return true;
	}


});


