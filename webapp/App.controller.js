sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Quickstart.App", {
		onPress : function (evt) {
			console.log(evt)
			MessageToast.show(evt.getSource().getId() + " Pressed");
		}
	});

});