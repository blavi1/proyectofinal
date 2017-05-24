<?php 

    $con = mysql_connect('localhost', 'root', 'root')
    or die('No se pudo conectar: ' . mysql_error());
    
	echo '<script type="text/javascript">
		      
		   console.log("Conexión establecida");
		      
		  </script>';
	mysql_select_db('proyecto') or die('No se pudo seleccionar la base de datos');

?>