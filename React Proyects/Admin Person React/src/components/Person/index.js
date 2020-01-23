import React from "react";
import { Typography, Container, Grid, Avatar } from "@material-ui/core";

const img = {
  men: "https://image.flaticon.com/icons/svg/147/147142.svg",
  woman: "https://www.flaticon.es/premium-icon/icons/svg/147/147137.svg"
};

const Person = ({ name, surname }) => {
  return (
    <Container>
      <Grid style={{ marginLeft: "10px" }}>
        <Avatar
          style={{ width: "100px", height: "100px", marginTop: "5px" }}
          src={img.men}
        />
      </Grid>
      <Grid style={{ marginLeft: "10px" }}>
        <Typography variant='h4'>{name}</Typography>
        <Typography>{surname}</Typography>
      </Grid>
    </Container>
  );
};

export default Person;
