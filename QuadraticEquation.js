var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // getA(){
    //     return this.a
    // }
    // getB(){
    //     return this.b
    // }
    // getC() {
    //     return this.c
    // }
    QuadraticEquation.prototype.getDiscriminant = function () {
        return delta = this.b * this.b - 4 * this.a * this.c;
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return x1 = (-this.b + Math.pow(delta, 0.5)) / 2 * this.a;
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return x2 = (-this.b - Math.pow(delta, 0.5)) / 2 * this.a;
    };
    QuadraticEquation.prototype.getRoot3 = function () {
        return x1 = x2 = -this.b / this.a;
    };
    return QuadraticEquation;
}());
var delta;
var x1, x2;
var quadraticEquation = new QuadraticEquation(2, 6, 2);
console.log('delta = ' + quadraticEquation.getDiscriminant());
if (delta == 0) {
    console.log('Phuong trinh co nghiem kep x1 = x2 = ' + quadraticEquation.getRoot3());
}
else if (delta >= 0) {
    console.log('Phuong trinh co nghiem thu nhat x1 = ' + quadraticEquation.getRoot1());
    console.log('Phuong trinh co nghiem thu nhat x2 = ' + quadraticEquation.getRoot2());
}
else {
    console.log('The equation has no roots');
}
