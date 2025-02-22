class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    isSquare() {
        return this.width === this.height;
    }
}

const square = new Square(10, 10);
console.log(square.isSquare());
console.log(square.area());
console.log(square.perimeter());