<?php
/*
Plugin Name: IntelliCodes
Description: Shortcodes personalizados
Author: intelligenia
Version: 1.0.0
*/

add_action('wp_enqueue_scripts', 'unir_css');
function unir_css(){
    wp_register_style( 'intellicodes', plugins_url( 'intellicodes/css/style.css' ) );
    wp_enqueue_style( 'intellicodes' );
    wp_enqueue_style( 'bxslidercss', plugins_url().'/intellicodes/css/jquery.bxslider.css' );
    wp_enqueue_script( 'itcustompost', plugins_url().'/intellicodes/js/intellicodes.js' );
    wp_enqueue_script( 'bxsliderjs', plugins_url().'/intellicodes/js/jquery.bxslider.js' );
}
function admin_style() {
    wp_enqueue_style('admin-styles', plugins_url( 'intellicodes/css/admin.css' ));
    wp_enqueue_script('admin-maps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB3NhVxaRQQLuXpHpUdvGPLgsboevgMJHY&amp;ver=4.5.2');
}
add_action('admin_enqueue_scripts', 'admin_style');

/**
 * Mostrar últimas entradas.
 * Imprime un determinado número de entradas recientes ordenadas por fecha y orden.
 */
add_shortcode('intelli_noticias_rss', 'intelli_noticias_rss');

