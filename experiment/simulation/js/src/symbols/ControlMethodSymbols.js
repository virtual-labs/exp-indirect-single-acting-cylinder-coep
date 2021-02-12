//Manual Control methods
//General symbol
function generalSym(canvas,x1,y1){
	var generalSym = new LabeldgeneralSymFigure({width:100,height:100});
	generalSym.setId("generalSym");
	generalSym.setResizeable(false);
	
	canvas.add( generalSym, x1,y1); 
	return generalSym;
}


var LabeldgeneralSymFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 65 l -30 0 M 50 75 l -30 0 l 0 7 l 0 -24").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Push button
function pushBtn(canvas,x1,y1){
	var pushBtn = new LabeldpushBtnFigure({width:100,height:100});
	pushBtn.setId("pushBtn");
	pushBtn.setResizeable(false);
	
	canvas.add( pushBtn, x1,y1); 
	return pushBtn;
}


var LabeldpushBtnFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 65 l -30 0 M 50 75 l -30 0 l 0 7 l 0 -24 q -15 12 0 25").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//lever
function leverSym(canvas,x1,y1){
	var leverSym = new LabeldleverSymFigure({width:100,height:100});
	leverSym.setId("leverSym");
	leverSym.setResizeable(false);
	
	canvas.add( leverSym, x1,y1); 
	return leverSym;
}


var LabeldleverSymFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 75 l -30 0 M 50 65 l -27 0 l 3 -8 l -9 26").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(27, 53, 4).attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//pedal
function pedalSym(canvas,x1,y1){
	var pedalSym = new LabeldpedalSymFigure({width:100,height:100});
	pedalSym.setId("pedalSym");
	pedalSym.setResizeable(false);
	
	canvas.add( pedalSym, x1,y1); 
	return pedalSym;
}


var LabeldpedalSymFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 75 l -30 0 M 50 65 l -27 0 l 3 -8 l -7 0 l 7 0 l -9 26").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})



//Actuation Mechanical control
//Plunger
function plunger(canvas,x1,y1){
	var plunger = new LabeldplungerFigure({width:100,height:100});
	plunger.setId("plunger");
	plunger.setResizeable(false);
	
	canvas.add( plunger, x1,y1); 
	return plunger;
}


var LabeldplungerFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 65 l -30 0 q -5 5 0 10 l 30 0").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Roller symbol
function roller(canvas,x1,y1){
	var roller = new LabeldrollerFigure({width:100,height:100});
	roller.setId("roller");
	roller.setResizeable(false);
	
	canvas.add( roller, x1,y1); 
	return roller;
}


var LabeldrollerFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 65 l -30 0 M 50 75 l -30 0 ").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(20, 70, 5).attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

function rollerTrip(canvas,x1,y1){
	var rollerTrip = new LabeldrollerTripFigure({width:100,height:100});
	rollerTrip.setId("rollerTrip");
	rollerTrip.setResizeable(false);
	
	canvas.add( rollerTrip, x1,y1); 
	return rollerTrip;
}


var LabeldrollerTripFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 65 l -30 0 M 50 75 l -30 0 ").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(20, 70, 5).attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 16 67 l -15 20 M 22 75 l -12 17").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(6, 89, 5).attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

function springSym(canvas,x1,y1){
	var springSym = new LabeldspringSymFigure({width:100,height:100});
	springSym.setId("springSym");
	springSym.setResizeable(false);
	
	canvas.add( springSym, x1,y1); 
	return springSym;
}


var LabeldspringSymFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 70 l -5 -15 l -10 30 l -10 -30 l -10 30 l -5 -15").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

//Electrical control method
function electroMagnet(canvas,x1,y1){
	var electroMagnet = new LabeldelectroMagnetFigure({width:100,height:100});
	electroMagnet.setId("electroMagnet");
	electroMagnet.setResizeable(false);
	
	canvas.add( electroMagnet, x1,y1); 
	return electroMagnet;
}


var LabeldelectroMagnetFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 60 l -25 0 l 0 20 l 25 0 M 32 75 l 10 -10").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})

function solenoidServoValve(canvas,x1,y1){
	var solenoidServoValve = new LabeldsolenoidServoValveFigure({width:100,height:100});
	solenoidServoValve.setId("solenoidServoValve");
	solenoidServoValve.setResizeable(false);
	
	canvas.add( solenoidServoValve, x1,y1); 
	return solenoidServoValve;
}


var LabeldsolenoidServoValveFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 70 50 l -20 0 l 0 40 l 20 0 M 50 60 l -45 0 l 0 20 l 20 0 l 0 -20 l 6 10 l -6 10 l 25 0 M 10 75 l 10 -10").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})



//Atuation pressure control method 
function byApplyPres(canvas,x1,y1){
	var byApplyPres = new LabeldbyApplyPresFigure({width:100,height:100});
	byApplyPres.setId("byApplyPres");
	byApplyPres.setResizeable(false);
	
	canvas.add( byApplyPres, x1,y1); 
	return byApplyPres;
}


var LabeldbyApplyPresFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 90 50 l -20 0 l 0 40 l 20 0 M 70 70 l -40 0 l -4 3 l 0 -6 l 4 3").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 70 l -20 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			return this.canvas.paper.setFinish();
		},	
})

function byReleasePres(canvas,x1,y1){
	var byReleasePres = new LabeldbyReleasePresFigure({width:100,height:100});
	byReleasePres.setId("byReleasePres");
	byReleasePres.setResizeable(false);
	
	canvas.add( byReleasePres, x1,y1); 
	return byReleasePres;
}


var LabeldbyReleasePresFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 90 50 l -20 0 l 0 40 l 20 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.path("M 70 70 l -40 0 l 0 3 l -4 -3 l 4 -3 l 0 3").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 70 l -20 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			return this.canvas.paper.setFinish();
		},	
})

function byDiffPres(canvas,x1,y1){
	var byDiffPres = new LabeldbyDiffPresFigure({width:100,height:100});
	byDiffPres.setId("byDiffPres");
	byDiffPres.setResizeable(false);
	
	canvas.add( byDiffPres, x1,y1); 
	return byDiffPres;
}

var LabeldbyDiffPresFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.rect(30, 50, 40, 30).attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.rect(70, 58, 8, 14).attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 30 65 l -20 0 M 78 65 l 20 0").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			return this.canvas.paper.setFinish();
		},	
})