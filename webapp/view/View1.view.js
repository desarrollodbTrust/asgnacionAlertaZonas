sap.ui.jsview("AsignacionZonasAlertas.AsignacionAlertaZonas.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function () {
		return "AsignacionZonasAlertas.AsignacionAlertaZonas.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
		createContent: function (oController) {
		
		
		var tabla=new sap.ui.table.Table({
				title:"Camiones circuito Aceria",
				id:"tablaAlertasAceria",
				visibleRowCount: 19,
				selectionMode:"None",
			
			
		});
	
	


		
			var oControl = new sap.ui.commons.TextView({
			text: "{LIC_PLATE}"
		});
		tabla.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "LIC PLATE"
			}),
			template: oControl,
			visible: true,
			width: "8%",
			sortProperty: "LIC_PLATE",
			filterProperty:"LIC_PLATE"
		}));
		
	
		
					var oControl = new sap.m.Switch({
						type:"AcceptReject",
						state:{
					        path: 'ZONE_ALERT',
					        formatter: function(value) {
					            var retorno=(value ==1) ? true: false
					           return retorno;
					        }
					    },
				
						
						layoutData:[
							new sap.m.FlexItemData({
								growFactor:1
							})
							],
						change:function(event){
							var vin="{VIN}"
							oController.cambio(vin, event)
						}                   	
					}) 
		
		tabla.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "Alertado"
			}),
			template: oControl,
			visible: true,
			width: "12%",
			filterProperty:"ZONE_ALERT",
			sortProperty: "ZONE_ALERT"
		}));
		
		
	

		
		var oPage = new sap.m.Page({
			showHeader:false,
			id: "page",
			content: [tabla]
		});
		
		


		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage",
			
		});
		app.addPage(oPage);
		
		return app;
	}

});