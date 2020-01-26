import React, { useState, useCallback } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { useActions } from "../../hooks";
import { editProduct, getProduct } from "../../actions/productsActions";
import { useDispatch } from "react-redux";

const PersonFormEdit = ({ id, codigo }) => {
  console.log("id: " + id);
  const [product, setProduct] = useState({
    codigo: "",
    descripcion: "",
    marca: "",
    precio: "",
    imagen: ""
  });

  // console.log(product);

  const handleChange = event => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value
    });
  };

  const { onEditProduct } = useActions({
    onEditProduct: editProduct
  });

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(element => dispatch(getProduct()), [
    dispatch
  ]);

  const onSubmit = () => {
    const data = product;
    if (
      data.codigo === "" ||
      data.descripcion === "" ||
      data.marca === "" ||
      data.precio === ""
    ) {
      alert("debe completar todos los campos!");
    } else {
      onEditProduct(data, id);
      console.log(data);
      setTimeout(() => {
        handleGetProducts();
      }, 1000);
      setProduct({
        codigo: "",
        descripcion: "",
        marca: "",
        precio: "",
        imagen: ""
      });
    }
  };

  return (
    <Container
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
          placeholder='Codigo'
          name='codigo'
          value={product.codigo}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Nombre'
          name='descripcion'
          value={product.descripcion}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Marca'
          name='marca'
          value={product.marca}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Precio'
          name='precio'
          type='number'
          value={product.precio}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Link imagen'
          name='imagen'
          value={product.imagen}
          onChange={handleChange}
        ></TextField>
      </Grid>
      <Grid>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: "15px" }}
          onClick={onSubmit}
        >
          Guardar
        </Button>
      </Grid>
    </Container>
  );
};

export default PersonFormEdit;
