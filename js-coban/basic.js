// Built-in
alert('Hoc lap trinh');
console.log('Day la dong log');
confirm('Xac nhan tuoi');
prompt('Xac nhan tuoi');
setTimeout(function() {
    alert('Thong bao')
}, 1000)
setInterval(function() {
    console.log('day la log')
}, 1000)

// String 
var courses = '    HTML & CSS, JS, JavaScript, JS, ReactJS';

console.log(courses.length); // độ dài chuỗi
console.log(courses.indexOf('JS')); // tìm vị trí đầu tiên
console.log(courses.search('JS', -6)); // tìm vị trí đầu tiên sau 20
console.log(courses.slice(9, 12));
console.log(courses.slice(-3, -1)); // tìm các p tử chuỗi từ chỉ mục -3 đến -1
console.log(courses.replace(/JS/g, 'Javascript')); // chuyển tất cả các chuỗi con 'JS' sang 'Javascript'
console.log(courses.toUpperCase()); // In hoa chuỗi
console.log(courses.toLowerCase()); // In thường chuỗi
console.log(courses.trim().length); // loại bỏ ký tự trống thừa
console.log(courses.split(', ')); // tách cuỗi thành mảng phân tác bởi ', '
console.log(courses.charAt(9)); // tìm ký tự chỉ mục 10

// Array
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];
var languages2 = [
    'Dart',
    'Ruby'
];

console.log(languages.join(', ')); // nối mảng thành string phân tách theo dấu ', '
console.log(languages.pop()); // xóa phần tử cuối mảng và trả về p tủ đã xóa
console.log(languages.push('Dart', 'Java')); // thêm p tử vào cuối mảng trả về độ dài mảng
console.log(languages.shift()); // xóa phần tử đầu mảng và trả về p tủ đã xóa
console.log(languages.unshift()); // thêm p tử vào đầu mảng trả về độ dài mảng
console.log(languages.splice(1, 2)); // xóa và in mảng các p tử từ chỉ mục 1 đến 2
console.log(languages.concat(1, 2, 'Dart')); //mảng nối languages với mảng các p tử ...
console.log(languages.concat(languages2)); // mảng nối 2 mảng languages và languages2
console.log(languages.slice(-2, -1));  // tìm p tử từ chỉ mục -2 đến -1

// Object 

//constructor
function Animal(name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}
// prototype
Animal.prototype.nickName = 'pet';

var parrot = new Animal('Nick', 2, 5);
var dog = new Animal('Ammet', 4, 10);
console.log(parrot);
console.log(dog.nickName);

// Date object
var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getTime());

// Math object

console.log(Math.PI); // pi
console.log(Math.round(1.5)); // làm tròn
console.log(Math.abs(-2)); // trị tuyệt đối
console.log(Math.ceil(4.0001)); // làm tròn lên
console.log(Math.floor(5.9)); // làm tròn xuống
console.log(Math.random()); // số bất kỳ 0 -> 1
console.log(Math.min(2, 3)); // min
console.log(Math.max(4, 5)); // max

// Switch

var date = 2;

switch(date){
    case 2:
        console.log('Thứ 2');
        break;
    case 3:
        console.log('Thứ 3');
        break;
    case 4:
        console.log('Thứ 4');
        break;
    case 5:
        console.log('Thứ 5');
        break;
    case 6:
        console.log('Thứ 6');
        break;
    case 7:
        console.log('Thứ 7');
        break;
    default:
        console.log('Chủ Nhật');
}

// toán tử 3 ngôi

var course = {
    name: 'Javascript',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

// for in

var myStr = 'Javascript';
for(var key in myStr){
    console.log(myStr[key]);
}

// for of

for(var value of myStr){
    console.log(value);
}

var myInfo = {
    name: 'Son Dang',
    age: 18
}
for(var value of Object.values(myInfo)){
    console.log(value);
}