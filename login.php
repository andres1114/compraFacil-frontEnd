<?php

    if (isset($_GET['returnUrl'])) {
        $returnUrl =  htmlspecialchars($_GET['returnUrl'], ENT_QUOTES, 'UTF-8');
    } else {
        $returnUrl = null;
    }

?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>CompraFacil - Login</title>
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
		<--[endif]-->
	</head>
	<body class="background-color-1">
        <div hidden="hidde" id="hidden-values">
            <input type="text" id="return-url" value="<?php echo $returnUrl; ?>">
        </div>
        <div class="container container-fluid">
            <div class="row">
                <div class="col-xs-4 col-xs-offset-4">
                    <div class="panel panel-default margin-top-1" id="login-panel" style="display: none;">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <img class="center-image" src="css/images/logo-invert-2021.png" alt="Compra fácil logo" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <hr/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <form id="form1">
                                        <div class="form-group">
                                            <input type="text" class="form-control input-sm" id="form1-input1" placeholder="Usuario"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control input-sm" id="form1-input2" placeholder="Contraseña"/>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-sm btn-block">Iniciar sesión</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center-text" id="copyright-div" style="display: none;">&copy; Copyright CompraFácil 2022</div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="modal-box-error">
            <div class="modal-dialog" role="document" id="modal-box-error-container">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 id="modal-box-error-header"></h4>
                    </div>
                    <div class="modal-body" id="modal-box-error-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
		<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/bootstrap.js"></script>
		<script type="text/javascript" src="js/jquery.cookie.js"></script>
		<script type="text/javascript" src="js/jquery.md5.js"></script>
        <script type="text/javascript" src="js/bootstrap-lobipanel.js"></script>
        <script type="text/javascript" src="js/bootbox.all.min.js"></script>
		<script type="text/javascript" src="js/jquery.statusBox.js"></script>
        <script type="text/javascript" src="js/login.js"></script>
	</body>
</html>