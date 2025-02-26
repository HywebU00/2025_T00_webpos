$( document ).ready(function() {
	   $("a").each(function(){
		//$("[loc]").each(function(){
		$(this).click(function(event){
	    	var src = encodeURIComponent(window.location.href) ; 
	    	var loc = encodeURIComponent($(this).attr("loc") || "error" );	
	    	var target = encodeURIComponent($(this).attr("href")  || "error");	
	    	if(typeof event.pageX != "undefined"){
	    		$.ajax({async: false, url: '/hit/count?loc='+loc+"&src="+src+"&target="+target , success: function (result) {}});
	    	}
		});
	});
});