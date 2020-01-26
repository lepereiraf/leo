import React, { useCallback } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../../components/AppBar";

import { getProduct } from "../../actions/productsActions";

import { useMount } from "../../hooks";
import Producto from "../../components/Producto";

const Home = () => {
  const dispatch = useDispatch();

  const { productos } = useSelector(({ productReducer }) => productReducer);

  console.log(productos);

  const handleGetProducts = useCallback(element => dispatch(getProduct()), [
    dispatch
  ]);

  useMount(async () => {
    await handleGetProducts();
  });

  const renderProduct = () => {
    if (productos) {
      return productos.map((value, index) => (
        <Producto key={index} {...value} />
      ));
    }
  };

  return (
    <Container>
      <Grid>
        <AppBar />
      </Grid>
      <Grid>{renderProduct()}</Grid>
    </Container>
  );
};

export default Home;
