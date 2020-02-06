import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Button } from "@material-ui/core";
import { useActions } from "../../hooks";
import { getOneApp } from "../../actions/storeActions";
function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func
};

export default function ElevateAppBar(props) {
  const { onGetCategory } = useActions({
    onGetCategory: getOneApp
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: "#1e88e5" }}>
          <Toolbar>
            <a
              href='http://localhost:3000/'
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              <Typography variant='h5'>Leo App Store!</Typography>
            </a>

            <a
              href='http://localhost:3000/new'
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "10px"
              }}
            >
              +
            </a>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("");
              }}
            >
              TODAS
            </Button>

            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("Navegadores");
              }}
            >
              WEB
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("Desarrollo");
              }}
            >
              Desarollo
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("Herramientas");
              }}
            >
              Herramientas
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("Multimedia");
              }}
            >
              Multimedia
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                onGetCategory("Ofimática");
              }}
            >
              Ofimática
            </Button>
            <a
              href='http://localhost:3000/edit'
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "10px"
              }}
            >
              .
            </a>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
