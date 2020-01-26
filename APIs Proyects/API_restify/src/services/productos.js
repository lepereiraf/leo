const sql = require("mssql"); //CREAMOS UNA INSTANCIA DE SQL
const { config } = require("../config/dataBase"); //IMPORTAMOS LA CONFIGURACION DE NUESTRA DB

const getPruduct = async () => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query("SELECT * FROM productos");
    sql.close();
    return result.recordset;
  } catch (error) {
    console.log(error);
  }
};

const postProduct = async (req, res) => {
  const { codigo, descripcion, marca, precio, imagen } = req.body;
  console.log(codigo, descripcion, marca, precio, imagen);

  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("codigo", codigo)
      .input("descripcion", descripcion)
      .input("marca", marca)
      .input("precio", precio)
      .input("imagen", imagen)
      .query(
        `INSERT INTO productos VALUES (@codigo, @descripcion, @marca, @precio, @imagen) `
      );

    sql.close();

    return { msj: "insertado" };
  } catch (error) {
    console.log(error);
    return { msj: "error" };
  }
};

const delProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE  FROM productos WHERE id=@id`);
    sql.close();

    return { msj: "correcto" };
  } catch (error) {
    console.log(error);
    return { msj: "incorrecto" };
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  const { codigo, descripcion, marca, precio, imagen } = req.body;
  console.log(id, codigo, descripcion, marca, precio, imagen);
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("id", id)
      .input("codigo", codigo)
      .input("descripcion", descripcion)
      .input("marca", marca)
      .input("precio", precio)
      .input("imagen", imagen)
      .query(
        `UPDATE productos SET codigo=@codigo, descripcion=@descripcion, marca=@marca, precio=@precio, imagen=@imagen WHERE id=@id `
      );
    sql.close();
    return { msj: "Actualizado" };
  } catch (error) {
    console.log(error);
    return { error: "error al actualizar!" };
  }
};
module.exports = { getPruduct, postProduct, delProduct, editProduct };
