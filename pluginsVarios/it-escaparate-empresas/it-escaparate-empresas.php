<?php
/*
    Plugin Name: Intelligenia Escaparate de Empresas
    Description: Muestra un listado de empresas.
    Author: intelligenia
    Version: 0.5
*/

require_once 'config/config.php';

/**
 * Mostrar listado de empresas.
 */
function it_escaparate_empresas( $atts, $content = null ) {
    
    $args = shortcode_atts( array(
        'aleatorio' => '',
        'total' => '',
        'selector' => '',
    ), $atts ) ;
    $block = "";
    if($args['selector'] == "si"){
        $block .= it_select_sector_locality();
        $block .= it_letters_list();
    }
    if($args['aleatorio'] == "si"){
        $sectores = it_ee_recuperar_sectores_actividad();
        $sector_random = array_rand($sectores, 1);
        // NOTE descomentar la linea y borrar la inferior para cambiar el sector
        // $block = '<div id="companies-block" data-content="0" data-total="'.$args['total'].'" data-sector="'.$sector[$sector_random]['id'].'"></div>';
        $block .= '<div id="companies-block" data-content="0" data-total="'.$args['total'].'" data-sector="1"></div>';
    }else{
        $sector = intval($_GET['sector']);
        $letra = filter_var($_GET['letra'], FILTER_SANITIZE_STRING);
        $localidad = intval($_GET['localidad']);
        $block .= '<div id="companies-block" data-content="1" data-sector="'.$sector.'" data-localidad="'.$localidad.'" data-letra="'.$letra.'"></div>';
        $block .= '<div id="pagination"></div>';
    }
    return $block;
}

add_shortcode( 'it_escaparate_empresas', 'it_escaparate_empresas' );

/**
 * Recupera listado de sectores.
 */
function it_ee_recuperar_sectores_actividad() {
    $sectores = file_get_contents(DATA_SECTORES_ACTIVIDAD);
    $sectores = json_decode( $sectores, true );
    return $sectores;
}

/**
 * Recupera listado de poblaciones.
 */
function it_ee_recuperar_localidades() {
    $localidades = file_get_contents(DATA_LOCALIDADES);
    $localidades = json_decode( $localidades, true );
    return $localidades;
}

/**
 * Select de los sectores
 */
function it_select_sector_locality(){
    $sector_get = intval($_GET['sector']);
    $localidad_get = intval($_GET['localidad']);

    $sectores = it_ee_recuperar_sectores_actividad();
    $localidades = it_ee_recuperar_localidades();

    $return = '<form class="escaparate_selector_form" name="custom_category_filter" action="" method="get">';
    $return .= '<div class="angle-bottom"><select name="sector">';
    $return .= '<option value="-1">Todos los sectores de actividad</option>';
    foreach($sectores as $sector){
        if($sector_get == $sector['id']){
            $selected = 'selected';
        }else{
            $selected = '';
        }
        $return .= '<option value="'.$sector['id'].'" '.$selected.'>'.$sector['name'].'</option>';
    }
    $return .= '</select></div>';

    $return .= '<div class="angle-bottom"><select name="localidad">';
    $return .= '<option value="-1">Todas las localidades</option>';
    foreach($localidades as $localidad){
        if($localidad_get == $localidad['id']){
            $selected = 'selected';
        }else{
            $selected = '';
        }
        $return .= '<option value="'.$localidad['id'].'" '.$selected.'>'.$localidad['name'].'</option>';
    }
    $return .= '</select></div>';
    $return .= '<input type="submit" value="Buscar">';
    $return .= "</form>";
    return $return;
}

/**
 * Select de los sectores
 */
