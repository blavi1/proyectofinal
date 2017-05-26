<?php 
require('conexion.php');

if (!empty($_POST['valorBusqueda'])) $consultaBusqueda = $_POST['valorBusqueda'];

//Filtro anti-XSS
$caracteres_malos = array("<", ">", "\"", "'", "/", "<", ">", "'", "/");
$caracteres_buenos = array("&lt;", "&gt;", "&quot;", "&#x27;", "&#x2F;", "&#060;", "&#062;", "&#039;", "&s#047;");
$consultaBusqueda = str_replace($caracteres_malos, $caracteres_buenos, $consultaBusqueda);

//Variable vacía (para evitar los E_NOTICE)
$resultB = "";

/*echo '<script type="text/javascript">
		      
		   console.log("Valor: '.$consultaBusqueda.'");
		      
		  </script>';
*/
//Comprueba si $consultaBusqueda está seteado
if (isset($consultaBusqueda)) {

	//Selecciona todo de la tabla mmv001 
	//donde el nombre sea igual a $consultaBusqueda, 
	//o el apellido sea igual a $consultaBusqueda, 
	//o $consultaBusqueda sea igual a nombre + (espacio) + apellido
	$consulta = mysql_query("SELECT * FROM mmv001
	WHERE nombre LIKE '%$consultaBusqueda%' 
	OR apellido LIKE '%$consultaBusqueda%'
	OR CONCAT(nombre,' ',apellido) LIKE '%$consultaBusqueda%'
	");

	//Obtiene la cantidad de filas que hay en la consulta
	$filas = mysql_num_rows($consulta);

	//Si no existe ninguna fila que sea igual a $consultaBusqueda, entonces mostramos el siguiente mensaje
	if ($filas === 0) {
		$resultB = "<p>No hay ningún usuario con ese nombre y/o apellido</p>";
	} else {
		//Si existe alguna fila que sea igual a $consultaBusqueda, entonces mostramos el siguiente mensaje
		echo 'Resultados para <strong>'.$consultaBusqueda.'</strong>';

		//La variable $resultado contiene el array que se genera en la consulta, así que obtenemos los datos y los mostramos en un bucle
		while($resultados = mysql_fetch_array($consulta)) {
			$nombre = $resultados['nombre'];
			$apellido = $resultados['apellido'];
			$edad = $resultados['edad'];

			//Output
			$resultB .= '
			<p>
			<strong>Nombre:</strong> ' . $nombre . '<br>
			<strong>Apellido:</strong> ' . $apellido . '<br>
			<strong>Edad:</strong> ' . $edad . '<br>
			</p>';

		};//Fin while $resultados

	}; //Fin else $filas
};//Fin isset $consultaBusqueda

//Devolvemos el mensaje que tomará jQuery
echo $resultB;
?>