//Shut-off Valve
function shut_offValve(canvas,x1,y1){
	var shut_offValve = new Labeldshut_offValveFigure({width:100,height:100});
	shut_offValve.setId("shut_offValve");
	shut_offValve.setResizeable(false);
	
	canvas.add( shut_offValve, x1,y1); 
	return shut_offValve;
}


var Labeldshut_offValveFigure = draw2d.SetFigure.extend({
	
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
			
			this.canvas.paper.path("M 10 75 l 20 0 l 0 -20 l 60 40 l 0 -40 l -60 40 l 0 -20 M 90 75 l 20 0").attr({
				"stroke-width" : 1
			});
			
			return this.canvas.paper.setFinish();
		},	
})