import express from "express";
import Users from "./models/Users";
import ConnectionWithDatabase from "./database/Database";
import findAllUsers from "./handlers/findAllUsers";

ConnectionWithDatabase.authenticate()
  .then(() => {
    console.log("Database successfully connected...");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = `80`;

const APP = express();
APP.use(express.urlencoded({ extended: false }));
APP.use(express.json());

APP.get("/", async (_req: express.Request, res: express.Response) => {
  const response  = findAllUsers();

  res.statusCode = 200;
  if (response) {
    res.send(response);
  }
});

APP.post("/register", (req: express.Request, res: express.Response)=>{
  const newMember = req.body
  
  Users.create({
    name: "Igor",
    email: "igor@email.com",
    age: 24,
  }).then(()=>{
    res.send("Success!")
  }).catch(err=>{
    console.log(err)
    res.send("error")
  })

})

APP.listen(PORT, () => {
  console.log(`SERVER IS LISTEN ON ${PORT}...`);
});
