var arr = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log([...(new Set(arr))]);
// dequy
function countDown(num){
    if(num > 0){
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
// đệ quy là hàm được gọi lại bên trong nó.
countDown(3);
//callback
function loop(start, end, cb){
    if(start < end){
        cb(start); // return callback
        return loop(start + 1, end, cb); // đệ quy
    }
}
var arr = ['Javascript', 'PHP', 'Ruby'];
// callback là hàm gọi lại hàm đối số bên trong nó.
loop(0, arr.length, function(index){
    console.log(index);
})
