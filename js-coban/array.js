var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0
    },
]
// danh sách khóa học
courses.forEach(function(course, index) {
    return console.log(index, course);
});
// true nếu tất cả các khóa học có coin = 0
var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(isFree);
// true nếu có từ 1 khóa học có coin = 0
var Free = courses.some(function(course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(Free);
// tìm khóa học đầu tiên có name = Ruby
var course = courses.find(function(course, index) {
    console.log(index);
    return course.name === 'Ruby';
});
console.log(course);
// tìm danh sách khóa học có coin = 0
var listcourse = courses.filter(function(course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(listcourse);
// thay đổi p tử của mảng các khóa học
var newCourses = courses.map(function(course, index, originArray){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    }
});
console.log(newCourses);
// tính tổng p tử bất kỳ trong các khóa học
var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, originArray){
    return accumulator + currentValue.coin;
}, 0);
console.log(totalCoin);

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, Value) {
    return flatOutput.concat(Value);
}, []);
console.log(flatArray);

var title = "Responsive web design";
console.log(title.includes('Responsive', 0)); // tìm chuỗi từ chỉ mục thứ 0
var courses = ['Javascript', 'PHP', 'Dart'];
console.log(courses.includes('Javascript', -4));


