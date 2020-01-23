import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks";
import { addPerson } from "../../actions/personActions";

const Form = () => {
  const [persona, setPersona] = useState({ name: "", surname: "" });

  const handleChange = event => {
    const { name, value } = event.target;

    setPersona({
      ...persona,
      [name]: value
    });
  };

  const { onAddPerson } = useActions({
    onAddPerson: addPerson
  });

  const onSubmit = () => {
    const data = persona;
    onAddPerson(data);
    setPersona({ name: "", surname: "" });
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
        <Typography variant='h3'>Agregando una persona</Typography>
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
        <Button variant='contained' color='secondary' onClick={onSubmit}>
          GUARDAR
        </Button>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            variant='contained'
            color='primary'
            style={{ marginLeft: "10px" }}
          >
            VOLVER
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

export default Form;
