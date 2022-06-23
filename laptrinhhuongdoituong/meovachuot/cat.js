class Cat{
    constructor(name,weight,speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    sound(){
        console.log(this.name + ' kêu ' +"meow meow");
    }
    catchRAt(Rat){
        if(this.speed > Rat.speed){
            return true;
        }else{
            return false;
        }
    }
    eatRat(Rat){
        if(Rat.status === 'alive'){
            this.weight += Rat.weight;
        }else{
            console.log('Chuột chết rồi. Chê!!!');
        }
    }

}