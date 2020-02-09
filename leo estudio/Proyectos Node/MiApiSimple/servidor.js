const express = require("express");
const router = require("./routes/rutas");
const cors = require("cors");

const miApp = express();

/*miApp.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "Origen " + "no permitido.";
        console.log(msg + " origin:" + origin);
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
); */

/*miApp.use((req, res, next) => {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", () => {
    req.body = data;
    next();
  });
}); */

miApp.use("/app", router);

miApp.listen(3310, () => {
  console.log("Servidor corriendo en el puerto: ", 3310);
});
