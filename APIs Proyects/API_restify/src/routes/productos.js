const Router = require("restify-router").Router; //IMPORTAMOS ROUTER
const router = new Router();

const {
  getPruduct,
  postProduct,
  delProduct,
  editProduct
} = require("../services/productos");

router.get("/all", async (req, res) => {
  let data = await getPruduct();
  if (data) {
    res.send(200, data);
  } else {
    res.send(500, { error: "error al ontener productos" });
  }
});

router.post("/add", async (req, res) => {
  let result = postProduct(req, res);
  if ((await result).msj === "insertado") {
    res.send(200, { msj: "producto insertado correctamente!" });
  } else {
    res.send(500, { msj: "error al insertar el producto!" });
  }
});

router.del("/delete/:id", async (req, res) => {
  let result = await delProduct(req, res);
  if (result.msj === "correcto") {
    res.send(200, { msj: "producto eliminado correctamente" });
  } else {
    res.send(500, { msj: "error al eliminar el producto!" });
  }
});

router.put("/edit/:id", async (req, res) => {
  let result = await editProduct(req, res);
  if (result.msj === "Actualizado") {
    res.send(200, { msj: "se actualizo correctamente" });
  } else {
    res.send(500, { msj: "ocurrio un error!" });
  }
});

module.exports = router;
