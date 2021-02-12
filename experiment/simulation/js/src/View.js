

example.View = draw2d.Canvas.extend({
	
	init:function(id){
		this._super(id);
		 dcnc32 = 0;
		this.setScrollArea($("#draw2Did"));
		
		this.currentDropConnection = null;
		
		
	},

    /**
     * @method
     * Called if the DragDrop object is moving around.<br>
     * <br>
     * Graphiti use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dragged DOM element.
     * @param {Number} x the x coordinate of the drag
     * @param {Number} y the y coordinate of the drag
     * 
     * @template
     **/
    onDrag:function(droppedDomNode, x, y )
    {
    },
    
    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    
    
    onDrop : function(droppedDomNode, x, y)
    {   
	    var figure;
        var type = $(droppedDomNode).data("shape");
		
//		 Cylinder Symbols
		if(type == "sacRetExtFrc"){
			
			sacWithExtFrc = CylinderWithExternalForce(this,x,y);
			figure = sacWithExtFrc;
		}
		
		if(type == "sacSpring") {
			sacSpring = CylinderWithSpring(this,x,y);
			figure = sacSpring;
		}
		
		if(type == "doubleActCyl") {
			doubleActCyl = doubleActingCylinder(this,x,y);
			figure = doubleActCyl;
		}
		
//		Directional Control Valve symbols
		
		if(type == "dcvNormalClose"){
			dcvNormalClose1 = dcvNormalClose(this,x,y);
			figure = dcvNormalClose1;
		}
		
		if(type == "dcvNormalOpen"){
			dcvNormalOpen1 = dcvNormalOpen(this,x,y);
			figure = dcvNormalOpen1;
		}
		
		 
		if(type == "DCNormalClose3_2"){
			DCNormalClose3_2v = DCNormalClose3_2(this,x,y, dcnc32);
			figure = DCNormalClose3_2v;
			dcnc32++;
		}
		
		if(type == "DCNormalOpen3_2"){
			DCNormalOpen3_2v = DCNormalOpen3_2(this,x,y);
			figure = DCNormalOpen3_2v;
		}
		
		if(type == "DCPortClose3_3"){
			DCPortClose3_3v = DCPortClose3_3(this,x,y);
			figure = DCPortClose3_3v;
		}
		
		if(type == "DCValve4_2"){
			DCValve4_2v = DCValve4_2(this,x,y);
			figure = DCValve4_2v;
		}
		
		if(type == "DCZeroPosePortClose4_3"){
			DCZeroPosePortClose4_3v = DCZeroPosePortClose4_3(this,x,y);
			figure = DCZeroPosePortClose4_3v;
		}
		
		if(type == "DCValve5_2"){
			DCValve5_2v = DCValve5_2(this,x,y);
			figure = DCValve5_2v;
		}
		
//		Check Valve Symbols
		if(type == "nonRetValve"){
			nonRetValve1 = nonRetValve(this,x,y);
			figure = nonRetValve1;
		}
		
		if(type == "shuttleValve"){
			shuttleValve1 = shuttleValve(this,x,y);
			figure = shuttleValve1;
		}
		
		if(type == "nonRetFlowCV"){
			nonRetFlowCV1 = nonRetFlowCV(this,x,y);
			figure = nonRetFlowCV1;
		}		
		
		if(type == "quickExstValve"){
			quickExstValve1 = quickExstValve(this,x,y);
			figure = quickExstValve1;
		}
		
		if(type == "twinPresSeq"){
			twinPresSeq1 = twinPresSeq(this,x,y);
			figure = twinPresSeq1;
		}
		
//		Energy Transmission
		if(type == "mainSupPres"){
			mainSupPres1 = mainSupPres(this,x,y);
			figure = mainSupPres1;
		}
		
		if(type == "retFeedLine"){
			retFeedLine1 = retFeedLine(this,x,y);
			figure = retFeedLine1;
		}
		
		if(type == "controlLine"){
			controlLine1 = controlLine(this,x,y);
			figure = controlLine1;
		}
		
		if(type == "drainLine"){
			drainLine1 = drainLine(this,x,y);
			figure = drainLine1;
		}
		
//		Shut-off Valve
		
		if(type == "shut_offValve"){
			shut_offValve1 = shut_offValve(this,x,y);
			figure = shut_offValve1;
		}
		
//		Flow Valve
		
		if(type == "flowControlGenSym"){
			flowControlGenSym1 = flowControlGenSym(this,x,y);
			figure = flowControlGenSym1;
		}
		
		if(type == "adjustFlowControl"){
			adjustFlowControl1 = adjustFlowControl(this,x,y);
			figure = adjustFlowControl1;
		}
		
		if(type == "presFlowControl"){
			presFlowControl1 = presFlowControl(this,x,y);
			figure = presFlowControl1;
		}
		
		if(type == "viscoFlowControl"){
			viscoFlowControl1 = viscoFlowControl(this,x,y);
			figure = viscoFlowControl1;
		}
		
		if(type == "mechSpringFlowControl"){
			mechSpringFlowControl1 = mechSpringFlowControl(this,x,y);
			figure = mechSpringFlowControl1;
		}
		
//		Pressure control valve
		if(type == "presReliefValve"){
			presReliefValve1 = presReliefValve(this,x,y);
			figure = presReliefValve1;
		}
		
		if(type == "seqValve"){
			seqValve1 = seqValve(this,x,y);
			figure = seqValve1;
		}
		
		if(type == "presRegulator"){
			presRegulator1 = presRegulator(this,x,y);
			figure = presRegulator1;
		}
		
		if(type == "presRegSelfRel"){
			presRegSelfRel1 = presRegSelfRel(this,x,y);
			figure = presRegSelfRel1;
		}
		
//		Servicing unit
		if(type == "servUnit"){
			servUnit1 = servUnit(this,x,y);
			figure = servUnit1;
		}
		
//		Exaust
		if(type == "exaust"){
			exaust1 = exaust(this,x,y);
			figure = exaust1;
		}		
		
//		Manual control
		if(type == "generalSym"){
			generalSym1 = generalSym(this,x,y);
			figure = generalSym1;
		}
		
		if(type == "pushBtn"){
			pushBtn1 = pushBtn(this,x,y);
			figure = pushBtn1;
		}
		
		if(type == "leverSym"){
			leverSym1 = leverSym(this,x,y);
			figure = leverSym1;
		}
		
		if(type == "pedalSym"){
			pedalSym1 = pedalSym(this,x,y);
			figure = pedalSym1;
		}
		
		if(type == "plunger"){
			plunger1 = plunger(this,x,y);
			figure = plunger1;
		}
		
		if(type == "roller"){
			roller1 = roller(this,x,y);
			figure = roller1;
		}
		
		if(type == "rollerTrip"){
			rollerTrip1 = rollerTrip(this,x,y);
			figure = rollerTrip1;
		}
		
		if(type == "springSym"){
			springSym1 = springSym(this,x,y);
			figure = springSym1;
		}
		
		if(type == "electroMagnet"){
			electroMagnet1 = electroMagnet(this,x,y);
			figure = electroMagnet1;
		}
		
		if(type == "solenoidServoValve"){
			solenoidServoValve1 = solenoidServoValve(this,x,y);
			figure = solenoidServoValve1;
		}
		
		if(type == "byApplyPres"){
			byApplyPres1 = byApplyPres(this,x,y);
			figure = byApplyPres1;
		}
		
		if(type == "byReleasePres"){
			byReleasePres1 = byReleasePres(this,x,y);
			figure = byReleasePres1;
		}
		
		if(type == "byDiffPres"){
			byDiffPres1 = byDiffPres(this,x,y);
			figure = byDiffPres1;
		}
	      
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
    }
});

