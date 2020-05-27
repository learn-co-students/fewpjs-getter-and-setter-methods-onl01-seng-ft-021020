// Add your Circle class here

class Circle {
    constructor(radius) {
        this._radius = radius
    }
   
    get radius() {
      return this._radius;
    }
   
    set radius(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }
    set diameter(diameter) {
        this._radius = diameter / 2;
    }

    get circumference() {
        return this._radius * 2 * 3.14;
    }
    set circumference(circumference) {
        this._radius = circumference / (2 * 3.14);
    }

    get area() {
        return this._radius ** 2 * 3.14;
    }
  }

