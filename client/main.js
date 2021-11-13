// const e = require("express");
let body = document.querySelector('body')
let complimentBtn = document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};
let fortuneBtn = document.getElementById("fortune-btn").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};
// let postBtn = document.getElementById("post-btn").onclick = function () {
//     axios.get("http://localhost:4000/api/post/")
//         .then(function (response) {
//             const data = response.data;
//             alert(data);
//         })
// }
// let postBtn = document.getElementById("post-btn").onclick = function () {
//     axios.get("http://localhost:4000/api/post/")
//         .then(function (response) {
//             const data = response.data;
//             let newPost = document.createElement("h3")
//             newPost.textContent = response.data
//             body.appendChild(newPost)
//         })
// }
let postBtn = document.getElementById("post-btn").onclick = function () {
    axios.get("http://localhost:4000/api/post/")
        .then(function (response) {
            const data = response.data;
            const postCard = document.createElement('div')
            postCard.classList.add('post-card')
            const post = document.createElement('p')
            post.classList.add('post-ctnt')
            post.textContent = response.data
            postCard.appendChild(post)
            body.appendChild(postCard)
            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete-btn')
            deleteBtn.textContent = 'Delete'
            deleteBtn.addEventListener('click', () => {
                postCard.remove()
            })
            postCard.appendChild(deleteBtn)
        })
}
let colorSquarBtn = document.getElementById('color-square').onclick = function () {
    axios.get("http://localhost:4000/api/color/")
        .then(function (response) {
            const data = response.data;
            const square = document.createElement('div')
            square.classList.add('colored-square')
            square.style.backgroundColor = `${response.data}`
            body.appendChild(square)
        })
}
let pictureBtn = document.getElementById('picture-btn').onclick = function () {
    axios.get("http://localhost:4000/api/picture/")
        .then(function (response) {
            const pic = document.createElement('img')
            pic.classList.add('picture');
            pic.src = `${response.data}`
            console.log(response.data)
            body.appendChild(pic)
        })
}

// let sqr = document.createElement('div')
// sqr.style.height = '100px'
// sqr.style.width = 

// const postsCallback = ({ data: posts }) => displayPosts(posts)
// const errCallback = err => console.log(err)

// const form = document.querySelector('form')
// const postContainer = document.querySelector('#post-container')

// const getPosts = () => axios.get('http://localhost:4000/api/posts').then(postsCallback).catch(errCallback)
// const createPost = () => axios.post('http://localhost:4000/api/posts').then(postsCallback).catch(errCallback)
// const deletePost = () => axios.delete(`http://localhost:4000/api/posts`).then(postsCallback).catch(errCallback)




// function createPostCard(post) {
//     const postCard = document.createElement('div')
//     postCard.classList.add('post-card')
//     postCard.innerHTML = `<p class="name">${post.name}</p>
//     <div class="btns-container">
//         <button onclick="deletePost(postCard)">Delete</button>`
//     postContainer.appendChild(postCard)
// }
// function createPostCard(post) {
//     const postCard = document.createElement('div')
//     postCard.classList.add('post-card')
//     postCard.innerHTML = `<p class="name">${post.name}</p>
//     <div class="btns-container">
//         <button onclick="deletePost(${post.id})">delete</button>`
//     postContainer.appendChild(postCard)
// }
// function displayPosts(arr) {
//     postContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createPostCard(arr[i])
//     }
// }



// getPosts()


