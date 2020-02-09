import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { getEjercicio, setEjercicio } from "../../actions/ejercicio";
import useMount from "../../hooks/useMount";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";

import Ejercicios from "../../components/ejercicio";
import AppVar from "../../components/AppVar";

const Home = history => {
  const dispatch = useDispatch();

  const { ejercicios } = useSelector(
    ({ ejercicioReducer }) => ejercicioReducer //obteniendo los datos desde el state del reducer
  );

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
    } else {
      return <CircularProgress color='primary' />;
    }
  };

  return (
    <Container>
      <Grid>
        <AppVar />
      </Grid>

      <Grid>{renderEjercicio()}</Grid>
    </Container>
  );
};

export default Home;
