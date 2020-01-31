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

module.exports = {
  getApps,
  newApps
};
