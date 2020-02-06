import React, { useState } from "react";
import { TextField, Grid, Button, Card } from "@material-ui/core";
import { useActions } from "../../hooks";
import { editApp } from "../../actions/storeActions";

const FormEdit = ({ name, description, category, version, img, link }) => {
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

  const handleView = () => {
    if (name) {
      setApp({
        name: name,
        description: description,
        category: category,
        version: version,
        img: img,
        link: link
      });
    } else {
      alert("debes buscar una app para mostrar!");
    }
  };

  const { onEditApp } = useActions({
    onEditApp: editApp
  });

  const onSubmit = () => {
    const data = app;
    if (
      data.name === "" ||
      data.description === "" ||
      data.category === "" ||
      data.version === "" ||
      data.img === "" ||
      data.link === ""
    ) {
      alert("debe completar los campos!");
    } else {
      if (name) {
        onEditApp(name, data);
        setApp({
          name: "",
          description: "",
          category: "",
          version: "",
          img: "",
          link: ""
        });
      } else {
        alert("error!");
      }
    }
  };

  return (
    <Card style={{ marginTop: "15px" }}>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "20px",
          width: "500px"
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
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button variant='contained' color='secondary' onClick={handleView}>
          VER
        </Button>
        <Button
          variant='contained'
          color='primary'
          style={{ marginLeft: "15px" }}
          onClick={() => {
            onSubmit();
          }}
        >
          ACTUALIZAR
        </Button>
      </Grid>
    </Card>
  );
};

export default FormEdit;
