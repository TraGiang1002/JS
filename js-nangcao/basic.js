// IIFE
// là hàm được gọi ngay lập tức có tính đóng gói
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x; // 27
    }
})(3) // 81

// scope
// Phạm vi truy cập của biến
{
    var age = 18;
}
console.log(age); // 18
{
    let age2 = 18; //const
}
// console.log(age2) // Error
function logger(){
    var name = "Son Dang"
}
console.log(name) // error
// mỗi lần gọi hàm, phạm vi biến mới được tạo ra
// const age = 16
{
    {
        const age = 14
        {
            const age = 12
            console.log(age) // lấy age ở phạm vi gần nhất
            
        }
    }
}
function makeCouter(){
    let couter = 0 // const => error
    function increase(){
        console.log(couter)
        return ++couter
    }
    return increase
}
console.log(makeCouter())
console.log(makeCouter())
const increase1 = makeCouter()
console.log(increase1())
console.log(increase1())

// closure là hàm có thể ghi nhớ nơi nó được tạo và truy cập biến ngoài phạm vi của nó

function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}
a(1)();
a(1)();
a(1)();
let x = a(1);
x();
x();
x();
// Output: 3, 3, 3 và 3, 4, 5
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
    return storage
}
const ProfileSetting = createStorage('profile_setting')
console.log(ProfileSetting.get('fullName'))
ProfileSetting.set('name', 'Son Dang')
console.log(ProfileSetting.get('fullName'))
console.log(ProfileSetting.get('name'))
ProfileSetting.remove('name')
console.log(ProfileSetting.get('name'))

// hoisting
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: I have $NaN

// Value types: tham trị - Reference types: tham chiếu
// Value types: String, Number, Boolean, BigInt, Symbol, undefined, null
var a = 1 // const, let -> error
var b = a // sao chép 1 từ ô nhớ a sang ô nhớ b
a = 2
console.log(a)
console.log(b) // 1
// Reference types: Object, Array, Function
let a1 = {
    name: 'Mercedes'
}
let b1 = a1 // sao chép địa chỉ ô nhớ a1 thành địa chỉ ô nhớ b1
a1.name = 'BMW'
console.log(b1.name) //BMW

// Strict mode: chế độ nghiêm ngặt
"use strict"
var hero = "Doctor Strange"

function MultiverseOfMadness() {
   var universe = 616
   return universe
}

console.log(MultiverseOfMadness())

console.log(hero) //Output ?
// console.log(universe) //Output error


