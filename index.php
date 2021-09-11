 <?php

	$session_handler_include_origin = "front_end";
    $session_handler_permission_code = array(1,2);

    require "php/session_handler.php";
	
	if (PERSON_NAME == "") {
		$toShowuserName = USER_NAME;
	} else {
		$toShowuserName = PERSON_NAME;
	}

 ?>
 <!DOCTYPE html>
 <html lang="es">
     <head>
         <meta charset="utf-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Ferreteria CRM - Administración</title>
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
     <body class="background-color-1" style="display: none;">
        <div id="hidden-values" style="display:none">
            <input type="text" id="nonce-value" value="<?php echo NONCE_VALUE ?>"/>
        </div>
        <div class="row no-margin no-padding">
            <div class="col-xs-2 no-margin full-height-vh navbar-inverse cube-box" id="left-panel">
                <div id="user-info-section" style="margin-top: 20px;">
                    <div class="text-bold text-white" style="font-size: 16pt;">Bienvenido</div>
                    <div class="text-white" style="font-size: 11pt; margin-top: 5px;">
                        <span class="fas fa-user" style="margin-right: 5px;"></span>
                        <span><?php echo $toShowuserName ?></span>
                    </div>
                </div>
                <hr/>
                <div id="action-info-section">
                    <div id="options-container-1" data-item="option-panel" style="display: none;">
                        <div class="options-title">Acciones</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" id="menu-1-option-1">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Agregar empleado</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                    <div id="options-container-2" data-item="option-panel" style="display: none;">
                        <div class="options-title">Acciones</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" id="menu-2-option-1">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Agregar usuario</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                    <div id="options-container-3" data-item="option-panel" style="display: none;">
                        <div class="options-title">Acciones</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" id="menu-3-option-1">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Agregar almacén</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                    <div id="options-container-4" data-item="option-panel" style="display: none;">
                        <div class="options-title">Acciones</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" id="menu-4-option-1">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Agregar producto</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                    <div id="options-container-0" data-item="option-panel" style="display: none;">
                        <div class="options-title">Filtros</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                    <div id="options-container-7" data-item="option-panel" style="display: none;">
                        <div class="options-title">Acciones</div>
                        <ul class="list-group">
                            <li class="list-group-item pointer unselectable cube-box" id="menu-7-option-1">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Informe de ventas</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" id="menu-7-option-2">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Informe de existencias</span>
                            </li>
                            <li class="list-group-item pointer unselectable cube-box" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span class="far fa-chevron-right" style="margin-right: 5px;"></span>
                                <span>Volver a menú</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div id="close-session-section">
                    <ul class="list-group">
                        <li class="list-group-item pointer unselectable cube-box" id="close-session-btn">
                            <span class="far fa-power-off" style="margin-right: 5px;"></span>
                            <span>Cerrar sesión</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-10 no-margin no-padding full-height-vh background-image-1" id="right-panel">
                <div id="icon-menu">
                    <div class="row no-margin no-padding">                        
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-2">
                                <div class="icon-menu-item-icon">
                                    <span class="far fa-user-lock"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Configurar usuario</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-1">
                                <div class="icon-menu-item-icon">
                                    <span class="fal fa-id-card"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Configurar empleado</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-3">
                                <div class="icon-menu-item-icon">
                                    <span class="fas fa-store"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Configurar almacén</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-4">
                                <div class="icon-menu-item-icon">
                                    <span class="fas fa-box-full"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Configurar producto</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-7">
                                <div class="icon-menu-item-icon">
                                    <span class="fas fa-th-list"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Reportes<br/>&nbsp;</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2 icon-menu-container">
                            <div class="icon-menu-item" id="icon-menu-0">
                                <div class="icon-menu-item-icon">
                                    <span class="fas fas fa-history"></span>
                                </div>
                                <hr/>
                                <div class="icon-menu-item-text">
                                    <span>Ver<br/>historial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row no-margin no-padding" id="menu-container-1" data-options-id="options-container-1" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Empleado</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-1">
                            <table class="table table-striped table-condensed table-hover" id="table-1">
                                <thead>
                                <tr>
                                    <th colspan="7">
                                        <input type="text" class="form-control input-sm full-width-percent" data-search-input="data-table" placeholder="Buscar..."/>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="center-text" colspan="1">
                                        <input type="checkbox" id="table-1-checkall"/>
                                    </th>
                                    <th class="center-text pointer">IT</th>
                                    <th class="center-text pointer">Identificación</th>
                                    <th class="center-text pointer">Nombre completo</th>
                                    <th class="center-text pointer">Télefono Celular</th>
                                    <th class="center-text pointer">Acción</th>
                                    <th class="center-text pointer">Estado</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row no-margin no-padding" id="menu-container-2" data-options-id="options-container-2" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Usuario</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-2">
                            <table class="table table-striped table-condensed table-hover" id="table-2">
                                <thead>
                                <tr>
                                    <th colspan="7">
                                        <input type="text" class="form-control input-sm full-width-percent" data-search-input="data-table" placeholder="Buscar..."/>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="center-text" colspan="1">
                                        <input type="checkbox" id="table-2-checkall"/>
                                    </th>
                                    <th class="center-text pointer">IT</th>
                                    <th class="center-text pointer">Usuario</th>
                                    <th class="center-text pointer">Contraseña</th>
                                    <th class="center-text pointer">Tipo usuario</th>
                                    <th class="center-text pointer">Acción</th>
                                    <th class="center-text pointer">Estado</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row no-margin no-padding" id="menu-container-3" data-options-id="options-container-3" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Almacén</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-3">
                            <table class="table table-striped table-condensed table-hover" id="table-3">
                                <thead>
                                <tr>
                                    <th colspan="8">
                                        <input type="text" class="form-control input-sm full-width-percent" data-search-input="data-table" placeholder="Buscar..."/>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="center-text" colspan="1">
                                        <input type="checkbox" id="table-3-checkall"/>
                                    </th>
                                    <th class="center-text pointer">IT</th>
                                    <th class="center-text pointer">Nombre almacén</th>
                                    <th class="center-text pointer">Página web del almacén</th>
                                    <th class="center-text pointer">Logo almacén</th>
                                    <th class="center-text pointer">Acción</th>
                                    <th class="center-text pointer">Estado</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row no-margin no-padding" id="menu-container-4" data-options-id="options-container-4" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Producto</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-4">
                            <table class="table table-striped table-condensed table-hover" id="table-4">
                                <thead>
                                <tr>
                                    <th colspan="8">
                                        <input type="text" class="form-control input-sm full-width-percent" data-search-input="data-table" placeholder="Buscar..."/>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="center-text" colspan="1">
                                        <input type="checkbox" id="table-4-checkall"/>
                                    </th>
                                    <th class="center-text pointer">IT</th>
                                    <th class="center-text pointer">Producto</th>
                                    <th class="center-text pointer">Tipo producto</th>
                                    <th class="center-text pointer">Proveedor</th>
                                    <th class="center-text pointer">Precio por unidad</th>
                                    <th class="center-text pointer">Acción</th>
                                    <th class="center-text pointer">Estado</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="row no-margin no-padding" id="menu-container-7" data-options-id="options-container-7" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Reportes</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-7">
                            <div id="panel-7-table-8-holder" data-item="table-holder" style="display: none;">                               
                                <!-- Code... -->
                            </div>
                            <div id="panel-7-table-9-holder" data-item="table-holder" style="display: none;">
                                <!-- Code...  -->
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="row no-margin no-padding" id="menu-container-0" data-options-id="options-container-0" data-item="menu-panel" style="display: none;">
                    <div class="panel panel-primary no-margin cube-box">
                        <div class="panel-heading cube-box">
                            <span>Historial</span>
                            <button type="button" class="close" title="Volver" onclick="functionHandler({functionName: 'closeMenuItem'})">
                                <span aria-hidden="true">
                                    <span class="fas fa-long-arrow-left"></span>
                                </span>
                                <span class="sr-only">Volver</span>
                            </button>
                        </div>
                        <div class="panel-body cube-box" data-item="window-to-resize-0">
                            <table class="table table-striped table-condensed table-hover" id="table-0">
                                <thead>
                                <tr>
                                    <th colspan="5">
                                        <input type="text" class="form-control input-sm full-width-percent" data-search-input="data-table" placeholder="Buscar..."/>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="center-text pointer">IT</th>
                                    <th class="center-text pointer">Usuario</th>
                                    <th class="center-text pointer">Fecha</th>
                                    <th class="center-text pointer">Acción</th>
                                    <th class="center-text pointer">Query</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-1-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-1" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Agregar empleado</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-1-container', action: 'close'});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-1">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-1-input-1">Número de identificación <span class="required-field" title="Requerido">*</span></label>
                                <input type="number" maxlength="10" class="form-control input-sm" id="panel-1-input-1" required/>
                            </div>
                            <div class="row no-margin no-padding">
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-right: 5px">
                                        <label for="panel-1-input-2">Nombre(s) <span class="required-field" title="Requerido">*</span></label>
                                        <input type="text" class="form-control input-sm" id="panel-1-input-2" required/>
                                    </div>
                                </div>
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-left: 5px">
                                        <label for="panel-1-input-3">Apellido(s) <span class="required-field" title="Requerido">*</span></label>
                                        <input type="text" class="form-control input-sm" id="panel-1-input-3" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="row no-margin no-padding">
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-right: 5px">
                                        <label for="panel-1-input-4">Teléfono fijo</label>
                                        <input type="number" class="form-control input-sm" id="panel-1-input-4" data-item="can-be-empty"/>
                                    </div>
                                </div>
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-left: 5px">
                                        <label for="panel-1-input-5">Teléfono celular</label>
                                        <input type="number" class="form-control input-sm" id="panel-1-input-5" data-item="can-be-empty"/>
                                    </div>
                                </div>
                            </div>
							<div class="form-group">
                                <label for="panel-1-input-6">Dirección de residencia</label>
                                <input type="text" class="form-control input-sm" id="panel-1-input-6" data-item="can-be-empty"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-6 no-margin no-padding">
                                <div class="form-group no-margin-bottom" style="margin-right: 5px">
                                    <label for="panel-1-input-7">Usuario</label>
                                    <input type="text" class="form-control input-sm" id="panel-1-input-7" data-item="can-be-empty"/>
                                </div>
                            </div>
                            <div class="col-xs-6 no-margin no-padding">
                                <div class="form-group no-margin-bottom" style="margin-left: 5px">
                                    <label for="panel-1-input-8">Contraseña</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control input-sm" id="panel-1-input-8" data-item="can-be-empty"/>
                                        <span class="input-group-btn">
                                            <button type="text" class="btn btn-info btn-sm" id="panel-1-input-9" title="Recrear contraseña">
                                                <span class="fas fa-sync-alt"></span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-1-input-10">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-1-input-10">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-2-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-2" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Editar empleado</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-2-container', action: 'close', onFunctionDone: function() { $('#form-2').find('[data-updated=\'1\']').removeAttr('data-updated'); }});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-2">
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <span>Fecha de registro: </span><span class="text-bold" id="panel-2-title-1"></span>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-2-input-1">Número de identificación</label>
                                <input type="number" maxlength="10" class="form-control input-sm" id="panel-2-input-1" data-update-field="1" data-field-to-update="1"/>
                            </div>
                            <div class="row no-margin no-padding">
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-right: 5px">
                                        <label for="panel-2-input-2">Nombre(s)</label>
                                        <input type="text" class="form-control input-sm" id="panel-2-input-2" data-update-field="1" data-field-to-update="2"/>
                                    </div>
                                </div>
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-left: 5px">
                                        <label for="panel-2-input-3">Apellido(s)</label>
                                        <input type="text" class="form-control input-sm" id="panel-2-input-3" data-update-field="1" data-field-to-update="3"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row no-margin no-padding">
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-right: 5px">
                                        <label for="panel-2-input-4">Teléfono fijo</label>
                                        <input type="text" class="form-control input-sm" id="panel-2-input-4" data-update-field="1" data-field-to-update="4"/>
                                    </div>
                                </div>
                                <div class="col-xs-6 no-margin no-padding">
                                    <div class="form-group" style="margin-left: 5px">
                                        <label for="panel-2-input-5">Teléfono celular</label>
                                        <input type="text" class="form-control input-sm" id="panel-2-input-5" data-update-field="1" data-field-to-update="5"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="panel-2-input-6">Dirección de residencia</label>
                                <input type="text" class="form-control input-sm" id="panel-2-input-6" data-update-field="1" data-field-to-update="6"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-6 no-margin no-padding">
                                <div class="form-group" style="margin-right: 5px">
                                    <label for="">Usuario</label>
                                    <input type="text" class="form-control input-sm disabled" id="panel-2-input-7" data-update-field="1" data-field-to-update="7" disabled readonly/>
                                </div>
                            </div>
                            <div class="col-xs-6 no-margin no-padding">
                                <div class="form-group no-margin-bottom" style="margin-left: 5px">
                                    <label for="panel-2-input-8">Contraseña</label>
                                    <input type="text" class="form-control input-sm disabled" id="panel-2-input-8" data-update-field="1" data-field-to-update="8" data-encrypt="1" disabled readonly/>
                                </div>
                            </div>
                        </div>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-6 no-margin no-padding">
                                <div class="form-group no-margin-bottom" style="margin-left: 5px">
                                    <label for="">Cuenta</label>
                                    <br/>
                                    <button class="btn btn-sm" type="button" data-status="NULL" id="panel-2-input-10"></button>
                                    <!--<button class="btn btn-danger btn-sm" type="button" id="panel-2-input-11">Eliminar</button>-->
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-2-input-12">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-2-input-12">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-3-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-3" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Agregar usuario</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-3-container', action: 'close'});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-3">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-3-input-1">Tipo de usuario<span class="required-field" title="Requerido">*</span></label>
                                <select class="form-control input-sm" id="panel-3-input-1"></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-3-input-2">Nombre de usuario<span class="required-field" title="Requerido">*</span></label>
                                <input type="text" class="form-control input-sm" id="panel-3-input-2" required/>
                            </div>
                            <div class="form-group no-margin-bottom" style="margin-left: 5px">
                                <label for="panel-3-input-4">Contraseña<span class="required-field" title="Requerido">*</span></label>
                                <div class="input-group">
                                    <input type="text" class="form-control input-sm" id="panel-3-input-3" required/>
                                    <span class="input-group-btn">
                                        <button type="text" class="btn btn-info btn-sm" id="panel-3-input-4" title="Recrear contraseña">
                                            <span class="fas fa-sync-alt"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-1-input-10">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-3-input-5">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-4-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-4" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Editar usuario</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-4-container', action: 'close'});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-4">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-4-input-5">Empleado asignado</label>
                                <input type="text" class="form-control input-sm" id="panel-4-input-6" readonly disabled/>
                            </div>
                            <hr/>
                            <div class="form-group">
                                <label for="panel-4-input-5">Tipo de usuario</label>
                                <select class="form-control input-sm" id="panel-4-input-5" data-update-field="1" data-field-to-update="1"></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-4-input-1">Nombre de usuario</label>
                                <input type="text" class="form-control input-sm" id="panel-4-input-1" data-update-field="1" data-field-to-update="2"/>
                            </div>
                            <div class="form-group no-margin-bottom" style="margin-left: 5px">
                                <label for="panel-4-input-2">Contraseña</label>
                                <div class="input-group">
                                    <input type="text" class="form-control input-sm" id="panel-4-input-2" data-update-field="1" data-field-to-update="3" data-encrypt="1"/>
                                    <span class="input-group-btn">
                                        <button type="text" class="btn btn-info btn-sm" id="panel-4-input-3" title="Recrear contraseña">
                                            <span class="fas fa-sync-alt"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-4-input-4">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-4-input-4">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-5-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-5" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Agregar almacén</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-5-container', action: 'close', onFunctionDone: function() { $('#form-2').find('[data-updated=\'1\']').removeAttr('data-updated'); }});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;"> 
                    <div class="panel-body-container" data-item="panel-body-container" id="form-5">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-5-input-1">
                                    Nombre del almacén 
                                    <span class="required-field" title="Requerido">*</span>
                                </label>
                                <input type="text" class="form-control input-sm" id="panel-5-input-1"/>
                            </div>                            
                            <div class="form-group">
                                <label for="panel-5-input-2">
                                    Página web de almacén 
                                    <span class="required-field" title="Requerido">*</span>
                                </label>
                                <input type="text" class="form-control input-sm" id="panel-5-input-2"/>
                            </div>
                            <div class="form-group no-margin-bottom">
                                <label for="panel-5-input-3">Logo almacén</label>
                                <input type="file" class="form-control input-sm" id="panel-5-input-3" data-item="can-be-empty"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-5-input-6">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-5-input-4">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-6-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-6" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Editar almacén</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-6-container', action: 'close'});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-6">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-6-input-1">Nombre del almacén</label>
                                <input type="text" class="form-control input-sm" id="panel-6-input-1" data-update-field="1" data-field-to-update="1"></input>
                            </div>
                            <div class="form-group">
                                <label for="panel-6-input-2">Página web del almacén</label>
                                <input type="text" class="form-control input-sm" id="panel-6-input-2" data-update-field="1" data-field-to-update="2"></input>
                            </div>
                            <div class="form-group">
                                <label for="panel-6-input-3">Logo almacén</label>
                                <input type="text" class="form-control input-sm" id="panel-6-input-3" data-update-field="1" data-field-to-update="3"/>
                            </div>                            
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-6-input-4">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-6-input-4">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-7-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-7" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Agregar producto</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-7-container', action: 'close', onFunctionDone: function() { $('#form-2').find('[data-updated=\'1\']').removeAttr('data-updated'); }});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-7">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-7-input-1">Proveedor de producto<span class="required-field" title="Requerido">*</span></label>
                                <select class="form-control input-sm" id="panel-7-input-1" required></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-7-input-2">Tipo de producto<span class="required-field" title="Requerido">*</span></label>
                                <select class="form-control input-sm" id="panel-7-input-2" required></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-7-input-3">Nombre de producto<span class="required-field" title="Requerido">*</span></label>
                                <input type="text" class="form-control input-sm" id="panel-7-input-3" required/>
                            </div>
                            <div class="form-group">
                                <label for="panel-7-input-4">Precio de producto<span class="required-field" title="Requerido">*</span></label>
                                <input type="number" class="form-control input-sm" id="panel-7-input-4"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-7-input-5">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-7-input-5">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-4 panel-floating panel-center no-padding" id="panel-8-container" data-item="window" style="display: none;">
            <div class="panel panel-primary panel-shadow lobipanel no-margin no-padding" id="panel-8" data-idholder="NULL">
                <div class="panel-heading" data-item="panel-heading">
                    <div class="panel-title">
                        <span>Editar producto</span>
                        <button onclick="functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-8-container', action: 'close'});" type="button" class="close" title="Cerrar">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Cerrar</span>
                        </button>
                    </div>
                </div>
                <div class="panel-body" data-item="panel-body" style="overflow: auto;">
                    <div class="panel-body-container" data-item="panel-body-container" id="form-8">
                        <div class="row no-margin no-padding">
                            <div class="form-group">
                                <label for="panel-8-input-1">Proveedor de producto</label>
                                <select class="form-control input-sm" id="panel-8-input-1" data-update-field="1" data-field-to-update="1"></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-8-input-2">Tipo de producto</label>
                                <select class="form-control input-sm" id="panel-8-input-2" data-update-field="1" data-field-to-update="2"></select>
                            </div>
                            <div class="form-group">
                                <label for="panel-8-input-3">Nombre de producto</label>
                                <input type="text" class="form-control input-sm" id="panel-8-input-3" data-update-field="1" data-field-to-update="3"/>
                            </div>
                            <div class="form-group">
                                <label for="panel-8-input-4">Precio de producto</label>
                                <input type="number" class="form-control input-sm" id="panel-8-input-4" data-update-field="1" data-field-to-update="4"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="row no-margin no-padding">
                            <div class="col-xs-12 no-margin no-padding">
                                <div class="form-group">
                                    <label for="panel-8-input-5">&nbsp;</label>
                                    <button class="btn btn-success btn-sm pull-right" id="panel-8-input-5">Guardar</button>
                                </div>
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
        <script type="text/javascript" src="js/index.js"></script>
     </body>
 </html>