import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import styles from "./style";
import { MovieIcon } from "../../icons/index";

import MterialUIPickers from "../../components/PIKER";

export default ({ history }) => {
  const [searchText, setSearchText] = useState(""); //estado unicial
  const classes = styles(); //maneja los estilos
  const handleSearchTextChange = event => {
    //cambia el estado y nos permite escribir
    setSearchText(event.target.value);
  };

  const handleCleanText = event => {
    //controla el onClick
    setSearchText("");
  };

  const handleSearchTextClick = event => {
    //controla el onClick
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid>
          <MterialUIPickers />
        </Grid>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.MovieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder='Buscar..'
          className={classes.textFieldSerach}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant='contained' onClick={handleCleanText}>
            Limpiar
          </Button>

          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.searchButton}
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
