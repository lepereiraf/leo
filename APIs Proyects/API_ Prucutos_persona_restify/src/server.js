//importaciones
const restify = require("restify");
const morgan = require("morgan");
const corsMiddleware = require("restify-cors-middleware");
const Router = require("restify-router").Router;
const bodyParser = require("body-parser");
const router = new Router();
require("dotenv").config();

//importando rutas
const adminRoutes = require("./routes/admin");
const personRoutes = require("./routes/persona");
const poroductRoutes = require("./routes/productos");
const moviesRoutes = require("./routes/peliculas");

//configuracion del servidor
const miServer = restify.createServer();
const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

//configuracion de los tokens
const jsonWebToken = require("jsonwebtoken");
const restifyJwtCommunity = require("restify-jwt-community");

//implementanto midelwares
miServer.use(morgan("dev"));
miServer.pre(cors.preflight);
miServer.use(cors.actual);

//convierte body a Json
miServer.use(bodyParser.json());

//usando JsonWebToken
miServer.use(
  restifyJwtCommunity({ secret: "my-secret-key" }).unless({
    path: ["/admin/token"]
  })
);

miServer.use((req, res, next) => {
  if (req.url === "/admin/token") {
    return next();
  }

  let authorization = req.header("authorization").split(" ");

  try {
    var decoded = jsonWebToken.verify(authorization[1], "my-secret-key");
    return next();
  } catch (error) {
    res.send(401, { message: "Not authorized" });
    return next();
  }
});

//implementando rutas

router.add("/admin", adminRoutes);
router.add("/person", personRoutes);
router.add("/products", poroductRoutes);
router.add("/movies", moviesRoutes);

router.applyRoutes(miServer);

miServer.listen(3011, function() {
  console.log("Servidor corriendo en el puerto: ", 3011);
});

module.exports = miServer;
