import React from "react";
import { Card, Typography, Grid, Button } from "@material-ui/core";

const MyApp = ({ name, description, category, version, img, link }) => {
  return (
    <Card
      style={{
        display: "flex",
        marginTop: "8px",
        marginBottom: "8px",
        opacity: "97%"
      }}
    >
      <Grid>
        <img
          src={img}
          alt='imagen'
          style={{
            width: "110px",
            height: "110px",
            marginLeft: "10px",
            marginTop: "10px"
          }}
        />
      </Grid>
      <Grid style={{ marginLeft: "15px" }}>
        <Typography variant='h6'>{name}</Typography>
        <Typography>{`Descripción: ${description}`}</Typography>
        <Typography>{`Categoria: ${category}`}</Typography>
        <Typography>{`Version: ${version}`}</Typography>
        <Grid style={{ marginBottom: "15px" }}>
          <a href={link} style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              style={{ backgroundColor: "#4caf50", color: "white" }}
            >
              DESCARGAR
            </Button>
          </a>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MyApp;
