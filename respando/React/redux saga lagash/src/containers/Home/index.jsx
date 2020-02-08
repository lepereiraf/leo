import React, { useCallback, useEffect } from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useMount from '../../hooks/useMount';
import { fetchEjercicio } from '../../actions/ejercicios';
import { setPrueba } from '../../actions/prueba';
import { useActions } from '../../hooks';

const Home = () => {
  const dispatch = useDispatch();
  // const { ejercicio } = useSelector(({ ejercicio }) => ejercicio);

  // console.log(ejercicio);

  const handleGetEjercicio = useCallback(
    element => dispatch(fetchEjercicio()),
    [dispatch]
  );

  /* const handlePrueba = () => {
    dispatch(setPrueba());
  };
*/
  const { onSetPrueba } = useActions({
    onSetPrueba: setPrueba
  });

  useMount(async () => {
    console.log('llego!');
    handleGetEjercicio();
  });

  return (
    <Container>
      <Typography variant='h1'>Bienvenido al Home!</Typography>
      <Button variant='contained' color='secondary'>
        Action
      </Button>
    </Container>
  );
};

export default Home;
