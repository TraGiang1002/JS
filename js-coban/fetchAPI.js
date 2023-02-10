var fakeAPI = "http://localhost:3000/comments";

fetch(fakeAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(comments){
        console.log(comments);
    })