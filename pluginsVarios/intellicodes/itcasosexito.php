<?php

add_shortcode('itcasosexito', 'itcasosexito');
function itcasosexito($atts, $content = null){
    extract(shortcode_atts(array(
        'post_type'    =>  '',
        'categoriavc'    =>  ''
    ), $atts));
    $id_caso_exito    = intval($_GET['id_caso_exito']);
    $categoria  = intval($_GET['id_custom_category']);

    $return = "<div class='itcasosexito'>";
    $return .= do_shortcode( "[it_categories_list categorias='".$categoriavc."' id_categoria='".$categoria."' tipo_post='".$post_type."']" );
    $return .= '</div>';

    $return .= '<div class="ver_caso_exito"></div>';
    
    if($id_caso_exito > 0){
        $return .= '<div id="cargar_caso_exito" data-id="'.$id_caso_exito.'"></div>';
    }

    $return .= "<div class='itcasosexito'>";
    $return .= obtener_casos_exito($post_type, $categoria, 0);
    $return .= '</div>';

    $return .= '<div class="itcasosexito"><div id="itcasosexito_mas"></div></div>';
    $return .= '<form class="ver-mas-button-exito" method="post">';
    $return .= '<input type="hidden" name="post_type" value="'.$post_type.'">';
    $return .= '<input type="hidden" name="categoria" value="'.$categoria.'">';
    $return .= '<input type="hidden" id="cargados" name="cargados" value="2">';
    $return .= '<input type="hidden" name="action" value="cargar_mas_casos_exito">';
    $return .= '<input type="submit" id="vermas" value="MOSTRAR MÁS CASOS">';
    $return .= '</form>';

    return $return;
}

/* Devuelve posts dependiendo del post type, categoria y offset */
function obtener_casos_exito($post_type, $categoria, $offset){
    if($categoria == -1 || $categoria == 0){
        $categoria = '';
    }
    $args = array(   
        'post_type' => $post_type,   
        'posts_per_page' => 12,
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
        $string = recortar(get_the_content(), 10);
        $titulo = get_the_title();
        $imagen = get_the_post_thumbnail_url();

        $return .= '<div class="vc_col-sm-4">';
        $return .= '<div class="contenido_caso_exito">';
        if( !$imagen ) {
            $return .= '<img src="'.plugins_url( 'img/caso_exito.jpg', __FILE__ ).'">';
        } else {
            $return .= '<img src="'.$imagen.'">';
        }
        
        $return .= '<div class="contenido">';
        $return .= '<h4>'.$titulo.'</h4>';
        $return .= '<p>'.$string.'</p>';
        $return .= '<form class="ver-caso-exito" method="post">';
        $return .= '<input type="hidden" id="idpost" name="idpost" value="'.get_the_id().'">';
        $return .= '<input type="hidden" name="action" value="abrir_caso_exito">';
        $return .= '<input type="submit" value="VER CASO">';
        $return .= '</form>';
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


add_action( 'wp_ajax_cargar_mas_casos_exito', 'cargar_mas_casos_exito' );
add_action( 'wp_ajax_nopriv_cargar_mas_casos_exito', 'cargar_mas_casos_exito' );
function cargar_mas_casos_exito() {
    $offset = $_POST['cargados'] * 8;
    $categoria = $_POST['categoria'];
    $post_type = $_POST['post_type'];

    $return = obtener_casos_exito($post_type, $categoria, $offset);
    if($return){
        echo $return;
    }else{
        echo 0;
    }
    die();
}

add_action( 'wp_ajax_abrir_caso_exito', 'abrir_caso_exito' );
add_action( 'wp_ajax_nopriv_abrir_caso_exito', 'abrir_caso_exito' );
function abrir_caso_exito() {
    $idpost = intval($_POST['idpost']);
    $post = get_post($idpost);
    $fecha = date_create($post->post_date);
    $subtitulo = get_post_meta($idpost, 'subtitulo')[0];
    $urlimagen = get_the_post_thumbnail_url($post);
    echo " <div class='cabecera_caso_exito'>
                <div class='imagen_exito'><img src='".$urlimagen."'></div>
                <div class='titulo_exito'><h2>".$post->post_title."</h2>";
    if($subtitulo){
        echo "<h3>".$subtitulo."</h3>";
    }

    echo "<h4>".date_format($fecha, 'd/m/Y')."</h4></div>
                <div class='clearfix'></div>
            </div>
            <div class='contenido_caso_exito'>".$post->post_content."</div>";
    die();
}

function recortar($phrase, $max_words) {
    $phrase_array = explode(' ',$phrase);
    if(count($phrase_array) > $max_words && $max_words > 0)
        $phrase = implode(' ',array_slice($phrase_array, 0, $max_words)).' ...';
    return $phrase;
}