function it_advertisement_categories(){

    $categoria_url = filter_var($_GET['categoria'], FILTER_SANITIZE_STRING);
    $categorias = array(
        "employment"    => "Empleo",
        "premises"      => "Locales",
        "advertising"   => "Publicidad",
        "partners"      => "Socios / Inversores",
        "misc"          => "Varios"
    );
    
    $return = '<form class="escaparate_selector_form" name="custom_category_filter" action="" method="get">';
    $return .= '<div class="angle-bottom"><select name="categoria">';
    $return .= '<option value="all">Todas las categorias</option>';

    foreach ( $categorias as $categoria => $value ) {
        if ( $categoria == $categoria_url ){
            $selected = 'selected';
        } else {
            $selected = '';
        }
        $return .= '<option value="'.$categoria.'" '.$selected.'>'.$value.'</option>';
    }

    $return .= '</select></div>';
    $return .= '<input type="submit" value="Buscar">';
    $return .= "</form>";
    return $return;
}

//Devuelve la lista de letras con enlaces
function it_letters_list(){
    $return = '<div class="escaparate_letters_list">';
    $return .= '<strong>Filtrar por:</strong><br>';
    $uri_parts = explode('?', $_SERVER['REQUEST_URI'], 2);
    $url = 'http://' . $_SERVER['HTTP_HOST'] . $uri_parts[0];//Quita los parámetros de la url
    $sector = intval($_GET['sector']);
    $localidad = intval($_GET['localidad']);

    $letters = range('a', 'z');
    $return .= '<a href="'.$url.'?sector='.$sector.'&localidad='.$localidad.'">Todos</a> | ';
    foreach ($letters as $letter) {
        $return .= '<a href="'.$url.'?sector='.$sector.'&localidad='.$localidad.'&letra='.$letter.'">'.$letter.'</a>';
    }
    $return .= '</div>';
    return $return;
}

// Ver los detalles de una empresa
function it_escaparate_empresa_detalle( $atts, $content = null ) {
    $company = intval($_GET['empresa']);
    $block = '<div id="company-detail" data-company="'.$company.'"></div>';
    return $block;
}

add_shortcode( 'it_escaparate_empresa_detalle', 'it_escaparate_empresa_detalle' );

/**
 * Mostrar listado de anuncios de empresas en la home.
 */
function it_advertisements( $atts, $content = null ) {
    
    $args = shortcode_atts( array(
        'aleatorio' => '',
        'total' => '',
        'selector' => '',
    ), $atts ) ;
    $block = "";
    if ( $args['selector'] == "si" ) {
        $block .= it_advertisement_categories();
    }
    if ( $args['aleatorio'] == "si" ) {
        $block .= '<div id="advertisements-block" data-content="0" data-total="'.$args['total'].'" data-sector="1"></div>';
    } else {
        $category = filter_var($_GET['categoria'], FILTER_SANITIZE_STRING);
        $block .= '<div id="advertisements-block" data-content="1" data-category="'.$category.'"></div>';
        $block .= '<div id="pagination"></div>';
    }
    return $block;
}

add_shortcode( 'it_advertisements', 'it_advertisements' );

// Ver los detalles de una empresa
function it_advertisements_detalle( $atts, $content = null ) {
    $anuncio = intval($_GET['anuncio']);
    $block = '<div id="advertisements-detail" data-advertisements="'.$anuncio.'"></div>';
    return $block;
}

add_shortcode( 'it_advertisements_detalle', 'it_advertisements_detalle' );

// Registrar scripts.
function it_ee_scripts() {
    wp_register_script( 'it_ee_scripts', plugins_url( 'js/functions.js', __FILE__ ) );
    wp_enqueue_script( 'it_ee_scripts' );

    wp_register_script( 'it_pagination_scripts', plugins_url( 'js/jquery.bootpag.min.js', __FILE__ ) );
    wp_enqueue_script( 'it_pagination_scripts' );

    $translation_array = array( 
        'templateUrl' => plugins_url( 'img/', __FILE__ ),
        'url_global' => URL_GLOBAL,
        'url_global_advertisements' => URL_GLOBAL_ADVERTISEMENTS
    );
    wp_localize_script( 'it_ee_scripts', 'object_name', $translation_array );

    wp_register_style( 'it_escaparate_empresas_css', plugins_url( 'css/escaparate-empresas.css', __FILE__ ) );
    wp_enqueue_style( 'it_escaparate_empresas_css' );
}

add_action( 'wp_enqueue_scripts', 'it_ee_scripts' );

// Includes.
include_once 'vc-escaparate-empresas.php';