function intelli_noticias_rss($atts, $content = null) {
    extract(shortcode_atts(array(
        'facebook'      =>  '',
        'twitter'       =>  '',
        'linkedin'      =>  '',
        'rss'           =>  '',
        'googleplus'    =>  '',
        'instagram'     =>  '',
        'youtube'       =>  '',
    ), $atts));

    ob_start();

    $excerpt1 = 15;

    ?>
    <div class="row seccion-noticias-home">
    <?php 
        $entradas_home = [];

        for($i = 0;$i <= 5; $i++) {
            
            switch($i){
                case 0:
                    $tag = "posicion-1";
                    break;
                case 1:
                    $tag = "posicion-2";
                    break;
                case 2:
                    $tag = "posicion-3";
                    break;
                case 3:
                    $tag = "posicion-4";
                    break;
                case 4:
                    $tag = "posicion-5";
                    break;
                case 5:
                    $tag = "posicion-6";
                    break;
            }
            $args = array(
                'post_type' => 'post',
                'category__in' => array(128, 129, 130, 131, 132),
                'tag' => $tag,
                'posts_per_page' => 1,
                'orderby' => 'date',
                'order' => 'DEC'
            );

            $post_query_home = new WP_Query($args);
            if(!$post_query_home->posts){
                $cat_no_tag = "";
                switch($i){
                    case 0:
                        $cat_no_tag = array(129);
                        break;
                    case 1:
                        $cat_no_tag = array(132);
                        break;
                    case 2:
                        $cat_no_tag = array(129);
                        break;
                    case 3:
                        $cat_no_tag = array(131);
                        break;
                    case 4:
                        $cat_no_tag = array(128);
                        break;
                    case 5:
                        $cat_no_tag = array(230);
                        break;
                }
                if(!$entradas_home){
                    $args = array(
                        'post_type' => 'post',
                        'category__in' => $cat_no_tag,
                        'posts_per_page' => 1,
                        'orderby' => 'date',
                        'order' => 'DEC'
                    );
                    $post_query_home = new WP_Query($args);
                }else{
                    $posts_incluidos = [];
                    foreach($entradas_home as $entrada){
                        $posts_incluidos[] = $entrada->post->ID;
                    }
                    $args = array(
                        'post_type' => 'post',
                        'category__in' => $cat_no_tag,
                        'posts_per_page' => 1,
                        'post__not_in' => $posts_incluidos,
                        'orderby' => 'date',
                        'order' => 'DEC'
                    );
                    $post_query_home = new WP_Query($args);
                }
            }
            $entradas_home[] = $post_query_home;
        }

        $contador = 0;

        for ($i = 0; $i <= 5; $i++) {
        //while($valor->have_posts()) : $valor->the_post();
        while($entradas_home[$i]->have_posts()) : $entradas_home[$i]->the_post();
    ?>
        <div class="col-md-4 post-block noticias-home"><!-- post block -->
        <?php
            if($contador == 3){
        ?>
            <div class="redes-sociales-noticias">
                <h3>SOMOS SOCIALES</h3>
                <?php 
                    if($facebook != ''){echo '<a class="facebook-noticias" href="'.$facebook.'"><i class="fa fa-facebook"  ></i></a>';}
                    if($twitter != ''){echo '<a class="twitter-noticias" href="'.$twitter.'"><i class="fa fa-twitter"  ></i></a>';}
                    if($linkedin != ''){echo '<a class="linkedin-noticias" href="'.$linkedin.'"><i class="fa fa-linkedin"  ></i></a>';}
                    if($rss != ''){echo '<a class="rss-noticias" href="'.$rss.'"><i class="fa fa-rss"  ></i></a>';}
                    if($googleplus != ''){echo '<a class="google-noticias" href="'.$googleplus.'"><i class="fa fa-google-plus"  ></i></a>';}
                    if($instagram != ''){echo '<a class="instagram-noticias" href="'.$instagram.'"><i class="fa fa-instagram"  ></i></a>';}
                    if($youtube != ''){echo '<a class="youtube-noticias" href="'.$youtube.'"><i class="fa fa-youtube-play"  ></i></a>';}
                ?>
                <div class="asesoramiento">
                    <a href="https://www.granadaempresas.es/tutor-personal/">ASESORAMIENTO<br>PERSONALIZADO<br><strong>GRATUITO</strong></a>
                </div>
            </div>
        <?php
            }
                $contador++;
                contenido_post($excerpt1);
        ?>
        </div>
    <?php 
        endwhile; 
        }
    ?>
    <?php wp_reset_postdata(); ?>
    </div>
    <div class="redes-sociales-noticias mobile">
        <h3>SOMOS SOCIALES</h3>
        <?php 
            if($facebook != ''){echo '<a class="facebook-noticias" href="'.$facebook.'"><i class="fa fa-facebook"  ></i></a>';}
            if($twitter != ''){echo '<a class="twitter-noticias" href="'.$twitter.'"><i class="fa fa-twitter"  ></i></a>';}
            if($linkedin != ''){echo '<a class="linkedin-noticias" href="'.$linkedin.'"><i class="fa fa-linkedin"  ></i></a>';}
            if($rss != ''){echo '<a class="rss-noticias" href="'.$rss.'"><i class="fa fa-rss"  ></i></a>';}
            if($googleplus != ''){echo '<a class="google-noticias" href="'.$googleplus.'"><i class="fa fa-google-plus"  ></i></a>';}
            if($instagram != ''){echo '<a class="instagram-noticias" href="'.$instagram.'"><i class="fa fa-instagram"  ></i></a>';}
            if($youtube != ''){echo '<a class="youtube-noticias" href="'.$youtube.'"><i class="fa fa-youtube-play"  ></i></a>';}
        ?>
        <div class="asesoramiento">
            <a href="https://www.granadaempresas.es/tutor-personal/">ASESORAMIENTO<br>PERSONALIZADO<br><strong>GRATUITO</strong></a>
        </div>
    </div>
    <?php return ob_get_clean();
}
function contenido_post($excerpt1){
    if ( get_post_format() == "video" ) {
        echo "<div class='icono-noticias'><img src='wp-content/themes/granada-empresas/images/video-icon.png'></div>";
        $video = get_post_meta(get_the_id(),'_cmb_link_video')[0];
        if($video){
            if(strpos($video, ".com/") !== false){
                $url = explode(".com/watch?v=", $video)[1];
            }else if(strpos($video, ".be/") !== false){
                $url = explode(".be/", $video)[1];
            }
            echo '<iframe width="100%" height="190" src="https://www.youtube.com/embed/'.$url.'?feature=oembed" frameborder="0" allowfullscreen></iframe>';
        } elseif(has_post_thumbnail()) {
            the_post_thumbnail( 'full', array() );
        }else{
            echo '<img class="attachment-full size-full wp-post-image" src="wp-content/plugins/intellicodes/img/nofoto.jpg">';
        }
    }else{
        if ( has_post_thumbnail() ) {
            $categories = get_the_category();

            $imagen = "";
            foreach($categories as $category){
                $categoria = $category->slug;
                switch($categoria){
                    case 'agenda':
                        $imagen = 'agenda-icon.png';
                        break;
                    case 'video':
                        $imagen = 'video-icon.png';
                        break;
                    case 'granada-empresas':
                        $imagen = 'granadaempresas.png';
                        break;
                    case 'resumen-de-prensa':
                        $imagen = 'prensa-icon.png';
                        break;
                    case 'noticias':
                        $imagen = 'noticia.png';
                        break;
                }
                if($imagen != ''){
                    break;
                }
            }
            
            echo "<div class='icono-noticias'><img src='wp-content/themes/granada-empresas/images/".$imagen."'></div>";
            the_post_thumbnail( 'full', array() );
        }else{
            $categories = get_the_category();
            $imagen = "";
            foreach($categories as $category){
                $categoria = $category->slug;
                switch($categoria){
                    case 'agenda':
                        $imagen = 'agenda-icon.png';
                        break;
                    case 'video':
                        $imagen = 'video-icon.png';
                        break;
                    case 'granada-empresas':
                        $imagen = 'granadaempresas.png';
                        break;
                    case 'resumen-de-prensa':
                        $imagen = 'prensa-icon.png';
                        break;
                    case 'noticias':
                        $imagen = 'noticia.png';
                        break;
                }
                if($imagen != ''){
                    break;
                }
            }
            echo "<div class='icono-noticias'><img src='wp-content/themes/granada-empresas/images/".$imagen."'></div>";
            echo '<img class="attachment-full size-full wp-post-image" src="wp-content/plugins/intellicodes/img/nofoto.jpg">';
        }
    }
    ?>
    <div class="post-content">
    <h2><a href="<?php the_permalink(); ?>" class="post-title"><?php echo get_the_title(); ?></a> </h2>
    <p><?php echo recortar(insight_excerpt($excerpt1), 8); ?></p>
    <a href="<?php the_permalink(); ?>" class="btn-link"><?php echo esc_html_e('Leer más','otvcp-i10n'); ?></a> 
    </div>
    <div class="post-meta"> <span class="meta-date"><i class="fa fa-calendar-check-o"></i> <?php echo get_the_date('d F Y'); ?></span> </div>
    <?php
}


