import React from "react";
import { Container, Grid, Card, Typography, Avatar } from "@material-ui/core";

const Person = ({ name, email, picture }) => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "36vh",
        flexDirection: "column"
      }}
    >
      <Card
        style={{
          height: "80%",
          width: "98%",
          marginTop: "4%"
        }}
      >
        <Grid>
          <Avatar
            style={{
              marginLeft: "8%",
              marginTop: "2%",
              width: "10%",
              height: "10%"
            }}
            src={picture.large}
          />
        </Grid>
        <Grid>
          <Typography
            variant='h6'
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            {name.first}
          </Typography>
          <Typography style={{ marginLeft: "10%", marginRight: "10%" }}>
            {email}
          </Typography>
        </Grid>
      </Card>
    </Container>
  );
};

export default Person;
