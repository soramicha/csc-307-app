import express from "express"

// creating an instance of express
const app = express()
const port = 8000

// set up express app to process incoming data in json format
// express is like the middle layer that allows us to access json data seamlessly in memory
app.use(express.json())

// first api endpoint that accepts GET requests
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
app.listen(port, () => {
console.log(
    `Example app listening at http://localhost:${port}`
);
});