const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// this 
function Car(name, color){
    this.name = name
}
Car.prototype.run = function(){
    // Context
    // function test(){
    //     console.log(this) // this = window
    // }
    const test = () => {
        console.log(this) // this = Car
    }
    test()
}
const porsche = new Car('Porsche')
console.log(porsche.run())

// Fn.find()
this.firstName = "Minh"
this.lastName = "Thu"
const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName(data1, data2){
        console.log(data1, data2)
        return `${this.firstName} ${this.lastName}`
    }
}
const student = {
    firstName: "Dang",
    lastName: "Son",
}
console.log(teacher.getFullName()) //Minh Thảo

// const getTeacherName = teacher.getFullName
const getTeacherName = teacher.getFullName.bind(student, 'Test 1', 'Test 2') //getTeacherName == student.getFullName
console.log(getTeacherName('Test 3', 'Test 4')) //Minh Thu

console.log($('#heading'))

const app = (() => {
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')
    return {
        add(car){
            cars.push(car) //Thêm car
        },
        delete(index){
            cars.splice(index, 1) //xóa ptu ở index
        },
        render(){
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')

            root.innerHTML = html
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete') //Trả về true nếu click thẻ class delete
            if(deleteBtn){
                const index = deleteBtn.dataset.index //Lấy ra index của li được click
                this.delete(index) //xóa thẻ li ở index
                this.render()
            }
        },
        init(){
            // Handle DOM events
            submit.onclick = () => { //Khi click submit
                const car = input.value 
                this.add(car) //Thêm car
                this.render()
            }
            this.render()

            input.value = null // Sau khi render focus click input và xóa value đã submit
            input.focus()

            root.onclick = this.handleDelete.bind(this) // click root => gọi hàm handleDelete
            this.render()
        }
    }
})();
app.init()

// Fn.call
const me = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
me.getFullName.call() // Minh Thu
me.getFullName.call(teacher) // Minh Thảo

function Animal(name, weight){
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs){
    Animal.call(this, name, weight) //Thừa kế
    this.legs = legs
}

const sonDang = new Chicken('Sơn Dặng', 66, 2)
console.log(sonDang)

function logger(){
    const arr = Array.prototype.slice.call(arguments) //Gán các ptu arguments vào mảng 
    // const arr = Array.prototype.slice(arguments)
    console.log(arr)
    arr.forEach(item => console.log(item))
}

logger(1, 2, 3, 4, 5)

// Fn.apply()
// giống call nhưng gọi một hàm với một this và truyền đối số cho hàm gốc dưới dạng mảng
function Animal(name, weight){
    this.name = name
    this.weight = weight
}

function Chicken(legs){
    Animal.apply(this, arguments) //Thừa kế
    this.legs = legs
}

const conGa = new Chicken('Gà', 3, 2)
console.log(conGa)