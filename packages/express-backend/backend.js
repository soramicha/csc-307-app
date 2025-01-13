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

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  }

const findUserByName = (name) => {
    // only return information where the user["name"] === name
    return users["users_list"].filter(
        (user) => user["name"] === name
    );
};

app.get("/users", (req, res) => {
    // get the requested name from the url
    const name = req.query.name;
    if (name != undefined) {
        let result = findUserByName(name);
        result = { users_list: result };
        res.send(result);
    } else {
        res.send(users);
    }
});

const findUserById = (id) =>
    // only return information where the user["id"] === id
    // we use the find function instead of filter because the id
    // is a UNIQUE identifier, so we only need to find ONE result
    users["users_list"].find((user) => user["id"] === id);
  
app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    let result = findUserById(id);
    if (result === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(result);
    }
  });
  

