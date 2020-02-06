import React from "react";
import { Container, Grid } from "@material-ui/core";
import { getOneApp } from "../../actions/storeActions";

import { useActions, useMount } from "../../hooks";
import { useSelector } from "react-redux";

import MyApp from "../../components/App";
import AppBar from "../../components/AppBar";
const Home = () => {
  const { onGetCategory } = useActions({
    onGetCategory: getOneApp
  });

  useMount(() => {
    onGetCategory("");
  });

  const { apps } = useSelector(({ categoryReducer }) => categoryReducer);

  const renderApps = () => {
    if (apps) {
      return apps.map((value, index) => <MyApp key={index} {...value} />);
    }
  };

  return (
    <Container
      style={{
        backgroundImage: `url(https://webgradients.com/public/webgradients_png/041%20Happy%20Acid.png)`,

        height: "100%",
        marginTop: "10px",
        marginBottom: "10px"
      }}
    >
      <Grid>
        <AppBar />
      </Grid>
      <Grid>{renderApps()}</Grid>
    </Container>
  );
};

export default Home;
