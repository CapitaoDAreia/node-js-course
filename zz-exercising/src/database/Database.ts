import { Sequelize } from "sequelize";

const ConnectionWithDatabase = new Sequelize("testdatabase", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});

export default ConnectionWithDatabase;
