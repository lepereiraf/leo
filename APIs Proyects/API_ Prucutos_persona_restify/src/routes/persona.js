const Router = require("restify-router").Router; //IMPORTAMOS ROUTER
const router = new Router(); //INSTANCIAMOS router

//IMPORTAMOS LAS FUNCIONES DESDE PERSONA SERVICES
const {
  getPerson,
  setPerson,
  delPerson,
  updatePerson,
  getOne,
  delPersonName
} = require("../services/personas");

//trea todas las personas
router.get("/todos", async (req, res) => {
  let data = await getPerson();

  if (data) {
    res.send(200, data);
  } else {
    res.send(500, { error_del_api: "no se pudo traer la data we" });
  }
});

//trae una persona mediante su id
router.get("/show/:id", async (req, res) => {
  res.send(200, await getOne(req, res));
});

//añade una nueva persona
router.post("/add", async (req, res) => {
  res.send(200, setPerson(req));
});

//elimina una persona mediante su id
router.del("/del/:id", async (req, res) => {
  res.send(200, delPerson(req));
});

router.del("/delname/:name", async (req, res) => {
  res.send(200, delPersonName(req));
});

//actualiza los datos de una persona mediante su id
router.put("/update/:id", async (req, res) => {
  res.send(200, updatePerson(req, res));
});

module.exports = router; //EXPORTAMOS LAS RUTAS
