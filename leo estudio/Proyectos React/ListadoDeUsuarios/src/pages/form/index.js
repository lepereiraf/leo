import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  Container,
  Grid
} from "@material-ui/core";

const Form = () => {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "" });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleClean = () => {
    setForm({
      nombre: "",
      apellido: "",
      email: ""
    });
  };

  console.log(form);

  return (
    <Container
      style={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <FormControl>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <TextField
              placeholder='Nombre'
              name='nombre'
              value={form.nombre}
              onChange={handleChange}
            />
            <TextField
              placeholder='Apellido'
              name='apellido'
              value={form.apellido}
              onChange={handleChange}
            />
            <TextField
              placeholder='Correo'
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid style={{ marginTop: "20px" }}>
            <Button variant='contained' color='secondary' onClick={handleClean}>
              Clear
            </Button>
            <Button
              variant='contained'
              color='primary'
              style={{ marginLeft: "10px" }}
            >
              Aceptar
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
};
export default Form;
