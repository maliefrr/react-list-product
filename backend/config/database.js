import { Sequelize } from "sequelize";

const db = new Sequelize("list_product_db", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export default db;
