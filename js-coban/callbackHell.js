function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
        // resolve() chạy vào then
        // reject() chạy vào catch
        // cả hai đều chạy vào finally
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    })
    .catch(function () {
        console.log('Failure!')
    })
    .finally(function () {
        console.log('Done!')
    });

/* 
Trong 1 vai truong hop neu cac ham promise kh can phai chay theo thu tu 
,hoac ta muon chung chay song song
luc do ta co the su dung ham Promise.all();
vd:
 */
var promise1 = new Promise(function(reject) {
    setTimeout(function() {
        reject([1]);
    }, 1000)
})

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject([2,3]);
    }, 3000)
})
/* 
luc nay ham Promise.all() se nhan tham so dau vao la 1 mang
o day la 2 promise ta da~ tao o tren 
*/
Promise.all([promise1, promise2])
/* 
Ham .then se chay khi ma 2 doi tuong Promise o tren chay xong
luu y , ket qua se phu thuoc vao thu tu ta truyen cac tham so promise vao 
o day no nhan vao 2 tham so la ket qua tra ve cua 2 Promise truyen vao
*/
    .then(function([result1,result2]) {
        // dung ham concat de noi mang 1 va mang 2 sau do tra ve return
        return result1.concat(result2);
    })
    // ham .then nhan ket qua return la result sau do in ra
    .then(function(result) {
        console.log(result);
    })
/* 
Trong 1 vai truong hop khi tham so Promise dau vao 1 con doi tuong tra ve reject
no se ngay lap tuc bo qua cac ham .then ma chay xuong .catch nhu thuong le.
Truong hop nay ta thuong su dung khi ta muon cac su kien chay song song 
nhung neu 1 su kien gap loi thi ta van se bat loi dc no 
*/ 