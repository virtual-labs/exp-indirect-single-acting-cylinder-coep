//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};


$(function () {
	
//	SINGLEACTINGCYLINDER.connectionLevel = function(){
	
			connectionLevel = function(){
				

		
			 ConnFlagCnt = 0;
			 rightConn = 0;
			 IdenFlagCnt = 0;
			 rightIden = 0;
			 multiSelectFlagCnt = 0;
		$("#mainDiv").html('');
		
		var SymbolLibrary = '';
		
		SymbolLibrary+='<div class="container-fluid" id="connectionLevel">'
		       
			    +'<div class="col-md-3 col-sm-3" id = "library">'
				+'<div >'
				+'<h4 align = "center">Library</h4>'
				
//				Actuation pressure control method
				+'<div id="pressureControl" >'
				+'<p>Actuation Pressure Control</p>'
				+'<div data-shape="byApplyPres" class="palette_node_element draw2d_droppable" title="By applying pressure"><img src="images/img/byApplyPres.png"></div>'
				+'<div data-shape="byReleasePres" class="palette_node_element draw2d_droppable" title="By releasing pressure"><img src="images/img/byReleasePres.png"></div>'
				+'<div data-shape="byDiffPres" class="palette_node_element draw2d_droppable" title="By differential pressure"><img src="images/img/byDiffPres.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Actuation electrical control method
				+'<div id="elecricalControl" >'
				+'<p>Actuation Electrical Control</p>'
				+'<div data-shape="electroMagnet" class="palette_node_element draw2d_droppable" title="Electro-magnet"><img src="images/img/electroMagnet.png"></div>'
				+'<div data-shape="solenoidServoValve" class="palette_node_element draw2d_droppable" title="By solenoid and servo valve"><img src="images/img/solenoidServoValve.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Actuation mechanical control method
				+'<div id="mechanicalControl" >'
				+'<p>Actuation Mechanical Control</p>'
				+'<div data-shape="plunger" class="palette_node_element draw2d_droppable" title="Plunger"><img src="images/img/plunger.png"></div>'
				+'<div data-shape="roller" class="palette_node_element draw2d_droppable" title="Roller"><img src="images/img/roller.png"></div>'
				+'<div data-shape="rollerTrip" class="palette_node_element draw2d_droppable" title="Roller-trip"><img src="images/img/rollerTrip.png"></div>'
				+'<div data-shape="springSym" class="palette_node_element draw2d_droppable" title="Spring"><img src="images/img/spring.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Actuation Manual control method
				+'<div id="manualControl" >'
				+'<p>Actuation Manual Control</p>'
				+'<div data-shape="generalSym" class="palette_node_element draw2d_droppable" title="General symbol"><img src="images/img/genSym.png"></div>'
				+'<div data-shape="pushBtn" class="palette_node_element draw2d_droppable" title="Push button"><img src="images/img/pushBtn.png"></div>'
				+'<div data-shape="leverSym" class="palette_node_element draw2d_droppable" title="Lever"><img src="images/img/lever.png"></div>'
				+'<div data-shape="pedalSym" class="palette_node_element draw2d_droppable" title="Pedal"><img src="images/img/pedal.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Servicing 
				+'<div id="servicingUnit" >'
				+'<p>Servicing Symbols</p>'
				+'<div data-shape="servUnit" class="palette_node_element draw2d_droppable" title="Servicing Unit(Simple symbol)"><img src="images/img/servUnit.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Exaust 
				+'<div id="exaust" >'
				+'<p>Nomenclature</p>'
				+'<div data-shape="exaust" class="palette_node_element draw2d_droppable" title="Exaust"><img src="images/img/exaust.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'				
				
//				Pressure control valve
				+'<div id="pressureControlValveSymbols" >'
				+'<p>Pressure Control Valve Symbols</p>'
				+'<div data-shape="presReliefValve" class="palette_node_element draw2d_droppable" title="Pressure relief valve"><img src="images/img/presReliefValve.png"></div>'
				+'<div data-shape="seqValve" class="palette_node_element draw2d_droppable" title="Sequence Valve"><img src="images/img/seqValve.png"></div>'
				+'<div data-shape="presRegulator" class="palette_node_element draw2d_droppable" title="Pressure Regulator"><img src="images/img/presRegulator.png"></div>'
				+'<div data-shape="presRegSelfRel" class="palette_node_element draw2d_droppable" title="Pressure regulator with self relieving"><img src="images/img/presRegSelfRel.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Flow valve
				+'<div id="flowValveSymbols" >'
				+'<p>Flow Valve Symbols</p>'
				+'<div data-shape="flowControlGenSym" class="palette_node_element draw2d_droppable" title="Flow control general symbol"><img src="images/img/flowControlGenSym.png"></div>'
				+'<div data-shape="adjustFlowControl" class="palette_node_element draw2d_droppable" title="Adjustable flow control"><img src="images/img/adjustFlowCon.png"></div>'
				+'<div data-shape="presFlowControl" class="palette_node_element draw2d_droppable" title="Pressure compensated flow control valve"><img src="images/img/presFlowCon.png"></div>'
				+'<div data-shape="viscoFlowControl" class="palette_node_element draw2d_droppable" title="Flow control(insignificant influene of viscosity)"><img src="images/img/viscoFlowCon.png"></div>'
				+'<div data-shape="mechSpringFlowControl" class="palette_node_element draw2d_droppable" title="Flow control valve controlled mechanically with spring"><img src="images/img/mechFlowCon.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Shut Off Valve
				+'<div id="shutOffValveSymbols" >'
				+'<p>Shut-off Valve Symbols</p>'
				+'<div data-shape="shut_offValve" class="palette_node_element draw2d_droppable" title="Shut-off valve"><img src="images/img/Shut_offValve.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Energy Transmission
				+'<div id="energyTransmissionSymbols" >'
				+'<p>Energy Transmission Symbols</p>'
				+'<div data-shape="mainSupPres" class="palette_node_element draw2d_droppable" title="Main supply pressure"><img src="images/img/mainSupPres.png"></div>'
				+'<div data-shape="retFeedLine" class="palette_node_element draw2d_droppable" title="Return Feed Line"><img src="images/img/retFeedLine.png"></div>'
				+'<div data-shape="controlLine" class="palette_node_element draw2d_droppable" title="Control Line"><img src="images/img/controlLine.png"></div>'
				+'<div data-shape="drainLine" class="palette_node_element draw2d_droppable" title="Drain Line"><img src="images/img/drainLine.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				check valve
				+'<div id="checkValveSymbols" >'
				+'<p>Check Valve Symbols</p>'
				+'<div data-shape="nonRetValve" class="palette_node_element draw2d_droppable" title="Non return valve"><img src="images/img/nonRetValve.png"></div>'
				+'<div data-shape="shuttleValve" class="palette_node_element draw2d_droppable" title="Shuttle Valve"><img src="images/img/shuttleValve.png"></div>'
				+'<div data-shape="nonRetFlowCV" class="palette_node_element draw2d_droppable" title="Non return flow control valve"><img src="images/img/nonRetFlow.png"></div>'
				+'<div data-shape="quickExstValve" class="palette_node_element draw2d_droppable" title="Quick Exhaust Valve"><img src="images/img/quickExaustValve.png"></div>'
				+'<div data-shape="twinPresSeq" class="palette_node_element draw2d_droppable" title="Twin pressure sequence"><img src="images/img/twinPresSeq.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Directional Control Valve Symbols
				+'<div id="DirectControlValveSymbols" >'
				+'<p>Directional Control Valve Symbols</p>'
				+'<div data-shape="dcvNormalClose" class="palette_node_element draw2d_droppable" title="2/2 Directional Control Valve - Normally Closed"><img src="images/img/2_2dcvNormalClose.png"></div>'
				+'<div data-shape="dcvNormalOpen" class="palette_node_element draw2d_droppable" title="2/2 Directional Control Valve - Normally Open"><img src="images/img/2_2dcvNormalOpen.png"></div>'
				+'<div data-shape="DCNormalClose3_2" class="palette_node_element draw2d_droppable" title="3/2 D. C. valve normally closed"><img src="images/img/3-2DCNormalClose.png"></div>'
				+'<div data-shape="DCNormalOpen3_2" class="palette_node_element draw2d_droppable" title="3/2 D. C. valve normally Open"><img src="images/img/3-2DCNormalOpen.png"></div>'
				+'<div data-shape="DCValve4_2" class="palette_node_element draw2d_droppable" title="4/2 D.C. Valve"><img src="images/img/4_2DCValve.png"></div>'
				+'<div data-shape="DCPortClose3_3" class="palette_node_element draw2d_droppable" title="3/3 D. C. valve - zero position all ports closed"><img src="images/img/3_3PortClose.png"></div>'
				+'<div data-shape="DCZeroPosePortClose4_3" class="palette_node_element draw2d_droppable" title="4/3 D. C. valve - zero position all ports closed"><img src="images/img/4_3PortClose.png"></div>'
				+'<div data-shape="DCValve5_2" class="palette_node_element draw2d_droppable" title="5/2 D. C. valve"><img src="images/img/5_2DCValve.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
//				Cylinder Symbols
				+'<div id="cylinderSymbols" >'
				+'<p>Cylinder Symbols</p>'
				+'<div data-shape="sacRetExtFrc" class="palette_node_element draw2d_droppable" title="Single acting cylinder return by external force"><img src="images/img/sacExtFrc.png"></div>'
				+'<div data-shape="sacSpring" class="palette_node_element draw2d_droppable" title="Single acting cylinder return by spring"><img src="images/img/sacSpring.png"></div>'
				+'<div data-shape="doubleActCyl" class="palette_node_element draw2d_droppable" title="Double acting cylinder"><img src="images/img/doubleActCyl.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
							
				+'</div>'
				+'</div>'
				+'<nav class="col-md-9 col-sm-9" id = "toolbar">' 
				//+'<button id = "save" style = "cursor: pointer; z-Index">Check Connections</button>'
				+'</nav>'
				+'<div class="col-md-9 col-sm-9" id = "draw2Did">'
				
				//+'<h4 align = "center">Connections</h4>'
				+'</div>'
				
				+'</div>';
		
		$("#mainDiv").html(SymbolLibrary);
		
		
		 app  = new example.Application(selectedOp, component, actuator);
		//var canvas = new example.View("draw2Did");
		app.view.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection: function(){
            return new HoverConnection();
        }
      }));
		
		
			$('#draw2Did').bind('contextmenu', function(e) {
				return false;
			}); 
		
	/*	var canvas = new draw2d.Canvas("draw2Did");
		canvas.setScrollArea($(window));
		canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());
		
		// return my special kind of connection
        var createConnection=function(){
   
			var con = new draw2d.Connection({
			radius: 5,
			router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
			color: "#00a8f0",
			stroke: 1.35
		
			});
			return con;
	     };

// install a custom connection create policy

		canvas.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
				createConnection: createConnection
		}));
		
		
		// check connection
		$("#save").on("click", function (e) {
			// Save flowchart
			alertify.alert("in save"); 
		
		var svg = $("#draw2Did").html();
		var writer = new draw2d.io.json.Writer();
		writer.marshal(canvas,function(json){
    
			var jsonarray = JSON.stringify(json, null, 2);
			// Save jsonarray to DB
             alertify.alert(jsonarray); 

			console.log(jsonarray);
			if(appId == 1){
				
				checkConnectionsForLC(appId,jsonarray);
			}
//         checkConnections(jsonarray);
            
			});
		});
		
		*/
		
		 
	/*	$("#img1, #img2, #img3, #img4 ").draggable({
					helper: 'clone',
					cursor: "crosshair"
					
				});
				
		 $("#draw2Did").droppable({
			    	disabled: false,
			        accept :'#img1, #img2, #img3, #img4',
					
			        drop: function(event,ui) { 
					
					var figure = null;
					
					console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
				
 					var draggedId = ui.draggable.prop("id");
					
			//		if(event.pageX < 700 && event.pageY < 800){
							if(draggedId == "img1"){		
					
					   newRect2 = addRect2(canvas,event.pageX,event.pageY);
					   figure = newRect2;
						
					
						
					}else if(draggedId == "img2"){
						
				
					 
						 newRec = addRec(canvas,event.pageX,event.pageY);
						 figure = newRec;
					
						
					}else if(draggedId == "img3"){
						
				
					
						newRect1 = addRect1(canvas,event.pageX,event.pageY);
						figure = newRect1;
					
						
						
					}else if(draggedId == "img4"){
						
						
				
						
						
					}
					
					var command = new draw2d.command.CommandAdd(canvas, figure, event.pageX , event.pageY);
					canvas.getCommandStack().execute(command);
					
			//	}    	
	               	//$("#design").css('border','none')	
	               //	$(".priCoil").css('display','none');
	              // 	$("#design").droppable("option", "disabled", true );  
	               
	               }
			    });
				*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
		
	
});