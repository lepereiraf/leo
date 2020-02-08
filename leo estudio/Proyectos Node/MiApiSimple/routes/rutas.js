const express = require("express");
const router = express.Router();

const data = [
  {
    nombre: "leonardo",
    apellido: "pereira",
    foto:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojack-horseman-final-1571059533.jpg?crop=0.752xw:1.00xh;0.126xw,0&resize=640:*"
  },
  {
    nombre: "homero",
    apellido: "simpsons",
    foto:
      "https://www.rockandpop.cl/wp-content/uploads/2018/09/homero-simpson-400x360.jpg"
  },
  {
    nombre: "bender",
    apellido: "rodriguez",
    foto:
      "https://pbs.twimg.com/profile_images/900511396709924865/9C7CbTlh_400x400.jpg"
  }
];

router.get("/prueba", (req, res) => {
  res.send("hola, esta es tu API funcionando!!");
});

router.get("/lista", (req, res) => {
  res.send(data);
});
module.exports = router;
