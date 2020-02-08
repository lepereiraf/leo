import React, { useState } from "react";
import {
  TextField,
  Grid,
  Container,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Ejercicio from "../ejercicio";

import { useActions } from "../../hooks";
import { addEjercicio } from "../../actions/ejercicio";
const AddEjercicio = () => {
  const [ejercicio, setEjercicio] = useState({
    title: "",
    description: "",
    img: "",
    leftColor: "",
    rightColor: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setEjercicio({
      ...ejercicio,
      [name]: value
    });
  };

  const { onAddEjercicio } = useActions({
    onAddEjercicio: addEjercicio
  });

  const onSubmit = () => {
    const data = ejercicio;
    //console.log(data);
    onAddEjercicio(data);
    setEjercicio({
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: ""
    });
  };
  return (
    <Container>
      <Grid>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          variant='h2'
        >
          Nuevo Ejercicio
        </Typography>
      </Grid>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
            flexDirection: "column"
          }}
        >
          <TextField
            placeholder='Título '
            name='title'
            value={ejercicio.title}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='Descripción'
            name='description'
            value={ejercicio.description}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='Imagen'
            name='img'
            value={ejercicio.img}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='LeftColor'
            name='leftColor'
            value={ejercicio.leftColor}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='RigthColor'
            name='rightColor'
            value={ejercicio.rightColor}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid>
          <Button
            style={{ marginLeft: "25px" }}
            variant='contained'
            color='secondary'
            onClick={onSubmit}
          >
            Guardar
          </Button>
          <Link to='/' style={{ textDecoration: "none" }}>
            <Button
              style={{ marginLeft: "25px" }}
              variant='contained'
              color='primary'
            >
              Ejercicios
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddEjercicio;
