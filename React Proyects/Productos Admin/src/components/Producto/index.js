import React, { useCallback } from "react";
import { Container, Card, Grid, Typography, Button } from "@material-ui/core";
import { useActions } from "../../hooks";
import { delProduct, getProduct } from "../../actions/productsActions";
import { useDispatch } from "react-redux";
import ModalEdit from "../ModalEdit";

const Producto = ({ id, codigo, descripcion, marca, precio, imagen }) => {
  const obj = { id: id, codigo: codigo };
  const { onDeleteProduct } = useActions({ onDeleteProduct: delProduct });

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(element => dispatch(getProduct()), [
    dispatch
  ]);

  return (
    <Container>
      <Card style={{ marginTop: "10px", display: "flex" }}>
        <Grid>
          <img
            src={imagen}
            alt='imagen'
            style={{ width: "250px", height: "200px" }}
          ></img>
        </Grid>
        <Grid>
          <Typography variant='h5'>{`Nombre: ${descripcion}`}</Typography>
          <Typography>{`Codigo: ${codigo}`}</Typography>
          <Typography>{`Marca: ${marca}`}</Typography>
          <Typography>{`Precio: $${precio}`}</Typography>
          <Grid style={{ marginTop: "20px" }}>
            <ModalEdit {...obj} />
            <Button
              style={{ width: "100px", marginLeft: "10px" }}
              variant='contained'
              color='secondary'
              onClick={() => {
                onDeleteProduct(id);
                setTimeout(() => {
                  handleGetProducts();
                }, 1000);
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Producto;
