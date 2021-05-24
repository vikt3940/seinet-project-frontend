$(document).ready(function(){
	document.querySelector('#submit').addEventListener("click",()=>{
		var url = $("#urlid").val();
	  	$.ajax({
	        url: `https://api.classiq.in/api/generateurl`,
	        type: 'POST',
	        cache: 'false',
	        data: {"url":url.trim()},
	        success: function(obj) {
	            if (obj.response) {
	            	$("#output").html("<a target=;_blank' href='"+obj.url+"'>"+obj.url+"</a>");	
	            }else{
	            	swal(obj.responseString);
	            }        
	        },
	        error: function(error) {
	            swal("Error");
	        }
	    })
	})
});