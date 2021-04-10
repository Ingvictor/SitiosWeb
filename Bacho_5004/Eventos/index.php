<?php
//momento de conectarnos a db
$conn = mysqli_connect("localhost","admin_bacho","Monkies1#","admin_bacho");

if ($conn==false){
  echo "Hubo un problema al conectarse a María DB";
  die();
}

//declaramos variables vacias servirán también para repoblar el formulario
$email = "";
$password = "";
$password_r = "";
$msg = "";

if( isset($_POST['email']) && isset($_POST['password']) && isset($_POST['password_r'])) {

  $email = strip_tags($_POST['email']);
  $password = strip_tags($_POST['password']);
  $password_r = strip_tags($_POST['password_r']);


  if ($password==$password_r){

    //aquí como todo estuvo OK, resta controlar que no exista previamente el mail ingresado en la tabla users.
    $result = $conn->query("SELECT * FROM `users` WHERE `users_email` = '".$email."' ");
    $users = $result->fetch_all(MYSQLI_ASSOC);

    //cuento cuantos elementos tiene $tabla,
    $count = count($users);

    //solo si no hay un usuario con mismo mail, procedemos a insertar fila con nuevo usuario
    if ($count == 0){
      $password = sha1($password); //encriptar clave con sha1
      $conn->query("INSERT INTO `users` (`users_email`, `users_password`) VALUES ('".$email."', '".$password."');");
      $msg.="Usuario creado correctamente, ingrese haciendo  <a href='login.php'>clic aquí</a> <br>";
    }else{
      $msg.="El mail ingresado ya existe <br>";
    }

  }else{
    $msg = "Las claves no coinciden";
  }

}else{
  $msg = "Complete el formulario";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="assets/styles/styles.css">

</head>
<body>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Mr.Robot</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="Calculadora.html">Calculadora</a></li>
          <li><a href="Divisas.html">Divisas</a></li>
          <li><a href="Contacto.html">Juego</a></li>
        </ul>
      </div>
    </nav>

      <section class="engrane cambio-seccion">
        <div class="row hola">
          <img id="Colapsar" class="Colapso col s1 m1" src="assets/img/engranaje.png" alt="">
        </div>

        <div class="row ">
          <button id="Color1" class="btn1 col s1">Color1 2</button>
          <button id="Color2" class="btn2 col s1">Color2</button>
        </div>
        <div class="row">
          <button id="Color3" class="btn3 col s1">Color3</button>
          <button id="Color4" class="btn4 col s1">Color4</button>
        </div>
      </section>

      <section class="contenedor cambio-seccion">
        <div class="row">
          <form id="formulario" class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Nombre" id="first_name" type="text" class="validate">
              </div>
              <div class="input-field col s6">
                <input placeholder="Apellidos" id="last_name" type="text" class="validate">
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Contraseña"  id="password" type="password" class="validate">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Correo electrónico"  id="email" type="email" class="validate">
              </div>
            </div>

            <label>
              <input type="checkbox" id="checkbox1">
              <span>Terminos y Condiciones</span>
            </label><br>

            <label>
              <input type="checkbox" id="checkbox2">
              <span>No soy un Robot</span>
            </label><br>
            <br>
            <input type="submit">
          </form>
        </div>
      </section>

      <section class="contenedor cambio-seccion">
        <div class="row seccion3">

        </div>
      </section>



</body>
<script type="text/javascript" src="assets/apps/apps.js"></script>



</html>
