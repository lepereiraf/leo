import React, { useCallback, useState } from "react";
import { Button, Container, Grid, Card } from "@material-ui/core";
import useMount from "../../hooks/useMount";
import { getPerson, delPerson } from "../../actions/personActions";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../components/Person";
import AppBar from "../../components/AppBar";
import { useActions } from "../../hooks";

const Persons = () => {
  const dispatch = useDispatch();

  const { personas } = useSelector(({ personReducer }) => personReducer);
  const { onDeletePerson } = useActions({ onDeletePerson: delPerson });

  const handleGetPerson = useCallback(element => dispatch(getPerson()), [
    dispatch
  ]);

  useMount(async () => {
    console.log("Use unmount de home");
    await handleGetPerson();
  });

  const renderPerson = () => {
    if (personas) {
      return personas.map((value, index) => (
        <Card key={index} style={{ marginTop: "5px" }}>
          <Person {...value}></Person>
          <Button
            variant='contained'
            color='secondary'
            style={{
              marginTop: "5px",
              marginBottom: "8px",
              marginLeft: "10px"
            }}
            onClick={() => {
              onDeletePerson(value.id);
              setTimeout(async () => {
                await handleGetPerson();
              }, 1000);
            }}
          >
            borrar
          </Button>
          <Button
            variant='contained'
            color='primary'
            style={{
              marginTop: "5px",
              marginBottom: "8px",
              marginLeft: "10px"
            }}
          >
            EDITAR
          </Button>
        </Card>
      ));
    }
  };

  return (
    <Container>
      <Grid>
        <AppBar></AppBar>
      </Grid>
      <Grid>{renderPerson()}</Grid>
    </Container>
  );
};

export default Persons;
