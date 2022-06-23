let apple = new Apple(5);
let adam = new Human('Adam', 'male',70);
let eva = new Human('Eva', 'female', 60);
adam.eatApple(apple);
console.log(apple.weight);
console.log(adam.weight);
eva.eatApple(apple);
console.log(eva.weight);
console.log(apple.weight);
adam.eatApple(apple);
adam.eatApple(apple);
eva.eatApple(apple);
console.log(apple.weight);
let x = adam.isMale();
console.log(x);
adam.setGender();
x = adam.isMale();
console.log(x);
adam.say('Eva ăn lắm vl!')