// this 
function Car(name, color){
    this.name = name
}
Car.prototype.run = function(){
    // Context
    // function test(){
    //     console.log(this)
    // }
    const test = () => {
        console.log(this)
    }
    test()
}
const porsche = new Car('Porsche')
console.log(porsche.run())

// Fn.find()
