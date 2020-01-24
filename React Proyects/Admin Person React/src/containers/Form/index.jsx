import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Container,
  Card
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
    if (data.name === "" || data.surname === "") {
      alert("Debe completar ambos campos!");
    } else {
      onAddPerson(data);
      setPersona({ name: "", surname: "" });
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",

        flexDirection: "column",
        backgroundImage: `url(
          "https://images4.alphacoders.com/667/667236.jpg")`,
        backgroundPosition: "25% 70%"
      }}
    >
      <Card style={{ opacity: 0.9 }}>
        <Grid
          style={{
            marginBottom: "20px",
            marginTop: "10px",
            marginLeft: "8px",
            marginRight: "8px"
          }}
        >
          <Typography variant='h4'>Agregando una persona</Typography>
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
        <Grid
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            marginBottom: "20px"
          }}
        >
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
      </Card>
    </Container>
  );
};

export default Form;
