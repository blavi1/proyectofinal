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
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Series, películas, libros y más en streaming - bartimeo.com</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> -->
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/jquery-impromptu.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600" rel="stylesheet" type="text/css">
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!-- <script src="js/includes.js"></script>NOTA: JS para incluir html -->
    <script src="js/configs.js"></script>
    <script src="js/jquery-impromptu.js"></script>
  </head>
  <body>
    <script type="text/javascript">
      jQuery(document).ready(function($){
        /*$.prompt("Proceeding may be good for your site..", {
          title: "Are you Ready?",
          buttons: { "Yes, I'm Ready": true, "No, Lets Wait": false }
        });*/
        //alert("Bienvenido " + $estado);
        alert('Bienvenido <?php echo $estado ; ?>');

      });
    </script>
    <?php require('header.php'); ?>         
    <div class="container-fluid by p_top">
      <div class="row">
        <div class="col-md-3"><!-- Div izquierda -->
          <div id="profileMe" class="box bqq out-box"><!-- Div Perfil -->
            <div class="rv" style="background-image: url(assets/img/iceland.jpg);"></div>
              <div class="rq awx">
                <a href="profile/index.html">
                  <img class="bqr" src="assets/img/avatar-dhg.png">
                </a>
                <h6 class="rr">
                  <a class="bph" href="profile/index.html">Barti Blanca</a>
                </h6>

                <p class="agk">Aqui puedes poner la descripción de tu perfil que quieras</p>

                <ul class="bqs">
                  <li class="bqt">
                    <a href="#userModal" class="bph" data-toggle="modal">
                      Amigos
                      <h6 class="afl">12M</h6>
                    </a>
                  </li>

                  <li class="bqt">
                    <a href="#userModal" class="bph" data-toggle="modal">
                      Bloqueados
                      <h6 class="afl">1</h6>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <div id="aboutMe" class="box out-box"><!-- Div Sobre Mi -->
            <div class="contenido-box">
              <h6 class="h6-title">Sobre Mí <small>· <a href="#">Editar</a></small></h6>
              <ul class="list">
                <!-- <li><span class="list-span h bbu"></span>Went to <a href="#">Oh, Canada</a>
                </li> --><li><span class="list-span h boj"></span>Se hizo amigo de <a href="#">Obama</a>
                </li><li><span class="list-span h bgh"></span>Trabaja en <a href="#">Github</a>
                </li><li><span class="list-span h bgx"></span>Vive en <a href="#">San Francisco, CA</a>
                </li><li><span class="list-span h big"></span>De <a href="#">Seattle, WA</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="" class="box out-box"><!-- Div Contenido Izq -->
            <div class="rq">
              <h6 class="h6-title">Siguiendo</h6>
              <div class="listContainer listCovers inline clearfix">
                
              </div>              
            </div>
          </div>
        </div>
        <div class="col-md-6 content"><!-- Div central -->
          <div class="">
              <ul class="ca bqe bqf agk">
                <li class="tu b ahx">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Mensaje...">
                    <div class="om">
                      <button type="button" class="cg pl">
                        <span class="h bbv"></span>
                      </button>
                    </div>
                  </div>
                </li>

                <li class="tu b ahx">
                  <img class="bqa wp yy agc" src="assets/img/avatar-dhg.png">
                  <div class="tv">
                    <div class="bqj">
                      <small class="aec axr">4 min</small>
                      <h6>Dave Gamache</h6>
                    </div>

                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <div class="bqg" data-grid="images"><div style="display: inline-block; margin-bottom: 10px; margin-right: 10px; vertical-align: bottom;">
                        <img data-action="zoom" data-width="1050" data-height="700" src="assets/img/unsplash_1.jpg" style="width: 273px; height: 182px;">
                      </div><div style="display: inline-block; margin-bottom: 10px; margin-right: 0px; vertical-align: bottom;">
                        <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_1.jpg" style="width: 182px; height: 182px;">
                      </div><div style="display: inline-block; margin-bottom: 10px; margin-right: 10px; vertical-align: bottom;">
                        <img data-action="zoom" data-width="640" data-height="640" src="assets/img/instagram_13.jpg" style="width: 181px; height: 182px;">
                      </div><div style="display: inline-block; margin-bottom: 10px; margin-right: 0px; vertical-align: bottom;">
                        <img data-action="zoom" data-width="1048" data-height="700" src="assets/img/unsplash_2.jpg" style="width: 274px; height: 182px;">
                      </div></div>

                    <ul class="bqe afw">
                      <li class="tu agd">
                        <img class="bqa wp yy agc" src="assets/img/avatar-fat.jpg">
                        <div class="tv">
                          <strong>Jacon Thornton: </strong>
                          Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                        </div>
                      </li>
                      <li class="tu">
                        <img class="bqa wp yy agc" src="assets/img/avatar-mdo.png">
                        <div class="tv">
                          <strong>Mark Otto: </strong>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="tu b ahx">
                  <img class="bqa wp yy agc" src="assets/img/avatar-fat.jpg">
                  <div class="tv">
                    <div class="bql">
                      <div class="bqj">
                        <small class="aec axr">12 min</small>
                        <h6>Jacob Thornton</h6>
                      </div>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="tu b ahx">
                  <img class="bqa wp yy agc" src="assets/img/avatar-mdo.png">
                  <div class="tv">
                    <div class="bqj">
                      <small class="aec axr">34 min</small>
                      <h6>Mark Otto</h6>
                    </div>

                    <p>
                      Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                    </p>

                    <div class="bqg" data-grid="images"><img style="display: inline-block; width: 466px; height: 451px; margin-bottom: 10px; margin-right: 0px; vertical-align: bottom;" data-width="640" data-height="640" data-action="zoom" src="assets/img/instagram_3.jpg"></div>

                    <ul class="bqe">
                      <li class="tu">
                        <img class="bqa wp yy agc" src="assets/img/avatar-dhg.png">
                        <div class="tv">
                          <strong>Dave Gamache: </strong>
                          Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        <div class="col-md-3 "><!-- Div derecho -->
          <div class="rp agk aye"><!-- Div enlaces -->
            <div class="rq">
              <h6 class="h6-title">Enlaces</h6>
              <div class="div_links">
                <button id="addLinks" class="cg pq pz">Añadir Enlaces</button>
                <button id="sendInvi" class="cg pq pz">Enviar Invitaciones</button>                
              </div>
            </div>
          </div>
          <div class="rp agk aye"><!-- Divs añadir amigos -->
            <div class="rq">
              <h6 class="h6-title">Añadir <small>· <a href="#">Ver Todos</a></small></h6>
              <ul class="bqe bqf">
                  <li class="tu afw">
                    <img class="bqa wp yy agc" src="assets/img/avatar-fat.jpg">
                    <div class="tv">
                      <strong>Jacob Thornton</strong> @fat
                      <div class="bqi">
                        <button class="cg pq pz">
                          <span class="h azp"></span> Añadir Amigo</button>
                      </div>
                    </div>
                  </li>
                  <li class="tu">
                    <a class="brc" href="#">
                      <img class="bqa wp yy agc" src="assets/img/avatar-mdo.png">
                    </a>
                    <div class="tv">
                      <strong>Mark Otto</strong> @mdo
                      <div class="bqi">
                        <button class="cg pq pz">
                          <span class="h azp"></span> Añadir Amigo</button>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
          <div class="rp agk aye"><!-- Div contenido -->
            <div class="rq">
              <h6 class="h6-title">Contenido</h6>
              <form accept-charset="utf-8" method="POST">
              <input type="text" name="busqueda" id="busqueda" value="" placeholder="Escribe el nombre de la película que buscas" maxlength="30" autocomplete="off" onKeyUp="buscar()" />
              </form>
              <div class="div_contenido">
                                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
  </body>
</html>