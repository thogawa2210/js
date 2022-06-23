class Apple{
    constructor(weight){
        this.weight = weight;
    }
    decrease(){
        this.weight -= 1;
    }
    isEmpty(){
        if(this.weight === 0){
            return true;
        }else{
            return false;
        }
    }
    getWeight(){
        return this.weight;
    }
}