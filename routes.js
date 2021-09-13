const users = require("./user");
const posts = require("./post");
const bcrypt = require('bcrypt')

function allroutes(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to VARLYQ route /post route /user");
  });

  // USER Routes
  app.get("/user", (req, res) => {
    res.send(users);
  });

  app.post("/user", (req, res) => {
    const newuser = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    };
    users.push(newuser);
    console.log(newuser);
    res.json(newuser);
  });

  

  app.put("/user/:id", (req, res) => {
    let id = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let mobile = req.body.mobile;
    // Hash password 
    // const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // let password = hashedPassword;

    let check = users.findIndex((user) => {
      return user.id == Number.parseInt(id);
    });
    if (check >= 0) {
      let std = users[check];
      std.name = name;
      std.email = email;
      std.mobile = mobile;
      std.password = password;
      res.json(std);
    } else {
      res.status(404);
      res.end();
    }
  });

  app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    let check = users.findIndex((user) => {
      return user.id == Number.parseInt(id);
    });

    if (check >= 0) {
      let std = users[check];
      users.splice(check, 1);
      res.json(std);
    } else {
      res.status(404);
      res.end();
    }
  });

  // Post Routes
  app.get("/post", (req, res) => {
    res.json(posts);
  });

  app.post("/post", (req, res) => {
    const newpost = {
      createdBy: req.body.createdBy,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
      messsage: req.body.messsage,
      comments: [
        {
          sentBy: req.body.comments,
          sentAt: req.body.comments.sentAt,
          liked: req.body.comments.liked,
        },
      ],
    };
    posts.push(newpost);
    console.log(newpost);
    res.json(newpost);
  });

app.put("/post/:createdBy", (req, res) => {
    let createdBy = req.params.createdBy;
    let createdAt = req.body.createdAt;
    let updatedAt = req.body.updatedAt;
    let message = req.body.message;
   
    let check = posts.findIndex((post) => {
      return post.createdBy == Number.parseInt(createdBy);
    });

    if (check >= 0) {
      let std = posts[check];
      std.createdAt = createdAt;
      std.updatedAt = updatedAt;
      std.message = message
      res.json(std);
    } else {
      res.status(404);
      res.end();
    }
  });

  app.delete("/post/:createdBy", (req, res) => {
    let createdBy = req.params.createdBy;
    let check = posts.findIndex((post) => {
      return post.createdBy == Number.parseInt(createdBy);
    });
    // res.json(createdBy)
    if (check >= 0) {
      let std = posts[check];
      posts.splice(check, 1);
      res.json(std);
    } else {
      res.status(404);
      res.end();
    }
  });
}



module.exports = allroutes;
