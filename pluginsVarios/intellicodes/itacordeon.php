<?php

add_shortcode('intelli_acordeon', 'intelli_acordeon');
function intelli_acordeon($atts, $content = null){
    extract(shortcode_atts(array(
        'post_type'    =>  '',
        'categoriavc'    =>  ''
    ), $atts));
    $busqueda = '';
    if(isset($_GET['busqueda'])){
        $busqueda = sanitize_text_field($_GET['busqueda']);
    }
    $categoria = intval($_GET['id_custom_category']);
    $return = "<div class='itacordeon'>";
    $return .= do_shortcode( "[it_categories_list categorias='".$categoriavc."' id_categoria='".$categoria."' tipo_post='".$post_type."']" );
    if($post_type == 'incentivo' || $post_type == 'documento_de_interes'){
        $return .= '<form class="buscador_acordeon" method="get">';
        $return .= '<input type="hidden" name="id_custom_category" value="'.$categoria.'">';
        $return .= '<input type="hidden" name="tipo_post" value="'.$post_type.'">';
        $return .= '<input type="text" name="busqueda" placeholder="Buscar..." value="'.$busqueda.'">';
        $return .= '<input type="submit" value="BUSCAR">';
        $return .= '</form>';
    }
    $return .= obtener_posts_acordeon($post_type, $categoria, 0, $busqueda);
    $return .= '</div>';
    
    /*$return .= '<div class="separador_inscribete"><div class="contenedor_cuadro_inscribete"><div class="cuadro_inscribete">
        <h2 style="font-size: 30px;text-align: left;color: #ffffff;"> CUÉNTANOS TU PROYECTO EMPRESARIAL</h2>	
        <h4 style="font-size: 16px;text-align: left;color: #ffffff;"> Podremos ayudarte sea cual sea la fase en la que se encuentre</h4>	
        <a href="'.get_site_url().'/contacto/" class="btn btn-lg btn-default ">CONTACTAR</a>
        </div></div></div>';*/

    $return .= "<div class='itacordeon'>";
    $posts2 = obtener_posts_acordeon($post_type, $categoria, 6, $busqueda);
    $return .= $posts2;
    $return .= '</div>';

    if($posts2 != ''){
        $return .= '<div class="itacordeon"><div id="itacordeon_mas"></div></div>';
        $return .= '<form class="ver-mas-button-acordeon" method="post">';
        $return .= '<input type="hidden" name="post_type" value="'.$post_type.'">';
        $return .= '<input type="hidden" name="categoria" value="'.$categoria.'">';
        $return .= '<input type="hidden" name="busqueda" value="'.$busqueda.'">';
        $return .= '<input type="hidden" id="cargados" name="cargados" value="2">';
        $return .= '<input type="hidden" name="action" value="cargar_mas_posts_acordeon">';
        $return .= '<input type="submit" id="vermas" value="VER MÁS">';
        $return .= '</form>';
    }
    return $return;
}

