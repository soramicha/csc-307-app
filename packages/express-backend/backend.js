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

const findUserByNameAndJob = (name, job) => {
    // only return information where the user["name"] === name
    return users["users_list"].filter(
        (user) => (user["name"] === name && user["job"] === job)
    );
};

// get users with specific name and job
app.get("/users", (req, res) => {
    // get the requested name from the url
    const name = req.query.name;
    const job = req.query.job;
    if (name != undefined && job != undefined) {
        let result = findUserByNameAndJob(name, job);
        result = { users_list: result };
        console.log("Finished retriving data")
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
  
const addUser = (user) => {
    // add into the array of users
    users["users_list"].push(user);
    return user;
  };
  
app.post("/users", (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    // testing in postman!
    // console.log(userToAdd)
    res.send();
  });

// assigns updated list of users after removing user with specific id
const deleteUser = (id) => {
    users["users_list"] = users["users_list"].filter(
        (user) => user["id"] != id
    )
}

// we are taking the specific id as a parameter
app.delete("/users/:id", (req, res) => {
    const userToDelete = req.params.id;
    deleteUser(userToDelete)
    console.log("Deleted " + userToDelete)
    res.send()
})