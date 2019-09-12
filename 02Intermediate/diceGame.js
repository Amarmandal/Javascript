let numRange =  6;
let roll = function(num){
    return `${Math.ceil(Math.random() * numRange)}`;
}
console.log(roll(numRange))