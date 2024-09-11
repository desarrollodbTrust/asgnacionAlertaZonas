var user;

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller,JSONModel,History,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("AsignacionZonasAlertas.AsignacionAlertaZonas.controller.View1", {
		onInit: function () {
			var that=this;
			
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("/services/userapi/currentUser");
			oModel.attachRequestCompleted(function onCompleted(oEvent) {
					var a = this.getJSON();
					var userEmail = JSON.parse(a).email ? JSON.parse(a).email.toString().toUpperCase() : "";
					user=JSON.parse(a).name
					
					if(!userEmail){
						userEmail="ENZO.LEON@DBTRUST.COM.AR";
					}
					var datas = {
						"userid": JSON.parse(a).name,
						"email": userEmail
					};
					
					var datas = {
    						"userid":  JSON.parse(a).name,
    						"email": userEmail
    					};
    					
    					that.generarTabla(user);
			})
		
			
		},
		
		
		
		
		generarTabla:function(user){
			var tablaAlertaAceria=sap.ui.getCore().byId("tablaAlertasAceria");
			var sort1 = new sap.ui.model.Sorter("LIC_PLATE", true);
					  var filtroTipo= new sap.ui.model.Filter("SECTOR_ID",sap.ui.model.FilterOperator.EQ,59);

		tablaAlertaAceria.bindRows({
			path:"/VEHICLE_USER_Params(USER_FILTER='"+user+"')/Execute",
			filters:filtroTipo,
			sorter:sort1
		});
			tablaAlertaAceria.getModel().setSizeLimit(200000);
		
		},
		cambio:function(vin,evento){
			console.log(vin)
			var vinElegido= evento.getSource().getBindingContext().getProperty("VIN");
			var estado=evento.getParameter("state")
			var alertado=estado ? 1 :0 ;
			console.log(vinElegido);
				var oModel = this.getView().getModel();
			var nuevoObj = {};
			nuevoObj.ZONE_ALERT=alertado
			oModel.update("/P_VEHICLE('"+vinElegido+"')",nuevoObj,{
				
						success: function (log) {
							console.log(log)
							},
							error: function (err) {
							console.log(err)
							}

				
			})
			
			
				
				
			
			
			
		}
		

		
	});
});