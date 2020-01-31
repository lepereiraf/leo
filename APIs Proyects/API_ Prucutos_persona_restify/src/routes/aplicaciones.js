const Router = require("restify-router").Router;
const router = new Router();

const { getApps, newApps } = require("../services/aplicaciones");

router.get("/all", async (req, res) => {
  let data = await getApps(req, res);
  if (data) {
    res.send(200, data);
  } else {
    res.send(500, { error: "No se pudieron cargar las apps" });
  }
});

router.post("/add", async (req, res) => {
  let result = await newApps(req, res);
  if (result.msj === true) {
    res.send(200, { msj: "se agrego correctamente" });
  } else {
    res.send(500, { msj: "error al agregar" });
  }
});

module.exports = router;
