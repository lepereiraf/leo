const sql = require("mssql"); //CREAMOS UNA INSTANCIA DE SQL
const { config } = require("../config/dataBase"); //IMPORTAMOS LA CONFIGURACION DE NUESTRA DB

//trea todas las personas
const getPerson = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM persona");
    sql.close();
    return result.recordset;
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

//trae una persona mediante su id
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    let conn = await sql.connect(config);

    let result = await conn
      .request()
      .input("id", id)
      .query(`SELECT * FROM persona WHERE id=@id`);
    sql.close();
    return result.recordset;
  } catch (error) {
    console.log(error);
  }
};

//añade una nueva persona
const setPerson = async (req, res) => {
  const { name, surname } = req.body;
  console.log(name, surname);
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("name", name)
      .input("surname", surname)
      .query(`INSERT INTO persona VALUES (@name,@surname)`);

    sql.close();
    return { message: "persona añadida con exito" };
  } catch (error) {
    console.log(error);
  }
};

//elimina una persona mediante su id
const delPerson = async (req, res) => {
  const { id } = req.params;
  console.log("el id es:" + id);

  try {
    let conn = await sql.connect(config);

    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE FROM persona WHERE id=@id`);
    sql.close();
    return { message: "persona eliminada con exito" };
  } catch (error) {
    console.log(error);
  }
};

//actualiza los datos de una persona mediante su id
const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, surname } = req.body;
  console.log("este es el id: " + id);
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .input("name", name)
      .input("surname", surname)
      .query(`UPDATE persona SET name=@name, surname=@surname WHERE id=@id `);
    sql.close();
    return { message: "persona actualizada con exito" };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPerson, setPerson, delPerson, updatePerson, getOne }; //EXPORTAMOS NUESTRAS FUNCIONES
