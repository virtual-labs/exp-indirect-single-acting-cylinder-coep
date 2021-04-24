//Cylinder symbol

function CylinderWithExternalForce(canvas,x1,y1){
	var sacRetExtFrc = new LabeldsacRetExtFrcFigure({width:100,height:100});
	sacRetExtFrc.setId("sacRetExtFrc");
	sacRetExtFrc.setResizeable(false);
	
	canvas.add( sacRetExtFrc, x1,y1); 
	return sacRetExtFrc;
}


var LabeldsacRetExtFrcFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
        
        this.canvas.paper.rect(0, 0, 100, 100).
        attr({"stroke-width" : 0
         });
        
        this.canvas.paper.rect(0, 60, 100, 40).
        attr({"stroke-width" : 1
         });
        
        this.canvas.paper.path("M -30 77 l 100 0 l 0 -17 l 8 0 l 0 40 l -8 0 l 0 -17 l -100 0").
        attr({"stroke-width" : 1
        }); 
        
        this.canvas.paper.path("M 87 100 l 0 10").
        attr({"stroke-width" : 1
        });
        
        return this.canvas.paper.setFinish();
    },	
})

function CylinderWithSpring(canvas,x1,y1){
	var sacSpring = new LabeldsacSpringFigure({width:100,height:100});
	sacSpring.setId("sacSpring");
	sacSpring.setResizeable(false);
	
	var sacSpringPort = sacSpring.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,96));
		sacSpringPort.setName("sacSpringPortName");
		sacSpringPort.setId("sacSpringPortId");
		
	canvas.add( sacSpring, x1,y1); 
	return sacSpring;
}

var LabeldsacSpringFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
        
        this.canvas.paper.rect(0, 0, 100, 100).
        attr({"stroke-width" : 0
         });
        
        this.canvas.paper.rect(0, 60, 100, 40).
        attr({"stroke-width" : 1
         });
        
        this.canvas.paper.path("M -30 77 l 110 0 l 0 -17 l 8 0 l 0 40 l -8 0 l 0 -17 l -110 0").
        attr({"stroke-width" : 1
        }); 
        
        this.canvas.paper.path("M 95 100 l 0 10").
        attr({"stroke-width" : 1
        });
        
        this.canvas.paper.path("M 0 77 l 5 -16 l 10 38 l 5 -16 M 20 77 l 5 -16 l 10 38 l 5 -16 M 40 77 l 5 -16 l 10 38 l 5 -16 M 60 77 l 5 -16 l 10 38 l 5 -16").
        attr({"stroke-width" : 1
        });
        
        return this.canvas.paper.setFinish();
    },	
})


function doubleActingCylinder(canvas,x1,y1){
	var doubleActCyl = new LabelddoubleActCylFigure({width:100,height:100});
	doubleActCyl.setId("doubleActCyl");
	doubleActCyl.setResizeable(false);
	
	canvas.add( doubleActCyl, x1,y1); 
	return doubleActCyl;
}

var LabelddoubleActCylFigure = draw2d.SetFigure.extend({
	
	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
        
        this.canvas.paper.rect(0, 0, 100, 100).
        attr({"stroke-width" : 0
         });
        
        this.canvas.paper.rect(0, 60, 100, 40).
        attr({"stroke-width" : 1
         });
        
        this.canvas.paper.path("M -30 77 l 110 0 l 0 -17 l 8 0 l 0 40 l -8 0 l 0 -17 l -110 0").
        attr({"stroke-width" : 1
        }); 
        
        this.canvas.paper.path("M 95 100 l 0 10").
        attr({"stroke-width" : 1
        });
        
        this.canvas.paper.path("M 5 100 l 0 10").
        attr({"stroke-width" : 1
        });
        
        return this.canvas.paper.setFinish();
    },	
})




