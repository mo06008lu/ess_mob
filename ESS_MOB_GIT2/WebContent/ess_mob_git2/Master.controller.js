jQuery.sap.require("ess_abs_mob.util.Formatter");
jQuery.sap.require("ess_abs_mob.util.Grouper"); 

sap.ui.controller("ess_abs_mob.Master", {
	
	
	
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
//		sap.ui.getCore().setModel(oModel);
		app.setModel(oModel);
		var view = this.getView();
		var oList = view.byId("list");
		oList.setModel(oModel);
		var dispBtn = view.byId("display");
		dispBtn.setVisible(false);
//		 var oHeaderSelect = this.getView().byId("select");
//		 var fnOnPress = function (oEvt) {
//		      sap.m.MessageToast.show("Executed " + oEvt.getSource().getText());
//		      oHeaderSelect.close();
//		    };
//		    oHeaderSelect.addButton(
//		      new sap.m.Button({
//		        text: "Action 1",
//		        press: fnOnPress
//		      })
//		    );
//		    oHeaderSelect.addButton(
//		      new sap.m.Button({
//		        text: "Action 2",
//		        press: fnOnPress
//		      })
//		  );		  
//		oList.bindItems(oModel, oItemTemplateItem, null, null);
	},
	
	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}, 
	 
	 handleSearch : function (evt) { 
	 // create model filter 
	 var filters = []; 
	 var query = evt.getParameter("query"); 
	 if (query && query.length > 0) { 
	 var filter = new sap.ui.model.Filter("Passname", 
	sap.ui.model.FilterOperator.Contains, query); 
	 filters.push(filter); 
	 } 
	 
	 // update list binding 
	 var list = this.getView().byId("list"); 
	 var binding = list.getBinding("items"); 
	 binding.filter(filters); 
	 }, 
	 
	 handleListSelect : function (evt) { 
	 var context = evt.getParameter("listItem").getBindingContext(); 
	 this.nav.to("Detail", context); 
	 }, 
	 
	 onListItemPress: function (evt) {
		    jQuery.sap.require("sap.m.MessageToast");
		    sap.m.MessageToast.show("Pressed : " + evt.getSource().getTitle());
     },
	 
	 onDelete : function (evt) {
		var view = this.getView();
		 var oList = view.byId("list");
		 if (oList.getMode() != sap.m.ListMode.Delete ){
			oList.setMode(sap.m.ListMode.Delete);
		 	var btn = view.byId("edit");
		 	btn.setVisible(false);
		 	btn = view.byId("add");
		 	btn.setVisible(false);
		 	btn =  view.byId("display");
		 	btn.setVisible(true);
		 }else{
			 oList.setMode(sap.m.ListMode.None);
			 	var btn = view.byId("edit");
			 	btn.setVisible(true);
			 	btn = view.byId("add");
			 	btn.setVisible(true);
			 	btn =  view.byId("display");
			 	btn.setVisible(false);
		 }
	 },
	 
	 handleRefresh: function (oEvent) {
		    
		      setTimeout(jQuery.proxy(function () {
		      this.getView().byId("pullToRefresh").hide();
		      // Deal with any actual search query
		      var oList = this.getView().byId("list");
		      oList.setModel(oModel);
		      var oSearchField = this.getView().byId("searchField");
		      var sQuery = oSearchField.getValue();
		      var aFilters = [];
		      if (sQuery && sQuery.length) {
		        aFilters.push(new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery));
		      }
		      oList.getBinding("items").filter(aFilters);
		    }, this), 1000);
	 }
	 
//	 handleGroup : function (evt) { 
//	 
//	 // compute sorters 
//		 var sorters = []; 
//		 var item = evt.getParameter("selectedItem"); 
//		 var key = (item) ? item.getKey() : null; 
//		 if ("GrossAmount" === key || "LifecycleStatus" === key) { 
//			 	ess_abs_mob.util.Grouper.bundle = 
//			 	this.getView().getModel("res").getResourceBundle(); 
//			 	var grouper = ess_abs_mob.util.Grouper[key]; 
//			 	sorters.push(new sap.ui.model.Sorter(key, true, grouper)); 
//		 } 
//	 
//	 // update binding 
//		 var list = this.getView().byId("list"); 
//		 var oBinding = list.getBinding("items"); 
//		 oBinding.sort(sorters); 
//	 }

});