$(document).ready(function(){
    main();
});

var timer_1 = {};
var timer_2 = {};
var excelName = {};

function main() {
    $("body").show("fade",400);

    $("#panel-1-input-10").bind("click", function() {
        dataChangeHandler({
            changeName: "personRegistry"
            ,changeOptions: {
                getNodeMethod: "id"
                ,nodeItem: "form-1"
            }
        });
    });
    $("#panel-3-input-5").bind("click", function() {
        dataChangeHandler({
            changeName: "userRegistry"
            ,changeOptions: {
                getNodeMethod: "id"
                ,nodeItem: "form-3"
            }
        });
    });
    $("#panel-5-input-4").bind("click", function() {
        dataChangeHandler({
            changeName: "groceryRegistry"
            ,changeOptions: {
                getNodeMethod: "id"
                ,nodeItem: "form-5"
            }
        });
    });
    $("#panel-7-input-5").bind("click", function() {
        dataChangeHandler({
            changeName: "productRegistry"
            ,changeOptions: {
                getNodeMethod: "id"
                ,nodeItem: "form-7"
            }
        });
    });
    $("#panel-9-input-6").bind("click",function(){
        dataChangeHandler({
            changeName: "kardexRegistry"
            ,changeOptions: {
                getNodeMethod: "id"
                ,nodeItem: "form-9"
            }
        });
    });
    $("#panel-10-input-4").bind("click",function(){
        dataChangeHandler({
            changeName: "saleRegistry"
        });
    });
    $("#panel-2-input-12").bind("click",function(){
        dataChangeHandler({
            changeName: "personUpdate"
            ,getNodeMethod: "id"
            ,nodeItem: "form-2"
        });
    });
    $("#panel-4-input-4").bind("click",function(){
        dataChangeHandler({
            changeName: "userUpdate"
            ,getNodeMethod: "id"
            ,nodeItem: "form-4"
        });
    });
    $("#panel-6-input-4").bind("click",function(){
        dataChangeHandler({
            changeName: "groceryUpdate"
            ,getNodeMethod: "id"
            ,nodeItem: "form-6"
        });
    });
    $("#panel-8-input-5").bind("click",function(){
        dataChangeHandler({
            changeName: "productUpdate"
            ,getNodeMethod: "id"
            ,nodeItem: "form-8"
        });
    });
    $("#table-9-date-field-1, #table-9-date-field-2, #table-9-pay-method-id-field").bind("change",function(){
        callHandler({
            callName: "showSalesReport"
            ,callArguments: {
                dateStart: $("#table-9-date-field-1").val()
                ,dateEnd: $("#table-9-date-field-2").val()
                ,paytypeId: $("#table-9-pay-method-id-field").val()
            }
            ,getNodeMethod: "id"
            ,callbackNode: "table-9"
            ,deleteNodeContent: true
        });
    });

    $("#panel-2-input-10").bind("click",function(){

        var btnStatus = $(this).attr("data-status");

        if (btnStatus == "active") {
            var valueToUpdate = "false";
            var confirmText = "¿Está seguro en desactivar el usuario?";
        } else {
            var valueToUpdate = "true";
            var confirmText = "¿Está seguro en activar el usuario?";
        }

        var _confirm = confirm(confirmText);

        if (_confirm) {
            dataChangeHandler({
                changeName: "personUpdate"
                ,getNodeMethod: "NULL"
                ,nodeItem: "NULL"
                ,valuesToEdit: {
                    personId: $("#panel-2").attr("data-idholder")
                    ,valueToUpdate: valueToUpdate
                    ,fieldToUpdate: 9
                }
            });
        }
    });
    $("#panel-2-input-11").bind("click",function(){

        var confirmText = "¿Está seguro en eliminar el usuario?";
        var _confirm = confirm(confirmText);

        if (_confirm) {
            dataChangeHandler({
                changeName: "personUpdate"
                ,getNodeMethod: "NULL"
                ,nodeItem: "NULL"
                ,valuesToEdit: {
                    personId: $("#panel-2").attr("data-idholder")
                    ,valueToUpdate: "NULL"
                    ,fieldToUpdate: 10
                }
            });
        }
    });

    functionHandler({
        functionName: "createEditionInputs"
        ,getNodeMethod: "id"
        ,nodeItem: "form-2"
    });
    functionHandler({
        functionName: "createEditionInputs"
        ,getNodeMethod: "id"
        ,nodeItem: "form-4"
    });
    functionHandler({
        functionName: "createEditionInputs"
        ,getNodeMethod: "id"
        ,nodeItem: "form-6"
    });
    functionHandler({
        functionName: "createEditionInputs"
        ,getNodeMethod: "id"
        ,nodeItem: "form-8"
    });

    $("#menu-1-option-1").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-1-container'
            , action: 'open'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: "focusInput"
                    , getNodeMethod: "id"
                    , nodeItem: "panel-1-input-1"
                    , delay: 100
                });
                $("#panel-1-input-8").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");
            }
        });
    });
    $("#menu-2-option-1").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-3-container'
            , action: 'open'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: "focusInput"
                    , getNodeMethod: "id"
                    , nodeItem: "panel-3-input-2"
                    , delay: 100
                });
                $("#panel-3-input-3").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");
            }
        });
    });
    $("#menu-3-option-1").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-5-container'
            , action: 'open'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: "focusInput"
                    , getNodeMethod: "id"
                    , nodeItem: "panel-5-input-3"
                    , delay: 100
                });
            }
        });
    });
    $("#menu-4-option-1").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-7-container'
            , action: 'open'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: "focusInput"
                    , getNodeMethod: "id"
                    , nodeItem: "panel-7-input-3"
                    , delay: 100
                });
            }
        });
    });
    $("#menu-7-option-1").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-7-table-8-holder'
            , action: 'close'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: 'windowHandler'
                    , getNodeMethod: 'id'
                    , nodeItem: 'panel-7-table-9-holder'
                    , action: 'open'
                    , onFunctionDone: function() {
                        callHandler({
                            callName: "showSalesReport"
                            ,callArguments: {
                                dateStart: $("#table-9-date-field-1").val()
                                ,dateEnd: $("#table-9-date-field-2").val()
                                ,paytypeId: $("#table-9-pay-method-id-field").val()
                            }
                            ,getNodeMethod: "id"
                            ,callbackNode: "table-9"
                            ,deleteNodeContent: true
                        });
                    }
                });
            }
        });
    });
    $("#menu-7-option-2").bind("click", function(){
        functionHandler({
            functionName: 'windowHandler'
            , getNodeMethod: 'id'
            , nodeItem: 'panel-7-table-9-holder'
            , action: 'close'
            , onFunctionDone: function() {
                functionHandler({
                    functionName: 'windowHandler'
                    , getNodeMethod: 'id'
                    , nodeItem: 'panel-7-table-8-holder'
                    , action: 'open'
                    , onFunctionDone: function() {
                        callHandler({
                            callName: "showKardexReport"
                            ,callArguments: null
                            ,getNodeMethod: "id"
                            ,callbackNode: "table-8"
                            ,deleteNodeContent: true
                        });
                    }
                });
            }
        });
    });
    $("#table-8-export-to-excel").bind("click", function(){
        functionHandler({
            functionName: "tableToExcel"
            ,getNodeMethod: "id"
            ,nodeItem: "table-8"
            ,fileName: "reporte_existencias"
        });
    });
    $("#table-9-export-to-excel").bind("click", function(){
        functionHandler({
            functionName: "tableToExcel"
            ,getNodeMethod: "id"
            ,nodeItem: "table-9"
            ,fileName: "reporte_ventas_"+$("#table-9-date-field-1").val()+"_"+$("#table-9-date-field-2").val()
        });
    });

    $("#panel-1-input-1, #panel-1-input-2, #panel-1-input-3").bind("change", function() {
        var generateUserNameFlag_1 = false;
        var generateUserNameFlag_2 = false;
        var generateUserNameFlag_3 = false;
        if ($("#panel-1-input-1").val() !== "" && $("#panel-1-input-1").val().split("").length >= 3) {
            generateUserNameFlag_1 = true;
        }
        if ($("#panel-1-input-2").val() !== "") {
            generateUserNameFlag_2 = true;
        }
        if ($("#panel-1-input-3").val() !== "") {
            generateUserNameFlag_3 = true;
        }

        if (generateUserNameFlag_1 && generateUserNameFlag_2 && generateUserNameFlag_3) {
            $("#panel-1-input-7").val(
                functionHandler({
                    functionName: "generateUserName"
                    ,values: {
                        userName_fnameValue: $("#panel-1-input-2").val()
                        ,userName_lnameValue: $("#panel-1-input-3").val()
                        ,userName_idValue: $("#panel-1-input-1").val()
                    }
                })
            );
        }
    });

    $("#table-1-checkall").bind("change", function() {
        functionHandler({
            functionName: "checkAllTableRows"
            ,getNodeMethod: "id"
            ,nodeItem: "table-1"
            ,checkboxNode: this
        });
    });
    $("#table-2-checkall").bind("change", function() {
        functionHandler({
            functionName: "checkAllTableRows"
            ,getNodeMethod: "id"
            ,nodeItem: "table-2"
            ,checkboxNode: this
        });
    });
    $("#table-3-checkall").bind("change", function() {
        functionHandler({
            functionName: "checkAllTableRows"
            ,getNodeMethod: "id"
            ,nodeItem: "table-3"
            ,checkboxNode: this
        });
    });
    $("#table-4-checkall").bind("change", function() {
        functionHandler({
            functionName: "checkAllTableRows"
            ,getNodeMethod: "id"
            ,nodeItem: "table-4"
            ,checkboxNode: this
        });
    });
    $("#table-5-checkall").bind("change", function() {
        functionHandler({
            functionName: "checkAllTableRows"
            ,getNodeMethod: "id"
            ,nodeItem: "table-5"
            ,checkboxNode: this
        });
    });

    $("#panel-1-input-9").bind("click",function(){
        $("#panel-1-input-8").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");
    })
    $("#panel-3-input-4").bind("click",function(){
        $("#panel-3-input-3").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");
    });
    $("#panel-4-input-3").bind("click",function(){
        $("#panel-4-input-2").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");
    });
    $("#icon-menu-0").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-0"
            ,hasOptions: true
            ,onFunctionDone: function() {
                callHandler({
                    callName: "showLog"
                    ,callArguments: null
                    ,getNodeMethod: "id"
                    ,callbackNode: "table-0"
                    ,deleteNodeContent: true
                });
            }
        });
    });
    $("#icon-menu-1").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-1"
            ,hasOptions: true
        });
    });
    $("#icon-menu-2").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-2"
            ,hasOptions: true
        });
    });
    $("#icon-menu-3").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-3"
            ,hasOptions: true
        });
    });
    $("#icon-menu-4").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-4"
            ,hasOptions: true
        });
    });
    $("#icon-menu-5").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-5"
            ,hasOptions: true
        });
    });
    $("#icon-menu-6").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-6"
            ,hasOptions: true
            ,onFunctionDone: function() {
                callHandler({
                    callName: "showProductsToSell"
                    ,callArguments: null
                    ,getNodeMethod: "id"
                    ,callbackNode: "table-6"
                    ,deleteNodeContent: true
                });
            }
        });
    });
    $("#icon-menu-7").bind("click",function(){
        functionHandler({
            functionName: "enterMenuItem"
            ,getNodeMethod: "id"
            ,nodeItem: "menu-container-7"
            ,hasOptions: true
        });
    });

    $("input[data-search-input='data-table']").bind("keyup",function(){
        $(this).parents("table").DataTable().search($(this).val()).draw();
    });
    $("input[data-item='search-input']").bind("keyup",function(){
        functionHandler({functionName: "tableSearch", searchInputNode: this, searchDelay: 100});
    });

    callHandler({
        callName: "showPersons"
        ,callArguments: null
        ,getNodeMethod: "id"
        ,callbackNode: "table-1"
        ,deleteNodeContent: true
    });
    callHandler({
        callName: "showUsers"
        ,callArguments: null
        ,getNodeMethod: "id"
        ,callbackNode: "table-2"
        ,deleteNodeContent: true
    });
    callHandler({
        callName: "showGroceries"
        ,callArguments: null
        ,getNodeMethod: "id"
        ,callbackNode: "table-3"
        ,deleteNodeContent: true
    });
    callHandler({
        callName: "showProducts"
        ,callArguments: null
        ,getNodeMethod: "id"
        ,callbackNode: "table-4"
        ,deleteNodeContent: true
    });
    callHandler({
        callName: "showProductsForKardex"
        ,callArguments: null
        ,getNodeMethod: "id"
        ,callbackNode: "table-5"
        ,deleteNodeContent: true
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showUserType"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-3-input-1"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: false
        ,triggerOnChange: false
        ,selectedOption: 2
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showUserType"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-4-input-5"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: false
        ,triggerOnChange: false
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showUserlessPerson"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-3-input-0"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: true
        ,nodeBeforeLoadArray: {
            id: [0]
            ,name: ["Sin empleado"]
        }
        ,triggerChosen: true
        ,chosenOptions: {
            widthUnit: "%"
            ,widthValue: 100
        }
        ,triggerOnChange: true
    });
    // functionHandler({
    //     functionName: "selectFiller"
    //     ,callHeader: "showCities"
    //     ,getNodeMethod: "id"
    //     ,nodeItem: "panel-5-input-1"
    //     ,deleteNodeContent: true
    //     ,addDividerToNode: false
    //     ,addNodeBeforeLoad: false
    //     ,triggerChosen: true
    //     ,chosenOptions: {
    //         widthUnit: "%"
    //         ,widthValue: 100
    //     }
    //     ,triggerOnChange: false
    // });
    // functionHandler({
    //     functionName: "selectFiller"
    //     ,callHeader: "showCities"
    //     ,getNodeMethod: "id"
    //     ,nodeItem: "panel-6-input-1"
    //     ,deleteNodeContent: true
    //     ,addDividerToNode: false
    //     ,addNodeBeforeLoad: false
    //     ,triggerChosen: true
    //     ,chosenOptions: {
    //         widthUnit: "%"
    //         ,widthValue: 100
    //     }
    //     ,triggerOnChange: false
    // });
    // functionHandler({
    //     functionName: "selectFiller"
    //     ,callHeader: "showPersonIdType"
    //     ,getNodeMethod: "id"
    //     ,nodeItem: "panel-5-input-2"
    //     ,deleteNodeContent: true
    //     ,addDividerToNode: false
    //     ,addNodeBeforeLoad: false
    //     ,triggerChosen: false
    //     ,triggerOnChange: false
    // });
    // functionHandler({
    //     functionName: "selectFiller"
    //     ,callHeader: "showPersonIdType"
    //     ,getNodeMethod: "id"
    //     ,nodeItem: "panel-6-input-2"
    //     ,deleteNodeContent: true
    //     ,addDividerToNode: false
    //     ,addNodeBeforeLoad: false
    //     ,triggerChosen: false
    //     ,triggerOnChange: false
    // });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showGroceries"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-7-input-1"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: true
        ,chosenOptions: {
            widthUnit: "%"
            ,widthValue: 100
        }
        ,triggerOnChange: false
        ,selectedOption: 2
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showProductTypes"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-7-input-2"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: true
        ,chosenOptions: {
            widthUnit: "%"
            ,widthValue: 100
        }
        ,triggerOnChange: false
        ,selectedOption: 2
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showProductTypes"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-8-input-2"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: true
        ,chosenOptions: {
            widthUnit: "%"
            ,widthValue: 100
        }
        ,triggerOnChange: false
        ,selectedOption: 2
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showPayTypes"
        ,getNodeMethod: "id"
        ,nodeItem: "panel-10-input-3"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: false
        ,triggerChosen: false
        ,triggerOnChange: false
        ,selectedOption: 1
    });
    functionHandler({
        functionName: "selectFiller"
        ,callHeader: "showPayTypes"
        ,getNodeMethod: "id"
        ,nodeItem: "table-9-pay-method-id-field"
        ,deleteNodeContent: true
        ,addDividerToNode: false
        ,addNodeBeforeLoad: true
        ,nodeBeforeLoadArray: {
            id: [0]
            ,name: ["Todos"]
        }
        ,triggerChosen: false
        ,triggerOnChange: false
    });


    String.prototype.replaceArray = function(find, replace) {
        var replaceString = this;
        var regex;
        for (var i = 0; i < find.length; i++) {
            regex = new RegExp(find[i], "g");
            replaceString = replaceString.replace(regex, replace[i]);
        }
        return replaceString;
    };

    $("#close-session-btn").bind("click",function(event){
        callHandler({
            callName: "closeSession"
            ,callArguments: {
                cookieId: $.cookie("session_id")
            }
        });
    });

    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-0").find("div[data-item='window-to-resize-0']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
	functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-1").find("div[data-item='window-to-resize-1']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-2").find("div[data-item='window-to-resize-2']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-3").find("div[data-item='window-to-resize-3']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-4").find("div[data-item='window-to-resize-4']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-5").find("div[data-item='window-to-resize-5']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-6").find("div[data-item='window-to-resize-6']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-7").find("div[data-item='window-to-resize-7']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 43
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#panel-9").find("div[data-item='panel-body-container']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 230
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#panel-9").find("div[data-item='item-to-resize-1']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 0
        ,offsetPixels: 640
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-6").find("div[data-item='item-to-resize-1']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 260
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#menu-container-6").find("div[data-item='item-to-resize-2']").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 330
    });
    functionHandler({
        functionName: "resizeHtmlNode"
        ,getNodeMethod: "node"
        ,nodeItem: $("#action-info-section").get()
        ,heightPercentage: 100
        ,minHeightPercentage: 40
        ,offsetPixels: 230
    });
    $('#panel-1, #panel-2, #panel-3, #panel-4, #panel-5, #panel-6, #panel-7, #panel-8, #panel-9').lobiPanel("enableDrag");
    $('#panel-1, #panel-2, #panel-3, #panel-4, #panel-5, #panel-6, #panel-7, #panel-8, #panel-9').lobiPanel("enableResize");
    $('#panel-1, #panel-2, #panel-3, #panel-4, #panel-5, #panel-6, #panel-7, #panel-8, #panel-9').on("onResize.lobiPanel",function(){
        $(this).find("div[data-item='panel-body-container']").css("height",($(this).height() - $(this).find("div[data-item='panel-heading']").outerHeight() - 31)+"px");
    });

    $(window).resize(function(){
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-0").find("div[data-item='window-to-resize-0']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-1").find("div[data-item='window-to-resize-1']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#menu-container-2").find("div[data-item='window-to-resize-2']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-3").find("div[data-item='window-to-resize-3']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-4").find("div[data-item='window-to-resize-4']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-5").find("div[data-item='window-to-resize-5']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            , getNodeMethod: "node"
            , nodeItem: $("#menu-container-6").find("div[data-item='window-to-resize-6']").get()
            , heightPercentage: 100
            , minHeightPercentage: 40
            , offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#menu-container-7").find("div[data-item='window-to-resize-7']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 43
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#panel-9").find("div[data-item='panel-body-container']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 230
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#panel-9").find("div[data-item='item-to-resize-1']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 0
            ,offsetPixels: 640
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#menu-container-6").find("div[data-item='item-to-resize-1']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 260
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#menu-container-6").find("div[data-item='item-to-resize-2']").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 330
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $("#action-info-section").get()
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 230
        });

        var tableNode = $("#table-0").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#table-1").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#table-2").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#table-3").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#table-4").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#table-5").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 75
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 209
        });

        var tableNode = $("#panel-9-table-1").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 20
            ,offsetPixels: 315
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 20
            ,offsetPixels: 315
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 20
            ,offsetPixels: 450
        });

        var tableNode = $("#table-6").get(0);
        var tableWrapper = $(tableNode).parent().parent().get(0);

        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: $(tableWrapper).children().first().get(0)
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 285
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableWrapper
            ,heightPercentage: 100
            ,minHeightPercentage: 40
            ,offsetPixels: 285
        });
        functionHandler({
            functionName: "resizeHtmlNode"
            ,getNodeMethod: "node"
            ,nodeItem: tableNode
            ,heightPercentage: 100
            ,minHeightPercentage: 20
            ,offsetPixels: 440
        });
    });
}
function callHandler(args){
    switch (args.callName) {
        case "closeSession":
        case "showPersons":
        case "showPersonData":
        case "showUsers":
        case "showUserData":
        case "showGroceryData":
        case "showGroceries":
        case "showProducts":
        case "showProductData":
        case "showProductsForKardex":
        case "showKardexData":
        case "showProductsToSell":
        case "showSalesReport":
        case "showKardexReport":
        case "showLog":

            var jsonData = new Object();

            jsonData.callHeader = args.callName;
            jsonData.callArguments = args.callArguments;
            jsonData = JSON.stringify(jsonData);

            statusBox('loading','NULL','NULL','add','NULL');
            $.ajax({
                contentType: "application/x-www-form-urlencoded",
                url:"php/index_admin_call_handler.php",
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
        case "closeSession":
            $.removeCookie('session_id');
            $("body").hide("fade",400,function(){
                window.location.href = "login.php";
            });
            break;
        case "personRegistry":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 0:
                    statusBox('warning','NULL','El empleado ya existe','add','NULL');
                    break;
                case 1:
                    statusBox('success','NULL','Hecho','add','NULL');

                    $("#panel-1-input-1").val("");
                    $("#panel-1-input-2").val("");
                    $("#panel-1-input-3").val("");
                    $("#panel-1-input-5").val("");
                    $("#panel-1-input-6").val("");
                    $("#panel-1-input-7").val("");
                    $("#panel-1-input-8").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");

                    callHandler({
                        callName: "showPersons"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-1"
                        ,deleteNodeContent: true
                    });
                    callHandler({
                        callName: "showUsers"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-2"
                        ,deleteNodeContent: true
                    });
                    functionHandler({
                        functionName: "selectFiller"
                        ,callHeader: "showUserlessPerson"
                        ,getNodeMethod: "id"
                        ,nodeItem: "panel-3-input-0"
                        ,deleteNodeContent: true
                        ,addDividerToNode: false
                        ,addNodeBeforeLoad: true
                        ,nodeBeforeLoadArray: {
                            id: [0]
                            ,name: ["Sin empleado"]
                        }
                        ,triggerChosen: true
                        ,chosenOptions: {
                            widthUnit: "%"
                            ,widthValue: 100
                        }
                        ,triggerOnChange: true
                    });

                    break;
                case 2:
                    statusBox('success','NULL','Hecho','add','NULL');
                    statusBox('danger','NULL','El usuario no ha sido agregado dado que este ya existe','add','6000');

                    $("#panel-1-input-1").val("");
                    $("#panel-1-input-2").val("");
                    $("#panel-1-input-3").val("");
                    $("#panel-1-input-4").val("");
                    $("#panel-1-input-5").val("");
                    $("#panel-1-input-6").val("");

                    callHandler({
                        callName: "showPersons"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-1"
                        ,deleteNodeContent: true
                        ,addDividerToNode: false
                        ,dividerText: null
                    });
                    callHandler({
                        callName: "showUsers"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-2"
                        ,deleteNodeContent: true
                    });
                    functionHandler({
                        functionName: "selectFiller"
                        ,callHeader: "showUserlessPerson"
                        ,getNodeMethod: "id"
                        ,nodeItem: "panel-3-input-0"
                        ,deleteNodeContent: true
                        ,addDividerToNode: false
                        ,addNodeBeforeLoad: true
                        ,nodeBeforeLoadArray: {
                            id: [0]
                            ,name: ["Sin empleado"]
                        }
                        ,triggerChosen: true
                        ,chosenOptions: {
                            widthUnit: "%"
                            ,widthValue: 100
                        }
                        ,triggerOnChange: true
                    });

                    break;
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showPersons":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.personId;
            var responseItem_3 = args.jsonResponse.values.personFullName;
            var responseItem_5 = args.jsonResponse.values.active;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='7'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 6; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center");
                                var tempInputNode = $('<input type="checkbox"/>');

                                $(tdArray[y]).append(tempInputNode);

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_3[x]);

                                break;
                            case 4:

                                $(tdArray[y]).addClass("tbl-text-align-center").append(
                                    "<div class='btn-group dropdown full-width-percent'>"
                                        +"<button class='btn btn-default btn-sm btn-block dropdown-toggle' data-toggle='dropdown'>Acción&nbsp;<span class='caret'></span></button>"
                                        +"<ul class='dropdown-menu dropdown-menu-right'>"
                                            +"<li data-item='option-1'><a href='#'>Editar empleado</a></li>"
                                            +"<li role='separator' class='divider'></li>"
                                            +"<li data-item='option-3'><a href='#'>Eliminar empleado</a></li>"
                                        +"</ul>"
                                    +"</div>"
                                );
                                $(tdArray[y]).find("li[data-item='option-1']").bind("click",function(){

                                    $("#panel-2").attr("data-idholder", $(this).parents("tr").attr("data-id"));

                                    callHandler({
                                        callName: "showPersonData"
                                        ,callArguments: {
                                            personId: $("#panel-2").attr("data-idholder")
                                        }
                                        ,getNodeMethod: null
                                        ,callbackNode: null
                                        ,deleteNodeContent: null
                                        ,addDividerToNode: null
                                        ,dividerText: null
                                        ,onCallDone: function() {
                                            functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-2-container', action: 'open'});
                                        }
                                    });
                                });
                                $(tdArray[y]).find("li[data-item='option-3']").bind("click",function(){

                                    var confirmText = "¿Está seguro en eliminar el empleado? Todos sus datos serán eliminados de manera permanente, ¿está seguro en continuar?";

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "personUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                personId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: "NULL"
                                                ,fieldToUpdate: 12
                                            }
                                        });
                                    }
                                });

                                break;
                            case 5:
                                var button = document.createElement("button");

                                if (parseInt(responseItem_5[x],10) == 1) {
                                    $(button).attr("class","btn btn-success btn-sm btn-block cube-box");
                                    $(button).attr("title","Desactivar");
                                    $(button).attr("data-status","active");
                                    $(button).html("<span>Activo</span>");
                                } else {
                                    $(button).attr("class","btn btn-danger btn-sm btn-block");
                                    $(button).attr("title","Activar");
                                    $(button).attr("data-status","inactive");
                                    $(button).html("<span>Inactivo</span>");
                                }

                                $(button).bind("click",function(){

                                    var btnStatus = $(this).attr("data-status");

                                    if (btnStatus == "active") {
                                        var valueToUpdate = "false";
                                        var confirmText = "¿Está seguro en desactivar el empleado?";
                                    } else {
                                        var valueToUpdate = "true";
                                        var confirmText = "¿Está seguro en activar el empleado?";
                                    }

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "personUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                personId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: valueToUpdate
                                                ,fieldToUpdate: 11
                                            }
                                        });
                                    }
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showPersonData":

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.personId;
            var responseItem_3 = args.jsonResponse.values.userId;
            var responseItem_4 = args.jsonResponse.values.personFirstName;
            var responseItem_5 = args.jsonResponse.values.personLastName;
            var responseItem_9 = args.jsonResponse.values.personUserName;
            var responseItem_10 = args.jsonResponse.values.personUserPassword;
            var responseItem_11 = args.jsonResponse.values.personRegistrationDate;
            var responseItem_12 = args.jsonResponse.values.isPersonActive;
            var responseItem_13 = args.jsonResponse.values.isUserActive;
            var responseItem_14 = args.jsonResponse.values.isUserRegistered;

            $("#panel-2-title-1").html(responseItem_11);
            $("#panel-2-input-1").val(responseItem_2);
            $("#panel-2-input-2").val(responseItem_4);
            $("#panel-2-input-3").val(responseItem_5);

            if (parseInt(responseItem_14,10) == 1) {
                var encryption = new Encryption();

                $("#panel-2-input-7").val(responseItem_9);
                $("#panel-2-input-8").val(encryption.decrypt(responseItem_10, $("#nonce-value").val()));

                if (parseInt(responseItem_13, 10) == 1) {
                    $("#panel-2-input-10").removeClass("btn-warning");
                    $("#panel-2-input-10").removeClass("disabled");
                    $("#panel-2-input-10").removeAttr("disabled");
                    $("#panel-2-input-10").addClass("btn-success");
                    $("#panel-2-input-10").html("Activo");
                    $("#panel-2-input-10").attr("title","Desactivar");
                    $("#panel-2-input-10").attr("data-status","active");

                    /*$("#panel-2-input-11").removeClass("disabled");
                    $("#panel-2-input-11").removeAttr("disabled");
                    $("#panel-2-input-11").addClass("btn-warning");
                    $("#panel-2-input-11").attr("data-status","active");*/
                } else {
                    $("#panel-2-input-10").removeClass("btn-success");
                    $("#panel-2-input-10").removeClass("disabled");
                    $("#panel-2-input-10").removeAttr("disabled");
                    $("#panel-2-input-10").addClass("btn-warning");
                    $("#panel-2-input-10").html("Inactivo");
                    $("#panel-2-input-10").attr("title","Activar");
                    $("#panel-2-input-10").attr("data-status","inactive");

                    /*$("#panel-2-input-11").removeClass("disabled");
                    $("#panel-2-input-11").removeAttr("disabled");
                    $("#panel-2-input-11").addClass("btn-warning");
                    $("#panel-2-input-11").attr("data-status","inactive");*/
                }

            } else {
                $("#panel-2-input-7").val("");
                $("#panel-2-input-8").val("");

                $("#panel-2-input-10").removeClass("btn-warning");
                $("#panel-2-input-10").removeClass("btn-success");
                $("#panel-2-input-10").removeAttr("data-updated");
                $("#panel-2-input-10").addClass("btn-default");
                $("#panel-2-input-10").addClass("disabled");
                $("#panel-2-input-10").attr("disabled", "disabled");
                $("#panel-2-input-10").attr("data-status","inactive");
                $("#panel-2-input-10").html("Inactivo");

                /*$("#panel-2-input-11").removeClass("btn-warning");
                $("#panel-2-input-11").removeClass("btn-success");
                $("#panel-2-input-11").removeAttr("data-updated");
                $("#panel-2-input-11").addClass("btn-default");
                $("#panel-2-input-11").addClass("disabled");
                $("#panel-2-input-11").attr("disabled", "disabled");
                $("#panel-2-input-11").attr("data-status","inactive");*/
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }
            break;
        case "personUpdate":

            statusBox('success','NULL','Hecho','add','NULL');
            $("#panel-2").attr("data-idholder", "NULL");

            functionHandler({
                functionName: 'windowHandler'
                , getNodeMethod: 'id'
                , nodeItem: 'panel-2-container'
                , action: 'close'
            });
            callHandler({
                callName: "showPersons"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-1"
                ,deleteNodeContent: true
            });
            callHandler({
                callName: "showUsers"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-2"
                ,deleteNodeContent: true
            });
            functionHandler({
                functionName: "selectFiller"
                ,callHeader: "showUserlessPerson"
                ,getNodeMethod: "id"
                ,nodeItem: "panel-3-input-0"
                ,deleteNodeContent: true
                ,addDividerToNode: false
                ,addNodeBeforeLoad: true
                ,nodeBeforeLoadArray: {
                    id: [0]
                    ,name: ["Sin empleado"]
                }
                ,triggerChosen: true
                ,chosenOptions: {
                    widthUnit: "%"
                    ,widthValue: 100
                }
                ,triggerOnChange: true
            });

            break;
        case "userRegistry":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 0:
                    statusBox('warning','NULL','El usuario ya existe','add','NULL');
                    break;
                case 1:
                    statusBox('success','NULL','Hecho','add','NULL');

                    $("#panel-3-input-2").val("");
                    $("#panel-3-input-3").val(functionHandler({functionName: "generatePassword", characterSet:"a-z,A-Z,0-9", passwordSize: 8})).trigger("change");

                    callHandler({
                        callName: "showUsers"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-2"
                        ,deleteNodeContent: true
                    });

                    break;
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showUsers":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var encryption = new Encryption();

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.personUserName;
            var responseItem_3 = args.jsonResponse.values.personUserPassword;
            var responseItem_4 = args.jsonResponse.values.active;
            var responseItem_5 = args.jsonResponse.values.personUserType;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='6'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 7; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center");
                                var tempInputNode = $('<input type="checkbox"/>');

                                $(tdArray[y]).append(tempInputNode);

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(encryption.decrypt(responseItem_3[x], $("#nonce-value").val()));

                                break;
                            case 4:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_5[x]);

                                break;
                            case 5:

                                $(tdArray[y]).addClass("tbl-text-align-center").append(
                                    "<div class='btn-group dropdown full-width-percent'>"
                                    +"<button class='btn btn-default btn-sm btn-block dropdown-toggle' data-toggle='dropdown'>Acción&nbsp;<span class='caret'></span></button>"
                                    +"<ul class='dropdown-menu dropdown-menu-right'>"
                                    +"<li data-item='option-1'><a href='#'>Editar usuario</a></li>"
                                    +"<li role='separator' class='divider'></li>"
                                    +"<li data-item='option-3'><a href='#'>Eliminar usuario</a></li>"
                                    +"</ul>"
                                    +"</div>"
                                );
                                $(tdArray[y]).find("li[data-item='option-1']").bind("click",function(){

                                    $("#panel-4").attr("data-idholder", $(this).parents("tr").attr("data-id"));

                                    callHandler({
                                        callName: "showUserData"
                                        ,callArguments: {
                                            userId: $("#panel-4").attr("data-idholder")
                                        }
                                        ,getNodeMethod: null
                                        ,callbackNode: null
                                        ,deleteNodeContent: null
                                        ,addDividerToNode: null
                                        ,dividerText: null
                                        ,onCallDone: function() {
                                            functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-4-container', action: 'open'});
                                        }
                                    });
                                });
                                $(tdArray[y]).find("li[data-item='option-3']").bind("click",function(){

                                    var confirmText = "¿Está seguro en eliminar el usuario?";

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "userUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                userId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: "NULL"
                                                ,fieldToUpdate: 5
                                            }
                                        });
                                    }
                                });

                                break;
                            case 6:
                                var button = document.createElement("button");

                                if (parseInt(responseItem_4[x],10) == 1) {
                                    $(button).attr("class","btn btn-success btn-sm btn-block cube-box");
                                    $(button).attr("title","Desactivar");
                                    $(button).attr("data-status","active");
                                    $(button).html("<span>Activo</span>");
                                } else {
                                    $(button).attr("class","btn btn-danger btn-sm btn-block");
                                    $(button).attr("title","Activar");
                                    $(button).attr("data-status","inactive");
                                    $(button).html("<span>Inactivo</span>");
                                }

                                $(button).bind("click",function(){

                                    var btnStatus = $(this).attr("data-status");

                                    if (btnStatus == "active") {
                                        var valueToUpdate = "false";
                                        var confirmText = "¿Está seguro en desactivar el usuario?";
                                    } else {
                                        var valueToUpdate = "true";
                                        var confirmText = "¿Está seguro en activar el usuario?";
                                    }

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "userUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                userId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: valueToUpdate
                                                ,fieldToUpdate: 4
                                            }
                                        });
                                    }
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });
            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showUserData":
            var encryption = new Encryption();

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.personUserName;
            var responseItem_3 = args.jsonResponse.values.personUserPassword;
            var responseItem_4 = args.jsonResponse.values.personUserType;
            var responseItem_5 = args.jsonResponse.values.personName;

            $("#panel-4-input-1").val(responseItem_2);
            $("#panel-4-input-2").val(encryption.decrypt(responseItem_3, $("#nonce-value").val()));
            $("#panel-4-input-5").find("option").removeAttr("selected", "selected");
            $("#panel-4-input-5").find("option[value='" + responseItem_4 + "']").attr("selected", "selected");
            $("#panel-4-input-6").val(responseItem_5);

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }
            break;
        case "userUpdate":

            statusBox('success','NULL','Hecho','add','NULL');
            $("#panel-4").attr("data-idholder", "NULL");

            functionHandler({
                functionName: 'windowHandler'
                , getNodeMethod: 'id'
                , nodeItem: 'panel-4-container'
                , action: 'close'
            });
            callHandler({
                callName: "showUsers"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-2"
                ,deleteNodeContent: true
            });

            break;
        case "groceryRegistry":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 0:
                    statusBox('warning','NULL','El almacén ya existe','add','NULL');
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                    $("#panel-5-input-1").val("");
                    $("#panel-5-input-2").val("");
                    $("#panel-5-input-3").val("");

                    switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                        case 1:
                            statusBox('success','NULL','Hecho','add','NULL');
                            break;
                        case 2:
                            statusBox('warning','NULL','Hecho con errores:<br/>Ha ocurriod un error en la carga de la imagen','add','NULL');
                            break;
                        case 3:
                            statusBox('warning','NULL','Hecho con errores:<br/>El tamaño del archivo ha excedido 15MB','add','NULL');
                            break;
                        case 4:
                            statusBox('warning','NULL','Hecho con errores:<br/>El nombre del archivo contiene más de un punto (.)','add','NULL');
                            break;
                        case 5:
                            statusBox('warning','NULL','Hecho con errores:<br/>Ha ocurriod un error en el guardado de la imagen en /php/imagenes','add','NULL');
                            break;
                        default:
                            statusBox('success','NULL','Hecho','add','NULL');
                            break;
                    }

                    callHandler({
                        callName: "showGroceries"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-3"
                        ,deleteNodeContent: true
                    });
                    functionHandler({
                        functionName: "selectFiller"
                        ,callHeader: "showGroceries"
                        ,getNodeMethod: "id"
                        ,nodeItem: "panel-7-input-1"
                        ,deleteNodeContent: true
                        ,addDividerToNode: false
                        ,addNodeBeforeLoad: false
                        ,triggerChosen: true
                        ,chosenOptions: {
                            widthUnit: "%"
                            ,widthValue: 100
                        }
                        ,triggerOnChange: false
                        ,selectedOption: 2
                    });

                    break;
            }
            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showGroceries":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.name;
            var responseItem_3 = args.jsonResponse.values.groceryWebsite;
            var responseItem_4 = args.jsonResponse.values.groceryImage;
            var responseItem_5 = args.jsonResponse.values.active;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='8'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 7; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center");
                                var tempInputNode = $('<input type="checkbox"/>');

                                $(tdArray[y]).append(tempInputNode);

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_3[x]);

                                break;
                            case 4:
                                if (responseItem_4[x] !== null) {
                                    var tempImageNode = document.createElement("img");
                                    $(tempImageNode).attr({
                                        "src": "php/imagenes/" + responseItem_4[x],
                                        "alt": "Grocery Image",
                                        "class": "image-logo-1"
                                    });
                                    $(tdArray[y]).addClass("tbl-text-align-center").append(tempImageNode);
                                } else {
                                    $(tdArray[y]).addClass("tbl-text-align-center").html("sin imagen");
                                }


                                break;
                            case 5:

                                $(tdArray[y]).addClass("tbl-text-align-center").append(
                                    "<div class='btn-group dropdown full-width-percent'>"
                                    +"<button class='btn btn-default btn-sm btn-block dropdown-toggle' data-toggle='dropdown'>Acción&nbsp;<span class='caret'></span></button>"
                                    +"<ul class='dropdown-menu dropdown-menu-right'>"
                                    +"<li data-item='option-1'><a href='#'>Editar almacén</a></li>"
                                    +"<li role='separator' class='divider'></li>"
                                    +"<li data-item='option-3'><a href='#'>Eliminar almacén</a></li>"
                                    +"</ul>"
                                    +"</div>"
                                );
                                $(tdArray[y]).find("li[data-item='option-1']").bind("click",function(){

                                    $("#panel-6").attr("data-idholder", $(this).parents("tr").attr("data-id"));

                                    callHandler({
                                        callName: "showGroceryData"
                                        ,callArguments: {
                                            providerId: $("#panel-6").attr("data-idholder")
                                        }
                                        ,getNodeMethod: null
                                        ,callbackNode: null
                                        ,deleteNodeContent: null
                                        ,addDividerToNode: null
                                        ,dividerText: null
                                        ,onCallDone: function() {
                                            functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-6-container', action: 'open'});
                                        }
                                    });
                                });
                                $(tdArray[y]).find("li[data-item='option-3']").bind("click",function(){

                                    var confirmText = "¿Está seguro en eliminar el almacén? Todos sus datos serán eliminados de manera permanente, ¿está seguro en continuar?";

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "groceryUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                groceryId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: "NULL"
                                                ,fieldToUpdate: 5
                                            }
                                        });
                                    }
                                });

                                break;
                            case 6:
                                var button = document.createElement("button");

                                if (parseInt(responseItem_5[x],10) == 1) {
                                    $(button).attr("class","btn btn-success btn-sm btn-block cube-box");
                                    $(button).attr("title","Desactivar");
                                    $(button).attr("data-status","active");
                                    $(button).html("<span>Activo</span>");
                                } else {
                                    $(button).attr("class","btn btn-danger btn-sm btn-block");
                                    $(button).attr("title","Activar");
                                    $(button).attr("data-status","inactive");
                                    $(button).html("<span>Inactivo</span>");
                                }

                                $(button).bind("click",function(){

                                    var btnStatus = $(this).attr("data-status");

                                    if (btnStatus == "active") {
                                        var valueToUpdate = "false";
                                        var confirmText = "¿Está seguro en desactivar el proveedor?";
                                    } else {
                                        var valueToUpdate = "true";
                                        var confirmText = "¿Está seguro en activar el proveedor?";
                                    }

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "groceryUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                groceryId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: valueToUpdate
                                                ,fieldToUpdate: 4
                                            }
                                        });
                                    }
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showGroceryData":

            var responseItem_1 = args.jsonResponse.values.providerId;
            var responseItem_2 = args.jsonResponse.values.groceryName;
            var responseItem_3 = args.jsonResponse.values.groceryWebsite;
            var responseItem_4 = args.jsonResponse.values.groceryImage;

            $("#panel-6-input-1").val(responseItem_2);
            $("#panel-6-input-2").val(responseItem_3);
            $("#panel-6-input-3").val("");

            if (responseItem_4 !== null) {
                $("#panel-6-img-1").attr("src", "php/imagenes/" + responseItem_4).show();
                $("#panel-6-no-image-1").hide();
            } else {
                $("#panel-6-img-1").hide();
                $("#panel-6-no-image-1").show();
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }
            break;
        case "groceryUpdate":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                        case 1:
                            statusBox('success','NULL','Hecho','add','NULL');
                            $("#panel-6").attr("data-idholder", "NULL");
                            functionHandler({
                                functionName: 'windowHandler'
                                , getNodeMethod: 'id'
                                , nodeItem: 'panel-6-container'
                                , action: 'close'
                            });
                            break;
                        case 2:
                            statusBox('warning','NULL','Hecho con errores:<br/>Ha ocurriod un error en la carga de la imagen','add','NULL');
                            $("#panel-6-input-3").val("");
                            break;
                        case 3:
                            statusBox('warning','NULL','Hecho con errores:<br/>El tamaño del archivo ha excedido 15MB','add','NULL');
                            $("#panel-6-input-3").val("");
                            break;
                        case 4:
                            statusBox('warning','NULL','Hecho con errores:<br/>El nombre del archivo contiene más de un punto (.)','add','NULL');
                            $("#panel-6-input-3").val("");
                            break;
                        case 5:
                            statusBox('warning','NULL','Hecho con errores:<br/>Ha ocurriod un error en el guardado de la imagen en /php/imagenes','add','6000');
                            $("#panel-6-input-3").val("");
                            break;
                        case 6:
                            statusBox('warning','NULL','Hecho con errores:<br/>Ha ocurriod un error en el borrado de la imagen anterior en /php/imagenes','add','6000');
                            $("#panel-6-input-3").val("");
                            break;
                        default:
                            statusBox('success','NULL','Hecho','add','NULL');
                            $("#panel-6").attr("data-idholder", "NULL");
                            functionHandler({
                                functionName: 'windowHandler'
                                , getNodeMethod: 'id'
                                , nodeItem: 'panel-6-container'
                                , action: 'close'
                            });
                            break;
                    }
                    break;
            }
            callHandler({
                callName: "showGroceries"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-3"
                ,deleteNodeContent: true
            });
            functionHandler({
                functionName: "selectFiller"
                ,callHeader: "showGroceries"
                ,getNodeMethod: "id"
                ,nodeItem: "panel-7-input-1"
                ,deleteNodeContent: true
                ,addDividerToNode: false
                ,addNodeBeforeLoad: false
                ,triggerChosen: true
                ,chosenOptions: {
                    widthUnit: "%"
                    ,widthValue: 100
                }
                ,triggerOnChange: false
                ,selectedOption: 2
            });

            break;
        case "productRegistry":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 0:
                    statusBox('warning','NULL','El producto ya existe','add','NULL');
                    break;
                case 1:
                    statusBox('success','NULL','Hecho','add','NULL');

                    $("#panel-7-input-3").val("");
                    $("#panel-7-input-4").val("");

                    callHandler({
                        callName: "showProducts"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-4"
                        ,deleteNodeContent: true
                    });
                    callHandler({
                        callName: "showProductsForKardex"
                        ,callArguments: null
                        ,getNodeMethod: "id"
                        ,callbackNode: "table-5"
                        ,deleteNodeContent: true
                    });

                    break;
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showProducts":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.productName;
            var responseItem_3 = args.jsonResponse.values.productType;
            var responseItem_4 = args.jsonResponse.values.productProvider;
            var responseItem_5 = args.jsonResponse.values.productPrize;
            var responseItem_6 = args.jsonResponse.values.active;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='8'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 8; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center");
                                var tempInputNode = $('<input type="checkbox"/>');

                                $(tdArray[y]).append(tempInputNode);

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_3[x]);

                                break;
                            case 4:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_4[x]);

                                break;
                            case 5:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_5[x]);

                                break;
                            case 6:

                                $(tdArray[y]).addClass("tbl-text-align-center").append(
                                    "<div class='btn-group dropdown full-width-percent'>"
                                    +"<button class='btn btn-default btn-sm btn-block dropdown-toggle' data-toggle='dropdown'>Acción&nbsp;<span class='caret'></span></button>"
                                    +"<ul class='dropdown-menu dropdown-menu-right'>"
                                    +"<li data-item='option-1'><a href='#'>Editar producto</a></li>"
                                    +"<li role='separator' class='divider'></li>"
                                    +"<li data-item='option-3'><a href='#'>Eliminar producto</a></li>"
                                    +"</ul>"
                                    +"</div>"
                                );
                                $(tdArray[y]).find("li[data-item='option-1']").bind("click",function(){

                                    $("#panel-8").attr("data-idholder", $(this).parents("tr").attr("data-id"));

                                    callHandler({
                                        callName: "showProductData"
                                        ,callArguments: {
                                            productId: $("#panel-8").attr("data-idholder")
                                        }
                                        ,getNodeMethod: null
                                        ,callbackNode: null
                                        ,deleteNodeContent: null
                                        ,addDividerToNode: null
                                        ,dividerText: null
                                        ,onCallDone: function() {
                                            functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-8-container', action: 'open'});
                                        }
                                    });
                                });
                                $(tdArray[y]).find("li[data-item='option-3']").bind("click",function(){

                                    var confirmText = "¿Está seguro en eliminar el producto? Todos sus datos serán eliminados de manera permanente, ¿está seguro en continuar?";

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "productUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                productId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: "NULL"
                                                ,fieldToUpdate: 6
                                            }
                                        });
                                    }
                                });

                                break;
                            case 7:
                                var button = document.createElement("button");

                                if (parseInt(responseItem_6[x],10) == 1) {
                                    $(button).attr("class","btn btn-success btn-sm btn-block cube-box");
                                    $(button).attr("title","Desactivar");
                                    $(button).attr("data-status","active");
                                    $(button).html("<span>Activo</span>");
                                } else {
                                    $(button).attr("class","btn btn-danger btn-sm btn-block");
                                    $(button).attr("title","Activar");
                                    $(button).attr("data-status","inactive");
                                    $(button).html("<span>Inactivo</span>");
                                }

                                $(button).bind("click",function(){

                                    var btnStatus = $(this).attr("data-status");

                                    if (btnStatus == "active") {
                                        var valueToUpdate = "false";
                                        var confirmText = "¿Está seguro en desactivar el producto?";
                                    } else {
                                        var valueToUpdate = "true";
                                        var confirmText = "¿Está seguro en activar el producto?";
                                    }

                                    var _confirm = confirm(confirmText);

                                    if (_confirm) {
                                        dataChangeHandler({
                                            changeName: "productUpdate"
                                            ,getNodeMethod: "NULL"
                                            ,nodeItem: "NULL"
                                            ,valuesToEdit: {
                                                productId: $(this).parents("tr").attr("data-id")
                                                ,valueToUpdate: valueToUpdate
                                                ,fieldToUpdate: 5
                                            }
                                        });
                                    }
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);
                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showProductData":

            var responseItem_1 = args.jsonResponse.values.productProviderId;
            var responseItem_2 = args.jsonResponse.values.productTypeId;
            var responseItem_3 = args.jsonResponse.values.productName;
            var responseItem_4 = args.jsonResponse.values.productPrize;

            $("#panel-8-input-1").find("option").removeAttr("selected", "selected");
            $("#panel-8-input-1").find("option[value='" + responseItem_1 + "']").attr("selected", "selected");
            $("#panel-8-input-1").trigger("chosen:updated");
            $("#panel-8-input-2").find("option").removeAttr("selected", "selected");
            $("#panel-8-input-2").find("option[value='" + responseItem_2 + "']").attr("selected", "selected");
            $("#panel-8-input-2").trigger("chosen:updated");

            $("#panel-8-input-3").val(responseItem_3);
            $("#panel-8-input-4").val(responseItem_4);

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }
            break;
        case "productUpdate":

            statusBox('success','NULL','Hecho','add','NULL');
            $("#panel-8").attr("data-idholder", "NULL");

            functionHandler({
                functionName: 'windowHandler'
                , getNodeMethod: 'id'
                , nodeItem: 'panel-8-container'
                , action: 'close'
            });
            callHandler({
                callName: "showProducts"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-4"
                ,deleteNodeContent: true
            });
            callHandler({
                callName: "showProductsForKardex"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-5"
                ,deleteNodeContent: true
            });

            break;
        case "showProductsForKardex":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.productName;
            var responseItem_3 = args.jsonResponse.values.productType;
            var responseItem_4 = args.jsonResponse.values.productProvider;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='8'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 7; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center");
                                var tempInputNode = $('<input type="checkbox"/>');

                                $(tdArray[y]).append(tempInputNode);

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_3[x]);

                                break;
                            case 4:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_4[x]);

                                break;
                            case 5:
                                var button = document.createElement("button");
                                $(button).addClass("btn btn-success btn-sm input-block").html("Registro kardex")

                                $(button).bind("click",function(){

                                    $("#panel-9").attr("data-idholder", $(this).parents("tr").attr("data-id"));

                                    callHandler({
                                        callName: "showKardexData"
                                        ,callArguments: {
                                            productId: $("#panel-9").attr("data-idholder")
                                        }
                                        ,getNodeMethod: "id"
                                        ,callbackNode: "panel-9-table-1"
                                        ,deleteNodeContent: true
                                        ,addDividerToNode: null
                                        ,dividerText: null
                                        ,onCallDone: function() {
                                            functionHandler({functionName: 'windowHandler', getNodeMethod: 'id', nodeItem: 'panel-9-container', action: 'open'});
                                        }
                                    });
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);
                                break;
                            case 6:

                                $(tdArray[y]).addClass("tbl-text-align-center").append(
                                    "<div class='btn-group dropdown full-width-percent'>"
                                    +"<button class='btn btn-default btn-sm btn-block dropdown-toggle' data-toggle='dropdown'>Acción&nbsp;<span class='caret'></span></button>"
                                    +"<ul class='dropdown-menu dropdown-menu-right'>"
                                    +"<li data-item='option-1'><a href='#'>null</a></li>"
                                    +"</ul>"
                                    +"</div>"
                                );
                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showKardexData":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.currentProductAmount;
            var responseItem_3 = args.jsonResponse.values.productAdded;
            var responseItem_4 = args.jsonResponse.values.productRemoved;
            var responseItem_5 = args.jsonResponse.values.totalProduct;
            var responseItem_6 = args.jsonResponse.values.dateOfMovement;
            var responseItem_7 = args.jsonResponse.values.reasonOfMovement;

            $("#panel-9-input-2").val(0);
            $("#panel-9-input-3").attr("max", responseItem_2).val(0);
            $("#panel-9-input-5").val(parseInt(responseItem_2,10));

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='5'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 6; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_6[x]);

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_3[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_4[x]);

                                break;
                            case 4:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_7[x]);

                                break;
                            case 5:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_5[x]);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 20
                        ,offsetPixels: 315
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 20
                        ,offsetPixels: 315
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 20
                        ,offsetPixels: 450
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "kardexRegistry":
            switch (parseInt(args.jsonResponse.values.dataChangeCode,10)) {
                case 0:
                    statusBox('warning','NULL','El registro ya existe','add','NULL');
                    break;
                case 1:
                    statusBox('success','NULL','Hecho','add','NULL');

                    callHandler({
                        callName: "showKardexData"
                        ,callArguments: {
                            productId: $("#panel-9").attr("data-idholder")
                        }
                        ,getNodeMethod: "id"
                        ,callbackNode: "panel-9-table-1"
                        ,deleteNodeContent: true
                        ,addDividerToNode: null
                        ,dividerText: null
                    });
                    break;
            }

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showProductsToSell":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
                $("#table-7").find("tbody").empty();
            }

            $("#panel-10-input-2").val(0);

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.productName;
            var responseItem_3 = args.jsonResponse.values.productPrize;
            var responseItem_4 = args.jsonResponse.values.productStoredQuantity;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='8'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    var tempObject = new Object();
                    tempObject.id = responseItem_1[x];
                    tempObject.productName = responseItem_2[x];
                    tempObject.productPrize = responseItem_3[x];
                    tempObject.productStoredQuantity = responseItem_4[x];

                    for (var y = 0; y < 4; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_2[x]);

                                break;
                            case 1:
                                var input = document.createElement("input");
                                $(input).addClass("form-control input-xs input-block disabled").attr({
                                    type: "number"
                                    ,readonly: true
                                }).val(responseItem_4[x]);
                                $(input).css("width", "40%");
                                $(input).attr("data-item", "max-number-of-items");

                                $(tdArray[y]).addClass("tbl-text-align-center").append(input);

                                break;
                            case 2:
                                var input = document.createElement("input");
                                $(input).addClass("form-control input-xs input-block").attr({
                                    type: "number"
                                    ,max: responseItem_4[x]
                                    ,min: 0
                                });
                                if (parseInt(responseItem_4[x],10) == 0) {
                                    $(input).val(0);
                                } else {
                                    $(input).val(1);
                                }
                                $(input).css("width", "60%");
                                $(input).bind("change", function(){
                                    if (parseInt($(this).val(),10) > parseInt($(this).attr("max"),10)) {
                                        $(this).val($(this).attr("max"));
                                    }
                                    if (parseInt($(this).attr("max") == 0)) {
                                        $(this).val(0);
                                    }
                                });
                                $(input).attr("data-item", "number-of-items");

                                $(tdArray[y]).addClass("tbl-text-align-center").append(input);

                                break;
                            case 3:
                                var button = document.createElement("button");
                                $(button).addClass("btn btn-success btn-xs btn-block").html("Agregar")

                                $(button).bind("click",function(){
                                    functionHandler({
                                        functionName: "salesTableControl"
                                        ,getNodeMethod: "node"
                                        ,nodeItem: this
                                        ,action: "add"
                                    });
                                });

                                $(tdArray[y]).addClass("tbl-text-align-center").append(button);
                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id", JSON.stringify(tempObject));
                        $(trArray[x]).attr("data-super-id", responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 285
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 285
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 20
                        ,offsetPixels: 440
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showLog":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.username;
            var responseItem_2 = args.jsonResponse.values.timestamp;
            var responseItem_3 = args.jsonResponse.values.logaction;
            var responseItem_4 = args.jsonResponse.values.logquery;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='8'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 5; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).addClass("tbl-text-align-center").html((x + 1));

                                break;
                            case 1:
                                $(tdArray[y]).addClass("tbl-text-align-center").html(responseItem_1[x]);

                                break;
                            case 2:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_2[x]);

                                break;
                            case 3:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_3[x]);

                                break;
                            case 4:
                                $(tdArray[y]).addClass("tbl-text-align-left").html(responseItem_4[x]);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "saleRegistry":

            statusBox('success','NULL','Hecho','add','NULL');
            callHandler({
                callName: "showProductsToSell"
                ,callArguments: null
                ,getNodeMethod: "id"
                ,callbackNode: "table-6"
                ,deleteNodeContent: true
            });

            break;
        case "showSalesReport":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            /*functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });*/

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.saleDate;
            var responseItem_3 = args.jsonResponse.values.payType;
            var responseItem_4 = args.jsonResponse.values.totalSale;
            var responseItem_5 = args.jsonResponse.values.saleDetail;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='7'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var defaulCelltStyle = "text-align:center; vertical-align: middle; border: .5pt solid; border-color: black;";
                var trArray = new Array();
                var counter = 0;

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[counter] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 4; y++) {
                        tdArray[y] = document.createElement("td");

                        switch(y) {
                            case 0:
                                $(tdArray[y]).attr("style", defaulCelltStyle);
                                $(tdArray[y]).attr("rowspan", responseItem_5[x].id.length + 1);
                                $(tdArray[y]).html((x + 1));

                                break;
                            case 1:
                                $(tdArray[y]).attr("style", defaulCelltStyle);
                                $(tdArray[y]).attr("rowspan", responseItem_5[x].id.length + 1);
                                $(tdArray[y]).html(responseItem_2[x]);

                                break;
                            case 2:
                                $(tdArray[y]).attr("style", defaulCelltStyle);
                                $(tdArray[y]).attr("rowspan", responseItem_5[x].id.length + 1);
                                $(tdArray[y]).html(responseItem_3[x]);

                                break;
                            case 3:
                                $(tdArray[y]).attr("style", defaulCelltStyle);
                                $(tdArray[y]).attr("rowspan", responseItem_5[x].id.length + 1);
                                $(tdArray[y]).html(responseItem_4[x]);
                                break;
                        }
                    }
                    $(trArray[counter]).append(tdArray);
                    $(trArray[counter]).attr("data-id",responseItem_1[x]);
                    counter++;

                    for (var y = 0; y < responseItem_5[x].id.length; y++) {
                        trArray[counter] = document.createElement("tr");
                        var tdArray = new Array();

                        for (var z = 0; z < 4; z++) {
                            tdArray[z] = document.createElement("td");
                            switch(z) {
                                case 0:
                                    $(tdArray[z]).attr("style", defaulCelltStyle);
                                    $(tdArray[z]).html(responseItem_5[x].productName[y]);

                                    break;
                                case 1:
                                    $(tdArray[z]).attr("style", defaulCelltStyle);
                                    $(tdArray[z]).html(responseItem_5[x].productPrice[y]);

                                    break;
                                case 2:
                                    $(tdArray[z]).attr("style", defaulCelltStyle);
                                    $(tdArray[z]).html(responseItem_5[x].productsSold[y]);

                                    break;
                                case 3:
                                    $(tdArray[z]).attr("style", defaulCelltStyle);
                                    $(tdArray[z]).html(responseItem_5[x].totalProductsSold[y]);

                                    break;
                            }
                        }
                        $(trArray[counter]).append(tdArray);
                        $(trArray[counter]).attr("data-id",responseItem_1[x]);
                        counter++;
                    }
                }

                $(args.passedArguments.callbackNode).find("tbody").append(trArray);
            }

            /*functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });*/

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

            if (typeof(args.passedArguments.onCallDone) !== "undefined") {
                args.passedArguments.onCallDone();
            }

            break;
        case "showKardexReport":
            switch (args.passedArguments.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.passedArguments.callbackNode).get(0);
                    break;
                case "node":
                    var htmlNode = args.passedArguments.callbackNode;
                    break;
            }

            args.passedArguments.callbackNode = htmlNode;

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "destroyTable"
            });

            if (args.passedArguments.deleteNodeContent) {
                $(args.passedArguments.callbackNode).find("tbody").empty();
            }

            var responseItem_1 = args.jsonResponse.values.id;
            var responseItem_2 = args.jsonResponse.values.productName;
            var responseItem_3 = args.jsonResponse.values.productType;
            var responseItem_4 = args.jsonResponse.values.productProvider;
            var responseItem_5 = args.jsonResponse.values.productStoredQuantity;

            if (responseItem_1 !== null && responseItem_1 !== "" && responseItem_1.length !== 0) {
                if (args.passedArguments.addDividerToNode) {
                    $(args.passedArguments.callbackNode).find("tbody").append("<tr data-item='table-divider'><th class='table-divider' colspan='7'>"+args.passedArguments.dividerText+"</th></tr>");
                }

                var defaulCelltStyle = "text-align:center; vertical-align: middle; border: .5pt solid; border-color: black;";
                var trArray = new Array();

                for (var x = 0; x < responseItem_1.length; x++) {

                    trArray[x] = document.createElement("tr");
                    var tdArray = new Array();

                    for (var y = 0; y < 5; y++) {
                        tdArray[y] = document.createElement("td");

                        if (parseInt(responseItem_5[x],10) < 10) {
                            var addedCellStyle = "color: white; font-weight: bold; background-color: #7d0606";
                        } else {
                            var addedCellStyle = "";
                        }

                        switch(y) {
                            case 0:
                                $(tdArray[y]).attr("style", defaulCelltStyle + addedCellStyle);
                                $(tdArray[y]).html((x + 1));

                                break;
                            case 1:
                                $(tdArray[y]).attr("style", defaulCelltStyle + addedCellStyle);
                                $(tdArray[y]).html(responseItem_2[x]);

                                break;
                            case 2:
                                $(tdArray[y]).attr("style", defaulCelltStyle + addedCellStyle);
                                $(tdArray[y]).html(responseItem_3[x]);

                                break;
                            case 3:
                                $(tdArray[y]).attr("style", defaulCelltStyle + addedCellStyle);
                                $(tdArray[y]).html(responseItem_4[x]);

                                break;
                            case 4:
                                $(tdArray[y]).attr("style", defaulCelltStyle + addedCellStyle);
                                $(tdArray[y]).html(responseItem_5[x]);

                                break;
                        }

                        $(trArray[x]).append(tdArray);
                        $(trArray[x]).attr("data-id",responseItem_1[x]);

                    }

                    $(args.passedArguments.callbackNode).find("tbody").append(trArray);
                }
            }

            functionHandler({
                functionName: "dataTableHandler"
                ,getNodeMethod: "node"
                ,nodeItem: args.passedArguments.callbackNode
                ,action: "createTable"
                ,onFunctionDone: function() {
                    var tableWrapper = $(args.passedArguments.callbackNode).parent().parent().get(0);

                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: $(tableWrapper).children().first().get(0)
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: tableWrapper
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 75
                    });
                    functionHandler({
                        functionName: "resizeHtmlNode"
                        ,getNodeMethod: "node"
                        ,nodeItem: args.passedArguments.callbackNode
                        ,heightPercentage: 100
                        ,minHeightPercentage: 40
                        ,offsetPixels: 209
                    });
                }
            });

            $(args.passedArguments.callbackNode).find("input[data-item='search-input']").trigger("keyup");

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
function dataChangeHandler(args) {
    switch (args.changeName) {
        case "personRegistry":

            var checkFormInputs = functionHandler({
                functionName: "checkForEmptyFormFields"
                , getNodeMethod: args.changeOptions.getNodeMethod
                , nodeItem: args.changeOptions.nodeItem
            });

            if (checkFormInputs === false) {

                $("#panel-1-input-10").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();

                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();
                jsonData.changeArguments.personId = $("#panel-1-input-1").val();
                jsonData.changeArguments.personFirstName = $("#panel-1-input-2").val();
                jsonData.changeArguments.personLastName = $("#panel-1-input-3").val();

                if ($("#panel-1-input-7").val() === "" || $("#panel-1-input-8").val() === "") {
                    jsonData.changeArguments.addUser = 0;
                } else {
                    var encryption = new Encryption();

                    jsonData.changeArguments.addUser = 1;
                    jsonData.changeArguments.userName = $("#panel-1-input-7").val();
                    jsonData.changeArguments.userPassword = encryption.encrypt($("#panel-1-input-8").val(), $("#nonce-value").val());
                }

                jsonData = JSON.stringify(jsonData);

                statusBox('loading','NULL','NULL','add','NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url:"php/index_admin_data_change_handler.php",
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
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function() {
                        statusBox('loading','NULL','NULL','remove','NULL');
                        $("#panel-1-input-10").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "personUpdate":

            if (args.getNodeMethod.toLowerCase() != "null") {
                switch (args.getNodeMethod) {
                    case "id":
                        var htmlNode = $("#"+args.nodeItem).get(0);
                        break;
                    case "node":
                        var htmlNode = args.nodeItem;
                        break;
                }

                args.nodeItem = htmlNode;

                var nodesToUpdateArray = $(args.nodeItem).find("[data-updated='1']").get();
            } else {
                nodesToUpdateArray = new Array(1);
            }

            if (nodesToUpdateArray.length == 0) {
                statusBox('info', 'NULL', 'No se ha modificado ningún valor', 'add', 'NULL');
            } else {

                $("#panel-2-input-12").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();
                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();

                if (typeof(args.valuesToEdit) !== "undefined") {
                    jsonData.changeArguments.personId = args.valuesToEdit.personId;
                    jsonData.changeArguments.valueToUpdate = new Array(args.valuesToEdit.valueToUpdate.toString());
                    jsonData.changeArguments.fieldToUpdate = new Array(args.valuesToEdit.fieldToUpdate.toString());
                } else {
                    jsonData.changeArguments.personId = $("#panel-2").attr("data-idHolder");
                    jsonData.changeArguments.valueToUpdate = new Array();
                    jsonData.changeArguments.fieldToUpdate = new Array();

                    var tempCounter = 0;

                    for (var x = 0; x < nodesToUpdateArray.length; x++) {
                        if (parseInt($(nodesToUpdateArray[x]).attr("data-updated"),10) == 1) {
                            if (parseInt($(nodesToUpdateArray[x]).attr("data-encrypt"),10) == 1) {
                                var encryption = new Encryption();

                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = encryption.encrypt($(nodesToUpdateArray[x]).val(), $("#nonce-value").val());
                            } else {
                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = $(nodesToUpdateArray[x]).val();
                            }

                            tempCounter++;

                            $(nodesToUpdateArray[x]).removeAttr("data-updated");
                        }
                    }
                }

                jsonData = JSON.stringify(jsonData);

                statusBox('loading', 'NULL', 'NULL', 'add', 'NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url: "php/index_admin_data_change_handler.php",
                    type: "POST",
                    data: jsonData,
                    dataType: "json",
                    success: function (jsonResponse) {
                        var error = errorHandler({
                            errorCode: jsonResponse.statusCode
                            , errorIcon: "warning"
                            , errorTitle: "Se ha encontrado una excepción"
                            , errorMessage: jsonResponse.errorMessage
                        });
                        if (!error) {
                            responseHandler({
                                jsonResponse: jsonResponse
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function () {
                        statusBox('loading', 'NULL', 'NULL', 'remove', 'NULL');
                        $("#panel-2-input-12").removeClass("disabled").removeAttr("disabled", "disabled");
                    }
                });
            }

            break;
        case "userRegistry":

            var checkFormInputs = functionHandler({
                functionName: "checkForEmptyFormFields"
                , getNodeMethod: args.changeOptions.getNodeMethod
                , nodeItem: args.changeOptions.nodeItem
            });

            if (checkFormInputs === false) {

                $("#panel-3-input-5").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();
                var encryption = new Encryption();

                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();
                jsonData.changeArguments.personId = $("#panel-3-input-0").val();
                jsonData.changeArguments.userType = $("#panel-3-input-1").val();
                jsonData.changeArguments.userName = $("#panel-3-input-2").val();
                jsonData.changeArguments.userPassword = encryption.encrypt($("#panel-3-input-3").val(), $("#nonce-value").val());

                jsonData = JSON.stringify(jsonData);

                statusBox('loading','NULL','NULL','add','NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url:"php/index_admin_data_change_handler.php",
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
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function() {
                        statusBox('loading','NULL','NULL','remove','NULL');
                        $("#panel-3-input-5").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "userUpdate":

            if (args.getNodeMethod.toLowerCase() != "null") {
                switch (args.getNodeMethod) {
                    case "id":
                        var htmlNode = $("#"+args.nodeItem).get(0);
                        break;
                    case "node":
                        var htmlNode = args.nodeItem;
                        break;
                }

                args.nodeItem = htmlNode;

                var nodesToUpdateArray = $(args.nodeItem).find("[data-updated='1']").get();
            } else {
                nodesToUpdateArray = new Array(1);
            }

            if (nodesToUpdateArray.length == 0) {
                statusBox('info', 'NULL', 'No se ha modificado ningún valor', 'add', 'NULL');
            } else {
                $("#panel-4-input-4").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();
                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();

                if (typeof(args.valuesToEdit) !== "undefined") {
                    jsonData.changeArguments.userId = args.valuesToEdit.userId;
                    jsonData.changeArguments.valueToUpdate = new Array(args.valuesToEdit.valueToUpdate.toString());
                    jsonData.changeArguments.fieldToUpdate = new Array(args.valuesToEdit.fieldToUpdate.toString());
                } else {
                    jsonData.changeArguments.userId = $("#panel-4").attr("data-idHolder");
                    jsonData.changeArguments.valueToUpdate = new Array();
                    jsonData.changeArguments.fieldToUpdate = new Array();

                    var tempCounter = 0;

                    for (var x = 0; x < nodesToUpdateArray.length; x++) {
                        if (parseInt($(nodesToUpdateArray[x]).attr("data-updated"),10) == 1) {
                            if (parseInt($(nodesToUpdateArray[x]).attr("data-encrypt"),10) == 1) {
                                var encryption = new Encryption();

                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = encryption.encrypt($(nodesToUpdateArray[x]).val(), $("#nonce-value").val());
                            } else {
                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = $(nodesToUpdateArray[x]).val();
                            }

                            tempCounter++;

                            $(nodesToUpdateArray[x]).removeAttr("data-updated");
                        }
                    }
                }

                jsonData = JSON.stringify(jsonData);

                statusBox('loading', 'NULL', 'NULL', 'add', 'NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url: "php/index_admin_data_change_handler.php",
                    type: "POST",
                    data: jsonData,
                    dataType: "json",
                    success: function (jsonResponse) {
                        var error = errorHandler({
                            errorCode: jsonResponse.statusCode
                            , errorIcon: "warning"
                            , errorTitle: "Se ha encontrado una excepción"
                            , errorMessage: jsonResponse.errorMessage
                        });
                        if (!error) {
                            responseHandler({
                                jsonResponse: jsonResponse
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function () {
                        statusBox('loading', 'NULL', 'NULL', 'remove', 'NULL');
                        $("#panel-4-input-4").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "groceryRegistry":
            var maxFileSize = 1.5e+7;
            var file = "null";

            var checkFormInputs = functionHandler({
                functionName: "checkForEmptyFormFields"
                , getNodeMethod: args.changeOptions.getNodeMethod
                , nodeItem: args.changeOptions.nodeItem
            });

            if (checkFormInputs === false) {
                $("#panel-5-input-4").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();

                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();
                jsonData.changeArguments.groceryName = $("#panel-5-input-1").val();
                jsonData.changeArguments.groceryWebsite = $("#panel-5-input-2").val();

                var fileInput = $("#panel-5-input-3").get(0);

                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    if (fileInput.files.length > 0) {
                        if (fileInput.files[0].size < maxFileSize) {
                            file = fileInput.files[0];
                        } else {
                            statusBox('warning','NULL','El archivo cargado super el tamaño máxim de 15MB','add','NULL');
                            $("#panel-5-input-4").removeClass("disabled").removeAttr("disabled");
                            return false;
                        }
                        if (file != "null") {
                            if (!functionHandler({functionName: "mimeChecker", fileType: fileInput.files[0].type})) {
                                statusBox('warning', 'NULL', 'El archivo cargado no es permitido (PNG, JPEG, JPG)', 'add', 'NULL');
                                $("#panel-5-input-4").removeClass("disabled").removeAttr("disabled");
                                return false;
                            }
                        }
                    }
                } else {
                    statusBox('danger', 'NULL', 'El buscador web utilizado no sporta los plug-in necesarios para cargar archivos, por favor utilice un buscador web diferente', 'add', '6000');
                    $("#panel-5-input-4").removeClass("disabled").removeAttr("disabled");
                    return false;
                }

                jsonData = JSON.stringify(jsonData);

                var data = new FormData();
                data.append("jsondata", jsonData);
                if (file != "null") {
                    data.append("filedata", fileInput.files[0], fileInput.files[0].name);
                }

                statusBox('loading','NULL','NULL','add','NULL');
                $.ajax({
                    url:"php/index_admin_data_change_handler.php",
                    type:"POST",
                    data: data,
                    cache: false,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
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
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function() {
                        statusBox('loading','NULL','NULL','remove','NULL');
                        $("#panel-5-input-4").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "groceryUpdate":
            var maxFileSize = 1.5e+7;
            var file = "null";

            if (args.getNodeMethod.toLowerCase() != "null") {
                switch (args.getNodeMethod) {
                    case "id":
                        var htmlNode = $("#"+args.nodeItem).get(0);
                        break;
                    case "node":
                        var htmlNode = args.nodeItem;
                        break;
                }

                args.nodeItem = htmlNode;

                var nodesToUpdateArray = $(args.nodeItem).find("[data-updated='1']").get();
            } else {
                nodesToUpdateArray = new Array(1);
            }

            if (nodesToUpdateArray.length == 0) {
                statusBox('info', 'NULL', 'No se ha modificado ningún valor', 'add', 'NULL');
            } else {
                $("#panel-6-input-4").addClass("disabled").attr("disabled", "disabled");

                var fileInput = "null";
                for (var x = 0; x < nodesToUpdateArray.length; x++) {
                    if ($(nodesToUpdateArray[x]).attr("type") == "file") {
                        fileInput = nodesToUpdateArray[x];
                        break;
                    }
                }
                if (fileInput != "null") {
                    if (window.File && window.FileReader && window.FileList && window.Blob) {
                        if (fileInput.files.length > 0) {
                            if (fileInput.files[0].size < maxFileSize) {
                                file = fileInput.files[0];
                            } else {
                                statusBox('warning','NULL','El archivo cargado super el tamaño máxim de 15MB','add','NULL');
                                $("#panel-6-input-4").removeClass("disabled").removeAttr("disabled");
                                return false;
                            }
                            if (file != "null") {
                                if (!functionHandler({functionName: "mimeChecker", fileType: fileInput.files[0].type})) {
                                    statusBox('warning', 'NULL', 'El archivo cargado no es permitido (PNG, JPEG, JPG)', 'add', 'NULL');
                                    $("#panel-6-input-4").removeClass("disabled").removeAttr("disabled");
                                    return false;
                                }
                            }
                        }
                    } else {
                        statusBox('danger', 'NULL', 'El buscador web utilizado no sporta los plug-in necesarios para cargar archivos, por favor utilice un buscador web diferente', 'add', '6000');
                        $("#panel-6-input-4").removeClass("disabled").removeAttr("disabled");
                        return false;
                    }
                }

                var jsonData = new Object();
                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();

                if (typeof(args.valuesToEdit) !== "undefined") {
                    jsonData.changeArguments.groceryId = args.valuesToEdit.groceryId;
                    jsonData.changeArguments.valueToUpdate = new Array(args.valuesToEdit.valueToUpdate.toString());
                    jsonData.changeArguments.fieldToUpdate = new Array(args.valuesToEdit.fieldToUpdate.toString());
                } else {
                    jsonData.changeArguments.groceryId = $("#panel-6").attr("data-idHolder");
                    jsonData.changeArguments.valueToUpdate = new Array();
                    jsonData.changeArguments.fieldToUpdate = new Array();

                    var tempCounter = 0;

                    for (var x = 0; x < nodesToUpdateArray.length; x++) {
                        if (parseInt($(nodesToUpdateArray[x]).attr("data-updated"),10) == 1) {
                            if (parseInt($(nodesToUpdateArray[x]).attr("data-encrypt"),10) == 1) {
                                var encryption = new Encryption();

                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = encryption.encrypt($(nodesToUpdateArray[x]).val(), $("#nonce-value").val());
                            } else {
                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = $(nodesToUpdateArray[x]).val();
                            }

                            tempCounter++;

                            $(nodesToUpdateArray[x]).removeAttr("data-updated");
                        }
                    }
                }

                jsonData = JSON.stringify(jsonData);

                var data = new FormData();
                data.append("jsondata", jsonData);
                if (file != "null") {
                    data.append("filedata", fileInput.files[0], fileInput.files[0].name);
                }

                statusBox('loading', 'NULL', 'NULL', 'add', 'NULL');
                $.ajax({
                    url:"php/index_admin_data_change_handler.php",
                    type:"POST",
                    data: data,
                    cache: false,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    success: function (jsonResponse) {
                        var error = errorHandler({
                            errorCode: jsonResponse.statusCode
                            , errorIcon: "warning"
                            , errorTitle: "Se ha encontrado una excepción"
                            , errorMessage: jsonResponse.errorMessage
                        });
                        if (!error) {
                            responseHandler({
                                jsonResponse: jsonResponse
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function () {
                        statusBox('loading', 'NULL', 'NULL', 'remove', 'NULL');
                        $("#panel-6-input-4").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "productRegistry":

            var checkFormInputs = functionHandler({
                functionName: "checkForEmptyFormFields"
                , getNodeMethod: args.changeOptions.getNodeMethod
                , nodeItem: args.changeOptions.nodeItem
            });

            if (checkFormInputs === false) {

                $("#panel-7-input-5").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();

                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();
                jsonData.changeArguments.productProviderId = $("#panel-7-input-1").val();
                jsonData.changeArguments.productTypeId = $("#panel-7-input-2").val();
                jsonData.changeArguments.productName = $("#panel-7-input-3").val();
                jsonData.changeArguments.productPrize = $("#panel-7-input-4").val();

                jsonData = JSON.stringify(jsonData);

                statusBox('loading','NULL','NULL','add','NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url:"php/index_admin_data_change_handler.php",
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
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function() {
                        statusBox('loading','NULL','NULL','remove','NULL');
                        $("#panel-7-input-5").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "productUpdate":

            if (args.getNodeMethod.toLowerCase() != "null") {
                switch (args.getNodeMethod) {
                    case "id":
                        var htmlNode = $("#"+args.nodeItem).get(0);
                        break;
                    case "node":
                        var htmlNode = args.nodeItem;
                        break;
                }

                args.nodeItem = htmlNode;

                var nodesToUpdateArray = $(args.nodeItem).find("[data-updated='1']").get();
            } else {
                nodesToUpdateArray = new Array(1);
            }

            if (nodesToUpdateArray.length == 0) {
                statusBox('info', 'NULL', 'No se ha modificado ningún valor', 'add', 'NULL');
            } else {
                $("#panel-8-input-5").addClass("disabled").attr("disabled", "disabled");

                var jsonData = new Object();
                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();

                if (typeof(args.valuesToEdit) !== "undefined") {
                    jsonData.changeArguments.productId = args.valuesToEdit.productId;
                    jsonData.changeArguments.valueToUpdate = new Array(args.valuesToEdit.valueToUpdate.toString());
                    jsonData.changeArguments.fieldToUpdate = new Array(args.valuesToEdit.fieldToUpdate.toString());
                } else {
                    jsonData.changeArguments.productId = $("#panel-8").attr("data-idHolder");
                    jsonData.changeArguments.valueToUpdate = new Array();
                    jsonData.changeArguments.fieldToUpdate = new Array();

                    var tempCounter = 0;

                    for (var x = 0; x < nodesToUpdateArray.length; x++) {
                        if (parseInt($(nodesToUpdateArray[x]).attr("data-updated"),10) == 1) {
                            if (parseInt($(nodesToUpdateArray[x]).attr("data-encrypt"),10) == 1) {
                                var encryption = new Encryption();

                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = encryption.encrypt($(nodesToUpdateArray[x]).val(), $("#nonce-value").val());
                            } else {
                                jsonData.changeArguments.fieldToUpdate[tempCounter] = $(nodesToUpdateArray[x]).attr("data-field-to-update");
                                jsonData.changeArguments.valueToUpdate[tempCounter] = $(nodesToUpdateArray[x]).val();
                            }

                            tempCounter++;

                            $(nodesToUpdateArray[x]).removeAttr("data-updated");
                        }
                    }
                }

                jsonData = JSON.stringify(jsonData);

                statusBox('loading', 'NULL', 'NULL', 'add', 'NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url: "php/index_admin_data_change_handler.php",
                    type: "POST",
                    data: jsonData,
                    dataType: "json",
                    success: function (jsonResponse) {
                        var error = errorHandler({
                            errorCode: jsonResponse.statusCode
                            , errorIcon: "warning"
                            , errorTitle: "Se ha encontrado una excepción"
                            , errorMessage: jsonResponse.errorMessage
                        });
                        if (!error) {
                            responseHandler({
                                jsonResponse: jsonResponse
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function () {
                        statusBox('loading', 'NULL', 'NULL', 'remove', 'NULL');
                        $("#panel-8-input-5").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        case "kardexRegistry":

            var checkFormInputs = functionHandler({
                functionName: "checkForEmptyFormFields"
                , getNodeMethod: args.changeOptions.getNodeMethod
                , nodeItem: args.changeOptions.nodeItem
            });

            if (checkFormInputs === false) {

                var jsonData = new Object();

                jsonData.changeHeader = args.changeName;
                jsonData.changeArguments = new Object();
                jsonData.changeArguments.productId = $("#panel-9").attr("data-idholder");
                jsonData.changeArguments.movementDate = $("#panel-9-input-1").val();
                jsonData.changeArguments.movementAdded = parseInt($("#panel-9-input-2").val(),10);
                jsonData.changeArguments.movementRemoved = parseInt($("#panel-9-input-3").val(),10);
                jsonData.changeArguments.movementReason = $("#panel-9-input-4").val();
                jsonData.changeArguments.movementTotal = parseInt($("#panel-9-input-5").val(),10);

                if (jsonData.changeArguments.movementRemoved > jsonData.changeArguments.movementTotal) {
                    statusBox('danger', 'NULL', 'La cantidad de items en salida es mayor al saldo actual para este producto', 'add', '5000');
                } else {
                    $("#panel-9-input-6").addClass("disabled").attr("disabled", "disabled");

                    jsonData.changeArguments.movementTotal += jsonData.changeArguments.movementAdded;
                    jsonData.changeArguments.movementTotal -= jsonData.changeArguments.movementRemoved;

                    jsonData = JSON.stringify(jsonData);

                    statusBox('loading','NULL','NULL','add','NULL');
                    $.ajax({
                        contentType: "application/x-www-form-urlencoded",
                        url:"php/index_admin_data_change_handler.php",
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
                                    ,responseName: args.changeName
                                    ,passedArguments: args
                                });
                            }
                        },
                        complete: function() {
                            statusBox('loading','NULL','NULL','remove','NULL');
                            $("#panel-9-input-6").removeClass("disabled").removeAttr("disabled");
                        }
                    });
                }
            }

            break;
        case "saleRegistry":

            var jsonData = new Object();

            jsonData.changeHeader = args.changeName;
            jsonData.changeArguments = new Object();
            jsonData.changeArguments.saleDate = $("#panel-10-input-1").val();
            jsonData.changeArguments.saleTotal = $("#panel-10-input-2").val();
            jsonData.changeArguments.paymentMethod = $("#panel-10-input-3").val();
            jsonData.changeArguments.products = new Array();

            var salesTable = $("#table-7").get(0);
            var trArray = $(salesTable).find("tbody").find("tr").get();

            if (salesTable.length == 0) {
                statusBox('danger', 'NULL', 'No se han encontrado productos para agregar a la venta', 'add', '5000');
            } else {
                $("#panel-10-input-4").addClass("disabled").attr("disabled", "disabled");

                for (var x = 0; x < trArray.length; x++) {
                    jsonData.changeArguments.products[x] = JSON.parse($(trArray[x]).attr("data-id"));
                }

                jsonData = JSON.stringify(jsonData);
                statusBox('loading','NULL','NULL','add','NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url:"php/index_admin_data_change_handler.php",
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
                                ,responseName: args.changeName
                                ,passedArguments: args
                            });
                        }},
                    complete: function() {
                        statusBox('loading','NULL','NULL','remove','NULL');
                        $("#panel-10-input-4").removeClass("disabled").removeAttr("disabled");
                    }
                });
            }

            break;
        default:
            errorHandler({
                errorCode: 500
                ,errorIcon: "warning"
                ,errorTitle: "Se ha encontrado una excepción"
                ,errorMessage: "Javascript error, data change handler name '"+args.changeName+"' not found"
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
function functionHandler(args) {
    switch (args.functionName) {
        case "windowHandler":
            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#" + args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            if (Array.isArray(args.nodeItem)) {
                for (var x = 0; x < args.nodeItem.length; x++) {
                    switch (args.action) {
                        case "open":
                            $(args.nodeItem[x]).attr("data-panel-status","shown").show("fade",100, function(){
                                if (typeof(args.onFunctionDone) !== "undefined") {
                                    args.onFunctionDone();
                                }
                            });
                            break;
                        case "close":
                            $(args.nodeItem[x]).attr("data-panel-status","hidden").hide("fade",100, function(){
                                if (typeof(args.onFunctionDone) !== "undefined") {
                                    args.onFunctionDone();
                                }
                            });
                            break;
                    }
                }
            } else {
                switch (args.action) {
                    case "open":
                        $(args.nodeItem).attr("data-panel-status","shown").show("fade",100, function() {
                            if (typeof(args.onFunctionDone) !== "undefined") {
                                args.onFunctionDone();
                            }
                        });
                        break;
                    case "close":
                        $(args.nodeItem).attr("data-panel-status","hidden").hide("fade",100, function() {
                            if (typeof(args.onFunctionDone) !== "undefined") {
                                args.onFunctionDone();
                            }
                        });
                        break;
                }

            }

            break;
        case "selectFiller":
            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            $(args.nodeItem).attr("disabled","disabled");
            $(args.nodeItem).attr("data-active","false");

            if (args.triggerChosen) {
                $(args.nodeItem).prop('disabled', true).trigger("chosen:updated");
            }

            if (typeof(args.jsonResponse) !== "undefined") {
                ajaxCallback({
                    jsonResponse: args.jsonResponse
                    ,passedArguments: args
                });
            } else {
                var jsonData = new Object();

                jsonData.callHeader = args.callHeader;
                jsonData.callArguments = args.callArguments;
                jsonData = JSON.stringify(jsonData);

                var error = null;

                statusBox('loading', 'NULL', 'NULL', 'add', 'NULL');
                $.ajax({
                    contentType: "application/x-www-form-urlencoded",
                    url: "php/index_admin_call_handler.php",
                    type: "POST",
                    data: jsonData,
                    dataType: "json",
                    success: function (jsonResponse) {
                        var error = errorHandler({
                            errorCode: jsonResponse.statusCode
                            ,errorIcon: "warning"
                            ,errorTitle: "Se ha encontrado una excepción"
                            ,errorMessage: jsonResponse.errorMessage
                        });
                        if (!error) {
                            ajaxCallback({
                                jsonResponse: jsonResponse
                                ,passedArguments: args
                            });
                        }
                    },
                    complete: function () {
                        statusBox('loading', 'NULL', 'NULL', 'remove', 'NULL');
                    }
                });
            }
            function ajaxCallback(args) {

                var valueIds = args.jsonResponse.values.id;
                var valueNames = args.jsonResponse.values.name;
                var optionNodeArray = new Array();

                if (typeof(args.passedArguments.deleteNodeContent) !== "undefined") {
                    if (args.passedArguments.deleteNodeContent) {
                        $(args.passedArguments.nodeItem).empty();
                    }
                } else {
                    $(args.passedArguments.nodeItem).empty();
                }

                if (typeof(args.passedArguments.addDividerToNode) !== "undefined") {
                    if (args.passedArguments.addDividerToNode) {
                        $(args.passedArguments.nodeItem).append("<option disabled='disabled'>"+args.passedArguments.dividerText+"</option>");
                    }
                }

                if (valueIds !== null && valueIds !== "" && valueIds.length !== 0) {
                    for (var x = 0; x < valueIds.length; x++) {
                        optionNodeArray[x] = document.createElement("option");
                        $(optionNodeArray[x]).attr("value",valueIds[x]);
                        $(optionNodeArray[x]).html(valueNames[x]);

                        if (typeof(args.passedArguments.selectedOption) !== "undefined") {
                            if (valueIds[x] == args.passedArguments.selectedOption) {
                                $(optionNodeArray[x]).attr("selected","selected");
                            }
                        }
                    }
                }

                if (args.passedArguments.addNodeBeforeLoad) {
                    valueIds = args.passedArguments.nodeBeforeLoadArray.id.reverse();
                    valueNames = args.passedArguments.nodeBeforeLoadArray.name.reverse();
                    for (var x = 0; x < valueIds.length; x++) {
                        optionNodeArray.unshift(document.createElement("option"));
                        $(optionNodeArray[0]).attr("value",valueIds[x]);
                        $(optionNodeArray[0]).html(valueNames[x]);
                    }
                }

                $(args.passedArguments.nodeItem).append(optionNodeArray);
                if (args.passedArguments.triggerChosen) {
                    $(args.passedArguments.nodeItem).chosen("destroy");
                    $(args.passedArguments.nodeItem).chosen({
                        no_results_text: "No se han encontrado resultados para"
                    });
                    $(args.passedArguments.nodeItem).prop('disabled', false).trigger("chosen:updated");
                    if (typeof(args.passedArguments.chosenOptions) !== "undefined") {
                        $(args.passedArguments.nodeItem).next("div").attr("style", "width: " + args.passedArguments.chosenOptions.widthValue + args.passedArguments.chosenOptions.widthUnit);
                    }
                }
                if (args.passedArguments.triggerOnChange) {
                    $(args.passedArguments.nodeItem).trigger("change");
                }

                $(args.passedArguments.nodeItem).attr("data-active","true");
                $(args.passedArguments.nodeItem).removeAttr("disabled");

                if (typeof(args.passedArguments.onFunctionDone) !== "undefined") {
                    args.passedArguments.onFunctionDone();
                }
            }

            break;
        case "focusInput":
            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#" + args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            if (typeof(args.delay) !== "undefined") {
                setTimeout(function(){
                    $(args.nodeItem).focus();
                },args.delay);
            } else {
                $(args.nodeItem).focus();
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            break;
        case "dataTableHandler":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#" + args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            switch (args.action) {
                case "createTable":

                    $(args.nodeItem).dataTable({
                        "language": {
                            "sProcessing":     "Procesando...",
                            "sLengthMenu":     "Mostrar _MENU_ registros",
                            "sZeroRecords":    "No se encontraron resultados",
                            "sEmptyTable":     "Ningún dato disponible en esta tabla",
                            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                            "sInfoPostFix":    "",
                            "sSearch":         "",
                            "sUrl":            "",
                            "sInfoThousands":  ",",
                            "sLoadingRecords": "Cargando...",
                            "oPaginate": {
                                "sFirst":    "Primero",
                                "sLast":     "Útimo",
                                "sNext":     "Siguiente",
                                "sPrevious": "Anterior"
                            },
                            "oAria": {
                                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                            },
                        },
                        "sDom": "<ltp>",
                        "lengthMenu": [[10, 25, 50, 75, 100, -1], [10, 25, 50, 75, 100, "Todos"]],
                        "fnInitComplete": function() {
                            if (typeof(args.onFunctionDone) !== "undefined") {
                                args.onFunctionDone();
                            }
                        }
                    });
                    break;
                case "destroyTable":
                    $(args.nodeItem).DataTable().destroy();
                    break;
            }



            break;
        case "tableSearch":
            if (typeof(timer_1) !== "object") {
                clearTimeout(timer_1);
                timer_1 = null;
            }

            timer_1 = setTimeout(function(){
                if ($(args.searchInputNode).val() === "") {
                    var rows = $(args.searchInputNode).parents("table").find("tbody").find("tr").show();
                } else {
                    var pattern = new RegExp(functionHandler({functionName: "escapeRegExp", value: $(args.searchInputNode).val()}),"i");
                    var rows = $(args.searchInputNode).parents("table").find("tbody").find("tr").get();

                    for (x = 0; x < rows.length; x++) {

                        var text = $(rows[x]).children("td").text();

                        if (pattern.test(text)) {
                            $(rows[x]).show();
                        } else {
                            $(rows[x]).not("[data-item='table-divider']").hide();
                        }
                    }
                }

                if (typeof(args.onFunctionDone) !== "undefined") {
                    args.onFunctionDone();
                }

                clearTimeout(timer_1);
                timer_1 = null;
            },args.searchDelay);

            break;
        case "escapeRegExp":
            return args.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            break;
        case "unEscapeRegExp":
            var returnValue = args.value;

            returnValue = returnValue.replace(/\\\./,".");
            returnValue = returnValue.replace(/\\\*/,"*");
            returnValue = returnValue.replace(/\\\+/,"+");
            returnValue = returnValue.replace(/\\\?/,"?");
            returnValue = returnValue.replace(/\\\^/,"^");
            returnValue = returnValue.replace(/\\\$/,"$");
            returnValue = returnValue.replace(/\\\{/,"{");
            returnValue = returnValue.replace(/\\\}/,"}");
            returnValue = returnValue.replace(/\\\(/,"(");
            returnValue = returnValue.replace(/\\\)/,")");
            returnValue = returnValue.replace(/\\\|/,"|");
            returnValue = returnValue.replace(/\\\[/,"[");
            returnValue = returnValue.replace(/\\\]/,"]");
            returnValue = returnValue.replace(/\\\\/,"\\");

            return returnValue

            break;
        case "uniqueId":

            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +    revised by: Kankrelune (http://www.webfaktory.info/)
            // %        note 1: Uses an internal counter (in php_js global) to avoid collision
            // *     example 1: uniqid();
            // *     returns 1: 'a30285b160c14'
            // *     example 2: uniqid('foo');
            // *     returns 2: 'fooa30285b1cd361'
            // *     example 3: uniqid('bar', true);
            // *     returns 3: 'bara20285b23dfd1.31879087'

            var retId;
            var formatSeed = function(seed, reqWidth) {
                seed = parseInt(seed, 10).toString(16); // to hex str
                if (reqWidth < seed.length) { // so long we split
                    return seed.slice(seed.length - reqWidth);
                }
                if (reqWidth > seed.length) { // so short we pad
                    return Array(1 + (reqWidth - seed.length)).join('0') + seed;
                }
                return seed;
            };

            // BEGIN REDUNDANT
            if (!this.php_js) {
                this.php_js = {};
            }
            // END REDUNDANT
            if (!this.php_js.uniqidSeed) { // init seed with big random int
                this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
            }
            this.php_js.uniqidSeed++;

            if (typeof(args.prefix) !== "undefined") {
                retId = args.prefix; // start with prefix, add current milliseconds hex string
            } else {
                retId = "";
            }

            retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
            retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
            if (typeof(args.addEntropy) !== "undefied") {
                if (args.addEntropy == true) {
                    // for more entropy we add a float lower to 10
                    retId += (Math.random() * 10).toFixed(8).toString();
                }
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            return retId;

            break;
        case "enterMenuItem":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#" + args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            $("#right-panel").css("overflow","hidden");
            $("#icon-menu").hide("puff",300,function(){
                $(args.nodeItem).show("puff",300,function(){
                    $("#right-panel").css("overflow","auto");

                    if (typeof(args.onFunctionDone) !== "undefined") {
                        args.onFunctionDone();
                    }
                });

                if (args.hasOptions) {
                    var optionsMenuid = $(args.nodeItem).attr("data-options-id");
                    $("#" + optionsMenuid).show("slide",200);
                }
            });

            break;
        case "closeMenuItem":

            $("#right-panel").css("overflow","hidden");
            var divArray = $("#right-panel").find("div[data-item='menu-panel']").get();
            for (var  x = 0; x < divArray.length; x++) {
                $(divArray[x]).hide("puff",300,function(){

                    $("#icon-menu").show("puff",300,function(){
                        $("#right-panel").css("overflow","auto");

                        if (typeof(args.onFunctionDone) !== "undefined") {
                            args.onFunctionDone();
                        }
                    });
                });
            }
            var divArray = $("#action-info-section").find("div[data-item='option-panel']").get();
            for (var  x = 0; x < divArray.length; x++) {
                $(divArray[x]).hide("slide",200);
            }
            functionHandler({
                functionName: 'windowHandler',
                getNodeMethod: 'node',
                nodeItem: $("body").find("div[data-item='window']").get(),
                action: 'close'
            });

            break;
        case "resizeHtmlNode":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#" + args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var heightPercentage = args.heightPercentage;
            var minHeightPercentage = args.minHeightPercentage;

            var newHeightValue = Math.ceil((heightPercentage * windowHeight) / 100);
            newHeightValue = (newHeightValue - args.offsetPixels);

            if (Array.isArray(args.nodeItem)) {
                for (var x = 0; x < args.nodeItem.length; x++) {
                    $(args.nodeItem[x]).height(newHeightValue);
                    $(args.nodeItem[x]).css("max-height", newHeightValue + "px");
                    $(args.nodeItem[x]).css("min-height", minHeightPercentage + "vh");
                    $(args.nodeItem[x]).css("overflow", "auto");
                }
            } else {
                $(args.nodeItem).height(newHeightValue);
                $(args.nodeItem).css("max-height", newHeightValue + "px");
                $(args.nodeItem).css("min-height", minHeightPercentage + "vh");
                $(args.nodeItem).css("overflow", "auto");
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            break;
        case "generateUserName":

            var userName = "";

            var value1 = args.values.userName_fnameValue;
            var value2 = args.values.userName_lnameValue;
            var value3 = args.values.userName_idValue;

            userName += value1.split(" ")[0].split("")[0];

            if (value2.split(" ").length > 1) {
                userName += value2.split(" ")[0].split("")[0];
                userName += value2.split(" ")[1];
            } else {
                userName += value2.split(" ")[0];
            }

            var value4 = value3.toString().match(/\d{3}$/);
            userName += value4[0];

            userName = functionHandler({
                functionName: "removeAccents"
                ,value: userName
            });

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            return userName.toLowerCase();

            break;
        case "generatePassword":

            var characterSet = args.characterSet.split(",");
            var possibleCharacterSet = "";

            if($.inArray('a-z', characterSet) >= 0){
                possibleCharacterSet += 'abcdefghijklmnopqrstuvwxyz';
            }
            if($.inArray('A-Z', characterSet) >= 0){
                possibleCharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if($.inArray('0-9', characterSet) >= 0){
                possibleCharacterSet += '0123456789';
            }
            if($.inArray('!-;', characterSet) >= 0){
                possibleCharacterSet += "![]{}()%&*$#^<>~@|'=-_.:,;";
            }

            var generatedPassword = "";
            for(var x = 0; x < args.passwordSize; x++) {
                generatedPassword += possibleCharacterSet.charAt(Math.floor(Math.random() * possibleCharacterSet.length));
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            return generatedPassword;

            break;
        case "removeAccents":

            var oldString = args.value.toString();

            var accents_array_1 = new Array('À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'Ĉ', 'ĉ', 'Ċ', 'ċ', 'Č', 'č', 'Ď', 'ď', 'Đ', 'đ', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ĝ', 'ĝ', 'Ğ', 'ğ', 'Ġ', 'ġ', 'Ģ', 'ģ', 'Ĥ', 'ĥ', 'Ħ', 'ħ', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ', 'ı', 'Ĳ', 'ĳ', 'Ĵ', 'ĵ', 'Ķ', 'ķ', 'Ĺ', 'ĺ', 'Ļ', 'ļ', 'Ľ', 'ľ', 'Ŀ', 'ŀ', 'Ł', 'ł', 'Ń', 'ń', 'Ņ', 'ņ', 'Ň', 'ň', 'ŉ', 'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ŕ', 'ŕ', 'Ŗ', 'ŗ', 'Ř', 'ř', 'Ś', 'ś', 'Ŝ', 'ŝ', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ', 'Ť', 'ť', 'Ŧ', 'ŧ', 'Ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų', 'Ŵ', 'ŵ', 'Ŷ', 'ŷ', 'Ÿ', 'Ź', 'ź', 'Ż', 'ż', 'Ž', 'ž', 'ſ', 'ƒ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ǎ', 'ǎ', 'Ǐ', 'ǐ', 'Ǒ', 'ǒ', 'Ǔ', 'ǔ', 'Ǖ', 'ǖ', 'Ǘ', 'ǘ', 'Ǚ', 'ǚ', 'Ǜ', 'ǜ', 'Ǻ', 'ǻ', 'Ǽ', 'ǽ', 'Ǿ', 'ǿ', 'Ά', 'ά', 'Έ', 'έ', 'Ό', 'ό', 'Ώ', 'ώ', 'Ί', 'ί', 'ϊ', 'ΐ', 'Ύ', 'ύ', 'ϋ', 'ΰ', 'Ή', 'ή');
            var accents_array_2 = new Array('A', 'A', 'A', 'A', 'A', 'A', 'AE', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'D', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 's', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', 'A', 'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'D', 'd', 'D', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'IJ', 'ij', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L', 'l', 'L', 'l', 'l', 'l', 'N', 'n', 'N', 'n', 'N', 'n', 'n', 'O', 'o', 'O', 'o', 'O', 'o', 'OE', 'oe', 'R', 'r', 'R', 'r', 'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'S', 's', 'T', 't', 'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'W', 'w', 'Y', 'y', 'Y', 'Z', 'z', 'Z', 'z', 'Z', 'z', 's', 'f', 'O', 'o', 'U', 'u', 'A', 'a', 'I', 'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'A', 'a', 'AE', 'ae', 'O', 'o', 'Α', 'α', 'Ε', 'ε', 'Ο', 'ο', 'Ω', 'ω', 'Ι', 'ι', 'ι', 'ι', 'Υ', 'υ', 'υ', 'υ', 'Η', 'η');

            newString = oldString.replaceArray(accents_array_1, accents_array_2);

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            return newString;

            break;
        case "checkForEmptyFormFields":
            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            var inputArray = $(args.nodeItem).find("input").not("[data-item='can-be-empty']").get();
            var selectArray = $(args.nodeItem).find("select").not("[data-item='can-be-empty']").get();
            var textAreaArray = $(args.nodeItem).find("textarea").not("[data-item='can-be-empty']").get();

            var areThereAnyEmptyFields = false;

            loop1:
                for (var x = 0; x < inputArray.length; x++) {
                    switch ($(inputArray[x]).attr("type")) {
                        case "text":
                        case "password":
                        case "number":
                        case "date":
                        case "email":
                            if ($(inputArray[x]).val() == "" || $.trim($(inputArray[x]).val()) == "") {
                                areThereAnyEmptyFields = true;
                                break loop1;
                            }
                            break;
                    }
                }
            if (areThereAnyEmptyFields === false) {
                loop2:
                    for (var x = 0; x < selectArray.length; x++) {
                        if ($(selectArray[x]).val() == "" || $.trim($(selectArray[x]).val()) == "") {
                            areThereAnyEmptyFields = true;
                            break loop2;
                        }
                    }
            }
            if (areThereAnyEmptyFields === false) {
                loop3:
                    for (var x = 0; x < textAreaArray.length; x++) {
                        if ($(textAreaArray[x]).val() == "" || $.trim($(textAreaArray[x]).val()) == "") {
                            areThereAnyEmptyFields = true;
                            break loop3;
                        }
                    }
            }

            if (areThereAnyEmptyFields) {
                statusBox('warning', 'NULL', 'Por favor complete todos los campos', 'add', 'NULL');
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            return areThereAnyEmptyFields;

            break;
        case "checkAllTableRows":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            if ($(args.checkboxNode).prop("checked") == true) {
                $(args.nodeItem).find("tbody").find("input[type='checkbox']").prop("checked",true).trigger("change");
            } else {
                $(args.nodeItem).find("tbody").find("input[type='checkbox']").prop("checked",false).trigger("change");
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }

            break;
        case "dateDaysControl":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            switch(args.inputType) {
                case "date":
                    switch( args.action){
                        case"add":
                            var date = $(args.nodeItem).datepicker('getDate');
                            date.setDate(date.getDate() + parseInt(args.days));
                            $(args.nodeItem).datepicker('setDate', date);
                            break;
                        case"remove":
                            var date = $(args.nodeItem).datepicker('getDate');
                            date.setDate(date.getDate() - parseInt(args.days));
                            $(args.nodeItem).datepicker('setDate', date);
                            break;
                    }
                    break;
                case "datetime":
                    switch( args.action){
                        case"add":
                            var date = $(args.nodeItem).datetimepicker('getDate');
                            date.setDate(date.getDate() + parseInt(args.days));
                            $(args.nodeItem).datetimepicker('setDate', date);
                            break;
                        case"remove":
                            var date = $(args.nodeItem).datetimepicker('getDate');
                            date.setDate(date.getDate() - parseInt(args.days));
                            $(args.nodeItem).datetimepicker('setDate', date);
                            break;
                    }
                    break;
            }
            break;
        case "createEditionInputs":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            var nodeArray = $(args.nodeItem).find("[data-update-field='1']").get();

            for (var x = 0; x < nodeArray.length; x++) {
                $(nodeArray[x]).bind("change",function(){
                    $(this).attr("data-updated",1);

                    if ($(this).attr("type") == "checkbox") {
                        $(this).val($(this).prop("checked"));
                    }
                });
            }

            break;
        case "salesTableControl":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            switch (args.action) {
                case "add":
                    var tableNode = $("#table-7").get();
                    var trNode = $(args.nodeItem).parents("tr").get();
                    var input_1 = $(trNode).find("input[data-item='number-of-items']").get();
                    var input_2 = $(trNode).find("input[data-item='max-number-of-items']").get();

                    var numberOfItems = parseInt($(input_1).val(),10);
                    var tempObject_1 = JSON.parse($(trNode).attr("data-id"));
                    var tempObject_2 = new Object();

                    tempObject_2.id = tempObject_1.id;
                    tempObject_2.productPrize = tempObject_1.productPrize;
                    tempObject_2.numberOfItems = numberOfItems;
                    tempObject_2.totalValue = (parseInt(tempObject_1.productPrize,10) * numberOfItems);

                    tempObject_1.productStoredQuantity = (parseInt(tempObject_1.productStoredQuantity,10) - numberOfItems);

                    $(input_1).attr("max", tempObject_1.productStoredQuantity);
                    $(input_1).trigger("change");
                    $(input_2).val(tempObject_1.productStoredQuantity);
                    $(trNode).attr("data-id", JSON.stringify(tempObject_1));

                    if (numberOfItems == 0) {
                        statusBox('warning', 'NULL', 'La cantidad de items a agregar no puede ser 0', 'add', '5000');
                    } else {

                        trNode = document.createElement("tr");
                        var tdArray = new Array();

                        for (var y = 0; y < 5; y++) {
                            tdArray[y] = document.createElement("td");

                            switch(y) {
                                case 0:
                                    $(tdArray[y]).addClass("tbl-text-align-center").html(tempObject_1.productName);

                                    break;
                                case 1:
                                    $(tdArray[y]).addClass("tbl-text-align-center").html(numberOfItems);

                                    break;
                                case 2:
                                    $(tdArray[y]).addClass("tbl-text-align-center").html(tempObject_1.productPrize);

                                    break;
                                case 3:
                                    $(tdArray[y]).addClass("tbl-text-align-center").html(tempObject_2.totalValue);

                                    break;
                                case 4:
                                    var button = document.createElement("button");
                                    $(button).addClass("btn btn-danger btn-xs");
                                    $(button).html("<span class='fas fa-times'></span>");

                                    $(button).bind("click",function(){

                                        var confirmText = "¿Está seguro en remover el producto?";
                                        var _confirm = confirm(confirmText);

                                        if (_confirm) {
                                            functionHandler({
                                                functionName: "salesTableControl"
                                                ,getNodeMethod: "node"
                                                ,nodeItem: this
                                                ,action: "remove"
                                            });
                                        }
                                    });

                                    $(tdArray[y]).addClass("tbl-text-align-center").append(button);
                                    break;
                            }

                            $(trNode).append(tdArray);
                            $(trNode).attr("data-id",JSON.stringify(tempObject_2));
                            $(trNode).attr("data-super-id",tempObject_1.id);

                        }

                        $(tableNode).find("tbody").append(trNode);
                    }
                    break;
                case "remove":
                    var tableNode = $("#table-6").get();
                    var trNode_1 = $(args.nodeItem).parents("tr").get();

                    var tempObject_1 = JSON.parse($(trNode_1).attr("data-id"));
                    var trNode_2 = $(tableNode).find("tbody").find("tr[data-super-id='" + $(trNode_1).attr("data-super-id") + "']").get(0);
                    var tempObject_2 = JSON.parse($(trNode_2).attr("data-id"));

                    tempObject_2.productStoredQuantity = (parseInt(tempObject_2.productStoredQuantity,10) + parseInt(tempObject_1.numberOfItems,10));

                    var input_1 = $(trNode_2).find("input[data-item='number-of-items']").get();
                    var input_2 = $(trNode_2).find("input[data-item='max-number-of-items']").get();
                    $(input_2).val(tempObject_2.productStoredQuantity);
                    $(input_1).attr("max", tempObject_2.productStoredQuantity);
                    $(input_1).trigger("change");
                    $(trNode_2).attr("data-id",JSON.stringify(tempObject_2));

                    $(trNode_1).remove();

                    break;
            }

            $("#panel-10-input-2").val(functionHandler({functionName: "getSalesTableTotalValue"}));

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }
            break;
        case "getSalesTableTotalValue":

            var tableNode = $("#table-7").get(0);
            var trArray = $(tableNode).find("tbody").find("tr").get();
            var total = 0;

            for (x = 0; x < trArray.length; x++) {
                var tempObject = JSON.parse($(trArray[x]).attr("data-id"));
                total += parseInt(tempObject.totalValue);
            }

            return total;

            break;
        case "tableToExcel":

            switch (args.getNodeMethod) {
                case "id":
                    var htmlNode = $("#"+args.nodeItem).get(0);
                    break;
                case "node":
                    var htmlNode = args.nodeItem;
                    break;
            }

            args.nodeItem = htmlNode;

            excelName = args.fileName;
            $(args.nodeItem).removeData();
            $(args.nodeItem).table2excel();
            break;
        case "mimeChecker":

            var response;
            switch(args.fileType) {
                case 'image/png':
                case 'image/jpeg':
                case 'image/pjpeg':
                    response = true;
                    break;
                default:
                    response = false;
                    break;
            }

            if (typeof(args.onFunctionDone) !== "undefined") {
                args.onFunctionDone();
            }
            return response;

            break;
        default:
            errorHandler({
                errorCode: 500
                ,errorIcon: "warning"
                ,errorTitle: "Se ha encontrado una excepción"
                ,errorMessage: "Javascript error, function handler name '"+args.functionName+"' not found"
            });
            break;
    }
}