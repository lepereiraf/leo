import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { getEjercicio, setEjercicio } from "../../actions/ejercicio";
import useMount from "../../hooks/useMount";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Typography, Button } from "@material-ui/core";

import Ejercicios from "../../components/ejercicio";

const Home = history => {
  const dispatch = useDispatch();

  const { ejercicios } = useSelector(
    ({ ejercicioReducer }) => ejercicioReducer //obteniendo los datos desde el state del reducer
  );
  console.log(ejercicios);

  const handleGetEjercicio = useCallback(element => dispatch(getEjercicio()), [
    dispatch
  ]);

  useMount(async () => {
    handleGetEjercicio();
  });

  const renderEjercicio = () => {
    if (ejercicios) {
      return ejercicios.map((value, index) => (
        <Ejercicios key={index} {...value}></Ejercicios>
      ));
    }
  };

  return (
    <Container>
      <Grid>
        <Typography variant='h2'>Listado de Ejercicios</Typography>
      </Grid>
      <Grid>
        <Link to='/add' style={{ textDecoration: "none" }}>
          <Button variant='contained' color='primary'>
            Nuevo
          </Button>
        </Link>
      </Grid>
      <Grid>{renderEjercicio()}</Grid>
    </Container>
  );
};

export default Home;
