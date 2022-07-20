// ./src/index.js

// importing the dependencies
const express = require('express');
const jwt = require('jsonwebtoken');

// defining the Express app
const app = express();

const PORT = 5000;
app.use()
const people = [
  { id: 1, name: "Modestine", password: "Jorin" },
  { id: 2, name: "Darin", password: "De Blase" },
  { id: 3, fname: "Gnni", password: "Dael" },
];

function sayHello(req, res, next) {
  console.log("goodbye!")

  next();
}

function generateToken(user) {
  return jwt.sign(user, "secret")
}

function authenticateToken(req, res, next) {
  // get meta info from res
  const authHeader = req.headers.authorization;
  // store token in var
  const token = authHeader && authHeader.split(" ")[1];
  // what if no token exist

if(!token) return res.sendStatus(401);

jwt.verify(token, "secret", (err, user, next) => {
  if (err) return res.sendStatus(403);

  console.log(user);

  req.user = user;

  next();

})
  console.log(token);

}

app.use(sayHello);

app.get('/', sayHello, (req, res,) => {
})

app.get('/people', authenticateToken, (req, res) => {
  res.json(people);
})

app.post("/signup", async(res, req) => {
  const { name, password } = req.body;

  

  const hashedPassword = bcrypt.hash(user.password, 10).then(res) => res{});
  res.json(token);

  console.log(name, hashedPassword);
});

//app.post("/signup", (res, req) => {
  //const user = {
   // id: 4,
   // name: "Jake",
   // password: "password",
 // }

  //const token = generateToken(user);
  //res.json(token);
//});

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));



