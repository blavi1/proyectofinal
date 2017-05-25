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
	$div = "<div class='content_verify'>";
	$div .= "<h3>Verifica tu código</h3><hr>";
	$div .= '<form class="form-controler" method="GET"><label>';
	$div .= '<span title="Email">Correo Electronico *</span><br />';
	$div .= '<input name="email_user" size="10" required tabindex="0" type="email" class="input" id="invitation_code" style="" /><br />';
	$div .= '<span title="Verifica tu código">Código de Verificación *</span><br />';
	$div .= '<input name="invitation_code" size="10" required tabindex="0" type="text" class="input" id="invitation_code" style="text-transform: uppercase" />';
	$div .= '</label><input name="submit" type="submit" /></form>';

	$email = get_option('admin_email');
	$emailUser = &$_GET['email_user'];

	//** **//
	//$div .= funcPrueba($email . ' ' . $emailUser);

	$baweic_options = get_option( 'baweic_options' );
	$invitation_code = isset( $_GET['invitation_code'] ) ? strtoupper( $_GET['invitation_code'] ) : '';
	$validador = false;
	$div .= $validador;

	if (!empty($_GET['invitation_code'])){
		if ( ! array_key_exists( $invitation_code, $baweic_options['codes'] ) ) {
			$div .= '<div class="codeBad">Lo siento, el código que has introducido es incorrecto!</div>';
		} else {
			$validador = true;			
			if ($validador) {
				//$div .= $validador;
				send_email($emailUser);
				$div .= '<div class="codeGood">Enhorabuena, su producto es válido!</div>';
			}
		}
	}
	else if (isset($_GET['invitation_code']) && $_GET['invitation_code'] == ''){
		$div .= '<div class="codeBad">Tienes que introducir un código</div>';
	}

	$div .= '</div>';
	return $div;
}
add_shortcode('verificar_codigo', 'code_verify');// SHORTCODE con la función que verifica los codigos

//Función para añadir la hoja de estilos
function registrar_stylos(){
	wp_register_style( 'it_codigos_css', plugins_url( 'css/styles.css', __FILE__ ) );
	wp_enqueue_style( 'it_codigos_css' );
	
}
add_action( 'wp_enqueue_scripts', 'registrar_stylos' );

function funcPrueba($mess){
	return $mess;
}

function send_email($toUser){
	$fields = get_option( 'baweic_fields' );
	$to = $toUser;
	$subject = $fields['text_header'];
	$message = $fields['text_area'];
	//$headers[] = 'Content-Type: text/html; charset=UTF-8';

	$mailResult = false;
	//add_filter( 'wp_mail_content_type', 'set_html_content_type' );
	$mailResult = wp_mail( $to, $subject, $message );
	//remove_filter( 'wp_mail_content_type', 'set_html_content_type' );


	if ($mailResult){
		echo "Mensaje Enviado Correctamente";
	}else
		echo "No se puedo enviar el mensaje";

}