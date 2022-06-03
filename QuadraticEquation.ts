class QuadraticEquation{
    a:number;
    b:number;
    c:number;
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant(){
        return delta = this.b*this.b - 4*this.a*this.c;
    }
    getRoot1() {
        return x1 = (-this.b + Math.pow(delta,0.5)) / 2 * this.a;

    }
    getRoot2(){
        return x2 = (-this.b - Math.pow(delta,0.5)) / 2 * this.a;
    } 
    getRoot3() {
        return x1 = x2 = -this.b / this.a;
    }
    getResult(){
        if(delta == 0){
            console.log('Phuong trinh co nghiem kep x1 = x2 = ' + quadraticEquation.getRoot3());
        }
        else if(delta >= 0){
            console.log('Phuong trinh co nghiem thu nhat x1 = ' + quadraticEquation.getRoot1())
            console.log('Phuong trinh co nghiem thu nhat x2 = ' + quadraticEquation.getRoot2())
        }
        else {
            console.log('The equation has no roots')
        }
    }
}
let delta;
let x1,x2;
let quadraticEquation = new QuadraticEquation(2,6,2)

console.log('delta = ' + quadraticEquation.getDiscriminant());
console.log(quadraticEquation.getResult())





