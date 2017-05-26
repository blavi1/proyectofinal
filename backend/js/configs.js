jQuery(document).ready(function ($) {
	//$('[data-toggle="popover"]').popover();//Para abrir los popovers

	$('.desplegador').click(function(){
		$(".desplegableAbstract").toggleClass("desplegado");
		
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

	

	$('#addLinks').click(function(){			
		var temp = {
			state0: {
				title: '¿Qué quieres añadir?',
				html:'<label class="radio" for="rate_content_poor">' +
						'<input type="radio" name="tipo_enlace" id="rate_content_poor" value="peli" class="radioinput" checked/>Añadir un enlace a una película o documental' +
					'</label>' +
					'<label class="radio" for="rate_content_ok"><input type="radio" name="tipo_enlace" id="rate_content_ok" value="epi" class="radioinput" />Añadir un enlace a un capítulo de serie o programa TV' +
					'</label>',
				buttons: { Cancelar: false, Siguiente: true },
				focus: 1,
				submit:function(e,v,m,f){ 
					if(!v)
						$.prompt.close()
					else if ($('input[name=tipo_enlace]:checked').val() == 'peli'){
						$.prompt.goToState('state1');
					}else if ($('input[name=tipo_enlace]:checked').val() == 'epi')
						$.prompt.goToState('state2');//go forward
					return false; 
				}
			},
			state1: {
				title: 'Elige la película',
				html:'<form id="pelisAc" class="search popupanswer done" method="POST">'+
						'<input type="text" name="busqueda" id="inputBusqueda" value="" placeholder="Escribe el nombre de la película que buscas" maxlength="30" autocomplete="off" onKeyUp="buscar();" />'+
						'<input type="hidden" name="choice" value="peli">'+
						'<input type="hidden" name="ref_model" value="4">'+
						'<div class="autocompleteResults" id="resultadoBusqueda">'+
							'<div class="load">'+
								'<img src="/images/loading-mini.gif" class="loader">'+
							'</div>'+
						'</div>'+
					  '</form>',
				buttons: { Volver: -1, Cancelar: 0,   Siguiente: 1 },
				focus: 2,
				submit:function(e,v,m,f){
					if(v==0)
						$.prompt.close()
					else if(v=-1)
						$.prompt.goToState('state0');//go back
					else if(v==1 && f.busqueda != 'undefined')
						$.prompt.goToState('state3');//go forward
					
					console.log("No tiene valor");			
					/*if(f.busqueda != 'undefined')
						console.log("No tiene valor");
					else 
						console.log("Valor: " + f.busqueda);*/
					$.prompt.goToState('state2')
					return false
				}
			},
			state2: {
				title: 'Elige la serie',
				html:'<form id="pelisAc" class="search popupanswer done" method="GET" action="/links/choose">'+
						'<input autocomplete="off" class="rounded1" type="text" name="q" placeholder="Escribe el nombre de la serie que buscas">'+
						'<input type="hidden" name="choice" value="peli">'+
						'<input type="hidden" name="ref_model" value="4">'+
						'<div class="autocompleteResults">'+
							'<div class="load">'+
								'<img src="/images/loading-mini.gif" class="loader">'+
							'</div>'+
						'</div>'+
					  '</form>',
				buttons: { Volver: -1, Cancelar: 0,   Siguiente: 1 },
				focus: 2,
				submit: function(e, v, m, f){
					if (v == 0) 
						$.prompt.close()
					else 
						if (v == 1) 
							$.prompt.goToState('state3');//go forward
						else 
							if (v = -1) 
								$.prompt.goToState('state0');//go back
					return false;
				}
			},
			state3: {
				title: 'Additional Comments',
				html:'<p>Please leave any other comments you have about this site:</p><div class="field"><textarea id="rate_comments" name="rate_comments"></textarea></div>',
				buttons: { Back: -1, Cancel: 0, Finish: 1 },
				focus: 2,
				submit:function(e,v,m,f){ 
					if(v==0) 
						$.prompt.close()
					else if(v==1)								
						return true; //we're done
					else if(v=-1)
						$.prompt.goToState('state2');//go back
					return false; 
				}
			}
		}
		
		$.prompt(temp,{
			close: function(e,v,m,f){
				if(v !== undefined){
					var str = "You can now process with this given information:<br />";
					$.each(f,function(i,obj){
						str += i + " - <em>" + obj + "</em><br />";
					});
					var json = f;	
					$('.div_contenido').html(json);
					//console.log(json.busqueda);
				}
			},
			loaded: function(e) {
				if ($(e.target).closest('.jqi'))
					$('.jqi').addClass('boxPop');
				if ($(e.target).closest('.jqibuttons')){
					$('#jqi_state1_buttonVolver').addClass('btn-primary');
					$('#jqi_state2_buttonVolver').addClass('btn-primary');
				}else
					console.log("no se puede hacer asi");
			},
			classes: {
				box: '',
				fade: '',
				prompt: '',
				close: '',
				title: 'lead',
				message: '',
				buttons: '',
				button: 'btn',
				defaultButton: 'btn-primary'
			}
		});
	});
});

function buscar() {
	var textoBusqueda = $('#inputBusqueda').val();
	if (textoBusqueda != "") {
	       $.post("buscar.php", {valorBusqueda: textoBusqueda}, function(mensaje) {
	           $("#resultadoBusqueda").html(mensaje);
	       }); 
	   } else { 
	       $("#resultadoBusqueda").html('<p>JQUERY VACIO</p>');
	};
}
