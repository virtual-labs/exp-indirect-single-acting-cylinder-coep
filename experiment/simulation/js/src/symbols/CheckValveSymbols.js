//Check valve symbols
//Non return Valve
function nonRetValve(canvas,x1,y1){
	var nonRetValve = new LabeldnonRetValveFigure({width:120,height:100});
	nonRetValve.setId("nonRetValve");
	nonRetValve.setResizeable(false);
	
	canvas.add( nonRetValve, x1,y1); 
	return nonRetValve;
}


var LabeldnonRetValveFigure = draw2d.SetFigure.extend({
	
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

		this.canvas.paper.path("M 0 50 l 20 0 l 15 -15 l -15 15 l 15 15 l -15 -15").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.circle(32, 50, 8).attr({
			"stroke-width" : 1
		}); 
		
		this.canvas.paper.path("M 40 50 l 80 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 40 50 l 5 -16 l 10 32 l 10 -32 l 10 32 l 10 -32 l 10 32 l 5 -16").
        attr({"stroke-width" : 1
        });
		
		return this.canvas.paper.setFinish();
	},	
})

//Shuttle Valve
function shuttleValve(canvas,x1,y1){
	var shuttleValve = new LabeldshuttleValveFigure({width:100,height:100});
	shuttleValve.setId("shuttleValve");
	shuttleValve.setResizeable(false);
	
	canvas.add( shuttleValve, x1,y1); 
	return shuttleValve;
}


var LabeldshuttleValveFigure = draw2d.SetFigure.extend({
	
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
		
		this.canvas.paper.rect(0, 50, 90, 50).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M -10 75 l 20 0 l 12 -12 l -12 12 l 12 12 l -12 -12 l 52 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.circle(70, 75, 8).attr({
			"stroke-width" : 1
		}); 
		
		this.canvas.paper.path("M 82 75 l -12 -12 l 12 12 l -12 12 l 12 -12 l 30 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 40 75 l 0 -35").attr({
			"stroke-width" : 1
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//Non return flow control valve
function nonRetFlowCV(canvas,x1,y1){
	var nonRetFlowCV = new LabeldnonRetFlowCVFigure({width:120,height:100});
	nonRetFlowCV.setId("nonRetFlowCV");
	nonRetFlowCV.setResizeable(false);
	
	canvas.add( nonRetFlowCV, x1,y1); 
	return nonRetFlowCV;
}


var LabeldnonRetFlowCVFigure = draw2d.SetFigure.extend({
	
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
		
		this.canvas.paper.rect(15, 30, 90, 70).attr({
			"stroke-width" : 1
		});

		this.canvas.paper.path("M 0 65 l 120 0").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.circle(60, 90, 6).attr({
			"stroke-width" : 1
		}); 
		
		this.canvas.paper.path("M 25 65 l 0 25 l 30 0 ").attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 71 90 l -15 -10 l 15 10 l -15 10 l 15 -10 l 20 0 l 0 -25").attr({
			"stroke-width" : 1
		});
		
//		this.canvas.paper.path("M 50 73 l 25 0").attr({
//			"stroke_width" : 1
//		})
		
		this.canvas.paper.path("M 50 73 q 10 -5 25 0").attr({
			"stroke_width" : 1
		})
		
		this.canvas.paper.path("M 50 57 q 10 5 25 0").attr({
			"stroke_width" : 1
		})
		
//		this.canvas.paper.path("M 50 57 l 25 0").attr({
//			"stroke_width" : 1
//		})
		
		this.canvas.paper.path("M 53 78 l 15 -30 l -5 4 l 5 -4 l 0 5").attr({
			"stroke_width" : 1
		})
		return this.canvas.paper.setFinish();
	},	
})

//Quick exhaust valve
function quickExstValve(canvas,x1,y1){
	var quickExstValve = new LabeldquickExstValveFigure({width:120,height:100});
	quickExstValve.setId("quickExstValve");
	quickExstValve.setResizeable(false);
	
	canvas.add( quickExstValve, x1,y1); 
	return quickExstValve;
}


var LabeldquickExstValveFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.rect(0, 50, 90, 50).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M -10 75 l 20 0 l 12 -12 l -12 12 l 12 12 l -12 -12 l 52 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(70, 75, 8).attr({
				"stroke-width" : 1
			}); 
			
			this.canvas.paper.path("M 82 75 l -12 -12 l 12 12 l -12 12 l 12 -12 l 8 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 40 75 l 0 -45").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 40 35 l 60 0 l 0 30 l -10 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Twin pressure sequence
function twinPresSeq(canvas,x1,y1){
	var twinPresSeq = new LabeldtwinPresSeqFigure({width:120,height:100});
	twinPresSeq.setId("twinPresSeq");
	twinPresSeq.setResizeable(false);
	
	canvas.add( twinPresSeq, x1,y1); 
	return twinPresSeq;
}


var LabeldtwinPresSeqFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.rect(15, 50, 90, 50).attr({
				"stroke-width" : 1
			});

			this.canvas.paper.path("M 0 75 l 15 0 M 105 75 l 15 0").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 70 l 0 10 l 0 -5 l 70 0 l 0 -5 l 0 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 50 l 0 8 M 25 100 l 0 -8 M 95 50 l 0 8 M 95 100 l 0 -8 M 60 50 l 0 -10").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})