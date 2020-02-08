import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Button,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { getPerson, delPerson } from "../../redux/actions/person";
import { personResults } from "../../redux/selectors";
import PersonResult from "../../components/persons";
import Nav from "../../components/nav";
const Home = ({ history }) => {
  const person = "?results=10&inc=name,picture,login,email&format=json";
  const dispatch = useDispatch();
  const personas = useSelector(state => personResults(state));
  const [borra, setBorra] = useState(false);

  const renderPerson = () => {
    if (personas) {
      return personas.map((value, index) => (
        <PersonResult key={index} {...value} />
      ));
    } else if (borra == true) {
      return <Typography variant='h2'>Nada que mostrar</Typography>;
    }

    return (
      <CircularProgress
        style={{ marginTop: "10px" }}
        color='primary'
      ></CircularProgress>
    );
  };

  const handleRefresh = () => {
    dispatch(getPerson({ person }));
    setBorra(false);
  };

  const handleClean = () => {
    dispatch(delPerson({ person }));
    setBorra(true);
  };

  const ruta = () => {
    history.push("/form");
  };

  useEffect(() => {
    if (person && !personas && borra == false) {
      dispatch(getPerson({ person }));
    }
  });

  return (
    <Container>
      <Grid>
        <Nav />
      </Grid>
      <Grid>
        <Button
          variant='contained'
          color='secondary'
          style={{ marginTop: "10px" }}
          onClick={handleRefresh}
        >
          Refrescar
        </Button>
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: "10px", marginLeft: "10px" }}
          onClick={handleClean}
        >
          Limpiar
        </Button>
        <Link to='/form' style={{ textDecoration: "none" }}>
          <Button
            variant='contained'
            color='primary'
            style={{
              marginTop: "10px",
              marginLeft: "10px"
            }}
          >
            Formulario
          </Button>
        </Link>
        <Button
          variant='contained'
          color='primary'
          onClick={ruta}
          style={{
            marginTop: "10px",
            marginLeft: "10px"
          }}
        >
          Siguiente
        </Button>
      </Grid>
      <Grid>{renderPerson()}</Grid>
    </Container>
  );
};

export default Home;
