sap.ui.jsview("ess_mob_git2.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ess_mob_git2.app
	*/ 
	getControllerName : function() {
		return "ess_mob_git2.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ess_mob_git2.app
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			          new sap.m.Button("btn1", { text: "press me" })
			]
		});
	}

});