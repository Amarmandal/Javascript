let car = {
    brand: 'suzuki',
    price: 0,
    color: 'red',

    updatePrice: function(num){
        this.price += num;
    },

    forward: function()
    {
        return `Moving forward`;
    },

    backward: function()
    {
        return `Moving backward`;
    },

    left: function()
    {
        return `Turning left`;
    },

    right: function(){
        return 'Turning right';
    }
}

car.updatePrice(500000)
console.log(car.price)
console.log(car.forward())
console.log(car.backward())
console.log(car.left())
console.log(car.right())