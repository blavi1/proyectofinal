<?php 
//Iniciamos la sesión
session_start();

//Pedimos el archivo que controla la duración de las sesiones
require('recursos/sessiones.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Series, películas, libros y más en streaming - connébar.com</title>
  <!-- Bootstrap -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/form.css" rel="stylesheet">
  <!-- <link href="css/styles.css" rel="stylesheet"> -->
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/confAcces.js"></script>
</head>
<body>
  <script type="text/javascript">
    jQuery(document).ready(function($){
      /*$('#login-form').submit(function (e) {

        var getdetails = function(formData){
          e.preventDefault();
          return $.post( "login.php", formData);
        }

        var formData = $(this).serialize();

        getdetails(formData)
        .done( function( response ){
          if( response.success ) {
            var output = "<h1>" + response.data.message + "</h1>";
            //recorremos cada usuario
            $.each(response.data.user, function( key, value ) {
                output += "<h2>Detalles del usuario " + value['username'] + " con key: " + key + "</h2>";
                //recorremos los valores de cada usuario
                $.each( value, function ( userkey, uservalue) {
                    output += '<ul>';
                    output += '<li>' + userkey + ': ' + uservalue + "</li>";
                    output += '</ul>';
                });
            });
            $("#result").html(output);
          }
          else{
            $("#result").html('No ha habido suerte: ' + response.data.message);
          }
        })
        .fail( function( jqXHR, textStatus, errorThrown ) {
            $("#result").html("Algo ha fallado: " +  textStatus+ ' ' + errorThrown);
        });


        
      });*/
    });
  </script>
  <div class="container">
      <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
                <a href="#" class="active" id="login-form-link">Iniciar Sesión</a>
              </div>
              <div class="col-xs-6">
                <a href="#" id="register-form-link">Registrar</a>
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" action="" method="POST" role="form" style="display: block;">
                  <div class="form-group">
                    <input type="text" name="userAcceso" id="userAcceso" tabindex="1" class="form-control acceso" placeholder="Usuario" value="">
                  </div>
                  <div class="form-group">
                    <input type="password" name="passAcceso" id="passAcceso" tabindex="2" class="form-control acceso" placeholder="Contraseña">
                  </div>
                  <div class="form-group text-center">
                    <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                    <label for="remember"> Recuerdame</label>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="acceso" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Iniciar Sesión">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="text-center">
                          <a href="#" tabindex="5" class="forgot-password">Has olvidado la contraseña?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" action="" method="POST" role="form" style="display: none;">
                  <div class="form-group">
                    <input type="text" name="nameRegistro" id="nameRegistro" autocomplete="off" tabindex="1" class="form-control registro" placeholder="Nombre" value="">
                  </div>
                  <div class="form-group">
                    <input type="text" name="lastnameRegistro" id="lastnameRegistro" autocomplete="off" tabindex="1" class="form-control registro" placeholder="Apellido" value="">
                  </div>
                  <div class="form-group">
                    <input type="email" name="emailRegistro" id="emailRegistro" autocomplete="on" tabindex="1" class="form-control registro" placeholder="Correo electrónico" value="">
                  </div>
                  <div class="form-group">
                    <input type="text" name="userRegistro" id="userRegistro" autocomplete="on" tabindex="1" class="form-control registro" placeholder="Username" value="">
                  </div>
                  <div class="form-group">
                    <input type="password" name="passRegistro" id="passRegistro" tabindex="2" class="form-control registro" placeholder="Contraseña">
                  </div>
                  <div class="form-group">
                    <input type="password" name="passCRegistro" id="passCRegistro" tabindex="2" class="form-control registro" placeholder="Confirmar contraseña">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Registrarme">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-danger" role="alert" id="alertError"></div>
      </div>
    </div>
  </div>  
</body>
</html>