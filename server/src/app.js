const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { config } = require("./core/config");

dotenv.config({
	path: process.env.NODE_ENV !== "PRODUCTION" ? ".env.development" : ".env",
});

async function main(){
	const app = express();

	app.use(express.json());
	app.use(cors());

	await require("./core/db");

	app.listen(config.PORT, () => {
		console.log(`Server is running on port ${config.PORT}`);
	});
};

main();
