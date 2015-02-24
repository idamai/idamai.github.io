function isEmailValid(email) { 
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
} 

$(document).ready(function(){
	var nameError = true;
	var emailError = true;
	var phoneErrror = true;
	var dateError = true;
	var startTimeError = true;
	var endTimeError = true;
	var descriptionError = true;
	
	$('#requesterName').focusout(function(){
		var name = $('#requesterName').val();
		if (name.length == 0){
			if ($('#requesterName').parent().hasClass('has-success'))
				$('#requesterName').parent().removeClass('has-success');
			if ($('#requesterName').parent().find('.error-message').hasClass('hide')){
				$('#requesterName').parent().find('.error-message').removeClass('hide');
			}
			$('#requesterName').parent().addClass('has-error');
			nameError = true;
		} else {
			if ($('#requesterName').parent().hasClass('has-error'))
				$('#requesterName').parent().removeClass('has-error');
			$('#requesterName').parent().addClass('has-success');			
			if (!$('#requesterName').parent().find('.error-message').hasClass('hide')){
				$('#requesterName').parent().find('.error-message').addClass('hide');
			}
			nameError = false;
		}
	});
	
	$('#requesterPhone').focusout(function(){
		var phone = $('#requesterPhone').val();
		if (phone.length == 0){
			if ($('#requesterPhone').parent().hasClass('has-success'))
				$('#requesterPhone').parent().removeClass('has-success');
			if ($('#requesterPhone').parent().find('.error-message').hasClass('hide')){
				$('#requesterPhone').parent().find('.error-message').removeClass('hide');
			}
			$('#requesterPhone').parent().addClass('has-error');
			phoneErrror=true;
		} else {
			if ($('#requesterPhone').parent().hasClass('has-error'))
				$('#requesterPhone').parent().removeClass('has-error');
			$('#requesterPhone').parent().addClass('has-success');			
			if (!$('#requesterPhone').parent().find('.error-message').hasClass('hide')){
				$('#requesterPhone').parent().find('.error-message').addClass('hide');
			}
			phoneErrror = false;
		}
	});
	
	$('#requesterEmail').focusout(function(){
		var email = $('#requesterEmail').val();
		if (!isEmailValid(email)){
			if ($('#requesterEmail').parent().hasClass('has-success'))
				$('#requesterEmail').parent().removeClass('has-success');
			if ($('#requesterEmail').parent().find('.error-message').hasClass('hide')){
				$('#requesterEmail').parent().find('.error-message').removeClass('hide');
			}
			$('#requesterEmail').parent().addClass('has-error');
			emailError = true;
		} else {
			if ($('#requesterEmail').parent().hasClass('has-error'))
				$('#requesterEmail').parent().removeClass('has-error');
			$('#requesterEmail').parent().addClass('has-success');			
			if (!$('#requesterEmail').parent().find('.error-message').hasClass('hide')){
				$('#requesterEmail').parent().find('.error-message').addClass('hide');
			}
			emailError = false;
		}
	});
	
	$('#eventDate').focusout(function(){
		var date = new Date($('#eventDate').val());
		var currentDate = new Date();
		if (date<=currentDate ||date == null ||date == undefined){
			if ($('#eventDate').parent().hasClass('has-success'))
				$('#eventDate').parent().removeClass('has-success');
			if ($('#eventDate').parent().find('.error-message').hasClass('hide')){
				$('#eventDate').parent().find('.error-message').removeClass('hide');
			}
			$('#eventDate').parent().addClass('has-error');
			dateError=true;
		} else {
			if ($('#eventDate').parent().hasClass('has-error'))
				$('#eventDate').parent().removeClass('has-error');
			$('#eventDate').parent().addClass('has-success');			
			if (!$('#eventDate').parent().find('.error-message').hasClass('hide')){
				$('#eventDate').parent().find('.error-message').addClass('hide');
			}
			dateError=false;
		}
	});
	
	
	
	$('#startTime').focusout(function(){
		var startTime = $('#startTime').val();		
		var endTime = $('#endTime').val();
		if (startTime==null||startTime ==undefined)
			error= true;
		else {
			if (!(endTime==null||endTime==undefined))
				if (startTime<endTime){
					endTimeError = false;
					error = false;
				}else 
					error = true;
			else
				error = false;
		}
		startTimeError=error;
		if (error){
			if ($('#startTime').parent().hasClass('has-success'))
				$('#startTime').parent().removeClass('has-success');
			$('#startTime').parent().addClass('has-error');
			if ($('#endTime').parent().hasClass('has-success'))
				$('#endTime').parent().removeClass('has-success');
			$('#endTime').parent().addClass('has-error');
		} else {
			if ($('#startTime').parent().hasClass('has-error'))
				$('#startTime').parent().removeClass('has-error');
			$('#startTime').parent().addClass('has-success');
			if ($('#endTime').parent().hasClass('has-error'))
				$('#endTime').parent().removeClass('has-error');
			$('#endTime').parent().addClass('has-success');				
		}			
		
	});
	
	$('#endTime').focusout(function(){
		var startTime = $('#startTime').val();	
		var endTime = $('#endTime').val();
		var error = false;
		if (endTime==null||endTime ==undefined)
			error= true;
		else {
			if (!(startTime==null||startTime==undefined))
				if (startTime<endTime){
					startTimeError = false;
					error = false;
				}else 
					error = true;
			else
				error = false;
		}
		endTimeError = error;
		if (error){
			if ($('#startTime').parent().hasClass('has-success'))
				$('#startTime').parent().removeClass('has-success');
			$('#startTime').parent().addClass('has-error');
			if ($('#endTime').parent().hasClass('has-success'))
				$('#endTime').parent().removeClass('has-success');
			$('#endTime').parent().addClass('has-error');
		} else {
			if ($('#startTime').parent().hasClass('has-error'))
				$('#startTime').parent().removeClass('has-error');
			$('#startTime').parent().addClass('has-success');
			if ($('#endTime').parent().hasClass('has-error'))
				$('#endTime').parent().removeClass('has-error');
			$('#endTime').parent().addClass('has-success');			
		}		
	});
	
	$('#eventDescription').on('keyup',function(){
		var eventDescription = $('#eventDescription').val();
		if (eventDescription.length<100){
			if ($('#eventDescription').parent().hasClass('has-success'))
				$('#eventDescription').parent().removeClass('has-success');
			if ($('#eventDescription').parent().find('.error-message').hasClass('hide')){
				$('#eventDescription').parent().find('.error-message').removeClass('hide');
			}
			$('#eventDescription').parent().addClass('has-error');
			descriptionError = true;
		} else {
			if ($('#eventDescription').parent().hasClass('has-error'))
				$('#eventDescription').parent().removeClass('has-error');
			$('#eventDescription').parent().addClass('has-success');			
			if (!$('#eventDescription').parent().find('.error-message').hasClass('hide')){
				$('#eventDescription').parent().find('.error-message').addClass('hide');
			}
			descriptionError= false;
		}
		
		
	});
	
	
	$('#requestform').on('submit', function(){
		if (nameError || emailError || phoneErrror || dateError || startTimeError || endTimeError|| descriptionError)
			alert("Please review the fields before clicking continue");
		else
			alert("Request Submitted");
	});
});