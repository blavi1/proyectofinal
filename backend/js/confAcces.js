// FUNCIONES JQuery PARA EL FORMULARIO DEL LOGIN Y REGISTRO
jQuery(document).ready(function($){
	// Función que controla la accion del formulario 
	$('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	var mensaje = $("#alertError");
    //Ocultamos el contenedor
    mensaje.hide();

    // Cuando el formulario con ID login-form se envie..
    $('#login-form').submit( function (e) {
        //Evitamos que se envíe por defecto
        e.preventDefault();

        var getdetails = function(formData){
            return $.post( "recursos/acceder.php", formData);
        }
        //Creamos un FormData con los datos del mismo formulario
        var formData = $(this).serialize();

        //Llamamos a la función 
        getdetails(formData)
        .done(function(data){
              //Una vez que recibimos respuesta
              //comprobamos si la respuesta no es vacía
              if (data !== "") {
                //Si hay respuesta (error), mostramos el mensaje
                mensaje.html(data);
                mensaje.slideDown(500);
              } else {
                //Si no hay respuesta, redirecionamos a donde sea necesario
                //Si está vacío, recarga la página
                window.location.assign('');
              }
        }).fail(function(jqXHR, textStatus, errorThrown){
              mensaje.html("Algo ha fallado: " +  textStatus + ' ' + errorThrown);
        });
    });

    var labelE = $("alert");
    // Cuando el formulario con ID register-form se envie..
    $('#register-form').submit( function (e) {
        //Evitamos que se envíe por defecto
        e.preventDefault();

        var getdetails = function(formData){
            return $.post( "recursos/registrar.php", formData);
        }
        //Creamos un FormData con los datos del mismo formulario
        var formData = $(this).serialize();

        //Llamamos a la función 
        getdetails(formData)
        .done(function(data){
            //Si hay respuesta (error), mostramos el mensaje
            if (mensaje.hasClass('s')){
            	mensaje.addClass('alert-success').removeClass('s alert-danger');            	
            }
            mensaje.html(data);
        	mensaje.slideDown(500);
        }).fail(function(jqXHR, textStatus, errorThrown){
            mensaje.html("Algo ha fallado: " +  textStatus + ' ' + errorThrown);
        });
    });
    
});