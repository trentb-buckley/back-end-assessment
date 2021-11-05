// const e = require("express");

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

const postsCallback = ({ data: posts }) => displayPosts(posts)
const errCallback = err => console.log(err)

const form = document.querySelector('form')
const postContainer = document.querySelector('#post-container')

const getPosts = () => axios.get('http://localhost:4000/api/posts').then(postsCallback).catch(errCallback)
const createPost = () => axios.post('http://localhost:4000/api/posts').then(postsCallback).catch(errCallback)
const deletePost = () => axios.delete(`http://localhost:4000/api/posts/${id}`).then(postsCallback).catch(errCallback)


function submitHandler(n) {
    n.preventDefault()
    let name = document.querySelector("#name")
    let text = document.querySelector("#text")

    let bodyObj = {
        name: name.value,
        text: text.value
    }
    createPost(bodyObj)

    name.value = ''
    text.value = ''
}

function createPostCard(post) {
    const postCard = document.createElement('div')
    postCard.classList.add('post-card')
    postCard.innerHTML = `<p class="name">${post.name}</p>
    <div class="btns-container">
        <button onclick="deletePost(${post.id})">delete</buttton>`
    postContainer.appendChild(postCard)
}

function displayPosts(arr) {
    postContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPostCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getPosts()


