require("dotenv").config();
const { DB_URI, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_ENCRYPT } = process.env;

/*const dbConfig = {
  user: DB_USER,
  password: DB_PASS,
  server: DB_URI,
  database: DB_NAME,
  port: parseInt(DB_PORT),
  options: {
    encrypt: true
  }
}; */

const dbConfig = {
  user: "sa",
  password: "r2d2lapf95",
  server: "localhost",
  database: "DB_MEETCLOCK",
  port: 1433,
  options: {
    encrypt: true
  }
};

exports.config = dbConfig;

//exports.config = dbConfig;
