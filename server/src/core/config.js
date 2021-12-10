module.exports = {
	config: {
		PORT: process.env.PORT || 3000,
		NODE_ENV: process.env.NODE_ENV || "development",
		
		DATABASE_HOST: process.env.DATABASE_HOST,
		DATABASE_PORT: +(process.env.DATABASE_PORT || 3306),
		DATABASE_USER: process.env.DATABASE_USER,
		DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
		DATABASE_DATABASE: process.env.DATABASE_NAME,
	}
}