add_shortcode('intelli_casos_exito', 'intelli_casos_exito');
function intelli_casos_exito($atts, $content = null){
    
    $args = array(   
        'post_type' => 'caso_de_exito',
        'posts_per_page' => 5,
        'orderby' => 'date',
        'order' => 'DEC'
    );
    
    $wp_query = new WP_Query($args);

    $contenido = '<div class="intellicasoexito_carousel"><ul class="bxslider">';

    while($wp_query->have_posts()) : $wp_query->the_post();

        $imagen = get_the_post_thumbnail_url();
        $categoria = get_post_meta( get_the_id(),'categoria')[0];

        $contenido .= '<li>';
        $contenido .= '<div class="intellicasoexito row">';
        $contenido .= '<div class="imagenempresa vc_col-sm-6" style="background-image:url('.esc_url($imagen).')"></div>';
        $contenido .= '<div class="contenidoempresa vc_col-sm-6">';
        $contenido .= '<h2>'.get_the_title().'</h2>';
        $contenido .= '<h4>'.$categoria['name'].'</h4>';
        $contenido .= '<p class="descripcion">'.get_the_excerpt().'</p>';
        $contenido .= '<a href="./casos-de-exito/?id_caso_exito='.get_the_id().'">MÁS INFO</a>';
        $contenido .= '</div>';
        $contenido .= '</div>';
        $contenido .= '</li>';
    
    endwhile;

    $contenido .= '</ul></div>';

    return $contenido;
}

