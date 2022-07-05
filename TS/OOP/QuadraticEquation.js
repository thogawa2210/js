class QuadraticEquation{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    gettera(){
        return this.a;
    }
    getterb(){
        return this.b;
    }
    getterc(){
        return this.c;
    }
    getDiscriminant(){
        let delta = 0
        delta = Math.pow(this.b,2) - 4*this.a*this.c;
        return delta;
    }
    getRoot1(){
        if(this.getDiscriminant() >=0){
            return (-this.b + Math.sqrt(this.getDiscriminant()))/2*this.a;
        }else{
            return 0;
        }
    }
    getRoot2(){
        if(this.getDiscriminant() >=0){
            return (-this.b - Math.sqrt(this.getDiscriminant()))/2*this.a;
        }else{
            return 'The equation has no roots';
        }
    }
}

let pt = new QuadraticEquation(1,2,3);
console.log(pt.getDiscriminant());
console.log(pt.getRoot1());
console.log(pt.getRoot2());