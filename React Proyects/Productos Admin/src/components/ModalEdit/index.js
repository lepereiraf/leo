import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Container, Button, Typography } from "@material-ui/core";
import ProductFormEdit from "../EditProductForm";
import { idText } from "typescript";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModalEdit({ id, codigo }) {
  const obj = { id: id, codigo: codigo };

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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
        variant='contained'
        color='primary'
        onClick={handleOpen}
        style={{ width: "100px" }}
      >
        EDITAR
      </Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <Container style={modalStyle} className={classes.paper}>
          <Typography variant='h4'>Editando producto</Typography>
          <ProductFormEdit {...obj} />
        </Container>
      </Modal>
    </React.Fragment>
  );
}
