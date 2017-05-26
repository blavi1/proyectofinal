<?php
//Conectamos a la base de datos
require('conexion.php');

//Obtenemos los datos del formulario de registro
$userPOST = $_POST["userRegistro"];
$emailPOST = $_POST['emailRegistro'];
$pass1POST = $_POST["passRegistro"];
$pass2POST = $_POST["passCRegistro"];
$namePOST = $_POST["nameRegistro"];
$lastPOST = $_POST["lastnameRegistro"];

//Filtro anti-XSS
$userPOST = htmlspecialchars(mysqli_real_escape_string($conexion, $userPOST));
$pass1POST = htmlspecialchars(mysqli_real_escape_string($conexion, $pass1POST));

//Convierto a mayúscula el primer caracter del nombre completo
$namePOST = ucwords($namePOST);
$lastPOST = ucwords($lastPOST);

//Pasamos el input del usuario a minúsculas para compararlo después con
//el campo "usernamelowercase" de la base de datos
//$userPOSTMinusculas = strtolower($userPOST);

//Escribimos la consulta necesaria
$consultaUsuarios = "SELECT username FROM `user` WHERE `username` = '$userPOST'";

//Obtenemos los resultados
$resultadoConsultaUsuarios = mysqli_query($conexion, $consultaUsuarios) or die(mysql_error());
$datosConsultaUsuarios = mysqli_fetch_array($resultadoConsultaUsuarios);
$userBD = $datosConsultaUsuarios['username'];

//Si el input de usuario o contraseña está vacío, mostramos un mensaje de error
//Si el valor del input del usuario es igual a alguno que ya exista, mostramos un mensaje de error
if(empty($userPOST) || empty($pass1POST)) {
	die('No puedes dejar ningún dato en blanco');
} else if ($pass1POST != $pass2POST){
	die('Las contraseñas no coinciden');
} else if ($userPOST == $userBD) {
	die('Ya existe un usuario con el nombre '.$userPOST.'');
}
else {
//Si no hay errores, procedemos a encriptar la contraseña
	
	function aleatoriedad() {
		$caracteres = "abcdefghijklmnopqrstuvwxyz1234567890";
		$nueva_clave = "";
		for ($i = 5; $i < 35; $i++) {
			$nueva_clave .= $caracteres[rand(5,35)];
		};
		return $nueva_clave;
	};

	$aleatorio = aleatoriedad();
	$valor = "07";
	$salt = "$2y$".$valor."$".$aleatorio."$";

	$passwordConSalt = crypt($pass1POST, $salt);

	//Obtenemos la fecha y hora del sistema
	$fNow = date('Y-m-d H:i:s');

	//Armamos la consulta para introducir los datos
	$consulta = "INSERT INTO `user` (`id`, `name`, `lastname`, `username`, `email`, `password`, `is_admin`, `created_at`) VALUES ('','$namePOST','$lastPOST','$userPOST','$emailPOST','$passwordConSalt','','$fNow')";
	
	//Si los datos se introducen correctamente, mostramos los datos
	//Sino, mostramos un mensaje de error
	if(mysqli_query($conexion, $consulta)) {

		die('<script>$(".registro").val("");$("#alertError").addClass("alert-success").removeClass("alert-danger");</script>
		Registrado con éxito <br>
		Ya puedes acceder a tu cuenta <br>
		<br>
		Datos:<br>
		Usuario: '.$userPOST.'<br>
		Contraseña: '.$pass1POST);
	} else {
		die('Error');
	};
};

?>