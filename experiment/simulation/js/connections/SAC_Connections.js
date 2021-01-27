//Identify Symbols for direct single acting cylinder
Identify_Direct_SAC_Symbol = function(selectedOp, component, actuator,
		jsonarray) {
	/*
	 * var reader = new draw2d.io.json.Reader(); reader.unmarshal(canvas1,
	 * json);
	 */

	// app = new example.Application(hlselectorType, hlselectorInput,
	// jsonarray);

	dir_singleActingCylinderRight = 0;

	dir_singleActingCylinderWrong = 0;

	var temp = JSON.parse(jsonarray);

//	console.log(temp);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.SetFigure") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.SetFigure") {

				if ((temp[i].id == "pushBtn") || (temp[i].id == "springSym")
						|| (temp[i].id == "DCNormalClose3_20") || (temp[i].id == "DCNormalClose3_21")|| (temp[i].id == "DCNormalClose3_22")
						|| (temp[i].id == "sacSpring") || (temp[i].id == "servUnit") || (temp[i].id == "exaust")) {

					temp1++;

				} else {
					dir_singleActingCylinderWrong = 1;
					CheckWrongIdentification();
					break;
				}
			}
		}

		if(temp1 < 7 && dir_singleActingCylinderWrong == 0){alert("Select all required component"); if(multiSelectFlagCnt >= 7){app.toolbar.hintButton.show();}}
		
		if (temp1 == 7) {
			dir_singleActingCylinderRight = 1;
		} else {
			dir_singleActingCylinderWrong = 1;
		}

		CheckRightIdentification();

	} else {

		alertify.alert("Please select right symbol to identify");
	}
}

CheckRightIdentification = function() {
	multiSelectFlagCnt++;
	if (dir_singleActingCylinderRight == 1
			&& dir_singleActingCylinderWrong == 0) {

		alertify
				.alert("Identification is successful. <br/> Please connect your port connection");
		app.toolbar.checkButton.show();
//		app.toolbar.characterisation_Button.show();
		// app.toolbar.characterisation_Button.hide();
		rightIden = 1;

	} else {
		
		if (dir_singleActingCylinderWrong == 0) {

			if (IdenFlagCnt == 3) {
//				app.toolbar.hintButton.show();
				alertify.alert("Wrong identification");
				rightIden = 0;
			} else {

				alertify.alert("Wrong identification");
				IdenFlagCnt++
				rightIden = 0;
			}
		}
	}
}

CheckWrongIdentification = function() {

	if (IdenFlagCnt == 3) {
		app.toolbar.hintButton.show();

		alertify.alert("Wrong identification");
		rightIden = 0;
	} else {
		if (dir_singleActingCylinderWrong == 1) {

			alertify.alert("Wrong identification");
			IdenFlagCnt++;
			rightIden = 0;
		}
	}
}

//Checking Port Connections direct single acting cylinder

direct_SAC_Connections = function(selectedOp, component, actuator,
		jsonarray) {

	actToValveFlag = 0, springToValveFlag = 0, valveToCylinderFlag = 0, frlToValveFlag = 0, exaustToValveFlag = 0, wrongConnection = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.Connection") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.Connection") {

				if ((temp[i].source.port == "pushBtnPortName" && temp[i].target.port == "DCNormalClose3_2Port1Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port1Name" && temp[i].target.port == "pushBtnPortName")) {
					actToValveFlag = 1;
				} else if ((temp[i].source.port == "springSymPort1Name" && temp[i].target.port == "DCNormalClose3_2Port4Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port4Name" && temp[i].target.port == "springSymPort1Name")) {
					springToValveFlag = 1;
				} else if ((temp[i].source.port == "sacSpringPortName" && temp[i].target.port == "DCNormalClose3_2Port3Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port3Name" && temp[i].target.port == "sacSpringPortName")) {
					valveToCylinderFlag = 1;
				}else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCNormalClose3_2Port6Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port6Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveFlag = 1;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCNormalClose3_2Port5Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port5Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveFlag = 1;
				}else {
					wrongConnection = 1;
					CheckWrongConnection();
					break;
				}
			}
		}
		checkRightConnection();
	} else {
		alertify.alert("Do Some Connection");
	}
}

