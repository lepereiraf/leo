import React, { useCallback } from "react";
import { Typography, Container, Grid } from "@material-ui/core";

import { getMovie } from "../../actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";

import { useMount } from "../../hooks";

import Movie from "../../components/movie";
import AppBar from "../../components/AppBar";

const Home = () => {
  const dispatch = useDispatch();
  const handleGetMovies = useCallback(element => dispatch(getMovie()), [
    dispatch
  ]);

  useMount(async () => {
    await handleGetMovies();
  });

  const { movies } = useSelector(({ moviesReducer }) => moviesReducer);
  console.log(movies);

  const renderMovie = () => {
    if (movies) {
      return movies.map((value, index) => <Movie key={index} {...value} />);
    }
  };
  return (
    <Container>
      <Grid style={{ marginBottom: "10px" }}>
        <AppBar />
      </Grid>
      <Grid>{renderMovie()}</Grid>
    </Container>
  );
};

export default Home;
