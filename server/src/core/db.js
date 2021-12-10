const knex = require("knex");
const { Model } = require("objection");
const { config } = require("./config");

const db = knex({
	client: "mysql2",
	connection: {
		host: config.DATABASE_HOST,
		port: config.DATABASE_PORT,
		user: config.DATABASE_USER,
		password: config.DATABASE_PASSWORD,
		database: config.DATABASE_DATABASE,
	}
})

Model.knex(db);

module.exports = db;
