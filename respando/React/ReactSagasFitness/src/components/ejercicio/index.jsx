import React from "react";
import { Card, Typography, Grid, Container } from "@material-ui/core";

const Ejercicio = ({ title, description, img }) => {
  return (
    <Container>
      <Card style={{ marginTop: "20px", width: "90%" }}>
        <Grid style={{ marginLeft: "10px" }}>
          <img
            src={img}
            alt='imagen'
            style={{ width: "100px", height: "100px" }}
          ></img>
        </Grid>
        <Grid style={{ marginLeft: "10px" }}>
          <Typography variant='h4'>{title}</Typography>
          <Typography>{description}</Typography>
        </Grid>
      </Card>
    </Container>
  );
};

export default Ejercicio;
