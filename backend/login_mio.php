<?php 
/*if( isset($_POST['username']) && isset($_POST['password']) ) {
    get_login($_POST['username'],$_POST['password']);
} else {
    die("Solicitud no válida.");
}*/

function get_login( $uName, $uPass ){
  require('conexion.php');
  $jsondata = array();
    
  //Sanitize ipnut y preparar query
  $username = $uName;
  $password = $uPass;
  $querywhere = "WHERE username = " . $username;

  if ( $result = $database->query( "SELECT username, password FROM user WHERE username = '".$username."'" ) ) {

      if ( $result->num_rows > 0 ){

          $jsondata["success"] = true;
          $jsondata["data"]["prueba"] = "Prueba de texto";
          //$jsondata["data"]["message"] = sprintf("Se han encontrado %d usuarios", $result->num_rows);
          $jsondata["data"]["user"] = array();
          while( $row = $result->fetch_object() ) {
              $jsondata["data"]["user"][] = $row;
          }         
      } else { 

          $jsondata["success"] = false;
          $jsondata["data"] = array(
          'message' => 'No se encontró ningún resultado.'
          );            
      }
        
        $result->close();
  } else {
        
        $jsondata["success"] = false;
        $jsondata["data"] = array(
        'message' => $database->error
        );
        
    }
    
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
    
    $database->close();

}

exit();