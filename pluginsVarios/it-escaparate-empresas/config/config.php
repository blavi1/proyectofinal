<?php
/**
 * Configuración.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Directorio para datos.
define ( 'DATA_PATH', plugins_url ( 'datos/', dirname(__FILE__) ) );

// Listado de sectores de actividad.
define ( 'DATA_SECTORES_ACTIVIDAD', DATA_PATH . 'sectores-actividad.json' );

// Listado de poblaciones.
define ( 'DATA_LOCALIDADES', DATA_PATH . 'localidades.json' );

// Url para las peticiones de empresas al servidor por JS
define( 'URL_GLOBAL', 'https://tuportal.granadaempresas.es/api/services/projects/companies/showcase/' );

// Url para las peticiones de anuncios al servidor por JS
define( 'URL_GLOBAL_ADVERTISEMENTS', 'https://tuportal.granadaempresas.es/api/services/noticeboardmessages/' );
