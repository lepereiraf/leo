const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");

const { config } = require("../config/dataBase");
const jsonWebToken = require("jsonwebtoken");

router.post("/token", async (req, res) => {
  const { user, pass } = req.body;

  console.log(user, pass);

  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("user", user)
      .input("pass", pass)
      .query(`SELECT * FROM admin WHERE username = @user AND password = @pass`);
    sql.close();

    console.log(result.rowsAffected);

    if (+result.rowsAffected === 0) {
      console.log("el usuario no existe");
      res.json(404, { message: "Login failed" });
    } else {
      token = jsonWebToken.sign({ user, pass }, "my-secret-key", {
        expiresIn: "10d"
      });

      res.json(200, { message: "Login success", token: token });
    }
  } catch (error) {
    console.log(error);
    console.log("error we ");
  }
});

module.exports = router;
