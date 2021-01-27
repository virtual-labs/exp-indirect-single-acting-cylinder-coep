//Servicing Unit
function servUnit(canvas,x1,y1){
	var servUnit = new LabeldservUnitFigure({width:120,height:100});
	servUnit.setId("servUnit");
	servUnit.setResizeable(false);
	
	var servUnitPort = servUnit.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(90,75));
	servUnitPort.setName("servUnitPortName");
	servUnitPort.setId("servUnitPortId");
	
	canvas.add( servUnit, x1,y1); 
	return servUnit;
}


var LabeldservUnitFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.circle(-10, 75, 10).attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.circle(-10, 75, 1).attr({
				"stroke-width" : 2
			});
			
			this.canvas.paper.path("M 0 75 l 15 0 M 105 75 l 15 0 M 95 50 l 0 15").attr({
				"stroke-width" : 1
			});
			
			this.canvas.paper.path("M 25 50 l 0 50").attr({
				"stroke-width" : 1,
				"stroke-dasharray":"--"
			});
			
			this.canvas.paper.circle(60, 75, 10).attr({
				"stroke-width" : 1
			}); 
			
			this.canvas.paper.path("M 56 80 l 8 -10 l -5 2 l 5 -2 l 0 5").attr({
				"stroke-width" : 1
			}); 
			
			return this.canvas.paper.setFinish();
		},	
})

//Exaust
function exaust(canvas,x1,y1){
	var exaust = new LabeldExaustFigure({width:120,height:100});
	exaust.setId("exaust");
	exaust.setResizeable(false);
	
	var exaustPort = exaust.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8,70));
	exaustPort.setName("exaustPortName");
	exaustPort.setId("exaustPortId");
	
	canvas.add( exaust, x1,y1); 
	return exaust;
}


var LabeldExaustFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path('M 10 75 l 0 15 l -12 0 l 12 17 l 12 -17 l -12 0');
			
			return this.canvas.paper.setFinish();
		},	
})
