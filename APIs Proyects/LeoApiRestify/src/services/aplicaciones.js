const sql = require("mssql");
const { config } = require("../config/dataBase");

const getApps = async (req, res) => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query(`SELECT * FROM apps`);

    return result.recordset;
  } catch (error) {
    console.log(error);
    console.log("error al optener apps");
  }
};

const getAppsName = async (req, res) => {
  const { name } = req.params;
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .query(`SELECT * FROM apps WHERE name=@name`);

    return result.recordset;
  } catch (error) {
    console.log(error);

    return { err: "error" };
  }
};

const getOne = async (req, res) => {
  const { category } = req.params;
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("category", category)
      .query(`SELECT * FROM apps WHERE category=@category`);

    return result.recordset;
  } catch (error) {
    console.log(error);

    return { err: "error" };
  }
};

const newApps = async (req, res) => {
  try {
    const { name, description, category, version, img, link } = req.body;
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("description", description)
      .input("category", category)
      .input("version", version)
      .input("img", img)
      .input("link", link)
      .query(
        `INSERT INTO apps VALUES(@name,@description,@category,@version,@img,@link)`
      );
    sql.close();

    return { msj: true };
  } catch (error) {
    console.log(error);
    return { msj: false };
  }
};

const editApp = async (req, res) => {
  const nameApp = req.params.name;
  const { name, description, version, img, category, link } = req.body;
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("description", description)
      .input("version", version)
      .input("category", category)
      .input("img", img)
      .input("link", link)
      .input("nameApp", nameApp)
      .query(
        `UPDATE apps SET  name=@name, description=@description, version=@version, category=@category, img=@img, link=@link WHERE name=@nameApp`
      );

    sql.close();
    return { msj: true };
  } catch (error) {
    console.log(error);
    return { msj: false };
  }
};

module.exports = {
  getApps,
  newApps,
  editApp,
  getOne,
  getAppsName
};
