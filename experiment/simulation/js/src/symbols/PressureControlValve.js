//Pressure control valve
//Pressure relief valve
function presReliefValve(canvas,x1,y1){
	var presReliefValve = new LabeldpresReliefValveFigure({width:120,height:100});
	presReliefValve.setId("presReliefValve");
	presReliefValve.setResizeable(false);
	
	canvas.add( presReliefValve, x1,y1); 
	return presReliefValve;
}

var LabeldpresReliefValveFigure = draw2d.SetFigure.extend({
	
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

			this.canvas.paper.path("M 35 30 l 0 50 l -3 -8 l 3 8 l 3 -8").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 60 15 l 0 15 M 45 80 l 10 10 l 10 -10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 50 l 3 -10 l 6 30 l 6 -30 l 6 30 l 6 -30 l 6 30 l 3 -15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 97 80 l 13 -50 l -5 8 l 5 -8 l 0 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 55 l -20 0 l 0 -35 l 55 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.text( 70, 15, "P").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			this.canvas.paper.text( 75, 90, "R").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Sequence valve
function seqValve(canvas,x1,y1){
	var seqValve = new LabeldseqValveFigure({width:120,height:100});
	seqValve.setId("seqValve");
	seqValve.setResizeable(false);
	
	canvas.add( seqValve, x1,y1); 
	return seqValve;
}

var LabeldseqValveFigure = draw2d.SetFigure.extend({
	
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

			this.canvas.paper.path("M 35 30 l 0 50 l -3 -8 l 3 8 l 3 -8").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 60 15 l 0 15 M 60 80 l 0 15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 50 l 3 -10 l 6 30 l 6 -30 l 6 30 l 6 -30 l 6 30 l 3 -15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 97 80 l 13 -50 l -5 8 l 5 -8 l 0 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 55 l -20 0 l 0 -35 l 55 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.text( 70, 15, "B").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			this.canvas.paper.text( 75, 90, "A").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Pressure regulator
function presRegulator(canvas,x1,y1){
	var presRegulator = new LabeldpresRegulatorFigure({width:120,height:100});
	presRegulator.setId("presRegulator");
	presRegulator.setResizeable(false);
	
	canvas.add( presRegulator, x1,y1); 
	return presRegulator;
}

var LabeldpresRegulatorFigure = draw2d.SetFigure.extend({
	
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

			this.canvas.paper.path("M 60 30 l 0 50 l -3 -8 l 3 8 l 3 -8").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 60 15 l 0 15 M 60 80 l 0 15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 50 l 3 -10 l 6 30 l 6 -30 l 6 30 l 6 -30 l 6 30 l 3 -15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 97 80 l 13 -50 l -5 8 l 5 -8 l 0 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 55 l -20 0 l 0 35 l 55 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.text( 70, 15, "P").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			this.canvas.paper.text( 75, 90, "A").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Pressure regulator with self relieving
function presRegSelfRel(canvas,x1,y1){
	var presRegSelfRel = new LabeldpresRegSelfRelFigure({width:120,height:100});
	presRegSelfRel.setId("presRegSelfRel");
	presRegSelfRel.setResizeable(false);
	
	canvas.add( presRegSelfRel, x1,y1); 
	return presRegSelfRel;
}

var LabeldpresRegSelfRelFigure = draw2d.SetFigure.extend({
	
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

			this.canvas.paper.path("M 60 30 l -3 8 l 3 -8 l 3 8 l -3 -8 l 0 50 l -3 -8 l 3 8 l 3 -8").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 60 15 l 0 15 M 60 80 l 0 15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 85 50 l 3 -10 l 6 30 l 6 -30 l 6 30 l 6 -30 l 6 30 l 3 -15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 97 80 l 13 -50 l -5 8 l 5 -8 l 0 10").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 55 l -20 0 l 0 35 l 55 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.path("M 65 30 l 8 -5 l 8 5").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.text( 85, 15, "R").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			this.canvas.paper.text( 30, 15, "p").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			this.canvas.paper.text( 75, 90, "A").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
			
			return this.canvas.paper.setFinish();
		},	
})