import React from "react";
import { Container, Grid, Card, Typography, Button } from "@material-ui/core";
import { deleteMovie, getMovie } from "../../actions/moviesAction";
import { useActions } from "../../hooks";
import ModalEdit from "../modalEdit";

const Movie = ({ id, nombre, anio, director, genero, poster }) => {
  const prop = { id: id, nombre: nombre };
  const { onDeleteMovie } = useActions({
    onDeleteMovie: deleteMovie
  });

  const { onGetMovie } = useActions({
    onGetMovie: getMovie
  });

  return (
    <Container>
      <Card style={{ marginTop: "8px", marginBottom: "10px", display: "flex" }}>
        <Grid style={{ marginTop: "8px", marginLeft: "8px" }}>
          <img
            src={poster}
            alt='imagen'
            style={{ height: "220px", width: "150px" }}
          ></img>
        </Grid>
        <Grid style={{ marginLeft: "10px" }}>
          <Typography variant='h5'>{`Titulo: ${nombre}`}</Typography>
          <Typography>{`Año: ${anio}`}</Typography>
          <Typography>{`Director: ${director}`}</Typography>
          <Typography>{`Genero: ${genero}`}</Typography>
          <Grid style={{ marginTop: "10px" }}>
            <ModalEdit {...prop} />
            <Button
              variant='contained'
              style={{
                color: "white",
                backgroundColor: "#039be5",
                marginLeft: "10px"
              }}
              onClick={() => {
                onDeleteMovie(id);
                setTimeout(() => {
                  onGetMovie();
                }, 1000);
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Movie;
