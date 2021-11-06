$(document).ready(function(){
    main();
});

function main() {
    $("#form-1-input-1").bind("keyup",function(event) {
        if (event.keyCode == 13) {
            callHandler({
                callName: "searchProduct"
                , callArguments: {
                    productName: $(this).val()
                }
                , getNodeMethod: "id"
                , callbackNode: "main-table"
                , deleteNodeContent: true
            });
        }
    });
    $("#form-1-input-2").bind("click touchstart",function() {
        callHandler({
            callName: "searchProduct"
            , callArguments: {
                productName: $("#form-1-input-1").val()
            }
            , getNodeMethod: "id"
            , callbackNode: "main-table"
            , deleteNodeContent: true
        });
    });
    $("#form-1-input-1").bind("change", function(){
        if ($(this).val() == "") {
            $("#main-table-container").hide();
            $("#main-placeholder-container").show();
        } else {
            $("#main-table-container").show();
            $("#main-placeholder-container").hide();
        }
    });
}

function callHandler(args){
    switch (args.callName) {
        case "searchProduct":
            var jsonData = new Object();

            jsonData.callHeader = args.callName;
            jsonData.callArguments = args.callArguments;
            jsonData = JSON.stringify(jsonData);

            statusBox('loading','NULL','NULL','add','NULL');
            $.ajax({
                contentType: "application/x-www-form-urlencoded",
                url:"php/index_usuario_call_handler.php",
                type:"POST",
                data: jsonData,
                dataType:"json",
                success: function(jsonResponse) {
                    var error = errorHandler({
                        errorCode: jsonResponse.statusCode
                        ,errorIcon: "warning"
                        ,errorTitle: "Se ha encontrado una excepción"
                        ,errorMessage: jsonResponse.errorMessage
                    });
                    if (!error) {
                        responseHandler({
                            jsonResponse: jsonResponse
                            ,responseName: args.callName
                            ,passedArguments: args
                        });
                    }
                },
                complete: function() {
                    statusBox('loading','NULL','NULL','remove','NULL');
                }
            });

            break;
        default:
            errorHandler({
                errorCode: 500
                ,errorIcon: "warning"
                ,errorTitle: "Se ha encontrado una excepción"
                ,errorMessage: "Javascript error, call handler name '"+args.callName+"' not found"
            });
            break;
    }
}

function responseHandler(args) {
    switch(args.responseName) {
        case "searchProduct":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).empty();
            }

            var formatter = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
            });
            var imagesPath = "php/imagenes/";

            var responseItem_1 = args.jsonResponse.values.groceryName;
            var responseItem_2 = args.jsonResponse.values.productName;
            var responseItem_3 = args.jsonResponse.values.productPrize;
            var responseItem_4 = args.jsonResponse.values.productImage;
            var responseItem_5 = args.jsonResponse.values.groceryImage;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                var divArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    responseItem_3[x] = formatter.format(responseItem_3[x]);

                    if (responseItem_4[x] == null) {
                        responseItem_4[x] = "no_image.png";
                    }
                    if (responseItem_5[x] == null) {
                        responseItem_5[x] = "no_image_2.png";
                    }

                    divArray[x] = document.createElement("div");
                    $(divArray[x]).append(
                        '<div class="panel panel-default margin-top-0">'
                            +'<div class="panel-body">'
                                +'<div class="row">'
                                    +'<div class="col-lg-2 center-text">'
                                        +'<img class="main-table-product-image" src="' + imagesPath + responseItem_4[x] +'" alt="Imagen de producto"/>'
                                    +'</div>'
                                    +'<div class="col-lg-10">'
                                        +'<div class="row">'
                                            +'<div class="col-lg-12">'
                                                +'<h2 class="text-bold">' + responseItem_2[x] + '</h2>'
                                                +'<hr class="border-color-top"/>'
                                                +'<h2>'+ responseItem_3[x] +'</h2>'
                                                +(x == 0 ? '<span class="label label-success" style="font-size: 16pt;">¡El más barato!&nbsp;<span class="fas fa-check"></span></span>':'')
                                                +'<hr class="border-color-top"/>'
                                                +'<div class="row">'
                                                    +'<div class="col-lg-2">'
                                                        +'<img class="main-table-grocery-image" src="'+ imagesPath + responseItem_5[x] +'">'
                                                    +'</div>'
                                                    +'<div class="col-lg-2">'
                                                        +'<p style="font-size: 14pt;">'+ responseItem_1[x] +'</p>'
                                                    +'</div>'
                                                +'</div>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    );
                }

                $(args.passedArguments.callbackNode).append(divArray);
            } else {
                divNode = document.createElement("div");
                $(divNode).append(
                    '<div class="container container-fluid">'
                        +'<div class="row">'
                            +'<div class="col-lg-12" id="main-table">'
                                +'<div class="panel panel-default margin-top-0">'
                                    +'<div class="panel-body">'
                                        +'<div class="row">'
                                            +'<div class="col-lg-12">'
                                                +'<div class="jumbotron">'
                                                    +'<h2>¡Oops!</h2>'
                                                    +'<h4>No hemos encontrado ningún resultado...</h4>'
                                                +'</div>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                );

                $(args.passedArguments.callbackNode).append(divNode);
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        default:
            errorHandler({
                errorCode: 500
                , errorIcon: "warning"
                , errorTitle: "Se ha encontrado una excepción"
                , errorMessage: "Javascript error, response handler name '" + args.responseName + "' not found"
            });
            break;
    }
}

function errorHandler(args) {

    var error = false;
    var modalBoxHeaderIcon = null;
    var modalBoxHeaderIconColor = null;

    switch (parseInt(args.errorCode,10)) {
        case 500:
        case 403:
            switch (args.errorIcon) {
                case "warning":
                    modalBoxHeaderIcon = "fa fa-exclamation-triangle";
                    modalBoxHeaderIconColor = "#9A0000";
                    break;
            }

            $("#modal-box-error-header").empty().html(
                "<span class='"+modalBoxHeaderIcon+"' style='color:"+modalBoxHeaderIconColor+"'></span>"
                +"<span>&nbsp;"+args.errorTitle+"</span>"
            );
            $("#modal-box-error-body").empty().html(
                "<p>"+args.errorMessage+"</p>"
            );

            $("#modal-box-error").modal();

            error = true;

            break;
        case 401:
            window.location.href = "login.php?returnUrl="+window.location.href;
            break;
        default:
            error = false;
            break;
    }

    return error;
}