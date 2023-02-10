// sử dụng callback tạo phương thức fake phương thức mặc định

const numbers = [1, 2, 3, 4, 5, 1]
// forEach
Array.prototype.forEach2 = function(cb){
    for(let i=0; i<this.length; i++){
        cb(this[i], i);
    }
    return;
}
var result = numbers.forEach2(function(number, index) {
    return console.log(index, number);
});
//every
Array.prototype.every2 = function(cb){
    for(let i=0; i<this.length; i++){
        answer = cb(this[i], i);
        if(!answer){
            return false;
            break;
        }
    }
    return true;
}
var isFree = numbers.every2(function(number, index) {
    console.log(index);
    return number === 1;
});
console.log(isFree);
//some
Array.prototype.some2 = function(cb){
    for(let i=0; i<this.length; i++){
        var answer = cb(this[i], i);
        if(answer){
            return true;
            break;
        }
    }
    return false;
}
var isFree = numbers.some2(function(number, index) {
    console.log(index);
    return number === 2;
});
console.log(isFree);
//find
Array.prototype.find2 = function(cb){
    for(let i=0; i<this.length; i++){
        var answer = cb(this[i], i);
        if(answer){
            return this[i];
            break;
        }
    }
    return undefined;
} 
var num = numbers.find2(function(number, index) {
    console.log(index);
    return number === 3;
});
console.log(num);
// filter
Array.prototype.filter2 = function(cb){
    var arr = [];
    for(let i=0; i<this.length; i++){
        var answer = cb(this[i], i);
        if(answer){
            arr.push(this[i]);
        }
    }
    return arr;
}
var listnum = numbers.filter2(function(number, index) {
    return number === 1;
});
console.log(listnum);
// map
Array.prototype.map2 = function(cb) {
    var arr = [];
    for(let i=0; i<this.length; i++){
        arr.push(cb(this[i], i, this));
    }
    return arr;
}
var newNum = numbers.map2(function(number, index, originArray){
    return {
        number: `num: ${number}`
    }
});
console.log(newNum);
// reduce
Array.prototype.reduce2 = function(cb, num) {
    let i=0;
    if(arguments.length < 2){
        i=1;
        num = this[0];
    }
    
    for(; i<this.length; i++){
        num = cb(num, this[i], i, this);
    }
    return num;
}
var result = numbers.reduce2(function(total, number, index, originArray){
    return total + number;
}, 0);
console.log(result);
