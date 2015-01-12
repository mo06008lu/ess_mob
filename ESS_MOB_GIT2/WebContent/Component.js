//jQuery.sap.declare("sap.ui.demo.myFiori.Component");
jQuery.sap.declare("ess_abs_mob.Component");

sap.ui.core.UIComponent.extend("ess_abs_mob.Component", {
	createContent : function() {
			
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "ess_abs_mob.App",
			type : "JS",
//			type : "XML",
			viewData : { component : this }
		});

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// set res model 
		 var resModel = new sap.ui.model.resource.ResourceModel({ 
		 bundleUrl : "res/messageBundle.properties" 
		 }); 
		 oView.setModel(resModel, "res"); 

		 
		// Using a local model for offline development
//			var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
//			sap.ui.getCore().setModel(oModel);
		//		oView.setModel(oModel);
		
		// set device model 
		 var deviceModel = new sap.ui.model.json.JSONModel({ 
		 isPhone : jQuery.device.is.phone, 
		 isNoPhone : ! jQuery.device.is.phone, 
		 listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster", 
		 listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive" 
		 }); 
		 deviceModel.setDefaultBindingMode("OneWay"); 
		 oView.setModel(deviceModel, "device"); 


		// done
		return oView;
	}
});