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
	/*$(".desplegableAbstract, .desplegador").click(function(e) {
            e.preventDefault();
            var $desplegable = $(this).parent().find('.desplegableAbstract');
            if ($(e.target).hasClass("closeX")) {
                return;
            }
            if ($desplegable.hasClass("desplegado") || $(e.target).hasClass('globalCloseX')) {
                $(".desplegableAbstract").removeClass("desplegado");
            } else {
                $(".desplegableAbstract").removeClass("desplegado");
                $desplegable.toggleClass("desplegado");
            }
        });
    $(document).mouseup(function(e) {
            var $desplegable = $(e.target).closest('.desplegableAbstract');
            if ($desplegable.length > 0 && !$(e.target).hasClass('globalCloseX')) {
                return false;
            }
            if (!$(e.target).hasClass('desplegador')) {
                $(".desplegado").removeClass("desplegado");
            }
            return true;
    });
*/
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