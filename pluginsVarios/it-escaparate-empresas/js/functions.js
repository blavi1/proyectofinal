/**
 * Funciones.
 */
jQuery(document).ready(function($) {
    
    var url_global = object_name.url_global; // Empresas
    var url_global_advertisements = object_name.url_global_advertisements; // Anuncios
    var url_detalles_empresa = 'ver-empresa';
    var url_detalles_anuncio = 'ver-anuncio';

    //Detecta si existe el div de las empresas y dependiendo del content hace una cosa u otra
    if($('#companies-block').length > 0){
        var divElement = $('#companies-block');
        var content = divElement.data('content');
        if(content == 0){
            var sector = divElement.data('sector');
            var total = divElement.data('total');
            var url = url_global + '?jsonp=1';
            var info = [];
            info["element"] = divElement;
            request_ajax(url, "build_company_list_home" ,info);
        }else{
            var sector = divElement.data('sector');
            var letra = divElement.data('letra');
            var localidad = divElement.data('localidad');
            var url_parameters = '';
            if(sector > 0)url_parameters += '&activity_sector=' + sector;
            if(localidad > 0)url_parameters += '&locality=' + localidad;
            if(letra)url_parameters += '&letter=' + letra;
            
            var url = url_global + '?jsonp=1' + url_parameters + "&page=1";
            var info = [];
            info["element"] = divElement;
            request_ajax(url, "build_company_list", info);
        }
    }

    //Detecta si existe el div de los detalles de la compañia y hace las peticiones de datos
    if($('#company-detail').length > 0){
        var element = $('#company-detail');
        var company = element.data('company');
        var url = url_global + company + '/?jsonp=1';
        var info = [];
        info["element"] = element;
        request_ajax(url, "show_company_details", info);
    }

    //Detecta si existe el div de los detalles de un anuncio y hace las peticiones de datos
    if($('#advertisements-detail').length > 0){
        var element = $('#advertisements-detail');
        var advertisements = element.data('advertisements');
        var url = url_global_advertisements + advertisements + '/?jsonp=1';
        var info = [];
        info["element"] = element;
        request_ajax(url, "show_advertisement_detail", info);
    }
    

    //Detecta si existe el div de los anuncios y hace las peticiones
    if ( $('#advertisements-block').length > 0 ) {
        var element = $('#advertisements-block');
        var content = element.data('content');
        if(content == 0){
            var total_advertisements = element.data('total');
            var url = url_global_advertisements + '?jsonp=1';
            var info = [];
            info["total_advertisements"] = total_advertisements;
            info["element"] = element;
            request_ajax(url, "build_advertisements_home", info);
        }else{
            var category = element.data('category');
            var url_parameters = '';
            if ( category != "all" && category != "" ) url_parameters += '&category=' + category;
            var url = url_global_advertisements + '?jsonp=1' + url_parameters + "&page=1";
            var info = [];
            info["element"] = element;
            request_ajax(url, "build_advertisements", info);
        }
    }

    /**
     * Hace todas las peticiones AJAX
     * 
     * @param url a la que hace la peticion, function a la que llama, info que necesite la funcion
     */
    function request_ajax(url, action, info){
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            success: function(result, textStatus, request) {
                switch(action){
                    case "build_advertisements_home":
                        build_advertisements_home(result, info);
                        break;
                    case "show_company_details":
                        show_company_details(result, info);
                        break;
                    case "build_company_list":
                        build_company_list(result, info);
                        break;
                    case "build_company_list_home":
                        build_company_list_home(result, info);
                        break;
                    case "build_company_list_pagination":
                        build_company_list_pagination(result, info);
                        break;
                    case "build_advertisements":
                        build_advertisements(result, info);
                        break;
                    case "build_advertisements_pagination":
                        build_advertisements_pagination(result, info);
                        break;
                    case "show_advertisement_detail":
                        show_advertisement_detail(result, info);
                        break;
                }
            }
        });
    }
    
    //Pinta la lista de compañias en la home
    function build_company_list_home(result, info){
        result = result["results"];
        var divElement = info["element"];
        for(var i = 0; i < total; i++){
            var img_url = iconos_sectores(result[i]['activity_sector_data']['id']);
            var company = '<div class="col-md-3">';
            
            company += '<img src="' + object_name.templateUrl + img_url + '">';
            
            company += '<h3>' + cutString(result[i]['name'], 5) + '</h3>' +
                '<p>' + cutString(result[i]['description'], 40) + '</p>' +
                '<a href="./' + url_detalles_empresa + '/?empresa=' + result[i]['id'] + '">MÁS INFO</a>' +
                '</div>';
            divElement.append(company);
        }
        divElement.append('<div class="clearfix"></div>');
    }

    //Pinta todas las empresas en el listado de la página interna
    function build_company_list(result, info){
        var count = result["count"];
        result = result["results"];
        var divElement = info["element"];
        
        for ( var i = 0; i < result.length; i++ ) {
            var img_url = iconos_sectores(result[i]['activity_sector_data']['id']);
            var company = '<div class="col-md-3">';

            company += '<img src="' + object_name.templateUrl + img_url + '">';

            company += '<h3>' + cutString(result[i]['name'], 15) + '</h3>' +
                '<p>' + cutString(result[i]['description'], 40) + '</p>' +
                '<a href="../' + url_detalles_empresa + '/?empresa=' + result[i]['id'] + '">MÁS INFO</a>' +
                '</div>';
            divElement.append(company);
        }
        
        divElement.append('<div class="clearfix"></div>');

        count = Math.ceil(count / 20);
        pagination_empresas(count, info);
    }

    /**
     * Añade la paginación a las empresas y llama a otra función que cambia
     * las empresas según la página
     */
    function pagination_empresas(count, info){
        $('#pagination').bootpag({
            total: count,
            maxVisible: 5,
            firstLastUse: true,
            first: '←',
            last: '→'
        }).on("page" , function(event, num) {

            var divElement = info["element"];
            var sector = divElement.data('sector');
            var letra = divElement.data('letra');
            var localidad = divElement.data('localidad');
            var url_parameters = '';

            if(sector > 0)url_parameters += '&activity_sector=' + sector;
            if(localidad > 0)url_parameters += '&locality=' + localidad;
            if(letra)url_parameters += '&letter=' + letra;
            
            var url = url_global + '?jsonp=1' + url_parameters + "&page=" + num;
            request_ajax(url, "build_company_list_pagination", info);
        });
    }

    //Pinta todas las empresas en el listado de la página interna
    function build_company_list_pagination(result, info){
        var count = result["count"];
        result = result["results"];
        var divElement = info["element"];

        divElement.empty();

        for(var i = 0; i < result.length; i++){
            var img_url = iconos_sectores(result[i]['activity_sector_data']['id']);
            var company = '<div class="col-md-3">';

            company += '<img src="' + object_name.templateUrl + img_url + '">';
            

            company += '<h3>' + cutString(result[i]['name'], 15) + '</h3>' +
                '<p>' + cutString(result[i]['description'], 65) + '</p>' +
                '<a href="../' + url_detalles_empresa + '/?empresa=' + result[i]['id'] + '">MÁS INFO</a>' +
                '</div>';
            divElement.append(company);
        }
        divElement.append('<div class="clearfix"></div>');
    }

    //Pinta los anuncios en la home
    function build_advertisements_home(result, info) {
        result = result["results"];
        var total_advertisements = info["total_advertisements"];
        var element = info["element"];
        for(var i = 0; i < total_advertisements; i++) {
            var advertisements = '<div class="col-md-4"><div class="advertisement">';
            var descripcion = result[i]["message"];
	        descripcion = descripcion.replace( /<[^>]*>?/g, '' );    
	        descripcion = cutString(descripcion, 60);
            advertisements += '<h3>' + cutString(result[i]["title"], 40) + '</h3>';
            advertisements += '<p>' + descripcion + '</p>';
            advertisements += '<a href="./' + url_detalles_anuncio + '/?anuncio=' + result[i]['id'] + '">MÁS INFO</a>';
            advertisements += '</div></div>';

            element.append(advertisements);
        }
    }

    //Pinta la lista de los anuncios
    function build_advertisements(result, info){
        var count = result["count"];
        result = result["results"];
        var element = info["element"];

        for ( var i = 0; i < result.length ; i++ ){
	    var descripcion = result[i]["message"];
	    descripcion = descripcion.replace( /<[^>]*>?/g, '' );	    
	    descripcion = cutString(descripcion, 100);
            var advertisements = '<div class="col-md-4"><div class="advertisement">';
            
            advertisements += '<h3>' + cutString(result[i]["title"], 40) + '</h3>';
            advertisements += '<p>' + descripcion + '</p>';
            advertisements += '<a href="../' + url_detalles_anuncio + '/?anuncio=' + result[i]['id'] + '">MÁS INFO</a>';
            advertisements += '</div></div>';

            element.append(advertisements);
        }

        count = Math.ceil(count / 20);
        pagination_advertisement(count, info);
    }


    /**
     * Añade la paginación a los anuncios y llama a otra función que cambia
     * los anuncios según la página
     */
    function pagination_advertisement(count, info){
        $('#pagination').bootpag({
            total: count,
            maxVisible: 5,
            firstLastUse: true,
            first: '←',
            last: '→'
        }).on("page" , function(event, num) {

            var category = element.data('category');
            var url_parameters = '';
            if ( category != "all" && category != "" ) url_parameters += '&category=' + category;
            var url = url_global_advertisements + '?jsonp=1' + url_parameters + "&page=" + num;
            request_ajax(url, "build_advertisements_pagination", info);
        });
    }
    
    //Pinta la lista de los anuncios cuando se pagina
    function build_advertisements_pagination(result, info){
        var count = result["count"];
        result = result["results"];
        var element = info["element"];

        element.empty();

        for ( var i = 0; i < result.length ; i++ ){
	    var descripcion = result[i]["message"];
	    descripcion = descripcion.replace( /<[^>]*>?/g, '' );	    
	    descripcion = cutString(descripcion, 100);
            var advertisements = '<div class="col-md-4"><div class="advertisement">';
            
            advertisements += '<h3>' + cutString(result[i]["title"], 40) + '</h3>';
            advertisements += '<p>' + descripcion + '</p>';
            advertisements += '<a href="./' + url_detalles_anuncio + '/?anuncio=' + result[i]['id'] + '">MÁS INFO</a>';
            advertisements += '</div></div>';

            element.append(advertisements);
        }
    }

    //Pinta los detalles de una empresa
    function show_company_details(result, info){
        var element = info["element"];

        var company_details = "";
        company_details += "<h2>" + result['name'] + "</h2>";
        company_details += "<h3>" + result['activity_sector_data']['name'] + "</h3>";
        
        company_details += "<div class='row'>";
        
        company_details += "<div class='col-md-3'>";
        if(result['image'] != null){
            company_details += "<img src='" + result['image'] + "'>";
        }else{
            var img_url = iconos_sectores(result['activity_sector_data']['id']);
            company_details += "<img src='" + object_name.templateUrl + img_url + "'>";
        }
        company_details += "</div>";

        company_details += "<div class='col-md-9'>";
        company_details += "<div class='detalles'><strong>Dirección:</strong> " + result['address'] + " " + result['zip_code']  + "</div>";
        company_details += "<div class='detalles'><strong>Localidad:</strong> " + result['locality_data']['name'] + "</div>";
        company_details += "<div class='detalles'><strong>Teléfono:</strong>  <a href='tel:" + result['phone'] + "'>" + result['phone'] + "</a></div>";
        company_details += "<div class='detalles'><strong>Fax:</strong> <a href='fax:" + result['fax'] + "'>" + result['fax'] + '</a>' + "</div>";                
        company_details += "<div class='detalles'><strong>Email:</strong> <a href='mailto:" + result['email'] + "'>" + result['email'] + '</a>' + "</div>";
        company_details += "<div class='detalles'><strong>Web:</strong> <a href='" + result['web'] + "'>" + result['web'] + "</a>" + "</div>";
        company_details += "<div class='descripcion'><strong>Descripción:</strong><br>"+ result['description'] + "</div>";
        company_details += "</div>";

        company_details += "</div>";
        
        element.append(company_details);
    }

    //Pinta los detalles de un anuncio
    function show_advertisement_detail(result, info){
        var element = info["element"];
        var date = new Date(result['creation_datetime']);
        var fecha = date.getDate() + '-' + (date.getMonth()+1) + '-'+ date.getFullYear();

        var advertisement_detail = "";
        advertisement_detail += "<h2>" + result['title'] + "</h2>";
        advertisement_detail += "<h3>" + fecha + " · " + result['category_display'] + " </h3>";
        
        advertisement_detail += "<div class='row'>";
        
        advertisement_detail += "<div class='col-md-12'>";
        advertisement_detail += "<p>" + result["message"] + "</p>"
        advertisement_detail += "</div>";

        advertisement_detail += "</div>";
        
        element.append(advertisement_detail);
    }
    function iconos_sectores(id){
        var primario = [1,2,3,4];
        var industria = [5,6,7,8,9,10,11,12,13];
        var construccion = [14,15,16,17,45];
        var comercio = [18,19,20,21,23,28];
        var hosteleria = [24,25,26,27,30];
        var empresariales = [22,29,31,32,33,34,35,36,37,38,39];
        var formacion = [40,41,46];
        var salud = [42,43,44,50];
        var cultura = [47,48,49];
        
        if(primario.indexOf(id) > -1){
            return "sector-primario.png";
        }
        if(industria.indexOf(id) > -1){
            return "industria.png";
        }
        if(construccion.indexOf(id) > -1){
            return "construccion-instalaciones.png";
        }
        if(comercio.indexOf(id) > -1){
            return "comercio.png";
        }
        if(empresariales.indexOf(id) > -1){
            return "servicios-empresariales.png";
        }
        if(formacion.indexOf(id) > -1){
            return "formacion.png";
        }
        if(salud.indexOf(id) > -1){
            return "salud.png";
        }
        if(cultura.indexOf(id) > -1){
            return "actividades-artisticas.png";
        }
        if(hosteleria.indexOf(id) > -1){
            return "hosteleria.png";
        }
    }

    // Función para convertir los caracteres ASCII a UTF-8
    function TildesHtml(cadena) {
        String.prototype.replaceArray = function (find, replace) {
        var replaceString = this;
        for (var i = 0; i < find.length; i++) {
            // global replacement
            var pos = replaceString.indexOf(find[i]);
            while (pos > -1) {
                replaceString = replaceString.replace(find[i], replace[i]);
                pos = replaceString.indexOf(find[i]);
            }
        }
        return replaceString;
        };

        var find = ["&aacute;","&eacute;","&iacute;","&oacute;","&uacute;","&ntilde;",
                    "&Aacute;","&Eacute;","&Iacute;","&Oacute;","&Uacute;","&Ntilde;",
                    "&ordm;","&ldquo;","&rdquo;","&hellip;","&nbsp;"];
        var replace = ["á","é","í","ó","ú","ñ","Á","É","Í","Ó","Ú","Ñ","º","\"","\"","...",""];

        t = cadena.replaceArray(find, replace);

        return t;
   }

    //Corta los strings por palabras
    function cutString(text, words) {
        textF = TildesHtml(text);
        var wordsQuantity = textF.trim().split(" ");
        if (wordsQuantity.length > words) {
            words += 10;
            var text = jQuery.trim(textF).substring(0, words).split(" ").slice(0, -1).join(" ") + "...";
        }
        if (wordsQuantity.length < words && words >= 45 || wordsQuantity.length > 10){
            words += 10;
            var text = jQuery.trim(textF).substring(0, words).split(" ").slice(0, -1).join(" ") + "...";
        }
        return text;
    }
});

