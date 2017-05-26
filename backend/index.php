<?php 
// Comprobamos si existe session y si no la creamos
if (! session_id()) @ session_start();

//Evitamos que nos salgan los NOTICES de PHP
error_reporting(E_ALL ^ E_NOTICE);

//Comprobamos si la sesión está iniciada
//Si existe una sesión correcta, mostramos la página para los usuarios
//Sino, mostramos la página de acceso
if(isset($_SESSION['usuario']) and $_SESSION['estado'] == 'Autenticado') {
	include('indes.php');
	die();
} else {
	include('login.php');
	die();
};

?>