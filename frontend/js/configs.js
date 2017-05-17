jQuery(document).ready(function ($) {
	//$('[data-toggle="popover"]').popover();//Para abrir los popovers

	$('.desplegador').click(function(){
		$(".desplegableAbstract").toggleClass("desplegado");
		if ($(".desplegableAbstract").hasClass("desplegado")){
			//$(".desplegableAbstract").removeClass("desplegado");
		}
	});

	$(document).mouseup(function(e){
		e.preventDefault();
		var $desplegable = $(e.target).closest('.desplegableAbstract');
		if ($('.desplegableAbstract').hasClass("desplegado")){
			e.preventDefault();
			$(".desplegableAbstract").removeClass("desplegado");
		}
		if ($desplegable.hasClass("desplegado") || $(e.target).hasClass('globalCloseX')) {
            $(".desplegableAbstract").removeClass("desplegado");
        }else {
            $(".desplegableAbstract").removeClass("desplegado");
            $desplegable.toggleClass("desplegado");
        }
	});
	
    /*$(document).ready(function (e) {
	    $(".poyua").click(function(e){
	        alert("Hola" + e.target.nodeName);
	    });
	});*/
	/*$(document).mouseup(function(e){
	    $(e.target).click(function(e){
	    	console.log(e.target);
	    	//alert("Hola" + e.target.nodeName);
	    });	        
	});*/

});