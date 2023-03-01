// thêm Attribute
var addHeading = document.querySelector('h1'); // lấy ra thẻ h1
addHeading.title = 'F8 - Học lập trình để đi làm'; // thêm Attribute title vào h1
addHeading.setAttribute('data-title', 'F8 - Học lập trình để đi làm'); // thêm Attribute data-title vào h1

var addA = document.querySelector('a'); // lấy ra thẻ a
addA.href = 'https://fullstack.edu.vn/'; // thêm Attribute href vào a
addA.target = '_blank'; // thêm Attribute target vào a

// thay đổi nội dung text
const heading = document.querySelector('h1'); // lấy ra thẻ h1
heading.innerText = 'F8 - Học lập trình để đi làm.'; // gán nội dung vào h1
console.log(heading.innerText); // in ra nội dung text trong h1

// thêm từng phần tử của mảng vào <ul class=".courses-list"> cho trước
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var list = document.querySelector('.courses-list')// lấy ra thẻ ul
    var htmls = courses.map(function(value){
        return `<li>${value}</li>`// với mỗi phần tử của course lấy ra từ map, gán nội dung vào từng thẻ li 
    })
    list.innerHTML = htmls.join('')// thêm vào thẻ ul các thẻ li là phần tử của mảng theo dạng html
}

render(courses)

// thêm CSS
var div = document.querySelector('.red') // lấy ra thẻ <div class=".red">
var p = document.querySelector('p')// lấy ra thẻ p

Object.assign(div.style, { // trong Object css .red gán cho nó style
    backgroundColor: '#f00',
    color: '#fff'
})
Object.assign(p.style, { // trong Object css p gán cho nó style
    color: '#f05123'
})

// thêm, gỡ tên class của thẻ
var h1 = document.querySelector('h1')// lấy ra thẻ h1
var p = document.querySelectorAll('p')// lấy ra thẻ p

h1.classList.add('title')// thêm vào thẻ h1 class="title"
// p.classList.remove('sub-title') // gỡ ở thẻ p class="sub-title"
// p.classList.toggle('content') // nếu p không có class="content" thì thêm, có thì remove
console.log(p)
arr = Array.from(p)
arr.map(function(value){
    console.log(value)
    value.classList.remove('sub-title')
    value.classList.toggle('content')
})

console.log(p)

// khi click vào button thì button đổi màu chữ
var button = document.querySelector('button')// lấy ra thẻ button
button.onclick = function(){// nghe sự kiện click
    Object.assign(button.style, {// trong Object css button gán cho nó style
        color: '#fff'
    })
}

// DOM events
// 1. Input / select
// 2. Key up / down
var inputValue;
var inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function(e){
    inputValue = e.target.value
}

// var inputElement = document.querySelector('input[type="checkbox"]')
// inputElement.onchange = function(e){
//     inputValue = e.target.checked
// }

// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e){
//     inputValue = e.target.value
// }
// nhấn phím xuống
inputElement.onkeydown = function(e){
    console.log(e.target.value)
}
// nhấc phím
inputElement.onkeyup = function(e) {
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
    }
}
// giữ phím
document.onkeypress = function(e){
    switch(e.which){
        case 27:
            console.log('Exit')
            break;
    }
}

// DOM events
// 1. preventDefault
// 2. stopPropagation

var aElements = document.links;
for(var i=0; i<aElements.length; ++i){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
            e.preventDefault();
        }
    }
}

document.querySelector('.div').onclick =
    function(){
        console.log('DIV')
    }
document.querySelector('.node').onclick =
    function(e){
        e.stopPropagation();
        console.log('Click me!')
    }

var Node = document.getElementById('heading');
console.log(Node);