add_shortcode('intelli_custom_posts', 'intelli_custom_posts');
function intelli_custom_posts($atts, $content = null){
    extract(shortcode_atts(array(
        'post_type'    =>  '',
        'categoriavc'    =>  ''
    ), $atts));

    $categoria = intval($_GET['id_custom_category']);

    $return = "<div class='itcustomposts'>";
    $return .= do_shortcode( "[it_categories_list categorias='".$categoriavc."' id_categoria='".$categoria."' tipo_post='".$post_type."']" );
    $return .= obtener_posts($post_type, $categoria, 0);
    $return .= '</div>';
    
    /*$return .= '<div class="separador_inscribete"><div class="contenedor_cuadro_inscribete"><div class="cuadro_inscribete">
        <h2 style="font-size: 30px;text-align: left;color: #ffffff;"> CUÉNTANOS TU PROYECTO EMPRESARIAL</h2>	
        <h4 style="font-size: 16px;text-align: left;color: #ffffff;"> Podremos ayudarte sea cual sea la fase en la que se encuentre</h4>	
        <a href="'.get_site_url().'/contacto/" class="btn btn-lg btn-default ">CONTACTAR</a>
        </div></div></div>';*/

    $return .= "<div class='itcustomposts'>";
    $posts2 = obtener_posts($post_type, $categoria, 8);
    $return .= $posts2;
    $return .= '</div>';

    if($posts2 != ''){
        $return .= '<div class="itcustomposts"><div id="itcustomposts_mas"></div></div>';
        $return .= '<form class="ver-mas-button" method="post">';
        $return .= '<input type="hidden" name="post_type" value="'.$post_type.'">';
        $return .= '<input type="hidden" name="categoria" value="'.$categoria.'">';
        $return .= '<input type="hidden" id="cargados" name="cargados" value="2">';
        $return .= '<input type="hidden" name="action" value="cargar_mas_posts">';
        $return .= '<input type="submit" id="vermas" value="VER MÁS PLANES DE NEGOCIO">';
        $return .= '</form>';
    }
    return $return;
}

/* Devuelve posts dependiendo del post type, categoria y offset */
function obtener_posts($post_type, $categoria, $offset){
    if($categoria == -1 || $categoria == 0){
        $categoria = '';
    }
    $args = array(   
        'post_type' => $post_type,   
        'posts_per_page' => 8,
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
        $categoria = get_post_meta(get_the_id(), 'categoria');
        $categoria = $categoria[0]['term_id'];
        $iconoid = get_term_meta($categoria)['icono'][0];
        $icono = wp_get_attachment_image($iconoid);
        $return .= '<div class="vc_col-sm-3">';
        $return .= '<div class="contenido">';
        $return .= $icono;
        $return .= '<h4>'.get_the_title().'</h4>';
        $return .= '<p>'.nl2br(get_the_content()).'</p>';
        $return .= '<a href="'.$archivo[0]['guid'].'" target="_blank"><i class="fa fa-download"></i> Archivo adjunto</a>';
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


add_action( 'wp_ajax_cargar_mas_posts', 'cargar_mas_posts' );
add_action( 'wp_ajax_nopriv_cargar_mas_posts', 'cargar_mas_posts' );
function cargar_mas_posts() {
    $offset = $_POST['cargados'] * 8;
    $categoria = $_POST['categoria'];
    $post_type = $_POST['post_type'];

    $return = obtener_posts($post_type, $categoria, $offset);
    if($return){
        echo $return;
    }else{
        echo 0;
    }
    die();
}

include 'vc_intellicodes.php';
include 'itacordeon.php';
include 'itcasosexito.php';