/* Devuelve posts dependiendo del post type, categoria y offset */
function obtener_posts_acordeon($post_type, $categoria, $offset, $busqueda){
    if($categoria == -1 || $categoria == 0){
        $categoria = '';
    }
    $args = array(   
        's' => $busqueda,
        'post_type' => $post_type,   
        'posts_per_page' => 6,
        'offset' => $offset,
        'orderby' => 'date',
        'order' => 'DEC',
        'meta_key' => 'categoria',
        'meta_value' => $categoria
    );  
    $wp_query = new WP_Query($args);
    $return .= '<div class="row">';
    $resultados = 0;
    while($wp_query->have_posts()) : $wp_query->the_post();
        $archivo = get_post_meta(get_the_ID(), 'archivo_adjunto');
        $titulo = get_post_meta(get_the_ID(), 'titulo')[0];
        $autorinforme = get_post_meta(get_the_ID(), 'autor_informe')[0];
        $paginasinforme = get_post_meta(get_the_ID(), 'paginas_informe')[0];
        $anyoedicion = get_post_meta(get_the_ID(), 'anyo_edicion')[0];
        $metaeditor = get_post_meta(get_the_ID(), 'meta_editor')[0];
        $resumen = get_post_meta(get_the_ID(), 'resumen')[0];
        $enlacerelacionado = get_post_meta(get_the_ID(), 'enlace_relacionado')[0];
        
        $categoria = get_post_meta(get_the_id(), 'categoria');
        $nombrecategoria = $categoria[0]['name'];
        $categoria = $categoria[0]['term_id'];
        $iconoid = get_term_meta($categoria)['icono'][0];
        $icono = wp_get_attachment_image($iconoid);
        
        $return .= '<div class="vc_col-sm-12">';
        $return .= '<div class="contenido">';

        $return .= '<div class="titulo_acordeon">';
        $return .= '<div class="icono">';
        $return .= $icono;
        $return .= '</div>';
        $return .= '<div class="titulo">';
        $return .= '<h3>'.get_the_title().'</h3>';
        $return .= '<h5>'.$nombrecategoria.'</h5>';
        $return .= '</div>';
        $return .= '<div class="clearfix"></div>';
        $return .= '</div>';

        $margin = '';
        if($icono == "" || $icono == null){
            $margin = 'margin-left:0px;';
        }
        $return .= '<div class="descripcion_acordeon" style="'.$margin.'display:none;">';

        if($titulo != '' && $titulo != null){
            $return .= '<div class="metadata"><strong>Titulo:</strong> '.$titulo.'</div>';
        }
        if($autorinforme != '' && $autorinforme != null){
            $return .= '<div class="metadata"><strong>Autor:</strong> '.$autorinforme.'</div>';
        }
        if($paginasinforme != '' && $paginasinforme != null){
            $return .= '<div class="metadata"><strong>Nº de páginas:</strong> '.$paginasinforme.'</div>';
        }
        if($anyoedicion != '' && $anyoedicion != null){
            $return .= '<div class="metadata"><strong>Fecha:</strong> '.$anyoedicion.'</div>';
        }
        if($metaeditor != '' && $metaeditor != null){
            $return .= '<div class="metadata"><strong>Editor:</strong> '.$metaeditor.'</div>';
        }
        if($resumen != '' && $resumen != null){
            $return .= '<div class="metadata"><strong>Resumen:</strong><br>'.$resumen.'</div>';
        }
        

        $return .= '<p>'.nl2br(get_the_content()).'</p>';

        if($archivo[0]['guid'] != '' && $archivo[0]['guid'] != null){
            $return .= '<a class="boton-enlace" href="'.$archivo[0]['guid'].'" target="_blank"><i class="fa fa-download"></i> Archivo adjunto</a>';
        }
        if($enlacerelacionado != '' && $enlacerelacionado != null){
            $return .= '<a class="boton-enlace" href="'.$enlacerelacionado.'" target="_blank"><i class="fa fa-download"></i> Click aquí</a>';
        }

        $return .= '</div>';

        $return .= '</div>';
        $return .= '</div>';

        $resultados = 1;
    endwhile;

    $return .= '</div>';

    if($resultados == 0 ){
        $return = false;
    }
    return $return;
}


add_action( 'wp_ajax_cargar_mas_posts_acordeon', 'cargar_mas_posts_acordeon' );
add_action( 'wp_ajax_nopriv_cargar_mas_posts_acordeon', 'cargar_mas_posts_acordeon' );
function cargar_mas_posts_acordeon() {
    $offset = $_POST['cargados'] * 6;
    $categoria = $_POST['categoria'];
    $post_type = $_POST['post_type'];
    $busqueda = $_POST['busqueda'];

    $return = obtener_posts_acordeon($post_type, $categoria, $offset, $busqueda);
    if($return){
        echo $return;
    }else{
        echo 0;
    }
    die();
}