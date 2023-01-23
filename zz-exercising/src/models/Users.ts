import { DataTypes } from "sequelize";
import ConnectionWithDatabase from "../database/Database";

const Users = ConnectionWithDatabase.define("family", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER
  },
}, {freezeTableName: true, timestamps: false, createdAt: false, updatedAt: false});


// (async () => {
//   await Users.sync({ force: false });
//   console.log("Success on table sync...");
// })();

Users.sync({force: false})

export default Users;
