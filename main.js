const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [
  {
      id: 0,
      title: "Two states",
      description: "Given an array , return the maximum of the array?",
      testCases: [
          {
              input: "[1,2,3,4,5]",
              output: "5",
          },
      ],
  },
  {
      id: 1,
      title: "Two Sum",
      description:
          "Given an array of integers, find two numbers such that they add up to a specific target.",
      testCases: [
          {
              input: [2, 7, 11, 15],
              output: [0, 1],
          },
          {
              input: [3, 2, 4],
              output: [1, 2],
          },
      ],
  },
];


const SUBMISSION = []


app.use(express.json());
app.use(cookieParser());

app.post('/signup', function(req, res) {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Check if a user with the given email already exists
  const existingUser = USERS.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send('User with this email already exists');
  }

  // Create a new user and store it in the USERS array
  const newUser = { email, password };
  USERS.push(newUser);

  // Return a success message
  return res.status(200).send('Signup successful');
})

app.post('/login', function(req, res) {
  // Extract email and password from the request body
  const { email, password } = req.body;

  // Find the user with the given email
  const user = USERS.find(user => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }

  // Return a success response
  return res.status(200).send('Login successful');
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.status(200).json(QUESTIONS);
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})