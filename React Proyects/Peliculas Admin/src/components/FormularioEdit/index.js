import React, { useState } from "react";
import { Grid, Card, TextField, Button } from "@material-ui/core";
import { useActions } from "../../hooks";
import { updateMovie, getMovie } from "../../actions/moviesAction";

const FormEdit = ({ id }) => {
  const [form, setForm] = useState({
    nombre: "",
    anio: "",
    director: "",
    genero: "",
    poster: ""
  });

  console.log(form);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const { onUpdateMovie } = useActions({
    onUpdateMovie: updateMovie
  });
  const { onGetMovie } = useActions({
    onGetMovie: getMovie
  });

  const onSubmit = () => {
    if (
      form.nombre === "" ||
      form.anio === "" ||
      form.director === "" ||
      form.genero === "" ||
      form.poster === ""
    ) {
      alert("Debe completar todos los campos!");
    } else {
      let data = form;

      onUpdateMovie(id, data);
      setForm({
        nombre: "",
        anio: "",
        director: "",
        genero: "",
        poster: ""
      });
      setTimeout(() => {
        onGetMovie();
      }, 1000);
    }
  };

  return (
    <Card>
      <Grid>
        <TextField
          placeholder='Título'
          name='nombre'
          value={form.nombre}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Año'
          name='anio'
          value={form.anio}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Director'
          name='director'
          value={form.director}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Genero'
          name='genero'
          value={form.genero}
          onChange={handleChange}
        ></TextField>
        <TextField
          placeholder='Link del póster'
          name='poster'
          value={form.poster}
          onChange={handleChange}
        ></TextField>
      </Grid>
      <Grid>
        <Button variant='contained' color='secondary' onClick={onSubmit}>
          Guardar
        </Button>
      </Grid>
    </Card>
  );
};
export default FormEdit;
