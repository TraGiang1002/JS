

var postApi = 'http://localhost:3000/posts'

function start(){
    getPosts(function(posts){

    });
}

start();

// Functions
function getPosts(cb){
    fetch(postApi)
        .then(function(response){
            return response.json();
        })
        .then(cb);
}

function renderPosts(post){
    var listPostsBlock = document.querySelector('#list-posts')
    var htmls = posts.map(function(post){
        return `
            <li>
                <h4>${post.title}</h4>
                <p>${post.author}</p>
            </li>
        `;
    });
    listPostsBlock.innerHTML = htmls.join('');
}