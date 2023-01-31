import { Sequelize } from "sequelize";

const ConnectionWithDatabase = new Sequelize("personal", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default ConnectionWithDatabase;
