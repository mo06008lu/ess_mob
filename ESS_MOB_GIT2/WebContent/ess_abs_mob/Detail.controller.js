jQuery.sap.require("ess_abs_mob.util.Formatter");
jQuery.sap.require("sap.m.MessageBox"); 
jQuery.sap.require("sap.m.MessageToast"); 
sap.ui.controller("ess_abs_mob.Detail", {
	
onInit: function(){
	var oCalendar = this.getView().byId('calendar');
	oCalendar.toggleDatesRangeSelection( "01.05.2015" , "07.01.2015" , false );
	var aSelected = oCalendar.getSelectedDates();
	var oType = sap.me.CalendarEventType.Type01;
	oCalendar.toggleDatesType( aSelected, oType, true);		
},

handleApprove:function (evt) { 
		// show confirmation dialog 
		 var bundle = this.getView().getModel("res").getResourceBundle(); 
		 sap.m.MessageBox.confirm( 
		 bundle.getText("ApproveDialogMsg"), 
		 function (oAction) { 
			 					if (sap.m.MessageBox.Action.OK === oAction) { 
		 // notify user 
			 						var successMsg = bundle.getText("ApproveDialogSuccessMsg"); 
			 						sap.m.MessageToast.show(successMsg); 
			 					} 
		 }, 
		 
		 bundle.getText("ApproveDialogTitle") 
		 ); 
	 },
	 
	 onPress: function(evt){
		    jQuery.sap.require("sap.m.MessageToast");
		    if (evt.getSource().getPressed()) {
		      sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
		    } else {
		      sap.m.MessageToast.show(evt.getSource().getId() + " Unpressed");
		    };
	 }
	
	


});