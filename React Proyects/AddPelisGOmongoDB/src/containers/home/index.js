import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

import { useActions, useMount } from "../../hooks";

import { getMovie } from "../../actions/movies";
import { useSelector } from "react-redux";
import Pelicula from "../../components/Pelicula";
import Navbar from "../../components/NavBar";
const Home = () => {
  const { onGetMovie } = useActions({
    onGetMovie: getMovie
  });

  useMount(() => {
    onGetMovie();
  });

  const { peliculas } = useSelector(({ movieReducer }) => movieReducer);
  console.log(peliculas);

  const renderMovie = () => {
    if (peliculas) {
      return peliculas.map((value, index) => (
        <Pelicula key={index} {...value} />
      ));
    }
  };

  return (
    <Container>
      <Navbar />
      <Grid>{renderMovie()}</Grid>
    </Container>
  );
};

export default Home;
