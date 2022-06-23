class Human{
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale(){
        if(this.gender === 'male'){
            return true;
        }else{
            return false;
        }
    }
    setGender(gender){
        this.gender = gender;
    }
    checkApple(Apple){
        this.apple = Apple;
        if(this.apple.weight >0){
            return true;
        }else{
            return false;
        }
    }
    eatApple(Apple){
        if(this.checkApple(Apple)){
            this.apple.decrease();
            this.weight += 1;
        }else{
            alert('Ăn hết mẹ táo rồi còn đâu!');
        }

    }
    say(String){
        alert(this.name + 'nói là ' + String);
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
}