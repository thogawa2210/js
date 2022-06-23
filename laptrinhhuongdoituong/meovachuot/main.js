let tom = new Cat('Tom',10,20);
let jerry = new Rat('Jerry',5,30,'alive');
let rat1 = new Rat('rat1',5,0,'death');
let rat2 = new Rat('rat2',3,10,'alive');
tom.sound();
jerry.sound();
rat1.sound();
let x = tom.catchRAt(jerry);
console.log(x);
let y = tom.catchRAt(rat1);
console.log(y);
tom.eatRat(rat1);
let z = tom.catchRAt(rat2);
console.log(z);
tom.eatRat(rat2);
console.log(tom.name + ' đã ăn xong và nặng: '+ tom.weight)