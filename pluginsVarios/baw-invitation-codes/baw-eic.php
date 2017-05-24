<?php
/*
Plugin Name: BAW Easy Invitation Codes
Plugin URI: http://boiteaweb.fr/
Description: Visitors have to enter an invitation code to register on your blog. The easy way!
Version: 1.2
Author: Juliobox
Author URI: http://wp-rocket.me
License: GPLv2
*/

define( 'BAWEIC__FILE__', __FILE__ );

if ( ! is_admin() ) {
	include( 'inc/front-end.php' );
} else {
	include( 'inc/back-end.php' );
}

// Función para verificar los códigos
function code_verify() {

	$div = "<h3>Verifica tu código</h3><hr>";
	$div .= '<form class="form-controler" method="POST">';
	$div .= '<label><span title="Powered by Easy Invitation Codes">Código de Verificación ';
	$div .= '*</span><br /><input name="invitation_code" size="10" tabindex="0" type="text" class="input" 		id="invitation_code" style="text-transform: uppercase" /></label>';
	$div .= '<input name="submit" type="submit" /></form>';

	$baweic_options = get_option( 'baweic_options' );
	$invitation_code = isset( $_POST['invitation_code'] ) ? strtoupper( $_POST['invitation_code'] ) : '';
	$validador = false;

	if (!empty($_POST['invitation_code'])){
		if ( ! array_key_exists( $invitation_code, $baweic_options['codes'] ) ) {
			$div .= '<div class="codeBad">Lo siento, el código que has introducido es incorrecto!</div>';
		} else {			
			$div .= '<div class="codeGood">Enhorabuena, su producto es válido!</div>';
		}
	}
	else if (isset($_POST['invitation_code']) && $_POST['invitation_code'] == ''){
		$div .= '<div class="codeBad">Tienes que introducir un código</div>';
	}

	return $div;
}
add_shortcode('verificar_codigo', 'code_verify');// SHORTCODE con la función que verifica los codigos

function registrar_stylos(){
	wp_register_style( 'it_codigos_css', plugins_url( 'css/styles.css', __FILE__ ) );
	wp_enqueue_style( 'it_codigos_css' );
	
}
add_action( 'wp_enqueue_scripts', 'registrar_stylos' );