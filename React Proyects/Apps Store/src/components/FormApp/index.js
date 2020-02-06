import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Card
} from "@material-ui/core";

import { useActions } from "../../hooks";
import { addApp } from "../../actions/storeActions";

const FormApp = () => {
  const [app, setApp] = useState({
    name: "",
    description: "",
    category: "",
    version: "",
    img: "",
    link: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setApp({
      ...app,
      [name]: value
    });
  };

  const { onAddApp } = useActions({
    onAddApp: addApp
  });

  const onSubmit = () => {
    let data = app;
    console.log(data);
    if (
      data.name === "" ||
      data.description === "" ||
      data.category === "" ||
      data.version === "" ||
      data.img === "" ||
      data.link === ""
    ) {
      alert("Debe completar Todos los Campos!");
    } else {
      onAddApp(data);
      setApp({
        name: "",
        description: "",
        category: "",
        version: "",
        img: "",
        link: ""
      });
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        flexDirection: "column",
        backgroundImage: `url(https://images4.alphacoders.com/667/thumb-1920-667236.jpg)`,

        backgroundPosition: "25% 70%"
      }}
    >
      <Card>
        <Grid
          style={{
            marginBottom: "20px",
            marginTop: "10px",
            marginLeft: "8px",
            marginRight: "8px"
          }}
        >
          <Typography variant='h4'>Agregando Nueva Aplicación</Typography>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "20px"
          }}
        >
          <TextField
            placeholder='Nombre'
            name='name'
            value={app.name}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
          <TextField
            placeholder='Descripción'
            name='description'
            value={app.description}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
          <TextField
            placeholder='Categoria'
            name='category'
            value={app.category}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
          <TextField
            placeholder='Version'
            name='version'
            value={app.version}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
          <TextField
            placeholder='Link de Imagen'
            name='img'
            value={app.img}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
          <TextField
            placeholder='Link de Descarga'
            name='link'
            value={app.link}
            onChange={handleChange}
            style={{ width: "400px", marginTop: "8px" }}
          ></TextField>
        </Grid>
        <Grid
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            marginBottom: "20px"
          }}
        >
          <Button variant='contained' color='primary' onClick={onSubmit}>
            Publicar
          </Button>

          <Button
            variant='contained'
            color='secondary'
            href='http://localhost:3000/'
            style={{ marginLeft: "10px" }}
          >
            Listo
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default FormApp;
