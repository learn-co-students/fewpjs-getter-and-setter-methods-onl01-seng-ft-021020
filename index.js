class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    get area(){
        return Math.PI * (this.radius ** 2)
    }
    // sets
    //   1) the radius using the pseudo-property `circle.diameter`
    //   2) the radius using the pseudo-property `circle.circumference`
    set diameter(diameter){
        return this.radius = diameter / 2
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI * 2)
    }
}



