const Router = require("restify-router").Router; //IMPORTAMOS ROUTER
const router = new Router(); //INSTANCIAMOS router

//IMPORTAMOS LAS FUNCIONES DESDE PERSONA SERVICES
const {
  getPerson,
  setPerson,
  delPerson,
  updatePerson,
  getOne
} = require("../services/personas");

//trea todas las personas
router.get("/todos", async (req, res) => {
  res.send(200, await getPerson());
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
router.get("/del/:id", async (req, res) => {
  res.send(200, delPerson(req));
});

//actualiza los datos de una persona mediante su id
router.put("/update/:id", async (req, res) => {
  res.send(200, updatePerson(req, res));
});

module.exports = router; //EXPORTAMOS LAS RUTAS
