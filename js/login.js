$(document).ready(function(){
    main();
});

function main() {
    if (typeof($.cookie("session_id")) !== "undefined") {
        callHandler({
            callName: "cookieCheck"
            ,callArguments: {
                cookieId: $.cookie("session_id")
            }
        });
    } else {
        $("#login-panel, #copyright-div").show("fade",400);
    }
    $("#form1").bind("submit",function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        callHandler({
            callName: "login"
            ,callArguments: {
                userName: $("#form1-input1").val()
                ,password:  $.md5($("#form1-input2").val())
            }
        });
    });
}

function callHandler(args){
    switch (args.callName) {
        case "login":
        case "cookieCheck":

            var jsonData = new Object();

            jsonData.callHeader = args.callName;
            jsonData.callArguments = args.callArguments;
            jsonData = JSON.stringify(jsonData);

            statusBox('loading','NULL','NULL','add','NULL');
            $.ajax({
                contentType: "application/x-www-form-urlencoded",
                url:"php/login_handler.php",
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
        case "login":

            var responseItem_1 = parseInt(args.jsonResponse.values.login_code);
            var responseItem_2 = args.jsonResponse.values.session_id;
            var responseItem_3 = args.jsonResponse.values.redirect_page;
            var responseItem_4 = $("#return-url").val();

            switch (responseItem_1) {
                case 200:
                    $.cookie("session_id",responseItem_2,{expires:31});

                    $("#login-panel, #copyright-div").hide("fade",400, function() {
                        if (responseItem_4 === "") {
                            window.location.href = responseItem_3;
                        } else {
                            window.location.href = responseItem_4;
                        }
                    });

                    break;
                case 404:
                    statusBox('danger','NULL','Usuario o contraseña incorrectos','add','NULL');
                    break;
            }

            break;
        case "cookieCheck":

            var responseItem_1 = parseInt(args.jsonResponse.values.login_code);
            var responseItem_2 = args.jsonResponse.values.redirect_page;
            var responseItem_3 = $("#return-url").val();

            switch (responseItem_1) {
                case 200:

                    $("#login-panel, #copyright-div").hide("fade",400, function() {
                        if (responseItem_3 === "") {
                            window.location.href = responseItem_2;
                        } else {
                            window.location.href = responseItem_3;
                        }
                    });

                    break;
                case 303:
                    $.removeCookie('session_id');
                    $("#login-panel, #copyright-div").show("fade",400);
                    statusBox('warning','NULL','El inicio de ssión ha caducado, porfavor inicie sesión nuevamente','add','4000');
                    break;
                case 404:
                    $.removeCookie('session_id');
                    $("#login-panel, #copyright-div").show("fade",400);
                    break;
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
function dataChangeHandler(args) {

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
function functionHandler(args) {

}