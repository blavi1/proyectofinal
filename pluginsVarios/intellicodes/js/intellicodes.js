jQuery(document).ready(function($) {
	$('.ver-mas-button').on('submit', function(e) {
		e.preventDefault();
        var data = $('.ver-mas-button').serialize();
		$.ajax({
            type: "POST",
            url: "../wp-admin/admin-ajax.php",
            data: data,
            success: function(data){
                if(data != 0){
                    $("#itcustomposts_mas").append(data);
                    var valor = $(".ver-mas-button #cargados").val();
                    valor++;
                    $(".ver-mas-button #cargados").val(valor);
                }else{
                    $(".ver-mas-button #vermas").prop( "disabled", true );
                    $(".ver-mas-button #vermas").addClass("desactivado");
                }
            }
        });
	});

    $('.ver-mas-button-acordeon').on('submit', function(e) {
		e.preventDefault();
        var data = $('.ver-mas-button-acordeon').serialize();
		$.ajax({
            type: "POST",
            url: "../wp-admin/admin-ajax.php",
            data: data,
            success: function(data){
                if(data != 0){
                    $("#itacordeon_mas").append(data);
                    var valor = $(".ver-mas-button-acordeon #cargados").val();
                    valor++;
                    $(".ver-mas-button-acordeon #cargados").val(valor);
                }else{
                    $(".ver-mas-button-acordeon #vermas").prop( "disabled", true );
                    $(".ver-mas-button-acordeon #vermas").addClass("desactivado");
                }
            }
        });
	});

    $('.ver-mas-button-exito').on('submit', function(e) {
		e.preventDefault();
        var data = $('.ver-mas-button-exito').serialize();
		$.ajax({
            type: "POST",
            url: "../wp-admin/admin-ajax.php",
            data: data,
            success: function(data){
                if(data != 0){
                    $("#itcasosexito_mas").append(data);
                    var valor = $(".ver-mas-button-exito #cargados").val();
                    valor++;
                    $(".ver-mas-button-exito #cargados").val(valor);
                }else{
                    $(".ver-mas-button-exito #vermas").prop( "disabled", true );
                    $(".ver-mas-button-exito #vermas").addClass("desactivado");
                }
            }
        });
	});


    //Carga el contenido de un caso de exito
    $('body').on('submit', '.ver-caso-exito', function(e) {
		e.preventDefault();
        var data = $(this).serialize();
		$.ajax({
            type: "POST",
            url: "../wp-admin/admin-ajax.php",
            data: data,
            success: function(data){
                $(".ver_caso_exito").html(data);
            }
        });
	});

    //Abre el acordeon al clickearlo
    $('.itacordeon').on('click','.titulo_acordeon', function(){
        $(this).toggleClass('activo')
        $(this).next().slideToggle( "slow");
    });
    

    //Slider de casos de exito de la home
    $('.bxslider').bxSlider({
        auto: true,
        controls: false
    });
    
    //Carga el contenido de un caso de exito que llega desde la home
    if($('#cargar_caso_exito').length > 0){
        var idpost = $('#cargar_caso_exito').data('id');

        var data = 'idpost='+idpost+'&action=abrir_caso_exito';
        $.ajax({
            type: "POST",
            url: "../wp-admin/admin-ajax.php",
            data: data,
            success: function(data){
                $(".ver_caso_exito").html(data);
            }
        });
    }
});