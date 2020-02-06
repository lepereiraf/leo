import React, { useState } from "react";

import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Card
} from "@material-ui/core";
import { useActions } from "../../hooks";
import { getName } from "../../actions/storeActions";
import { useSelector } from "react-redux";

import AppBar from "../../components/AppBar";
import FormEdit from "../../components/FormEdit";

const EditApp = () => {
  const { onGetName } = useActions({
    onGetName: getName
  });

  const [name, setName] = useState("");
  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  //console.log(name);

  const onSubmitName = () => {
    if (name === "") {
      alert("nombre invalido!");
    } else {
      onGetName(name);
    }
  };

  const { apps } = useSelector(({ appReducer }) => appReducer);
  const myApp = apps[0];
  //console.log(apps);

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "20px",
        backgroundImage: `url(https://images4.alphacoders.com/667/thumb-1920-667236.jpg)`,
        backgroundPosition: "25% 70%",
        height: "97vh"
      }}
    >
      <Grid>
        <AppBar />
      </Grid>
      <Card style={{ marginTop: "10px", width: "500px" }}>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "20px"
          }}
        >
          <Typography variant='h6'>Buscar una app para editar</Typography>
          <TextField
            placeholder='Nombre de Aplicacion'
            name='name'
            value={name}
            onChange={handleChangeName}
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
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              onSubmitName();
            }}
          >
            BUSCAR
          </Button>
        </Grid>
      </Card>
      <Grid>
        <FormEdit {...myApp}></FormEdit>
      </Grid>
    </Container>
  );
};

export default EditApp;
