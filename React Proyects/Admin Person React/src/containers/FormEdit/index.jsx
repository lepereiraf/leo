import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useMount } from "../../hooks";
import { getOnePerson } from "../../actions/personActions";

const FormEdit = () => {
  const [persona, setPersona] = useState({ name: "", surname: "" });

  const handleChange = event => {
    const { name, value } = event.target;

    setPersona({
      ...persona,
      [name]: value
    });
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column"
      }}
    >
      <Grid>
        <Typography variant='h3'>Editando una persona</Typography>
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
          name='name'
          value={persona.name}
          onChange={handleChange}
          placeholder='Nombre'
          style={{ marginBottom: "10px" }}
        ></TextField>
        <TextField
          name='surname'
          value={persona.surname}
          onChange={handleChange}
          placeholder='Apellido'
        ></TextField>
      </Grid>
      <Grid>
        <Button variant='contained' color='secondary'>
          GUARDAR
        </Button>
      </Grid>
    </Container>
  );
};

export default FormEdit;
