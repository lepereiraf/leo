import React from "react";
import { Container, Card, Grid, Typography, Button } from "@material-ui/core";

const Pelicula = ({ name, year, director, genero, poster }) => {
  return (
    <Container>
      <Grid>
        <Card style={{ marginTop: "12px", display: "flex" }}>
          <Grid
            style={{
              marginLeft: "10px",
              marginTop: "8px",
              marginRight: "10px"
            }}
          >
            <img
              src={poster}
              alt='imagen'
              style={{ width: "150", height: "200px" }}
            ></img>
          </Grid>
          <Grid>
            <Typography variant='h6'>{`Titulo: ${name}`}</Typography>
            <Typography>{`Año: ${year}`}</Typography>
            <Typography>{`Genero: ${genero}`}</Typography>
            <Typography>{`Director ${director}`}</Typography>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default Pelicula;