checkRightConnection = function() {
	console.log(actToValveFlag + " " + springToValveFlag + " " + valveToCylinderFlag);
	if (actToValveFlag == 1 && springToValveFlag == 1 && frlToValveFlag == 1 && exaustToValveFlag == 1
			&& valveToCylinderFlag == 1 && wrongConnection == 0) {

		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
		//	app.toolbar.characterisation_Button.hide();
		rightConn = 1;

	} else {
		if (wrongConnection == 0) {

			if (ConnFlagCnt == 3) {
				app.toolbar.hintButton1.show();
				alertify.alert("Wrong Connection");
				rightConn = 0;
			} else {

				alertify.alert("Wrong Connection");
				ConnFlagCnt++
				rightConn = 0;
			}
		}
	}
}	

CheckWrongConnection = function() {

	if (ConnFlagCnt == 3) {
		app.toolbar.hintButton1.show();

		alertify.alert("Wrong Connection");
		rightConn = 0;

	} else {

		if (wrongConnection == 1) {
			alertify.alert("Wrong Connection");
			ConnFlagCnt++;
			rightConn = 0;
		}
	}
}


goForAnimation_Direct_SAC = function(){
	
	renderForAnimationDirSACHtm = '';
	
	renderForAnimationDirSACHtm = '<div id="diagram" class="col-md-7 col-sm-12">'
								+ '</div>'
	
	$("#mainDiv").html(renderForAnimationDirSACHtm);
	
	var obj = {};
	var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	x = 150;
	y = 50;
	time = 3000;
	status = 0;
	
	drawValve = function(){
//		Valve
		valve = paper.rect((x+70),(y+287), 120, 50);
		
//		valve middle lines and arrows
		a = paper.path('M ' + (x+130) + ' ' + (y+287) + ' l 0 50'); //mid line
		b = paper.path('M ' + (x+90) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c = paper.path('M ' + (x+110) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0');
		d = paper.path('M ' + (x+150) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0');
		e = paper.path('M ' + (x+150) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
				
//		cylinder piston
		cylPiston = paper.path('M ' + (x+175) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0').attr({"fill" : "#aaa"});
	}
	
	cylinder = function(){
//		single acting cylinder
		cylinder = paper.rect((x+130), (y+80), 140, 60);
	}
	
	springs = function(){
//		Spring
		valveSpring = paper.path('M ' + (x+190) + ' ' + (y+313) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');

//		cylinder spring
		cylSpring = paper.path('M '+ (x+185) + ' ' + (y+105) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25');
	}
	
	connection = function(){
//		valve and cylinder connection
//		paper.path('M ' + (x+150) + ' ' + (y+140) + 'l 0 80 l -5 -10 l 5 10 l 5 -10 l -5 10 l 0 70');
		conn = paper.path('M ' + (x+150) + ' ' + (y+140) + 'l 0 147');
	}
	
	pushButton = function(){
//		push button
		pushBtn = paper.path('M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x-25), (y+310), "Press Actuator").attr({fill: '#000', 'font-size':15});
//		pushBtnGlowAnim = pushBtn.glow({'color' : 'red', 'width' : 1});
		
//		animLT = Raphael.animation({
//			"stroke-width": 3,
//			opacity: 5
//			}, 1000);
//			animLT = animLT.repeat(Infinity);
//			pushBtnGlowAnim.animate(animLT);
		
		return pushBtn;
	}
	
	airSource = function(){
//		paper.rect((x+35), (y+400), 90, 50).attr({
//			"stroke-width" : 1
//		});
//		
//		paper.circle((x+10), (y+425), 10).attr({
//			"stroke-width" : 1
//		});
//		
//		paper.circle((x+10), (y+425), 1).attr({
//			"stroke-width" : 2
//		});
//		
//		paper.circle((x+80), (y+425), 10).attr({
//			"stroke-width" : 1
//		}); 
//		
//		paper.path("M " + (x+20) + " " + (y+425) + " l 15 0 M " + (x+125) + " " + (y+425) + " l 25 0 l 0 -88 M " + (x+115) + " " + (y+400) + " l 0 15").attr({
//			"stroke-width" : 1
//		});
//		
//		paper.path("M "+ (x+45) + " " + (y+400) + " l 0 50").attr({
//			"stroke-width" : 1,
//			"stroke-dasharray":"--"
//		});
//		
//		paper.path("M " + (x+76) + " " + (y+430) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
//			"stroke-width" : 1
//		});
		
		paper.rect((x+35), (y+410), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+425), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+70), (y+425), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+17) + " " + (y+425) + " l 18 0 M " + (x+95) + " " + (y+425) + " l 55 0 l 0 -88 M " + (x+85) + " " + (y+410) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+45) + " " + (y+410) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+66) + " " + (y+430) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
	}
	
	exaust = function(){
		exaust = paper.path('M ' + (x+170) + ' ' + (y+337) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
	}
	
	drawValve();
	cylinder();
	springs();
	connection();
	exaust();
	airSource();
	pshBtn = pushButton();
	
	
	airFlow1 =paper.path('M 0 0 l 0 0');
	pshBtn.click(function(){
		
		if(status == 0){
			airFlow1.hide();
		status = 1;
// 		cylPiston.animate({path : 'M ' + (x+220) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, time);
		pushBtn.animate({path : 'M ' + (x+110) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+110) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
		valve.animate({x:(x+130), y:(y+287)}, time);
		a.animate({path : 'M ' + (x+190) + ' ' + (y+287) + ' l 0 50'}, time);
		b.animate({path : 'M ' + (x+150) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
		c.animate({path : 'M ' + (x+170) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
		d.animate({path : 'M ' + (x+210) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
		e.animate({path : 'M ' + (x+210) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
		valveSpring.animate({path : 'M ' + (x+250) + ' ' + (y+313) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
// 		cylSpring.animate({path : 'M '+ (x+231) + ' ' + (y+105) + 'l 4 -25 l 7 60 l 6 -60 l 5 60 l 5 -60 l 4 60 l 3 -60 l 2 60 l 2 -25'}, time);
		
		setTimeout(function(){
			var r = [];
			r[0] = paper.path('M' +(x+95)+ ' ' +(y+425)+ 'l 0 0').attr({'stroke':'#11fbf9'});	
		    r[0].animate({path : 'M' +(x+95)+ ' ' +(y+425)+ 'l 55 0'}, (time + 500), function(){
		    	
		       r[1] = paper.path('M' +(x+150)+ ' ' +(y+425)+ 'l 0 0').attr({'stroke': '#11fbf9'});
		       r[1].animate({path : 'M' +(x+150)+ ' ' +(y+425)+ 'l 0 -88'}, (time + 700), function(){
		    	   
		    	   r[2] = paper.path('M' +(x+150)+ ' ' +(y+338)+ 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke': '#11fbf9'});
		    	   airFlow = r[2];
		    	   airFlow.animate({path : 'M' +(x+150)+ ' ' +(y+338)+ 'l 0 -51 l -5 5 l 5 -5 l 5 5'}, (time + 500), function(){
			    	   
			    	   r[3] = paper.path('M' +(x+150)+ ' ' +(y+288)+ 'l 0 0').attr({'stroke': '#11fbf9'});
				       r[3].animate({path : 'M' +(x+150)+ ' ' +(y+288)+ 'l 0 -148'}, (time + 1000), function(){
		         
				    	   r[4] = paper.path('M' +(x+153)+ ' ' +(y+139)+ 'l 0 0').attr({'stroke':'#befbf9', 'stroke-width' : 43});	
				    	   r[4].animate({path : 'M' +(x+153)+ ' ' +(y+139)+ 'l 0 -58'}, (time +2000), function(){
				    		   cylPiston.animate({path : 'M ' + (x+220) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+3000));
				    		   cylSpring.animate({path : 'M '+ (x+231) + ' ' + (y+105) + 'l 4 -25 l 7 60 l 6 -60 l 5 60 l 5 -60 l 4 60 l 3 -60 l 2 60 l 2 -25'}, (time+3000));
			             
			        	   		r[5] = paper.path('M ' + (x+173) + ' ' + (y+110) + 'l 0 0').attr({'stroke':'#befbf9', 'stroke-width': 58});
			        	   		r[5].animate({path : 'M ' + (x+173) + ' ' + (y+110) + 'l 46 0'}, (time+3000), function(){
			        	   		});
				    	   });
				       });
			       });
		        });
		    });
		}, (time + 200));
		}else if(status == 1){
			airFlow.hide();
			status = 0;
			pushBtn.animate({path : 'M ' + (x+50) + ' ' + (y+300) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+308) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+70), y:(y+287)}, time);
			a.animate({path : 'M ' + (x+130) + ' ' + (y+287) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+90) + ' ' + (y+337) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+110) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+150) + ' ' + (y+337) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+150) + ' ' + (y+287) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
			valveSpring.animate({path : 'M ' + (x+190) + ' ' + (y+313) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
			
			setTimeout(function(){
				
				var r = [];
          
     	   		r[0] = paper.path('M ' + (x+219) + ' ' + (y+110) + 'l 0 0').attr({'stroke':'#fff', 'stroke-width': 58});
     	   		r[0].animate({path : 'M ' + (x+219) + ' ' + (y+110) + 'l -46 0'}, (time + 3000));
     	   			
     	   		cylPiston.animate({path : 'M ' + (x+175) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+3000)).toFront();
	    		cylSpring.animate({path : 'M '+ (x+185) + ' ' + (y+105) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25'}, (time+3000)).toFront();
     	   		
	    		r[1] = paper.path('M ' +(x+150)+ ' ' +(y+287)+ 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke': '#11fbf9'});
	    		airFlow1 = r[1];
	    		airFlow1.animate({path : 'M ' +(x+150)+ ' ' +(y+287)+ 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time+500), function(){
	    			
	    			r[2] = paper.path('M ' + (x+170) + ' ' + (y+337) + 'l 0 0').attr({'stroke': '#11fbf9'});
		    		r[2].animate({path : 'M ' + (x+170) + ' ' + (y+337) + 'l 0 15'}, (time+500));
	    		});
				
			}, (time + 200));
		}
	});
	
}


// Indirect single acting cylinder starts here

Identify_Indirect_SAC_Symbol = function(selectedOp, component, actuator,
		jsonarray) {

	indir_singleActingCylinderRight = 0;

	indir_singleActingCylinderWrong = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.SetFigure") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.SetFigure") {

				if ((temp[i].id == "pushBtn") || (temp[i].id == "springSym")
						|| (temp[i].id == "DCNormalClose3_20") || (temp[i].id == "DCNormalClose3_21")|| (temp[i].id == "DCNormalClose3_22")
						|| (temp[i].id == "sacSpring") || (temp[i].id == "servUnit") || (temp[i].id == "exaust")) {

					temp1++;

				} else {
					indir_singleActingCylinderWrong = 1;
					InCheckWrongIdentification();
					break;
				}
			}
		}
		
		if(temp1 < 11 && indir_singleActingCylinderWrong == 0){alert("Select all required component"); if(multiSelectFlagCnt >= 7){app.toolbar.hintButton.show();}}

		if (temp1 == 11) {
			indir_singleActingCylinderRight = 1;
		} else {
			indir_singleActingCylinderWrong = 1;
		}

		InCheckRightIdentification();

	} else {

		alertify.alert("Please select right symbol to identify");
	}
}

InCheckRightIdentification = function() {
	multiSelectFlagCnt++;
	if (indir_singleActingCylinderRight == 1
			&& indir_singleActingCylinderWrong == 0) {

		alertify
				.alert("Identification is successful. <br/> Please connect your port connection");
		app.toolbar.checkButton.show();
//		app.toolbar.characterisation_Button.show();
		// app.toolbar.characterisation_Button.hide();
		rightIden = 1;

	} else {
		
		if (indir_singleActingCylinderWrong == 0) {

			if (IdenFlagCnt == 3) {
//				app.toolbar.hintButton.show();
				alertify.alert("Wrong identification");
				rightIden = 0;
			} else {

				alertify.alert("Wrong identification");
				IdenFlagCnt++
				rightIden = 0;
			}
		}
	}
}

InCheckWrongIdentification = function() {

	if (IdenFlagCnt == 3) {
		app.toolbar.hintButton.show();

		alertify.alert("Wrong identification");
		rightIden = 0;
	} else {
		if (indir_singleActingCylinderWrong == 1) {

			alertify.alert("Wrong identification");
			IdenFlagCnt++;
			rightIden = 0;
		}
	}
}

//Checking Port Connections Indirect single Acting cylinder

inDirect_SAC_Connections = function(selectedOp, component, actuator,
		jsonarray) {

	actToValveFlag = 0, springToValveFlag = 0, valveToCylinderFlag = 0, frlToValveFlag = 0, exaustToValveFlag = 0, wrongConnection = 0, DCN3ToDCN1Flag = 0;

	var temp = JSON.parse(jsonarray);

	var temp1 = 0;

	$.each(temp, function(key, value) {
		if (value.type == "draw2d.Connection") {
			temp1 = 1;
		}
	});

	if (temp1 != 0) {

		for (i = 0; i < temp.length; i++) {

			if (temp[i].type == "draw2d.Connection") {

				if ((temp[i].source.port == "pushBtnPortName" && temp[i].target.port == "DCNormalClose3_2Port1Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port1Name" && temp[i].target.port == "pushBtnPortName")) {
					actToValveFlag = 1;
				} else if ((temp[i].source.port == "springSymPort1Name" && temp[i].target.port == "DCNormalClose3_2Port4Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port4Name" && temp[i].target.port == "springSymPort1Name")) {
					springToValveFlag++;
				} else if ((temp[i].source.port == "servUnitPortName" && temp[i].target.port == "DCNormalClose3_2Port6Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port6Name" && temp[i].target.port == "servUnitPortName")) {
					frlToValveFlag++;
				}else if ((temp[i].source.port == "exaustPortName" && temp[i].target.port == "DCNormalClose3_2Port5Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port5Name" && temp[i].target.port == "exaustPortName")) {
					exaustToValveFlag++;
				}else if((temp[i].source.port == "DCNormalClose3_2Port1Name" && temp[i].target.port == "DCNormalClose3_2Port3Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port3Name" && temp[i].target.port == "DCNormalClose3_2Port1Name")){
					DCN3ToDCN1Flag = 1;
				}else if ((temp[i].source.port == "sacSpringPortName" && temp[i].target.port == "DCNormalClose3_2Port3Name")
						|| (temp[i].source.port == "DCNormalClose3_2Port3Name" && temp[i].target.port == "sacSpringPortName")) {
					valveToCylinderFlag = 1;
				}else {
					wrongConnection = 1;
					InCheckWrongConnection();
					break;
				}
			}
		}
		IncheckRightConnection();
	} else {
		alertify.alert("Do Some Connection");
	}
}

IncheckRightConnection = function() {
	console.log(actToValveFlag + " " + springToValveFlag + " " + valveToCylinderFlag + " " + frlToValveFlag  + " " + exaustToValveFlag  + " " + DCN3ToDCN1Flag + " " + wrongConnection);
	if (actToValveFlag == 1 && springToValveFlag == 2 && frlToValveFlag == 2 && exaustToValveFlag == 2
			&& valveToCylinderFlag == 1 && DCN3ToDCN1Flag == 1 && wrongConnection == 0) {

		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
		//	app.toolbar.characterisation_Button.hide();
		rightConn = 1;

	} else {
		if (wrongConnection == 0) {

			if (ConnFlagCnt == 3) {
				app.toolbar.hintButton1.show();
				alertify.alert("Wrong Connection");
				rightConn = 0;
			} else {

				alertify.alert("Wrong Connection");
				ConnFlagCnt++
				rightConn = 0;
			}
		}
	}
}	

InCheckWrongConnection = function() {

	if (ConnFlagCnt == 3) {
		app.toolbar.hintButton1.show();

		alertify.alert("Wrong Connection");
		rightConn = 0;

	} else {

		if (wrongConnection == 1) {
			alertify.alert("Wrong Connection");
			ConnFlagCnt++;
			rightConn = 0;
		}
	}
}

goForAnimation_Indirect_SAC = function(){
	
	renderForAnimationDirSACHtm = '';
	
	renderForAnimationDirSACHtm = '<div id="diagram" class="col-md-7 col-sm-12">'
								+ '</div>'
	
	$("#mainDiv").html(renderForAnimationDirSACHtm);
	
	var obj = {};
	var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	x = 150;
	y = 50;
	time = 3000;
	status = 0;
	
	drawValve = function(){
//		Valve
		valve = paper.rect((x+70),(y+387), 120, 50);
		
//		valve middle lines and arrows
		a = paper.path('M ' + (x+130) + ' ' + (y+387) + ' l 0 50'); //mid line
		b = paper.path('M ' + (x+90) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c = paper.path('M ' + (x+110) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		d = paper.path('M ' + (x+150) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0');
		e = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
			
//		x1 = 180, y = -25;
		valve1 = paper.rect((x+250),(y+262), 120, 50);
		
//		valve middle lines and arrows
		a1 = paper.path('M ' + (x+310) + ' ' + (y+262) + ' l 0 50'); //mid line
		b1 = paper.path('M ' + (x+270) + ' ' + (y+312) + 'l 0 -50 l -5 5 l 5 -5 l 5 5');//first arrow
		c1 = paper.path('M ' + (x+290) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0');
		d1 = paper.path('M ' + (x+330) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0');
		e1 = paper.path('M ' + (x+330) + ' ' + (y+262) + 'l 20 50 l -8 -3 l 8 3 l 3 -8');//right down arrow
		
		
		
//		cylinder piston
		cylPiston = paper.path('M ' + (x+325) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0').attr({"fill" : "#aaa"});
	}
	
	cylinder = function(){
//		single acting cylinder
		cylinder = paper.rect((x+280), (y+80), 140, 60);
	}
	
	springs = function(){
//		Spring
		valveSpring = paper.path('M ' + (x+190) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');
		valveSpring1 = paper.path('M ' + (x+370) + ' ' + (y+288) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40');

//		cylinder spring
		cylSpring = paper.path('M '+ (x+335) + ' ' + (y+105) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25');
	}
	
	connection = function(){
//		valve and valve connection
		conn = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 -100 l 100 0');
		
//		valve to cylinder connection
		conn1 = paper.path('M' + (x+330) + ' ' + (y+262) + 'l 0 -60 l -20 0 l 0 -62');
	}
	
	pushButton = function(){
//		push button
		pushBtn = paper.path('M ' + (x+50) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0')
		.attr({"fill" : "#ccc"});
		paper.text((x-25), (y+410), "Press Actuator").attr({fill: '#000', 'font-size':15});
//		pushBtnGlowAnim = pushBtn.glow({'color' : 'red', 'width' : 1});
		
//		animLT = Raphael.animation({
//			"stroke-width": 3,
//			opacity: 5
//			}, 1000);
//			animLT = animLT.repeat(Infinity);
//			pushBtnGlowAnim.animate(animLT);
		
		return pushBtn;
	}
	
	airSource = function(){
		
//		First air flow set
		paper.rect((x+35), (y+510), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+525), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+10), (y+525), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+70), (y+525), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+17) + " " + (y+525) + " l 18 0 M " + (x+95) + " " + (y+525) + " l 55 0 l 0 -88 M " + (x+85) + " " + (y+510) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+45) + " " + (y+510) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+66) + " " + (y+530) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
		
//		x1 = 330, y1 = -75;
//		Second air flow set
		paper.rect((x+245), (y+335), 60, 30).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+220), (y+350), 7).attr({
			"stroke-width" : 1
		});
		
		paper.circle((x+220), (y+350), 1).attr({
			"stroke-width" : 2
		});
		
//		circle with arrow
		paper.circle((x+280), (y+350), 7).attr({
			"stroke-width" : 1
		}); 
		
		paper.path("M " + (x+227) + " " + (y+350) + " l 18 0 M " + (x+305) + " " + (y+350) + " l 25 0 l 0 -38 M " + (x+295) + " " + (y+335) + " l 0 10").attr({
			"stroke-width" : 1
		});
		
		paper.path("M "+ (x+255) + " " + (y+335) + " l 0 30").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		paper.path("M " + (x+276) + " " + (y+355) + " l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
			"stroke-width" : 1
		});
	}
	
	exaust = function(){
		exaust = paper.path('M ' + (x+170) + ' ' + (y+437) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
		exaust1 = paper.path('M ' + (x+350) + ' ' + (y+312) + 'l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
	}
	
	drawValve();
	cylinder();
	springs();
	connection();
	exaust();
	airSource();
	pshBtn = pushButton();
	
	
	airFlowF2 =paper.path('M 0 0 l 0 0');
	airFlowF3 =paper.path('M 0 0 l 0 0');
	airFlowF4 =paper.path('M 0 0 l 0 0');
	pshBtn.click(function(){
		
		if(status == 0){
			airFlowF3.hide();
			airFlowF2.hide();
		status = 1;

		pushBtn.animate({path : 'M ' + (x+110) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+110) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
		valve.animate({x:(x+130), y:(y+387)}, time);
		a.animate({path : 'M ' + (x+190) + ' ' + (y+387) + ' l 0 50'}, time);
		b.animate({path : 'M ' + (x+150) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
		c.animate({path : 'M ' + (x+170) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
		d.animate({path : 'M ' + (x+210) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
		e.animate({path : 'M ' + (x+210) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
		
		valveSpring.animate({path : 'M ' + (x+250) + ' ' + (y+413) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);
		
			setTimeout(function(){
				
				var r = [];
				r[0] = paper.path('M' + (x+95) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : '#11fbf9'});
				r[0].animate({path : 'M' + (x+95) + ' ' + (y+525) + 'l 55 0'},(time + 100), function(){
					r[1] = paper.path('M' + (x+150) + ' ' + (y+525) + 'l 0 0').attr({'stroke' : '#11fbf9'});
					r[1].animate({path : 'M' + (x+150) + ' ' + (y+525) + 'l 0 -88'},(time + 100), function(){
						r[2] = paper.path('M' + (x+150) + ' ' + (y+437) + 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke' : '#11fbf9'});
						airFlowF1 = r[2];
						airFlowF1.animate({path : 'M' + (x+150) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'},(time), function(){
							r[3] = paper.path('M' + (x+150) + ' ' + (y+388) + 'l 0 0').attr({'stroke' : '#11fbf9'});
							r[3].animate({path : 'M' + (x+150) + ' ' + (y+388) + 'l 0 -101'},(time + 100), function(){
								r[4] = paper.path('M' + (x+150) + ' ' + (y+287) + 'l 0 0').attr({'stroke' : '#11fbf9'});
								r[4].animate({path : 'M' + (x+150) + ' ' + (y+287) + 'l 100 0'},(time + 100), function(){
								
									airFlowF4.hide();
									valve1.animate({x:(x+310), y:(y+262)}, time);
									a1.animate({path : 'M ' + (x+370) + ' ' + (y+262) + ' l 0 50'}, time);
									b1.animate({path : 'M ' + (x+330) + ' ' + (y+312) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
									c1.animate({path : 'M ' + (x+350) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0'}, time);
									d1.animate({path : 'M ' + (x+390) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0'}, time);
									e1.animate({path : 'M ' + (x+390) + ' ' + (y+262) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
									
									valveSpring1.animate({path : 'M ' + (x+430) + ' ' + (y+288) + 'l 3 -20 l 4 40 l 3 -40 l 2 40 l 1.5 -40 l 0.5 40 l 0.4 -40 l 0.3 40'}, time);	
									r[5] = paper.path('M' + (x+250) + ' ' + (y+287) + 'l 0 0').attr({'stroke' : '#11fbf9'});
									abc = paper.path('M' + (x+250) + ' ' + (y+287) + 'l 0 0').attr({'stroke' : '#000'}).toBack();
									abc.animate({path : 'M' + (x+250) + ' ' + (y+287) + 'l 60 0'},(time));
									r[5].animate({path : 'M' + (x+250) + ' ' + (y+287) + 'l 60 0'},(time), function(){
										
										r[6] = paper.path('M' + (x+305) + ' ' + (y+350) + 'l 0 0').attr({'stroke' : '#11fbf9'});
										r[6].animate({path : 'M' + (x+305) + ' ' + (y+350) + 'l 25 0'},(time - 1000), function(){
									
											r[7] = paper.path('M' + (x+330) + ' ' + (y+350) + 'l 0 0').attr({'stroke' : '#11fbf9'});
											r[7].animate({path : 'M' + (x+330) + ' ' + (y+350) + 'l 0 -38'},(time - 1000), function(){
	
												r[8] = paper.path('M' + (x+330) + ' ' + (y+312) + 'l 0 0 l -5 5 l 5 -5 l 5 5').attr({'stroke' : '#11fbf9'});
												airFlowF2 = r[8];
												airFlowF2.animate({path : 'M' + (x+330) + ' ' + (y+312) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'},(time), function(){
													
													r[9] = paper.path('M' + (x+330) + ' ' + (y+262) + 'l 0 0').attr({'stroke' : '#11fbf9'});
													r[9].animate({path : 'M' + (x+330) + ' ' + (y+262) + 'l 0 -60'},(time + 100), function(){
														
														r[10] = paper.path('M' + (x+330) + ' ' + (y+202) + 'l 0 0').attr({'stroke' : '#11fbf9'});
														r[10].animate({path : 'M' + (x+330) + ' ' + (y+202) + 'l -20 0'},(time - 1500), function(){
														
															r[11] = paper.path('M' + (x+310) + ' ' + (y+202) + 'l 0 0').attr({'stroke' : '#11fbf9'});
															r[11].animate({path : 'M' + (x+310) + ' ' + (y+202) + 'l 0 -62'},(time + 100), function(){
																
																r[12] = paper.path('M' + (x+303) + ' ' + (y+139) + 'l 0 0').attr({'stroke' : '#11fbf9', 'stroke-width': 42});
																r[12].animate({path : 'M' + (x+303) + ' ' + (y+139) + 'l 0 -58'},(time + 100), function(){
																
																	r[13] = paper.path('M' + (x+324) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : '#11fbf9', 'stroke-width': 58});
																	r[13].animate({path : 'M' + (x+324) + ' ' + (y+110) + 'l 48 0'},(time + 100));
																
																	cylPiston.animate({path : 'M ' + (x+373) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+100));
															    	cylSpring.animate({path : 'M '+ (x+382) + ' ' + (y+105) + 'l 4 -25 l 7 60 l 6 -60 l 5 60 l 5 -60 l 4 60 l 3 -60 l 2 60 l 2 -25'}, (time+100));
																	
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			}, (time+200));
		
		}else if(status == 1){
			airFlowF1.hide();
			status = 0;
			
			pushBtn.animate({path : 'M ' + (x+50) + ' ' + (y+400) + 'l -10 0 q -15 12 0 25 l 10 0 l 0 -25 M ' + (x+50) + ' ' + (y+408) + 'l 20 0 l 0 10 l -20 0'}, time);
			valve.animate({x:(x+70), y:(y+387)}, time);
			a.animate({path : 'M ' + (x+130) + ' ' + (y+387) + ' l 0 50'}, time);
			b.animate({path : 'M ' + (x+90) + ' ' + (y+437) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time);
			c.animate({path : 'M ' + (x+110) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			d.animate({path : 'M ' + (x+150) + ' ' + (y+437) + 'l 0 -15 l -5 0 l 10 0'}, time);
			e.animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
			
			valveSpring.animate({path : 'M ' + (x+190) + ' ' + (y+413) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, time);
			
			setTimeout(function(){
				var r = [];
				
				r[0] = paper.path('M ' + (x+150) + ' ' + (y+387) + 'l 0 0').attr({'stroke':'#11fbf9'});
     	   		airFlowF3 = r[0];
				r[0].animate({path : 'M ' + (x+150) + ' ' + (y+387) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/1.5));
     	   			
     	   			airFlowF2.hide();

     	   			r[1] = paper.path('M' + (x+310) + ' ' + (y+287) + 'l 0 0').attr({'stroke' : '#fff','stroke-width' : 2});
				    r[1].animate({path : 'M' + (x+310) + ' ' + (y+287) + 'l -60 0'},(time));

				    valve1.animate({x:(x+250), y:(y+262)}, time).toFront();
					a1.animate({path : 'M ' + (x+310) + ' ' + (y+262) + ' l 0 50'}, time).toFront();
					b1.animate({path : 'M ' + (x+270) + ' ' + (y+312) + 'l 0 -50 l -5 5 l 5 -5 l 5 5'}, time).toFront();
					c1.animate({path : 'M ' + (x+290) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0'}, time);
					d1.animate({path : 'M ' + (x+330) + ' ' + (y+312) + 'l 0 -15 l -5 0 l 10 0'}, time);
					e1.animate({path : 'M ' + (x+330) + ' ' + (y+262) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, time);
						
					valveSpring1.animate({path : 'M ' + (x+370) + ' ' + (y+288) + 'l 5 -20 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40 l 10 -40 l 10 40'}, (time));
					
					setTimeout(function(){
						r[2]= paper.path('M ' + (x+170) + ' ' + (y+437) + 'l 0 0').attr({'stroke':'#11fbf9'}); 
						r[2].animate({path : 'M ' + (x+170) + ' ' + (y+437) + 'l 0 15'}, (time/3), function(){
							
							r[3] = paper.path('M ' + (x+330) + ' ' + (y+262) + 'l 0 0 l -8 -3 l 8 3 l 3 -8').attr({'stroke':'#11fbf9'});
		     	   			airFlowF4 = r[3];
							r[3].animate({path : 'M ' + (x+330) + ' ' + (y+262) + 'l 20 50 l -8 -3 l 8 3 l 3 -8'}, (time/1.5));
		     	   				
			     	   		r[4] = paper.path('M' + (x+372) + ' ' + (y+110) + 'l 0 0').attr({'stroke' : '#fff', 'stroke-width': 58});
							r[4].animate({path : 'M' + (x+372) + ' ' + (y+110) + 'l -48 0'},(time + 300));
		     	   			
		     	   			cylPiston.animate({path : 'M ' + (x+325) + ' ' + (y+80) + 'l 0 60 l 10 0 l 0 -25 l 120 0 l 0 -10 l -120 0 l 0 -25 l -10 0'}, (time+300)).toFront();
		     	   			cylSpring.animate({path : 'M '+ (x+335) + ' ' + (y+105) + 'l 7 -25 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 10 -60 l 10 60 l 7 -25'}, (time+300)).toFront()	;
							
		     	   			setTimeout(function(){
			     	   			r[5] = paper.path('M ' + (x+350) + ' ' + (y+312) + 'l 0 0').attr({'stroke':'#11fbf9'});
			     	   			r[5].animate({path : 'M ' + (x+350) + ' ' + (y+312) + 'l 0 15'}, (time/3));
		     	   			}, (time/1.5));
						});
					}, (time/1.5));
			},(time + 200));
		}
	});
	
}


