const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// const posts = require("./db.json")
const posts = [];
let globalId = 2

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["Now is a good time to buy stock",
   "You are talented in many ways",
    "Your ability to juggle many tasks will take you far",
     "Your moods signal a period of change",
      "Your love of music will be an important part of your life",
       "You have an unusual equipment for success, use it properly",
        "You are almost there"];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});
app.get("/api/post", (req, res) => {
  const posts = ["Today was a good day",
  "Today was alright",
   "Today was average",
       "Today was not very good"];
  let randomIndex = Math.floor(Math.random() * posts.length);
  let randomPost = posts[randomIndex];
     
  res.status(200).send(randomPost);
})
app.get("/api/color", (req, res) => {
  const colors = ["red", "blue", "yellow", "green"];
  let randomIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomIndex];
     
  res.status(200).send(randomColor);
})
app.get("/api/picture", (req, res) => {
  const url = 'https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg'
  res.status(200).send(url)
})

// const getPosts = (req, res) => {
//   res.status(200).send(posts)
// }

// const createPost = (req, res) => {
//   let {name, text} =  req.body;
//   let newPost = {
//     id: globalId,
//     name,
//     text
//   }
//   posts.push(newPost)
//   res.status(200).send(posts)
//   globalId++
// }

// const deletePost = (req, res) => {
//   let index = posts.findIndex((elem) => elem.id === +req.params.id);
//   posts.splice(index, 1);
//   res.status(200).send(posts);
// }

// app.get("/api/posts", getPosts)
// app.post("/api/posts", createPost)
// app.delete("/api/posts/:id", deletePost)

app.listen(4000, () => console.log("Server running on 4000"));
