import Users from "../models/Users";

let users: any[] = [];

const findAllUsers = () => {
    
  Users.findAll({raw: true})
    .then((user) => {
        console.log(user)
      users.push(user);
    })
    .catch((err) => {
      console.log(err);
    });

  return users;
};

export default findAllUsers;
