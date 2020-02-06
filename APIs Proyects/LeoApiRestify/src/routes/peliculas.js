const Router = require("restify-router").Router;
const router = new Router();

const {
  getMovies,
  setMovie,
  delMovie,
  updateMovie
} = require("../services/peliculas");

router.get("/movies", async (req, res) => {
  let data = await getMovies();

  if (data) {
    res.send(200, data);
  } else {
    res.send(500, { error: "error al obtener la data" });
  }
});

router.post("/add", async (req, res) => {
  result = await setMovie(req, res);
  if (result.msj === "correcto") {
    res.send(200, { msj: "se inserto correctamente" });
  } else {
    res.send({ error: "ocurrio un erorr en la insersion!" });
  }
});

router.del("/delete/:id", async (req, res) => {
  let result = await delMovie(req, res);
  if (result.msj === "correcto") {
    res.send(200, { msj: "se eliminó correctamente" });
  } else {
    res.send(500, { msj: "error al eliminar!" });
  }
});

router.put("/edit/:id", async (req, res) => {
  let result = await updateMovie(req, res);
  if (result.msj === "correcto") {
    res.send(200, { msj: "se actualizo correctamente" });
  } else {
    res.send(500, { msj: "error" });
  }
});

module.exports = router;
