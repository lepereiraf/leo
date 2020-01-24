import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Container,
  Button,
  TextField,
  Typography,
  Grid
} from "@material-ui/core";
import { editPerson, getPerson } from "../../actions/personActions";
import { useActions } from "../../hooks";
import { useDispatch } from "react-redux";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "300px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({ id, name: nombre, surname: apellido }) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [persona, setPersona] = useState({ name: "", surname: "" });

  const { onEditPerson } = useActions({
    onEditPerson: editPerson
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setPersona({
      ...persona,
      [name]: value
    });
  };

  const dispatch = useDispatch();

  const handleGetPerson = useCallback(element => dispatch(getPerson()), [
    dispatch
  ]);

  const onSubmit = () => {
    const data = persona;
    if (data.name === "" || data.surname === "") {
      alert("debe completar ambos campos!");
      return;
    } else {
      onEditPerson(id, data);
      setPersona({ name: "", surname: "" });
      setTimeout(() => {
        handleGetPerson();
      }, 500);
      handleClose();
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        type='button'
        style={{
          marginTop: "5px",
          marginBottom: "8px",
          marginLeft: "10px",
          width: "90px"
        }}
        color='primary'
        variant='contained'
        onClick={handleOpen}
      >
        Editar
      </Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <Container style={modalStyle} className={classes.paper}>
          <Grid>
            <Typography variant='h5'>Editando a {nombre}</Typography>
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: "20px"
            }}
          >
            <Button variant='contained' color='secondary' onClick={onSubmit}>
              GUARDAR
            </Button>
          </Grid>
        </Container>
      </Modal>
    </React.Fragment>
  );
}
