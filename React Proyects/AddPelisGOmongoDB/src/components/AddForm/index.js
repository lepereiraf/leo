import React, { useState } from "react";
import { TextField, Grid, Button, Container } from "@material-ui/core";
import { useActions } from "../../hooks";
import { addMovie, getMovie } from "../../actions/movies";

const FormAdd = () => {
  const [peli, setPeli] = useState({
    name: "",
    year: "",
    director: "",
    genero: "",
    poster: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setPeli({
      ...peli,
      [name]: value
    });
  };

  const { onAddMovie } = useActions({
    onAddMovie: addMovie
  });
  const { onGetMovie } = useActions({
    onGetMovie: getMovie
  });

  const onSubmit = () => {
    if (
      peli.name === "" ||
      peli.director === "" ||
      peli.genero === "" ||
      peli.year === "" ||
      peli.poster === ""
    ) {
      alert("Debe completar todos los campos!");
    } else {
      const data = peli;
      onAddMovie(data);
      setPeli({
        name: "",
        year: "",
        director: "",
        genero: "",
        poster: ""
      });
    }
  };
  return (
    <Container>
      <Grid>
        <TextField
          name='name'
          value={peli.name}
          onChange={handleChange}
          placeholder='Titulo'
        />
        <TextField
          name='year'
          value={peli.year}
          onChange={handleChange}
          placeholder='Año'
          type='number'
        />
        <TextField
          name='director'
          value={peli.director}
          onChange={handleChange}
          placeholder='Director'
        />
        <TextField
          name='genero'
          value={peli.genero}
          placeholder='Genero'
          onChange={handleChange}
        />
        <TextField
          name='poster'
          value={peli.poster}
          onChange={handleChange}
          placeholder='Link de poster'
        />
      </Grid>
      <Grid>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            onSubmit();
            setTimeout(() => {
              onGetMovie();
            });
          }}
        >
          Guardar
        </Button>
      </Grid>
    </Container>
  );
};

export default FormAdd;
