var users = [
    {
        id: 1,
        name: "Kien Dam",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Hung Dam",
    },
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Son chua ra video",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em oi",
    },
];
// tạo hàm để lấy comment
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}
// tạo hàm lấy users từ id
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        // Lọc qua từng element của mảng users và lấy ra id của user trùng với user_id của comment
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        })
        setTimeout(function() {
            resolve(result)
        }, 1000)
    })
}
getComments()
    .then(function(comments) {
        //  Dùng phương thức map() lấy ra user_id của mảng comments
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        return getUsersByIds(userIds)
            .then(function(users) {
                // user, comment ở trước là key còn users và comments ở sau là value
                // Trả về Object mới
                return{
                    user: users,
                    comment: comments
                }
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block')
        // tạo chuỗi rỗng để thêm nội dung vào thẻ ul
        var html = '';
        // Lặp qua mảng comments trong object data được return ở trên
        data.comment.forEach(function(comment) {
            // Lặp qua mảng users trong object data được return ở trên
            // kiểm tra id của user có trùng với user_id của comment không
            var user = data.user.find(function(user) {
                return user.id === comment.user_id;
            })
            // thêm giá trị vào chuỗi html rỗng được tạo ở trên
            html += `<li>${user.name}: ${comment.content}</li> `
        })
        // thay đổi textNode của thẻ ul
        commentBlock.innerHTML = html
    })