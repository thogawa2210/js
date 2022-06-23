class Rat{
    constructor(name,weight,speed,status){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    sound(){
        if(this.status === 'alive'){
            console.log(this.name+ ' kêu chít chít');
        }else{
            console.log(this.name+ ' kêu : Bố chết rồi!');
        }
    }
}
