//Energy Transmission
//main supply pressure
function mainSupPres(canvas,x1,y1){
	var mainSupPres = new LabeldmainSupPresFigure({width:100,height:100});
	mainSupPres.setId("mainSupPres");
	mainSupPres.setResizeable(false);
	
	canvas.add( mainSupPres, x1,y1); 
	return mainSupPres;
}


var LabeldmainSupPresFigure = draw2d.SetFigure.extend({
	
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

		this.canvas.paper.circle(0, 50, 12).attr({
			"stroke-width" : 1
		});
		
		this.canvas.paper.path("M 12 50 l 70 0").attr({
			"stroke-width" : 1
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//Return feed line
function retFeedLine(canvas,x1,y1){
	var retFeedLine = new LabeldretFeedLineFigure({width:100,height:100});
	retFeedLine.setId("retFeedLine");
	retFeedLine.setResizeable(false);
	
	canvas.add( retFeedLine, x1,y1); 
	return retFeedLine;
}


var LabeldretFeedLineFigure = draw2d.SetFigure.extend({
	
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

		this.canvas.paper.path("M 12 50 l 70 0").attr({
			"stroke-width" : 1
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//Control line
function controlLine(canvas,x1,y1){
	var controlLine = new LabeldcontrolLineFigure({width:100,height:100});
	controlLine.setId("controlLine");
	controlLine.setResizeable(false);
	
	canvas.add( controlLine, x1,y1); 
	return controlLine;
}


var LabeldcontrolLineFigure = draw2d.SetFigure.extend({
	
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

		this.canvas.paper.path("M 12 50 l 70 0").attr({
			"stroke-width" : 1,
			"stroke-dasharray":"--"
		});
		
		return this.canvas.paper.setFinish();
	},	
})

//Drain line
function drainLine(canvas,x1,y1){
	var drainLine = new LabelddrainLineFigure({width:100,height:100});
	drainLine.setId("drainLine");
	drainLine.setResizeable(false);
	
	canvas.add( drainLine, x1,y1); 
	return drainLine;
}


var LabelddrainLineFigure = draw2d.SetFigure.extend({
	
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

		this.canvas.paper.path("M 12 50 l 5 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0 m 4 0 l 4 0").attr({
			"stroke-width" : 1,
		});
		
		return this.canvas.paper.setFinish();
	},	
})