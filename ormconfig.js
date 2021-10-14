const rootDir = process.env.NODE_ENV === "development" ? "src" : "dist";

module.exports = {
  "name": "default",
  "type": process.env.DB_TYPE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "entities": [
    rootDir + "/entities/*{.ts,.js}"
  ],
  "migrationsRun": !(process.env.NODE_ENV === "development"),
  "synchronize": process.env.NODE_ENV === "development",
  "migrations": [
    rootDir + "/database/typeorm/migrations/*{.ts,.js}"
  ],
  "cli": {
    "migrationsDir": rootDir + "/database/typeorm/migrations"
  }
}
