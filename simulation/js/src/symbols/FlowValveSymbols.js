//Flow Valve
//flow control general symbol
function flowControlGenSym(canvas,x1,y1){
	var flowControlGenSym = new LabeldflowControlGenSymFigure({width:100,height:100});
	flowControlGenSym.setId("flowControlGenSym");
	flowControlGenSym.setResizeable(false);
	
	canvas.add( flowControlGenSym, x1,y1); 
	return flowControlGenSym;
}


var LabeldflowControlGenSymFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
			this.canvas.paper.setStart();

			this.canvas.paper.rect(0, 0, 100, 100).attr({
				"stroke-width" : 0
			});
			
			this.canvas.paper.rect(10, 30, 80, 70).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 65 l 100 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 37 70 q 10 -5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 37 60 q 10 5 25 0").attr({
				"stroke_width" : 1
			})
			
			return this.canvas.paper.setFinish();
		},	
})

//adjustable flow control
function adjustFlowControl(canvas,x1,y1){
	var adjustFlowControl = new LabeldadjustFlowControlFigure({width:100,height:100});
	adjustFlowControl.setId("adjustFlowControl");
	adjustFlowControl.setResizeable(false);
	
	canvas.add( adjustFlowControl, x1,y1); 
	return adjustFlowControl;
}


var LabeldadjustFlowControlFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
			this.canvas.paper.setStart();

			this.canvas.paper.rect(0, 0, 100, 100).attr({
				"stroke-width" : 0
			});
			
			this.canvas.paper.rect(10, 30, 80, 70).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 65 l 100 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 37 70 q 10 -5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 37 60 q 10 5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 43 78 l 15 -30 l -5 4 l 5 -4 l 0 5").attr({
			"stroke_width" : 1
			})
			
			return this.canvas.paper.setFinish();
		},	
})

//pressure compensated flow control valve
function presFlowControl(canvas,x1,y1){
	var presFlowControl = new LabeldpresFlowControlFigure({width:100,height:100});
	presFlowControl.setId("presFlowControl");
	presFlowControl.setResizeable(false);
	
	canvas.add( presFlowControl, x1,y1); 
	return presFlowControl;
}


var LabeldpresFlowControlFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
			this.canvas.paper.setStart();

			this.canvas.paper.rect(0, 0, 100, 100).attr({
				"stroke-width" : 0
			});
			
			this.canvas.paper.rect(10, 30, 80, 70).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 65 l 100 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 65 l -10 -3 l 10 3 l -10 3 l 10 -3").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 37 70 q 10 -5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 37 60 q 10 5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 43 78 l 15 -30 l -5 4 l 5 -4 l 0 5").attr({
			"stroke_width" : 1
			})
			
			return this.canvas.paper.setFinish();
		},	
})

//Flow control (insignificant influence of viscosity)
function viscoFlowControl(canvas,x1,y1){
	var viscoFlowControl = new LabeldviscoFlowControlFigure({width:100,height:100});
	viscoFlowControl.setId("viscoFlowControl");
	viscoFlowControl.setResizeable(false);
	
	canvas.add( viscoFlowControl, x1,y1); 
	return viscoFlowControl;
}

var LabeldviscoFlowControlFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
			this.canvas.paper.setStart();

			this.canvas.paper.rect(0, 0, 100, 100).attr({
				"stroke-width" : 0
			});
			
			this.canvas.paper.rect(10, 30, 80, 60).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 60 l 100 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 41 50 l 10 10 l -10 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 59 50 l -10 10 l 10 10").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//flow control valve controlled mechanically with spring
function mechSpringFlowControl(canvas,x1,y1){
	var mechSpringFlowControl = new LabeldmechSpringFlowControlFigure({width:120,height:100});
	mechSpringFlowControl.setId("mechSpringFlowControl");
	mechSpringFlowControl.setResizeable(false);
	
	canvas.add( mechSpringFlowControl, x1,y1); 
	return mechSpringFlowControl;
}

var LabeldmechSpringFlowControlFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

	  createSet : function() {
			this.canvas.paper.setStart();

			this.canvas.paper.rect(0, 0, 120, 100).attr({
				"stroke-width" : 0
			});
			
			this.canvas.paper.rect(25, 30, 60, 50).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 60 q 10 -5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.path("M 0 50 q 10 5 25 0").attr({
				"stroke_width" : 1
			})
			
			this.canvas.paper.circle(0, 55, 5).attr({
				"stroke-width" : 1
			}); 
			
			this.canvas.paper.path("M 35 30 l 0 50 l -3 -8 l 3 8 l 3 -8").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 60 15 l 0 15 M 60 80 l 0 15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 50 l 3 -10 l 6 30 l 6 -30 l 6 30 l 6 -30 l 6 30 l 3 -15").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})