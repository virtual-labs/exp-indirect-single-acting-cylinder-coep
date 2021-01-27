configSingleActingCylinder = function(){
	
//	goForAnimation_Direct_SAC();
//	goForAnimation_Indirect_SAC();
	
	configDACHtm = '';
	
	configDACHtm = '<div id = "configDiv" class="container-fluid">'
				+'<h4 align="center">Selection of conponent</h4>'
//				+'<h6>In this level select the component for direct single acting cylinder</h6>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Operation:*</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="cktChoice" >'
				+'<option value="0">-----Select-----</option>'
//				+'<option value="1">Direct control of single acting cylinder</option>'
				+'<option value="2">Indirect control of single acting cylinder</option>'
//				+'<option value="3">Indirect control of double acting cylinder</option>'				
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Component Selection:*</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<label>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options</label>'
				+'<select class="form-control" name="App" id="compoSelection" multiple size = "11">'
//				+'<option value= 0>-----Select-----</option>'
				+'<option value= 1>Single acting cylinder return by external force</option>'
				+'<option value= 2>Single acting cylinder return by spring</option>'	
				+'<option value= 3>Double acting cylinder</option>'	
				+'<option value= 4>2/2 Directional Control Valve - Normally Closed</option>'
				+'<option value= 5>2/2 Directional Control Valve - Normally Open</option>'
				+'<option value= 6>3/2 D. C. valve normally closed</option>'
				+'<option value= 7>3/2 D. C. valve normally Open</option>'
				+'<option value= 8>4/2 D.C. Valve</option>'
				+'<option value= 9>3/3 D. C. valve - zero position all ports closed</option>'
				+'<option value= 10>4/3 D. C. valve - zero position all ports closed</option>'
				+'<option value= 11>5/2 D. C. valve</option>'				
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Methods of Actuation:*</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="actuatorSelect" >'
				+'<option value= 0>-----Select-----</option>'
				+'<option value= 1>Manually actuated</option>'
				+'<option value= 2>Mechanically actuated</option>'	
				+'<option value= 3>Pneumatically actuated</option>'	
				+'<option value= 4>Electrical</option>'
				+'<option value= 5>Combined actuation</option>'					
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="buttonDiv">'
				+'<button id="wiringDiagram" hidden style = "float : right">Next Level</button>'
				+'<button id="checkConfig" style = "float : right">Check Configuration</button>&nbsp;&nbsp;&nbsp;'				
				+'</div>'
				+'</div>'
				
				+'</div>'; // container close
				
			$("#mainDiv").html('');	
			$("#mainDiv").html(configDACHtm);
	
			$("#checkConfig").bind("click", function(){
				
				selectedOp = $("#cktChoice").val();
				component = $("#compoSelection").val();
				actuator = $("#actuatorSelect").val();
				
//				TODO If direct control of single acting cylinder selected
				if(selectedOp == 1 && component != null && actuator != 0){
					if(component[0] == 2 && component[1] == 6 && component.length <= 2){
						if(actuator == 1){
							alertify.alert("Component combination is correct. Please click on next level.");
							$("#wiringDiagram").show();
							
							$('#wiringDiagram').on("click", function() {
										connectionLevel(selectedOp, component, actuator);
							});
							
							
						}else{
							alertify.alert("Choose correct combination of components");
						}
					}else{
						alertify.alert("Choose correct combination of components");
					}
					
				}else if(selectedOp == 2 && component != null && actuator != 0){// TODO If indirect control of single acting cylinder selected

					if(component[0] == 2 && component[1] == 6 && component.length <= 2){
						if(actuator == 1){
							alertify.alert("Component combination is correct. Please click on next level.");
							$("#wiringDiagram").show();
							
							$('#wiringDiagram').on("click", function() {
										connectionLevel(selectedOp, component, actuator);
							});
							
							
						}else{
							alertify.alert("Choose correct combination of components");
						}
					}else{
						alertify.alert("Choose correct combination of components");
					}
					
				
				}else if(selectedOp == 3){// TODO If indirect control of double acting cylinder selected
					
				}else {
					alertify.alert("All selection is mandetory");
				}
			});
	
			
	
}