<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>CompraFácil</title>
        <link rel="shortcut icon" href="css/images/favicon.png">
        <link href="css/bootstrap.css" rel="stylesheet" media="screen">
        <link href="css/bootstrap-theme.css" rel="stylesheet" media="screen">
        <link href="css/bootstrap-toggle.css" rel="stylesheet" media="screen">
        <link href="css/fontawesome.min.css" rel="stylesheet" media="screen">
        <link href="css/jquery-ui.css" rel="stylesheet" media="screen">
        <link href="css/jquery-ui.structure.css" rel="stylesheet" media="screen">
        <link href="css/jquery-ui.theme.css" rel="stylesheet" media="screen">
        <link href="css/main-styles.css" rel="stylesheet" media="screen">
        <!--[if lt IE 9]>
            <script src="js/html5shiv.js"></script>
            <script src="js/respond.min.js"></script>
        <!--[endif]-->
    </head>
    <body class="background-color-1">
        <div class="overlay" id="overlay">
            <div class="col-xs-6 col-xs-offset-3 before-load-logo-container margin-top-1">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span>ERR_USER_NOT_ALLOWED</span>
                    </div>
                    <div class="panel-body">
                        <div class="col-xs-12">
                            <center>
                                <span style="font-size: 40pt; color: #9A0000">
                                    <span class="fas fa-exclamation-triangle"></span>
                                </span>
                            </center>
                        </div>
                        <div class="row"></div>
                        <hr/>
                        <div class="col-xs-12">
                            <p style="font-size: 16pt; text-align: justify">Lamentamos informarle que el usuario con el cual ha intentado acceder a esta página no cuenta con los permisos necesarios para utilizarla</p>
                        </div>						
						<div class="row"></div>
                        <hr/>
						<center>
							<button class="btn btn-sm btn-primary" id="login-btn">Ir a inicio de sesión</button>
						</center>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/jquery.statusBox.js"></script>
		<script>
			$("#login-btn").bind("click",function() {
                window.location.href = "login.php";
			});
		</script>
    </body>
</html>