import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "../../components/AppBar";
import FormApp from "../../components/FormApp";
const AddApp = () => {
  return (
    <React.Fragment>
      <Grid>
        <AppBar />
      </Grid>
      <Grid>
        <FormApp />
      </Grid>
    </React.Fragment>
  );
};

export default AddApp;
