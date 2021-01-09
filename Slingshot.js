class Slingshot {
    constructor(firstBody, secondPoint){
        var options ={

            bodyA : firstBody,
            pointB : secondPoint,
            stiffness: 0.05,
            length: 10

        }
        
            this.chain = Constraint.create(options);
            console.log(this.chain.bodyA)
            World.add(world, this.chain);


    }

    display(){

        
        //line(x1,y1, x2,y2)
        strokeWeight(5);
        if(this.chain.bodyA){       

        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
            this.chain.pointB.x,this.chain.pointB.y)}
    };

    fly(){
        this.chain.bodyA = null;
    }


};