function findTimeApear(number : number[], value : number){
    let count = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] === value) count++;
    }
    return count;
}

let number = [1,3,5,7,9,3,33,55,44,3,4,2];
console.log(findTimeApear(number,3));
