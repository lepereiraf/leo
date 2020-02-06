const sql = require("mssql");
const { config } = require("../config/dataBase");

const getMovies = async (req, res) => {
  try {
    let conn = await sql.connect(config);
    let result = await conn.request().query(`SELECT * FROM peliculas`);

    return result.recordset;
  } catch (error) {
    console.log(error);
    console.log("error al obtener la data");
  }
};

const setMovie = async (req, res) => {
  const { nombre, anio, director, genero, poster } = req.body;
  console.log(nombre, anio, director, genero, poster);

  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("nombre", nombre)
      .input("anio", anio)
      .input("director", director)
      .input("genero", genero)
      .input("poster", poster)
      .query(
        `INSERT INTO peliculas VALUES(@nombre,@anio, @director, @genero, @poster)`
      );
    sql.close();
    return { msj: "correcto" };
  } catch (error) {
    console.log(error);
    return { msj: "error" };
  }
};

const delMovie = async (req, res) => {
  const { id } = req.params;

  try {
    let conn = await sql.connect();
    let result = await conn
      .request()
      .input("id", id)
      .query(`DELETE FROM peliculas WHERE id=@id`);
    sql.close();

    return { msj: "correcto" };
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { nombre, anio, director, genero, poster } = req.body;
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("nombre", nombre)
      .input("anio", anio)
      .input("director", director)
      .input("genero", genero)
      .input("poster", poster)
      .input("id", id)
      .query(
        `UPDATE peliculas SET nombre=@nombre,anio=@anio, director=@director, genero=@genero, poster=@poster WHERE id=@id`
      );

    sql.close();
    return { msj: "correcto" };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMovies, setMovie, delMovie, updateMovie };
