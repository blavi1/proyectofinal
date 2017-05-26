<?php
//Reanudamos la sesión
session_start();

//Comprobamos si el usario está logueado
//Si no lo está, se le redirecciona al index
//Si lo está, definimos el botón de cerrar sesión y la duración de la sesión
if(!isset($_SESSION['usuario']) and $_SESSION['estado'] != 'Autenticado') {
	header('Location: ./');
} else {
	$estado = $_SESSION['usuario'];
	$salir = '<a href="recursos/logout.php" target="_self">Cerrar sesión</a>';
	require('recursos/sessiones.php');
};
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Bienvenido</title>
</head>

<body>
<div><p>Hola, <?php echo $estado; ?><br>
<?php echo $salir; ?></p><div>
</body>
</html>