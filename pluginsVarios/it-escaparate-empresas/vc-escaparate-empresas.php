<?php
function it_escaparate_empresas_vc() {
    vc_map( array(
        'name'      => __( 'Escaparate de empresas' ),
        'description' => __( 'Muestra un listado de empresas.' ),
        'base'      => 'it_escaparate_empresas',
        'icon'      => 'intelligenia-icon',
        'category'  => 'intelligenia',
        'params'    => array(
            array(
                'type' => 'dropdown',
                'heading' => 'Aleatorio',
                'description' => __( 'Mostrar empresas aleatorias.' ),
                'param_name' => 'aleatorio',
                'value' => array(
                    'No' => 'no',
                    'Si' => 'si'
                ),
            ),
            array(
                'type' => 'dropdown',
                'heading' => 'Selector',
                'description' => __( 'Mostrar selector de sector.' ),
                'param_name' => 'selector',
                'value' => array(
                    'No' => 'no',
                    'Si' => 'si'
                ),
            ),
            array(
                'type' => 'textfield',
                'heading' => __( 'Total a mostrar' ),
                'description' => __( 'Total de resultados a mostrar por página. [1,2,3...6,7]' ),
                'param_name' => 'total',
                'value' => 4,
            )            
    )) );
}

add_action('vc_before_init', 'it_escaparate_empresas_vc');

function it_escaparate_empresa_detalle_vc() {
    vc_map( array(
        'name'      => __( 'Detalle de empresa' ),
        'description' => __( 'Muestra todos los detalles de la empresa.' ),
        'base'      => 'it_escaparate_empresa_detalle',
        'icon'      => 'intelligenia-icon',
        'category'  => 'intelligenia',
        'params'    => array()
    ));
}

add_action('vc_before_init', 'it_escaparate_empresa_detalle_vc');

function it_advertisements_detalle_vc() {
    vc_map( array(
        'name'      => __( 'Detalle de los anuncios' ),
        'description' => __( 'Muestra el anuncio detalladamente.' ),
        'base'      => 'it_advertisements_detalle',
        'icon'      => 'intelligenia-icon',
        'category'  => 'intelligenia',
        'params'    => array()
    ));
}

add_action('vc_before_init', 'it_advertisements_detalle_vc');

function it_advertisements_vc() {
    vc_map( array(
        'name'      => __( 'Anuncios de empresas' ),
        'description' => __( 'Muestra un listado de anuncios de empresas.' ),
        'base'      => 'it_advertisements',
        'icon'      => 'intelligenia-icon',
        'category'  => 'intelligenia',
        'params'    => array(
            array(
                'type' => 'dropdown',
                'heading' => 'Aleatorio',
                'description' => __( 'Mostrar anuncios aleatorios.' ),
                'param_name' => 'aleatorio',
                'value' => array(
                    'No' => 'no',
                    'Si' => 'si'
                ),
            ),
            array(
                'type' => 'dropdown',
                'heading' => 'Selector',
                'description' => __( 'Mostrar selector de categoría.' ),
                'param_name' => 'selector',
                'value' => array(
                    'No' => 'no',
                    'Si' => 'si'
                ),
            ),
            array(
                'type' => 'textfield',
                'heading' => __( 'Total a mostrar' ),
                'description' => __( 'Total de resultados a mostrar por página. [1,2,3...6,7]' ),
                'param_name' => 'total',
                'value' => 4,
            )            
    )) );
}

add_action('vc_before_init', 'it_advertisements_vc');