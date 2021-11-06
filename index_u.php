<?php

$session_handler_include_origin = "front_end";
$session_handler_permission_code = array(1,2);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Compra Fácil</title>
    <link rel="shortcut icon" href="css/images/favicon.png">
    <link href="css/bootstrap.css" rel="stylesheet" media="screen">
    <link href="css/bootstrap-theme.css" rel="stylesheet" media="screen">
    <!--<link href="css/bootstrap-lobipanel.css" rel="stylesheet" media="screen">-->
    <link href="css/fontawesome.min.css" rel="stylesheet" media="screen">
    <link href="css/jquery-ui.css" rel="stylesheet" media="screen">
    <link href="css/jquery-ui.structure.css" rel="stylesheet" media="screen">
    <link href="css/jquery-ui.theme.css" rel="stylesheet" media="screen">
    <link href="css/jquery-ui-timepicker-addon.css" rel="stylesheet" media="screen">
    <link href="css/jquery-ui.chosen.min.css" rel="stylesheet" media="screen">
    <link href="css/main-styles.css" rel="stylesheet" media="screen">
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <--[endif]-->
</head>
    <body class="background-color-1" style="overflow-x: hidden;">
        <div class="row">
            <div class="col-lg-12 background-color-2 main-navbar">
                <div class="row">
                    <div class="col-lg-12 center-text text-white text-bold">
                        <h2>Compra Fácil</h2>
                        <p>Busqueda de productos</p>
                    </div>
                </div>
                <div class="form-group" id="form-1">
                    <div class="input-group">
                        <input type="text" class="form-control input-group-lg background-color-3" placeholder="Arepa o Queso o Salchichas" name="productName" id="form-1-input-1">
                        <span class="input-group-btn">
                            <button class="btn btn-default btn-group-lg" type="button" id="form-1-input-2">
                                <span class="fas fa-search"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container container-fluid">
            <div class="row" id="main-table-container">
                <div class="col-lg-12" id="main-table">
                </div>
            </div>
            <div class="row" id="main-placeholder-container">
                <div class="col-lg-12">
                    <div class="panel panel-default margin-top-0" style="padding:20px;">
                        <div class="row">
                            <div class="col-lg-12 center-text">
                                <h1 class="text-bold">¡Realiza la búsqueda de tus productos de la cantas familiar!</h1>
                                <h3>¡Compara los precios y toma la mejor decisión!</h3>
                                <img class="main-table-grocery-stock-image" src="css/images/grocery_bags.png" alt="Grocery bags">
                            </div>
                        </div>
                    </div>
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
        <script type="text/javascript" src="js/jquery-ui-timepicker-addon.js"></script>
        <script type="text/javascript" src="js/jquery-ui-datepicker-es-addon.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/jquery.md5.js"></script>
        <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="js/jquery.dataTables.bootstrap.js"></script>
        <script type="text/javascript" src="js/jquery.md5.js"></script>
        <script type="text/javascript" src="js/bootstrap-lobipanel.js"></script>
        <script type="text/javascript" src="js/bootbox.all.min.js"></script>
        <script type="text/javascript" src="js/jquery.chosen.min.js"></script>
        <script type="text/javascript" src="js/cryptojs/crypto-js.js"></script>
        <script type="text/javascript" src="js/php_js_encryption.js"></script>
        <script type="text/javascript" src="js/jquery.table2excel.min.js"></script>
        <script type="text/javascript" src="js/jquery.statusBox.js"></script>
        <script type="text/javascript" src="js/index_u.js"></script>
    </body>
</html>