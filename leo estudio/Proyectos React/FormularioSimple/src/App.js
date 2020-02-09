import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Container,
  Grid
} from "@material-ui/core";

const App = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleClear = () => {
    setForm({
      nombre: "",
      apellido: "",
      correo: ""
    });
  };

  console.log(form);

  return (
    <Container>
      <Typography variant='h4'>Formulario</Typography>
      <form>
        <Grid>
          <TextField
            placeholder='nombre'
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='apellido'
            name='apellido'
            value={form.apellido}
            onChange={handleChange}
          ></TextField>
          <TextField
            placeholder='correo'
            name='correo'
            value={form.correo}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid>
          <Button>Guardar</Button>
          <Button onClick={handleClear}>Borrar</Button>
        </Grid>
      </form>
    </Container>
  );
};

export default App;
