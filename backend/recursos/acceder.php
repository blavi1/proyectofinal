<?php 
//Conectamos a la base de datos
require('conexion.php');

//Obtenemos los datos del formulario de acceso
$userPOST = $_POST["userAcceso"]; 
$passPOST = $_POST["passAcceso"];

if($userPOST != "" && $passPOST != ""){
	//Filtro anti-XSS
	$userPOST = htmlspecialchars(mysqli_real_escape_string($conexion, $userPOST));
	$passPOST = htmlspecialchars(mysqli_real_escape_string($conexion, $passPOST));

	//Pasamos el input del usuario a minúsculas para compararlo después con
	//el campo "user" de la base de datos
	//$userPOSTMinusculas = strtolower($userPOST);

	//Escribimos la consulta necesaria
	$consulta = "SELECT * FROM `user` WHERE username='".$userPOST."'";

	//Obtenemos los resultados
	$resultado = mysqli_query($conexion, $consulta);
	$datos = mysqli_fetch_array($resultado);

	//Guardamos los resultados del nombre de usuario
	//y de la contraseña de la base de datos
	$userBD = $datos['username'];
	$passwordBD = $datos['password'];

	//Comprobamos si los datos son correctos
	if($userBD == $userPOST && password_verify($passPOST, $passwordBD)){

		session_start();
		$_SESSION['usuario'] = $datos['username'];
		$_SESSION['estado'] = 'Autenticado';
		$return = "<script>window.location.assign('indes.php')</script>";
		echo $return;

	//Si los datos no son correctos, o están vacíos, muestra un error
	//Además, hay un script que vacía los campos con la clase "acceso" (formulario)
		//!password_verify($passPOST, $passwordBD)
	} else if ( $userBD != $userPOST || $userPOST == "" || $passPOST == "" || !password_verify($passPOST, $passwordBD)  ) {
		die ('<script>$(".acceso").val("");</script> Los datos de acceso son incorrectos ');
	} else {
		die('Error');
	};
}else{
	die("No puedes dejar ningún dato en blanco");
}
?>