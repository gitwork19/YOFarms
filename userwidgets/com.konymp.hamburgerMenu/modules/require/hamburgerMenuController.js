define(function() {
    //logger module
    var konyLoggerModule = require('com/konymp/hamburgerMenu/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("hamburgerMenu Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
			var analytics=require("com/konymp/"+"hamburgerMenu"+"/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("Entering hamburgerMenu Component constructor", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.trace("Exiting hamburgerMenu Component constructor", konymp.logger.FUNCTION_EXIT);
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            konymp.logger.trace("Entering hamburgerMenu Component initGettersSetters ", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.trace("Exiting hamburgerMenu Component initGettersSetters ", konymp.logger.FUNCTION_EXIT);
        },

        /**
        	@function : onSegMenuRowClick
            @description : This function is invoked on click of the segment
            @param rowNumber : Row number of the clicked row by the user
            @private
        */
        onSegMenuRowClick: function(rowNumber) {
            konymp.logger.trace("Entering hamburgerMenu Component onSegMenuRowClick  ", konymp.logger.FUNCTION_ENTRY);
            if (this.onMenuItemClick) {
                var menuItemObject = {
                    "menuItemIndex": this.view.segMenu.selectedRowIndex[1].toFixed(0),
                    "menuItemText": this.view.segMenu.selectedRowItems[0].lblMenuItem
                };
                this.onMenuItemClick(menuItemObject);
            }
            konymp.logger.trace("Exiting hamburgerMenu Component onSegMenuRowClick  ", konymp.logger.FUNCTION_EXIT);
        },

        /**
        	@api : setMenuVisibility
            @description : This function is used to set the visibility of the menu
            @param isVisible : To define whether the menu should be visible or not
            @private
        */
        setMenuVisibility: function(isVisible) {
            konymp.logger.trace("Entering hamburgerMenu Component setMenuVisibility  ", konymp.logger.FUNCTION_ENTRY);
            var deviceInfo = kony.os.deviceInfo().name;
            if (isVisible) {
                this.view.flxMenuTrans.isVisible = true;
                this.view.width = "100%";
                this.view.height = "100%";
            } else {
                this.view.flxMenuTrans.isVisible = false;
                if (deviceInfo === "thinclient") {
                    this.view.width = "10%";
                    this.view.height = "5%";
                } else {
                    this.view.width = "60dp";
                    this.view.height = "60dp";
                }
            }
            konymp.logger.trace("Exiting  hamburgerMenu Component setMenuVisibility  ", konymp.logger.FUNCTION_EXIT);
            kony.application.getCurrentForm().forceLayout();
        },

        /**
        	@api : setMenuZIndex
            @description : This function is used to calculate z indices of the children in form
            @param formReference : This is the instance of the form in which sliding menu is included
            @public
        */
        setMenuZIndex: function(formReference) {
            var widgets = formReference.widgets();
            var zIndexValues = [];
            widgets.forEach((widgetReference) => {
                zIndexValues.push(widgetReference.zIndex);
            });
            zIndexValues.sort();
            this.view.zIndex = zIndexValues[zIndexValues.length - 1] + 1;
        }
    };
});